package kei.domain.board;

import java.time.LocalDateTime;

import org.springframework.format.annotation.DateTimeFormat;

import kei.utils.StringUtil;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

/**
 * 게시판 댓글(Comment)
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
public class BoardNoticeComment {

	// 사용자 이름
	private String userName;
	// 고유번호
	private Long boardNoticeCommentId;
	// 게시판 고유번호
	private Long boardNoticeId;
	// 조상
	private Long ancestor;
	// 부모
	private Long parent;
	// 깊이
	private Long depth;
	// 사용자 아이디
	private String userId;
	// 댓글(Comment)
	private String content;
	// 요청 IP
	private String clientIp;
	// 추천수
	private String likeCount;
	// 등록일
	@DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
	private LocalDateTime insertDate;

	public String getViewComment() {
		if (this.content == null || "".equals(this.content)) {
			return "";
		}

		String str = StringUtil.getStringConvertForHtml(this.content);
		str = StringUtil.getStringNewLineConvertForHtml(str);

		return str;
	}

}
