package kei.domain.board;

import java.io.Serializable;
import java.time.LocalDateTime;

import org.springframework.format.annotation.DateTimeFormat;

import kei.domain.common.Search;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

/**
 * 게시판
 * 
 * @author hansang
 *
 */
@ToString(callSuper = true)
@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class BoardNotice extends Search implements Serializable {

	private static final long serialVersionUID = -3757317100688176871L;

	// validation
	private String error_code;

	// 페이지 처리를 위한 시작
	private Long offset;
	// 페이지별 표시할 건수
	private Long limit;

	/********** 검색 조건 ************/
	private String search_word;
	// 검색 옵션. 0 : 일치, 1 : 포함
	private String search_option;
	private String search_value;
	private String order_word;
	private String order_value;

	/****** validator ********/
	private String method_mode;
	// 댓글 개수
	private Integer commentCount;

	/*********** 테이블 *************/
	// 게시물 상세 고유번호
	private Long boardNoticeDetailId;
	// 내용
	private String contents;
	// 게시판 댓글 고유번호
	private Long boardNoticeCommentId;
	// comment
	private String comment;

	// 고유번호
	private Long boardNoticeId;
	// 제목
	private String title;
	// 사용자 아이디
	private String userId;
	// 사용자 이름
	private String userName;
	// 게시 시작시간
	private String start_date;
	private String start_day;
	private String start_hour;
	private String start_minute;
	// 게시 종료시간
	private String end_date;
	private String end_day;
	private String end_hour;
	private String end_minute;

	// 사용유무, true : 사용, false : 사용안함
	private boolean available;
	// 요청 IP
	private String clientIp;
	// 조회수
	private Long viewCount;

	@DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
	private LocalDateTime updateDate;

	@DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
	private LocalDateTime insertDate;

	public String validate() {
		if (this.title == null || "".equals(title)) {
			return "comment.invalid";
		}
		if (this.contents == null || "".equals(contents)) {
			return "comment.invalid";
		}
		return null;
	}

}
