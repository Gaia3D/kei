package kei.controller.view;

import kei.controller.AuthorizationController;
import kei.domain.*;
import kei.domain.board.BoardNotice;
import kei.domain.board.BoardNoticeComment;
import kei.domain.board.BoardNoticeFile;
import kei.domain.common.Pagination;
import kei.domain.policy.Policy;
import kei.domain.role.RoleKey;
import kei.domain.user.UserSession;
import kei.service.*;
import kei.support.SQLInjectSupport;
import kei.utils.DateUtils;
import kei.utils.StringUtil;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;

import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Slf4j
@Controller
@RequestMapping("/boardNotice")
public class BoardNoticeController implements AuthorizationController {

	@Autowired
	private BoardNoticeService boardNoticeService;

	@Autowired
	private PolicyService policyService;

	// 파일 copy 시 버퍼 사이즈
	public static final int BUFFER_SIZE = 8192;

	/**
	 * board 목록
	 */
	@GetMapping(value = "/list")
	public String list(HttpServletRequest request, BoardNotice boardNotice, @RequestParam(defaultValue = "1") String pageNo,
			Model model) {
		boardNotice.setSearchWord(SQLInjectSupport.replaceSqlInection(boardNotice.getSearchWord()));
		boardNotice.setOrderWord(SQLInjectSupport.replaceSqlInection(boardNotice.getOrderWord()));

		log.info("@@ board = {}", boardNotice);

		if (StringUtil.isNotEmpty(boardNotice.getStartDate())) {
			boardNotice.setStartDate(boardNotice.getStartDate().substring(0, 8) + DateUtils.START_TIME);
		}
		if (StringUtil.isNotEmpty(boardNotice.getEndDate())) {
			boardNotice.setEndDate(boardNotice.getEndDate().substring(0, 8) + DateUtils.END_TIME);
		}
		long totalCount = boardNoticeService.getBoardTotalCount(boardNotice);

		Pagination pagination = new Pagination(request.getRequestURI(), boardNotice.getParameters(), totalCount,
				Long.parseLong(pageNo), boardNotice.getListCounter());
		log.info("@@ pagination = {}", pagination);

		boardNotice.setOffset(pagination.getOffset());
		boardNotice.setLimit(pagination.getPageRows());
		List<BoardNotice> boardNoticeList = new ArrayList<BoardNotice>();
		if (totalCount > 0l) {
			boardNoticeList = boardNoticeService.getListBoard(boardNotice);
		}

		model.addAttribute(pagination);
		model.addAttribute("totalCount", totalCount);
		model.addAttribute("boardNoticeList", boardNoticeList);

		return "/board/list";
	}

	/**
	 * board 등록
	 *
	 * @param model
	 * @return
	 */
	@GetMapping(value = "/input")
	public String input(HttpServletRequest request, Model model) {
		String roleCheckResult = roleValidate(request);
		if (roleCheckResult != null)
			return roleCheckResult;

		Policy policy = policyService.getPolicy();

		model.addAttribute("policy", policy);
		model.addAttribute("boardNotice", new BoardNotice());

		return "/board/input";
	}

	/**
	 * board 수정
	 *
	 * @param model
	 * @return
	 */
	@GetMapping(value = "/modify")
	public String modify(HttpServletRequest request, @RequestParam Integer boardNoticeId, Model model) {
		Long boardNoticeIdL = Long.valueOf(boardNoticeId);
		String roleCheckResult = roleValidate(request);
		if (roleCheckResult != null)
			return roleCheckResult;

		Policy policy = policyService.getPolicy();
		BoardNotice boardNotice = boardNoticeService.getBoardForModify(boardNoticeIdL);

		Timestamp timestamp_start = java.sql.Timestamp.valueOf(boardNotice.getStartDate().substring(0, 19));
		Timestamp timestamp_end = java.sql.Timestamp.valueOf(boardNotice.getEndDate().substring(0, 19));

		String startDate = new SimpleDateFormat("yyyyMMddHHmmss").format(timestamp_start);
		String endDate = new SimpleDateFormat("yyyyMMddHHmmss").format(timestamp_end);

		boardNotice.setStart_day(startDate.substring(0, 8));
		boardNotice.setEnd_day(endDate.substring(0, 8));
		boardNotice.setStart_hour(startDate.substring(8, 10));
		boardNotice.setEnd_hour(endDate.substring(8, 10));
		boardNotice.setStart_minute(startDate.substring(10, 12));
		boardNotice.setEnd_minute(endDate.substring(10, 12));

		List<BoardNoticeFile> boardNoticeFileList = boardNoticeService.getBoardNoticeFiles(boardNoticeIdL);

		model.addAttribute("policy", policy);
		model.addAttribute("boardNotice", boardNotice);
		model.addAttribute("boardNoticeFileList", boardNoticeFileList);

		return "/board/modify";
	}

