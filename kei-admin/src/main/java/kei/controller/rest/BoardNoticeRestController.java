package kei.controller.rest;

import kei.config.PropertiesConfig;
import kei.controller.AuthorizationController;
import kei.domain.Key;
import kei.domain.UploadDirectoryType;
import kei.domain.board.BoardNotice;
import kei.domain.board.BoardNoticeComment;
import kei.domain.board.BoardNoticeFile;
import kei.domain.policy.Policy;
import kei.domain.user.UserSession;
import kei.service.BoardNoticeService;
import kei.service.PolicyService;
import kei.support.LogMessageSupport;
import kei.utils.DateUtils;
import kei.utils.FileUtils;
import kei.utils.FormatUtils;
import kei.utils.WebUtils;
import lombok.extern.slf4j.Slf4j;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.ui.Model;
import org.springframework.util.FileCopyUtils;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.URLDecoder;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.util.*;

@Slf4j
@RestController
@RequestMapping("/boardNotices")
public class BoardNoticeRestController implements AuthorizationController {

	@Autowired
	private BoardNoticeService boardNoticeService;
	@Autowired
	private PolicyService policyService;
	@Autowired
	private PropertiesConfig propertiesConfig;

	// 파일 copy 시 버퍼 사이즈
	public static final int BUFFER_SIZE = 8192;

	/**
	 * 게시물 삭제
	 * 
	 * @param boardNoticeId
	 * @return
	 */
	@DeleteMapping(value = "/{boardNoticeId:[0-9]+}")
	public Map<String, Object> delete(@PathVariable Long boardNoticeId) {
		Map<String, Object> result = new HashMap<>();
		String errorCode = null;
		String message = null;

		boardNoticeService.deleteBoard(boardNoticeId);
		int statusCode = HttpStatus.OK.value();

		result.put("statusCode", statusCode);
		result.put("errorCode", errorCode);
		result.put("message", message);
		return result;
	}

	/**
	 * 게시물 파일 삭제
	 * 
	 * @param boardNoticeFileId
	 * @return
	 */
	@DeleteMapping(value = "/file/{boardNoticeFileId:[0-9]+}")
	public Map<String, Object> deleteFile(@PathVariable Long boardNoticeFileId) {
		Map<String, Object> result = new HashMap<>();
		String errorCode = null;
		String message = null;
		boardNoticeService.deleteBoardNoticeFile(boardNoticeFileId);
		

		int statusCode = HttpStatus.OK.value();

		result.put("statusCode", statusCode);
		result.put("errorCode", errorCode);
		result.put("message", message);
		return result;
	}

	@PostMapping(value = "/moreComment")
	public Map<String, Object> insertMoreComment(HttpServletRequest request, HttpServletResponse response) {

		int statusCode = HttpStatus.OK.value();
		Map<String, Object> result = new HashMap<>();
		String errorCode = null;
		String message = null;

		BoardNoticeComment boardNoticeComment = new BoardNoticeComment();

		UserSession userSession = (UserSession) request.getSession().getAttribute(Key.USER_SESSION.name());

		boardNoticeComment.setBoardNoticeId(Long.valueOf(request.getParameter("boardNoticeId")));
		boardNoticeComment.setParent(Long.valueOf(request.getParameter("boardNoticeCommentId")));
		if (Long.valueOf(request.getParameter("ancestor")) == 1L) {
			boardNoticeComment.setAncestor(Long.valueOf(request.getParameter("boardNoticeCommentId")));
		} else {
			boardNoticeComment.setAncestor(Long.valueOf(request.getParameter("ancestor")));
		}
		boardNoticeComment.setDepth(Long.valueOf(request.getParameter("depth")) + 1);
		boardNoticeComment.setClientIp(WebUtils.getClientIp(request));
		boardNoticeComment.setContent(request.getParameter("content"));
		boardNoticeComment.setUserId(userSession.getUserId());
		boardNoticeComment.setUserName(userSession.getUserName());

		try {
			boardNoticeService.insertBoardNoticeMoreComment(boardNoticeComment);
		} catch (Exception e) {

		}

		result.put("statusCode", statusCode);
		result.put("errorCode", errorCode);
		result.put("message", message);
		return result;
	}

