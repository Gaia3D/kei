package kei.service.impl;

import java.util.List;

import kei.domain.issue.Issue;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import kei.persistence.IssueMapper;
import kei.service.IssueService;

/**
 * issue
 * @author jeongdae
 *
 */
@RequiredArgsConstructor
@Service
public class IssueServiceImpl implements IssueService {

	private final IssueMapper issueMapper;

	/**
	 * 최근 이슈 목록
	 * @return
	 */

	@Transactional(readOnly=true)
	public List<Issue> getListRecentIssue() {
		return issueMapper.getListRecentIssue();
	}
}
