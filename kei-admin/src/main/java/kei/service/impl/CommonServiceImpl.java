package kei.service.impl;

import kei.persistence.CommonMapper;
import kei.service.CommonService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * 공통 처리
 */
@Slf4j
@Service
public class CommonServiceImpl implements CommonService {

    @Autowired
    private CommonMapper commonMapper;

    /**
     *
     * @param tableName
     * @return
     */
    @Transactional(readOnly=true)
    public Boolean isTableExist(String tableName) {
        return commonMapper.isTableExist(tableName);
    }
}