	/**
	 * 게시물 보기
	 *
	 * @param model
	 * @return
	 */
	@GetMapping(value = "/{boardNoticeId}")
	public String viewBoardNotice(HttpServletRequest request, @PathVariable Long boardNoticeId, Model model) {

		BoardNotice boardNotice = boardNoticeService.getBoard(boardNoticeId);
		BoardNoticeComment boardNoticeComment = new BoardNoticeComment();
		boardNoticeComment.setBoardNoticeId(boardNoticeId);
		boardNoticeComment.setDepth(1L);
		boardNoticeComment.setParent(1L);
		List<BoardNoticeComment> boardNoticeCommentList = boardNoticeService.getListBoardNoticeCommentByDepth(boardNoticeComment);
		List<BoardNoticeFile> boardNoticeFileList = boardNoticeService.getBoardNoticeFiles(boardNoticeId);

		model.addAttribute("boardNotice", boardNotice);
		model.addAttribute("boardNoticeCommentList", boardNoticeCommentList);
		model.addAttribute("boardNoticeFileList", boardNoticeFileList);

		return "/board/popup-board";
	}

	/**
	 * 게시물 추가 댓글
	 *
	 * @param model
	 * @return
	 */
	@GetMapping(value = "/comment/{boardNoticeCommentId}")
	public String viewInsertMoreComment(HttpServletRequest request, @PathVariable Long boardNoticeCommentId,
			Model model) {

		BoardNoticeComment boardNoticeComment = boardNoticeService.getBoardNoticeComment(boardNoticeCommentId);

		model.addAttribute("boardNoticeComment", boardNoticeComment);

		return "/board/popup-board-comment";
	}

	/**
	 * 게시물 추가 댓글
	 *
	 * @param model
	 * @return
	 */
	@GetMapping(value = "/moreComment/{boardNoticeCommentId}")
	@ResponseBody
	public Map<String, Object> viewMoreComment(HttpServletRequest request, @PathVariable Long boardNoticeCommentId, Model model) {

		Map<String, Object> result = new HashMap<>();
		String errorCode = null;
		String message = null;

		BoardNoticeComment boardNoticeComment = boardNoticeService.getBoardNoticeComment(boardNoticeCommentId);
		BoardNotice boardNotice = boardNoticeService.getBoard(boardNoticeComment.getBoardNoticeId());
		
		boardNoticeComment.setDepth(boardNoticeComment.getDepth() + 1L);
		boardNoticeComment.setParent(boardNoticeCommentId);

		List<BoardNoticeComment> boarNoticeCommentList = boardNoticeService
				.getListBoardNoticeCommentByDepth(boardNoticeComment);

		result.put("boarNoticeMoreCommentList", boarNoticeCommentList);
		result.put("boardNotice", boardNotice);
		int statusCode = HttpStatus.OK.value();

		log.info("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ " + boarNoticeCommentList);
		result.put("statusCode", statusCode);
		log.info("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ " + statusCode);
		return result;

	}

	private String roleValidate(HttpServletRequest request) {
		UserSession userSession = (UserSession) request.getSession().getAttribute(Key.USER_SESSION.name());
		int httpStatusCode = getRoleStatusCode(userSession.getUserGroupId(), RoleKey.ADMIN_LAYER_MANAGE.name());
		if (httpStatusCode > 200) {
			log.info("@@ httpStatusCode = {}", httpStatusCode);
			request.setAttribute("httpStatusCode", httpStatusCode);
			return "/error/error";
		}

		return null;
	}
}
