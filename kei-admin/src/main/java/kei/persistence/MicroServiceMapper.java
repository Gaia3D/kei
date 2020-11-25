package kei.persistence;

import kei.domain.microservice.MicroService;
import kei.domain.role.Role;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * 마이크로 서비스 관리
 * @author jeongdae
 *
 */
@Repository
public interface MicroServiceMapper {

	/**
	 * 마이크로 서비스 목록
	 * @param microService
	 * @return
	 */
	List<MicroService> getListMicroService(MicroService microService);

	/**
	 * 마이크로 서비스 정보
	 * @param microServiceId
	 * @return
	 */
	MicroService getMicroService(Integer microServiceId);
	
	/**
	 * 마이크로 서비스 등록
	 * @param microService
	 * @return
	 */
	int insertMicroService(MicroService microService);
	
	/**
	 * 마이크로 서비스 정보 수정
	 * @param microService
	 * @return
	 */
	int updateMicroService(MicroService microService);
	
	/**
	 * 마이크로 서비스 삭제
	 * @param microServiceId
	 * @return
	 */
	int deleteMicroService(Integer microServiceId);

	/**
	 * 마이크로 서비스 Health Check 결과 수정
	 * @param microService
	 * @return
	 */
	int updateMicroServiceStatus(MicroService microService);
}