	@SuppressWarnings("unchecked")
	@PostMapping()
	public Map<String, Object> insert(MultipartHttpServletRequest request) throws Exception {

		Map<String, Object> result = new HashMap<>();
		String errorCode = null;
		String message = null;

		BoardNotice boardNotice = new BoardNotice();
		boardNotice.setContents(request.getParameter("contents"));
		boardNotice.setTitle(request.getParameter("title"));
		boardNotice.setStart_date(request.getParameter("start_date"));
		boardNotice.setStart_day(request.getParameter("start_day"));
		boardNotice.setStart_hour(request.getParameter("start_hour"));
		boardNotice.setStart_minute(request.getParameter("start_minute"));
		boardNotice.setEnd_date(request.getParameter("end_date"));
		boardNotice.setEnd_day(request.getParameter("end_day"));
		boardNotice.setEnd_hour(request.getParameter("end_hour"));
		boardNotice.setEnd_minute(request.getParameter("end_minute"));
		boardNotice.setAvailable(Boolean.valueOf(request.getParameter("available")));

		UserSession userSession = (UserSession) request.getSession().getAttribute(Key.USER_SESSION.name());
		boardNotice.setUserId(userSession.getUserId());
		boardNotice.setUserName(userSession.getUserName());
		String client_ip = WebUtils.getClientIp(request);
		boardNotice.setClientIp(client_ip);

		Map<String, MultipartFile> fileMap = request.getFileMap();
		int fileCount = fileMap.values().size();
		
		try {
			boardNoticeService.insertBoard(boardNotice);
			if (fileCount != 0) {
				result = uploadFile(boardNotice, result, userSession, fileMap, fileCount, errorCode, message);
			}
			int statusCode = HttpStatus.OK.value();
			result.put("statusCode", statusCode);
		}catch(Exception e) {
			String filePath = (String) result.get("filePath");
			FileUtils.deleteFileReculsive(filePath);
			return getResultMap(result, HttpStatus.INTERNAL_SERVER_ERROR.value(), "file.copy.exception",
					message = e.getCause() != null ? e.getCause().getMessage() : e.getMessage());
		}

		int statusCode = HttpStatus.OK.value();

		result.put("statusCode", statusCode);
		result.put("errorCode", errorCode);
		result.put("message", message);
		return result;
	}
	
	private Map<String, Object> uploadFile(BoardNotice boardNotice, Map<String, Object> result, UserSession userSession, Map<String, MultipartFile> fileMap, int fileCount, String errorCode, String message ) throws Exception {
		
		Policy policy = policyService.getPolicy();
		// 여긴 null 체크를 안 하는게 맞음. 없음 장애가 나야 함
		// 업로딩 가능한 파일 타입
		String[] uploadTypes = policy.getUserUploadType().toLowerCase().split(",");
		// 변환 가능한 파일 타입
		List<String> uploadTypeList = Arrays.asList(uploadTypes);
		log.info("uploadTypeList : "+uploadTypeList);
		if (!StringUtils.isEmpty(errorCode))
			return getResultMap(result, HttpStatus.BAD_REQUEST.value(), errorCode, message);

		String userId = userSession.getUserId();

		String today = DateUtils.getToday(FormatUtils.YEAR_MONTH_DAY_TIME14);

		// 1 directory 생성
		String makedDirectory = FileUtils.makeDirectory(userId, UploadDirectoryType.YEAR_MONTH, propertiesConfig.getDataUploadDir());
		log.info("@@@@@@@ = {}", makedDirectory);

		String tempDirectory = userId + "_" + System.nanoTime();
		// 파일을 upload 디렉토리로 복사
		FileUtils.makeDirectory(makedDirectory + tempDirectory);
		// 3 그 외의 경우는 재귀적으로 파일 복사
		result.put("filePath", makedDirectory + tempDirectory);
		int fileIndex = 0;

		List<BoardNoticeFile> boardNoticeFileList = new ArrayList<>();
		
		for (MultipartFile multipartFile : fileMap.values()) {

			fileIndex++;

			// 파일 기본 validation 체크
			errorCode = fileValidate(policy, uploadTypeList, multipartFile);
			if (!StringUtils.isEmpty(errorCode)) {
				return getResultMap(result, HttpStatus.BAD_REQUEST.value(), errorCode, message);
			}

			String originalName = multipartFile.getOriginalFilename();
			String[] divideFileName = originalName.split("\\.");
			String saveFileName = originalName;
			String extension = divideFileName[divideFileName.length - 1];

			saveFileName = userId + "_" + today + "_" + System.nanoTime() + "." + extension;

			long size = 0L;

			try (InputStream inputStream = multipartFile.getInputStream();
					OutputStream outputStream = new FileOutputStream(
							makedDirectory + tempDirectory + File.separator + saveFileName)) {

				int bytesRead;
				byte[] buffer = new byte[BUFFER_SIZE];
				while ((bytesRead = inputStream.read(buffer, 0, BUFFER_SIZE)) != -1) {
					size += bytesRead;
					outputStream.write(buffer, 0, bytesRead);
				}
				BoardNoticeFile boardNoticeFile = new BoardNoticeFile();
				boardNoticeFile.setFileExt(extension);
				boardNoticeFile.setFileName(saveFileName);
				boardNoticeFile.setFileRealName(multipartFile.getOriginalFilename());
				boardNoticeFile.setFilePath(makedDirectory + tempDirectory + File.separator);
				boardNoticeFile.setFileSubPath(tempDirectory);
				boardNoticeFile.setFileSize(String.valueOf(size));

				boardNoticeFileList.add(boardNoticeFile);

				if (fileCount == fileIndex) {
					boardNoticeService.insertBoardFile(boardNotice, boardNoticeFileList);
				}

			} catch (IOException e) {
				log.info("@@@@@@@@@@@@ io exception. message = {}",
						e.getCause() != null ? e.getCause().getMessage() : e.getMessage());
				FileUtils.deleteFileReculsive(makedDirectory + tempDirectory);
				return getResultMap(result, HttpStatus.INTERNAL_SERVER_ERROR.value(), "io.exception",
						message = e.getCause() != null ? e.getCause().getMessage() : e.getMessage());
			} catch (Exception e) {
				log.info("@@@@@@@@@@@@ file copy exception.");
				FileUtils.deleteFileReculsive(makedDirectory + tempDirectory);
				return getResultMap(result, HttpStatus.INTERNAL_SERVER_ERROR.value(), "file.copy.exception",
						message = e.getCause() != null ? e.getCause().getMessage() : e.getMessage());
			}
		}
		result.put("errorCode", errorCode);
		result.put("message", message);
		return result;
	}
	

