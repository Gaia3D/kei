package kei.service.impl;

import kei.domain.microservice.MicroService;
import kei.domain.role.Role;
import kei.persistence.MicroServiceMapper;
import kei.persistence.RoleMapper;
import kei.service.MicroServiceService;
import kei.service.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Role
 * @author jeongdae
 *
 */
@Service
public class MicroServiceServiceImpl implements MicroServiceService {
	
	@Autowired
	private MicroServiceMapper microServiceMapper;

	/**
	 * 마이크로 서비스 목록
	 * @param microService
	 * @return
	 */
	@Transactional(readOnly=true)
	public List<MicroService> getListMicroService(MicroService microService) {
		return microServiceMapper.getListMicroService(microService);
	}

	/**
	 * 마이크로 서비스 정보
	 * @param microServiceId
	 * @return
	 */
	@Transactional(readOnly=true)
	public MicroService getMicroService(Integer microServiceId) {
		return microServiceMapper.getMicroService(microServiceId);
	}

	/**
	 * 마이크로 서비스 등록
	 * @param microService
	 * @return
	 */
	@Transactional
	public int insertMicroService(MicroService microService) {
		return microServiceMapper.insertMicroService(microService);
	}

	/**
	 * 마이크로 서비스 정보 수정
	 * @param microService
	 * @return
	 */
	@Transactional
	public int updateMicroService(MicroService microService) {
		return microServiceMapper.updateMicroService(microService);
	}

	/**
	 * 마이크로 서비스 Health Check 결과 수정
	 * @param microService
	 * @return
	 */
	@Transactional
	public int updateMicroServiceStatus(MicroService microService) {
		return microServiceMapper.updateMicroServiceStatus(microService);
	}

	/**
	 * 마이크로 서비스 삭제
	 * @param microServiceId
	 * @return
	 */
	@Transactional
	public int deleteMicroService(Integer microServiceId) {
		return microServiceMapper.deleteMicroService(microServiceId);
	}
}
