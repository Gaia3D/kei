package kei.persistence;

import java.util.List;

import kei.domain.board.BoardNotice;
import kei.domain.board.BoardNoticeComment;
import kei.domain.board.BoardNoticeFile;

import org.springframework.stereotype.Repository;

/**
 * 게시판
 * 
 * @author hansang
 *
 */
@Repository
public interface BoardNoticeMapper {

	/**
	 * 게시물 총 건수
	 * 
	 * @param boardNotice
	 * @return
	 */
	Long getBoardTotalCount(BoardNotice boardNotice);

	/**
	 * 게시물 목록
	 * 
	 * @param boardNotice
	 * @return
	 */
	List<BoardNotice> getListBoard(BoardNotice boardNotice);

	/**
	 * 게시물 Comment 목록
	 * 
	 * @param boardNoticeId
	 * @return
	 */
	List<BoardNoticeComment> getListBoardNoticeComment(Long boardNoticeId);

	/**
	 * 게시물 Comment 목록
	 * 
	 * @param boardNoticeComment
	 * @return
	 */
	List<BoardNoticeComment> getListBoardNoticeCommentByDepth(BoardNoticeComment boardNoticeComment);

	/**
	 * 게시물 Comment 목록
	 * 
	 * @param boardNoticeCommentId
	 * @return
	 */
	List<BoardNoticeComment> getListBoardNoticeCommentByParent(Long boardNoticeCommentId);

	/**
	 * 게시물 정보
	 * 
	 * @param boardNoticeId
	 * @return
	 */
	BoardNotice getBoard(Long boardNoticeId);

	/**
	 * 게시물 Comment 정보
	 * 
	 * @param boardNoticeCommentId
	 * @return
	 */
	BoardNoticeComment getBoardNoticeComment(Long boardNoticeCommentId);

	/**
	 * 게시물 등록
	 * 
	 * @param boardNotice
	 * @return
	 */
	int insertBoard(BoardNotice boardNotice);

	/**
	 * 게시물 파일 등록
	 * 
	 * @param boardNoticeFile
	 * @return
	 */
	int insertFile(BoardNoticeFile boardNoticeFile);

	/**
	 * 게시물 상세 등록
	 * 
	 * @param boardNotice
	 */
	int insertBoardDetail(BoardNotice boardNotice);

	/**
	 * 게시물 Comment 등록
	 * 
	 * @param boardNoticeComment
	 * @return
	 */
	int insertBoardNoticeComment(BoardNoticeComment boardNoticeComment);

	/**
	 * 게시물 more Comment 등록
	 * 
	 * @param boardNoticeComment
	 * @return
	 */
	int insertBoardNoticeMoreComment(BoardNoticeComment boardNoticeComment);

	/**
	 * 게시물 수정
	 * 
	 * @param boardNotice
	 * @return
	 */
	int updateBoard(BoardNotice boardNotice);

	/**
	 * 게시물 조회 건수를 +1
	 * 
	 * @param boardNoticeId
	 */
	void updateBoardViewCount(Long boardNoticeId);

	/**
	 * 게시물 상세 수정
	 * 
	 * @param boardNotice
	 * @return
	 */
	int updateBoardDetail(BoardNotice boardNotice);

	/**
	 * 게시물 Comment 추천수 증가
	 * 
	 * @param boardNoticeComment
	 * @return
	 */
	int updateBoardCommentLikeCount(Long boardNoticeCommentId);

	/**
	 * 게시물 삭제
	 * 
	 * @param boardNoticeId
	 * @return
	 */
	int deleteBoard(Long boardNoticeId);

	/**
	 * 게시물 파일 삭제
	 * 
	 * @param boardNoticeFileId
	 * @return
	 */
	int deleteBoardNoticeFile(Long boardNoticeFileId);

	/**
	 * 게시물 상세 삭제
	 * 
	 * @param boardNoticeId
	 * @return
	 */
	int deleteBoardDetail(Long boardNoticeId);

	/**
	 * 게시물 Comment 삭제
	 * 
	 * @param boardNoticeCommentId
	 * @return
	 */
	int deleteBoardComment(Long boardNoticeCommentId);

	/**
	 * 게시물 Comment 일괄 삭제
	 * 
	 * @param boardNoticeId
	 * @return
	 */
	int deleteBoardCommentByBoardId(Long boardNoticeId);

	/**
	 * 게시물 file 불러오기
	 * 
	 * @param boardNoticeFileId
	 * @return
	 */
	BoardNoticeFile getBoardNoticeFile(Long boardNoticeFileId);

	/**
	 * 게시물 fileList 불러오기
	 * 
	 * @param boardNoticeId
	 * @return
	 */
	List<BoardNoticeFile> getBoardNoticeFiles(Long boardNoticeId);

}