	@PostMapping(value = "/comment")
	public Map<String, Object> insertComment(HttpServletRequest request, HttpServletResponse response) {

		int statusCode = HttpStatus.OK.value();
		Map<String, Object> result = new HashMap<>();
		String errorCode = null;
		String message = null;

		BoardNoticeComment boardNoticeComment = new BoardNoticeComment();

		UserSession userSession = (UserSession) request.getSession().getAttribute(Key.USER_SESSION.name());

		boardNoticeComment.setBoardNoticeId(Long.valueOf(request.getParameter("boardNoticeId")));
		// boardNoticeComment.setBoardNoticeCommentId(Long.valueOf(request.getParameter("boardNoticeCommentId")));
		boardNoticeComment.setClientIp(WebUtils.getClientIp(request));
		boardNoticeComment.setContent(request.getParameter("content"));
		boardNoticeComment.setUserId(userSession.getUserId());
		boardNoticeComment.setUserName(userSession.getUserName());

		try {
			boardNoticeService.insertBoardNoticeComment(boardNoticeComment);
		} catch (Exception e) {

		}

		result.put("statusCode", statusCode);
		result.put("errorCode", errorCode);
		result.put("message", message);
		return result;
	}
	
	@SuppressWarnings("unchecked")
	@PutMapping()
	public Map<String, Object> upadte(MultipartHttpServletRequest request) throws Exception {

		Map<String, Object> result = new HashMap<>();
		String errorCode = null;
		String message = null;

		BoardNotice boardNotice = new BoardNotice();

		boardNotice.setBoardNoticeId(Long.valueOf(request.getParameter("boardNoticeId")));
		boardNotice.setContents(request.getParameter("contents"));
		boardNotice.setTitle(request.getParameter("title"));
		boardNotice.setStart_date(request.getParameter("start_date"));
		boardNotice.setStart_day(request.getParameter("start_day"));
		boardNotice.setStart_hour(request.getParameter("start_hour"));
		boardNotice.setStart_minute(request.getParameter("start_minute"));
		boardNotice.setEnd_date(request.getParameter("end_date"));
		boardNotice.setEnd_day(request.getParameter("end_day"));
		boardNotice.setEnd_hour(request.getParameter("end_hour"));
		boardNotice.setEnd_minute(request.getParameter("end_minute"));
		boardNotice.setAvailable(Boolean.valueOf(request.getParameter("available")));

		UserSession userSession = (UserSession) request.getSession().getAttribute(Key.USER_SESSION.name());
		boardNotice.setUserId(userSession.getUserId());
		boardNotice.setUserName(userSession.getUserName());
		String client_ip = WebUtils.getClientIp(request);
		boardNotice.setClientIp(client_ip);

		Map<String, MultipartFile> fileMap = request.getFileMap();
		int fileCount = fileMap.values().size();

		try {
			boardNoticeService.updateBoard(boardNotice);
			if (fileCount != 0) {
				result = uploadFile(boardNotice, result, userSession, fileMap, fileCount, errorCode, message);
			}
			int statusCode = HttpStatus.OK.value();
			result.put("statusCode", statusCode);
		}catch(Exception e) {
			String filePath = (String) result.get("filePath");
			FileUtils.deleteFileReculsive(filePath);
			return getResultMap(result, HttpStatus.INTERNAL_SERVER_ERROR.value(), "file.copy.exception",
					message = e.getCause() != null ? e.getCause().getMessage() : e.getMessage());
		}

		int statusCode = HttpStatus.OK.value();

		result.put("statusCode", statusCode);
		result.put("errorCode", errorCode);
		result.put("message", message);
		return result;
	}

