package kei.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import kei.domain.policy.GeoPolicy;
import kei.persistence.GeoPolicyMapper;
import kei.service.GeoPolicyService;

/**
 * 2D, 3D 운영 정책
 * @author jeongdae
 *
 */
@Service
public class GeoPolicyServiceImpl implements GeoPolicyService {

	@Autowired
	private GeoPolicyMapper geoPolicyMapper;
	
	/**
	 * 운영 정책 정보
	 * @return
	 */
	@Transactional(readOnly=true)
	public GeoPolicy getGeoPolicy() {
		return geoPolicyMapper.getGeoPolicy();
	}
}
