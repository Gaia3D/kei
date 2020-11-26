package kei.domain.board;

import java.time.LocalDateTime;

import org.springframework.format.annotation.DateTimeFormat;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@ToString(callSuper = true)
@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class BoardNoticeFile {

	private String sharing;
	private String dataType;

	// 고유번호
	private Long boardNoticeFileId;
	// 사용자 업로드 정보 고유번호
	private Long boardNoticeId;
	// 사용자 아이디
	private String userId;
	// 사용자명
	private String userName;
	// 파일 이름
	private String fileName;
	// 파일 실제 이름
	private String fileRealName;
	// 파일 경로
	private String filePath;
	// 공통 디렉토리 이하 부터의 파일 경로
	private String fileSubPath;
	// 파일 사이즈
	private String fileSize;
	// 파일 확장자
	private String fileExt;

	@DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
	private LocalDateTime insertDate;

	// 오류 메시지
	private String errorMessage;

	public String validate() {
		// TODO 구현해야 한다.
		return null;
	}

	public Long getViewFileSizeUnitKB() {
		if (this.fileSize == null || "".equals(this.fileSize)) {
			return 0L;
		} else {
			long size = Long.parseLong(this.fileSize);
			return size / 1000L;
		}
	}

}