	private Map<String, Object> getResultMap(Map<String, Object> result, int statusCode, String errorCode,
			String message) {
		log.info("@@@@@@@@@@@@ errorCode = {}", errorCode);
		result.put("statusCode", statusCode);
		result.put("errorCode", errorCode);
		result.put("message", message);
		return result;
	}

	/**
	 * @param policy
	 * @param multipartFile
	 * @return
	 */
	private static String fileValidate(Policy policy, List<String> extList, MultipartFile multipartFile) {

		// 2 파일 이름
		String fileName = multipartFile.getOriginalFilename();
		if (fileName == null) {
			log.info("@@ fileName is null");
			return "file.name.invalid";
		} else if (fileName.contains("..") || fileName.indexOf("/") >= 0) {
			// TODO File.seperator 정규 표현식이 안 먹혀서 이렇게 처리함
			return "file.name.invalid";
		}

		// 4 파일 사이즈
		// TODO 파일은 사이즈가 커서 제한을 해야 할지 의문?
		long fileSize = multipartFile.getSize();
		log.info("@@@@@@@@@@@@@@@@@@@@@@@@@@ user upload file size = {} KB", (fileSize / 1000));
		if (fileSize > (policy.getUserUploadMaxFilesize() * 1000000L)) {
			log.info("@@ fileSize = {}, user upload max filesize = {} M", (fileSize / 1000),
					policy.getUserUploadMaxFilesize());
			return "file.size.invalid";
		}

		return null;
	}

	/**
	 * 파일 다운 로드
	 * 
	 * @param request
	 * @param response
	 * @param layerId
	 * @param layerFileInfoTeamId
	 */
	@GetMapping(value = "/{boardNoticeFileId:[0-9]+}/file/download")
	public void download(HttpServletRequest request, HttpServletResponse response, @PathVariable Long boardNoticeFileId) {
		try {
			BoardNoticeFile boardNoticeFile = boardNoticeService.getBoardNoticeFile(boardNoticeFileId);
			String filePath = boardNoticeFile.getFilePath();
			String extention = boardNoticeFile.getFileExt();
			String fileRealName = boardNoticeFile.getFileRealName();
			fileRealName = fileRealName.replaceAll("&", "");

			createDirectory(filePath);

			int idx = boardNoticeFile.getFileName().lastIndexOf(".");
			String fileName = boardNoticeFile.getFileName().substring(0, idx);

			// buffer size
			response.setContentType("application/force-download");
			response.setHeader("Content-Transfer-Encoding", "binary");
			log.info(fileName);
			setDisposition(fileRealName + "."+extention, request, response);
			try(	BufferedInputStream in = new BufferedInputStream(new FileInputStream(filePath+fileName+"."+extention));
                    BufferedOutputStream out = new BufferedOutputStream(response.getOutputStream())) {

                FileCopyUtils.copy(in, out);
                out.flush();
			} catch (RuntimeException e) {
				LogMessageSupport.printMessage(e, "@@ RuntimeException. message = {}", e.getMessage());
				throw e;
			} catch (IOException e) {
				LogMessageSupport.printMessage(e, "@@ FileNotFoundException. message = {}", e.getMessage());
				throw e;
			}

			
		} catch (DataAccessException e) {
			LogMessageSupport.printMessage(e, "@@ DataAccessException. message = {}",
					e.getCause() != null ? e.getCause().getMessage() : e.getMessage());
		} catch (RuntimeException e) {
			LogMessageSupport.printMessage(e, "@@ RuntimeException. message = {}",
					e.getCause() != null ? e.getCause().getMessage() : e.getMessage());
		} catch (IOException e) {
			LogMessageSupport.printMessage(e, "@@ FileNotFoundException. message = {}",
					e.getCause() != null ? e.getCause().getMessage() : e.getMessage());
		} catch (Exception e) {
			LogMessageSupport.printMessage(e, "@@ Exception. message = {}",
					e.getCause() != null ? e.getCause().getMessage() : e.getMessage());
		}
	}

