package kei.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import kei.domain.board.BoardNotice;
import kei.domain.board.BoardNoticeComment;
import kei.domain.board.BoardNoticeFile;
import kei.domain.uploaddata.UploadDataFile;
import kei.persistence.BoardNoticeMapper;
import kei.service.BoardNoticeService;
import kei.utils.FileUtils;
import lombok.extern.slf4j.Slf4j;

/**
 * 게시판
 * 
 * @author hansang
 *
 */
@Service
@Slf4j
public class BoardNoticeServiceImpl implements BoardNoticeService {

	@Autowired
	private BoardNoticeMapper boardNoticeMapper;

	/**
	 * 게시물 총 건수
	 * 
	 * @param boardNotice
	 * @return
	 */
	@Transactional(readOnly = true)
	public Long getBoardTotalCount(BoardNotice boardNotice) {
		return boardNoticeMapper.getBoardTotalCount(boardNotice);
	}

	/**
	 * 게시물 목록
	 * 
	 * @param boardNotice
	 * @return
	 */
	@Transactional(readOnly = true)
	public List<BoardNotice> getListBoard(BoardNotice boardNotice) {
		return boardNoticeMapper.getListBoard(boardNotice);
	}

	/**
	 * 게시물 Comment 목록
	 * 
	 * @param boardNoticeId
	 * @return
	 */
	@Transactional(readOnly = true)
	public List<BoardNoticeComment> getListBoardNoticeComment(Long boardNoticeId) {
		return boardNoticeMapper.getListBoardNoticeComment(boardNoticeId);
	}

	/**
	 * 게시물 Comment 목록
	 * 
	 * @param boardNoticeComment
	 * @return
	 */
	@Transactional(readOnly = true)
	public List<BoardNoticeComment> getListBoardNoticeCommentByDepth(BoardNoticeComment boardNoticeComment) {
		return boardNoticeMapper.getListBoardNoticeCommentByDepth(boardNoticeComment);
	}

	/**
	 * 게시물 Comment 목록
	 * 
	 * @param boardNoticeCommentId
	 * @return
	 */
	@Transactional(readOnly = true)
	public List<BoardNoticeComment> getListBoardNoticeCommentByParent(Long boardNoticeCommentId) {
		return boardNoticeMapper.getListBoardNoticeCommentByParent(boardNoticeCommentId);
	}

	/**
	 * 게시물 정보
	 * 
	 * @param boardNoticeId
	 * @return
	 */
	@Transactional
	public BoardNotice getBoard(Long boardNoticeId) {
		BoardNotice board = boardNoticeMapper.getBoard(boardNoticeId);
		boardNoticeMapper.updateBoardViewCount(boardNoticeId);
		return board;
	}

	/**
	 * 게시물 정보(수정용)
	 * 
	 * @param boardNoticeId
	 * @return
	 */
	@Transactional
	public BoardNotice getBoardForModify(Long boardNoticeId) {
		BoardNotice boardNotice = boardNoticeMapper.getBoard(boardNoticeId);
		return boardNotice;
	}

	/**
	 * 게시물 Comment 정보
	 * 
	 * @param boardNoticeCommentId
	 * @return
	 */
	@Transactional(readOnly = true)
	public BoardNoticeComment getBoardNoticeComment(Long boardNoticeCommentId) {
		return boardNoticeMapper.getBoardNoticeComment(boardNoticeCommentId);
	}

	/**
	 * 게시물 등록
	 * 
	 * @param board
	 * @return
	 */
	@Transactional
	public int insertBoard(BoardNotice boardNotice) {
		
		boardNoticeMapper.insertBoard(boardNotice);
		return boardNoticeMapper.insertBoardDetail(boardNotice);
	}
	
	/**
	 * 게시물 파일 등록
	 * 
	 * @param board
	 * @return
	 */
	@Transactional
	public int insertBoardFile(BoardNotice boardNotice, List<BoardNoticeFile> boardNoticeFileList) {
		
		int result = 0;
		
		Long boardNoticeId = boardNotice.getBoardNoticeId();
		String userId = boardNotice.getUserId();
		for (BoardNoticeFile boardNoticeFile : boardNoticeFileList) {
			boardNoticeFile.setBoardNoticeId(boardNoticeId);
			boardNoticeFile.setUserId(userId);
			boardNoticeMapper.insertFile(boardNoticeFile);
			result++;
		}
		
		return result;
	}

	
	
