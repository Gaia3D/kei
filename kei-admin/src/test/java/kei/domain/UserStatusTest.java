package kei.domain;

import kei.domain.user.UserInfo;
import kei.domain.user.UserStatus;
import org.junit.jupiter.api.Test;

import lombok.extern.slf4j.Slf4j;

import java.util.*;

import static java.util.stream.Collectors.toList;
import static java.util.stream.Collectors.toMap;

@Slf4j
class UserStatusTest {

	@Test
	void test() {
		Map<String, Long> map = UserStatus.getStatisticsMap();
		log.info("----------- map = {}", map);

		List<UserInfo> userInfoStatusList = new ArrayList<>() {
			{
				add(UserInfo.builder().status("0").statusCount(1l).build());
				add(UserInfo.builder().status("2").statusCount(1l).build());
				add(UserInfo.builder().status("9").statusCount(1l).build());
			}
		};

		log.info("----------- userInfoStatusList = {}", userInfoStatusList);

		List<UserInfo> list = userInfoStatusList.stream()
				.filter(u -> {
					if(map.containsKey(u.getStatus())) {
						map.put(u.getStatus(), u.getStatusCount());
						return true;
					}
					return false;
				})
				.collect(toList());

		log.info("----------- map = {}", map);
		log.info("----------- list = {}", list.size());
	}
}