	/**
	 *
	 * @param targetDirectory
	 */
	private void createDirectory(String targetDirectory) {
		File directory = new File(targetDirectory);
		if (!directory.exists()) {
			directory.mkdir();
		}
	}

	/**
	 * 다운로드시 한글 깨짐 방지 처리
	 */
	private void setDisposition(String filename, HttpServletRequest request, HttpServletResponse response)
			throws Exception {
		String browser = WebUtils.getBrowser(request);
		String dispositionPrefix = "attachment; filename=";
		String encodedFilename = null;

		log.info("================================= browser = {}", browser);
		if (browser.equals("MSIE")) {
			encodedFilename = URLEncoder.encode(filename, StandardCharsets.UTF_8).replaceAll("\\+", "%20");
		} else if (browser.equals("Trident")) { // IE11 문자열 깨짐 방지
			encodedFilename = URLEncoder.encode(filename, StandardCharsets.UTF_8).replaceAll("\\+", "%20");
		} else if (browser.equals("Firefox")) {
			encodedFilename = "\"" + new String(filename.getBytes(StandardCharsets.UTF_8), "8859_1") + "\"";
			encodedFilename = URLDecoder.decode(encodedFilename, StandardCharsets.UTF_8);
		} else if (browser.equals("Opera")) {
			encodedFilename = "\"" + new String(filename.getBytes(StandardCharsets.UTF_8), "8859_1") + "\"";
		} else if (browser.equals("Chrome")) {
			StringBuffer sb = new StringBuffer();
			for (int i = 0; i < filename.length(); i++) {
				char c = filename.charAt(i);
				if (c > '~') {
					sb.append(URLEncoder.encode("" + c, StandardCharsets.UTF_8));
				} else {
					sb.append(c);
				}
			}
			encodedFilename = sb.toString();
		} else if (browser.equals("Safari")) {
			encodedFilename = "\"" + new String(filename.getBytes(StandardCharsets.UTF_8), "8859_1") + "\"";
			encodedFilename = URLDecoder.decode(encodedFilename, StandardCharsets.UTF_8);
		} else {
			encodedFilename = "\"" + new String(filename.getBytes(StandardCharsets.UTF_8), "8859_1") + "\"";
		}

		response.setHeader("Content-Disposition", dispositionPrefix + encodedFilename);
		if ("Opera".equals(browser)) {
			response.setContentType("application/octet-stream;charset=UTF-8");
		}
	}

	/**
	 * 댓글불러오기
	 *
	 * @param model
	 * @return
	 */
	@GetMapping(value = "/moreComment/{boardNoticeCommentId:[0-9]+}")
	public Map<String, Object> loadComment(HttpServletRequest request, @PathVariable Long boardNoticeCommentId,
			Model model) {
		Map<String, Object> result = new HashMap<>();

		List<BoardNoticeComment> boardNoticeCommentList = boardNoticeService.getListBoardNoticeCommentByParent(boardNoticeCommentId);

		result.put("boardNoticeCommentList", boardNoticeCommentList);

		return result;
	}

	/**
	 * 추천하기
	 *
	 * @param model
	 * @return
	 */
	@PutMapping(value = "/comment/like/{boardNoticeCommentId:[0-9]+}")
	public Map<String, Object> likeComment(HttpServletRequest request, @PathVariable Long boardNoticeCommentId,
			Model model) {
		Map<String, Object> result = new HashMap<>();

		boardNoticeService.updateBoardCommentLikeCount(boardNoticeCommentId);

		return result;
	}
}