	/**
	 * 게시물 Comment 등록
	 * 
	 * @param boardNoticeComment
	 * @return
	 */
	@Transactional
	public int insertBoardNoticeComment(BoardNoticeComment boardNoticeComment) {
		return boardNoticeMapper.insertBoardNoticeComment(boardNoticeComment);
	}

	/**
	 * 게시물 more Comment 등록
	 * 
	 * @param boardNoticeComment
	 * @return
	 */
	@Transactional
	public int insertBoardNoticeMoreComment(BoardNoticeComment boardNoticeComment) {
		return boardNoticeMapper.insertBoardNoticeMoreComment(boardNoticeComment);
	}

	/**
	 * 게시물 수정
	 * 
	 * @param board
	 * @return
	 */
	@Transactional
	public int updateBoard(BoardNotice boardNotice) {

		boardNoticeMapper.updateBoard(boardNotice);
		return boardNoticeMapper.updateBoardDetail(boardNotice);
	}

	/**
	 * 게시물 Comment 수정
	 * 
	 * @param boardNoticeComment
	 * @return
	 */
	@Transactional
	public int updateBoardCommentLikeCount(Long boardNoticeCommentId) {
		return boardNoticeMapper.updateBoardCommentLikeCount(boardNoticeCommentId);
	}

	/**
	 * 게시물 삭제
	 * 
	 * @param boardNoticeId
	 * @return
	 */
	@Transactional
	public int deleteBoard(Long boardNoticeId) {
		List<BoardNoticeFile> boardNoticeFileList = boardNoticeMapper.getBoardNoticeFiles(boardNoticeId);
		
		for (BoardNoticeFile boardNoticeFile : boardNoticeFileList) {
			FileUtils.deleteFileReculsive(boardNoticeFile.getFilePath());
		}
		
		return boardNoticeMapper.deleteBoard(boardNoticeId);
	}

	/**
	 * 게시물 파일 삭제
	 * 
	 * @param boardNoticeFileId
	 * @return
	 */
	@Transactional
	public int deleteBoardNoticeFile(Long boardNoticeFileId) {
		BoardNoticeFile boardNoticeFile = boardNoticeMapper.getBoardNoticeFile(boardNoticeFileId);
		log.info(boardNoticeFile.getFilePath() + boardNoticeFile.getFileRealName());
		FileUtils.deleteFileReculsive(boardNoticeFile.getFilePath() + boardNoticeFile.getFileName());
		return boardNoticeMapper.deleteBoardNoticeFile(boardNoticeFileId);
	}

	/**
	 * 게시물 Comment 삭제
	 * 
	 * @param boardNoticeCommentId
	 * @return
	 */
	@Transactional
	public int deleteBoardComment(Long boardNoticeCommentId) {
		return boardNoticeMapper.deleteBoardComment(boardNoticeCommentId);
	}

	/**
	 * 게시물 Comment 일괄 삭제
	 * 
	 * @param boardNoticeId
	 * @return
	 */
	@Transactional
	public int deleteBoardCommentByBoardId(Long boardNoticeId) {
		return boardNoticeMapper.deleteBoardCommentByBoardId(boardNoticeId);
	}

	/**
	 * 게시물 file 불러오기
	 * 
	 * @param boardNoticeFileId
	 * @return
	 */
	@Transactional
	public BoardNoticeFile getBoardNoticeFile(Long boardNoticeFileId) {

		return boardNoticeMapper.getBoardNoticeFile(boardNoticeFileId);
	}

	/**
	 * 게시물 fileList 불러오기
	 * 
	 * @param boardNoticeId
	 * @return
	 */
	@Transactional
	public List<BoardNoticeFile> getBoardNoticeFiles(Long boardNoticeId) {

		return boardNoticeMapper.getBoardNoticeFiles(boardNoticeId);
	}
}
