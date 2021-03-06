package kei.service.impl;

import kei.domain.extrusionmodel.DataLibrary;
import kei.domain.extrusionmodel.DataLibraryGroup;
import kei.domain.extrusionmodel.DataLibraryUpload;
import kei.domain.extrusionmodel.DataLibraryUploadFile;
import kei.persistence.DataLibraryMapper;
import kei.persistence.DataLibraryUploadMapper;
import kei.service.DataLibraryGroupService;
import kei.service.DataLibraryService;
import kei.service.DataLibraryUploadService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * 데이터 라이브러리
 * @author jeongdae
 *
 */
@Slf4j
@Service
public class DataLibraryUploadServiceImpl implements DataLibraryUploadService {

	@Autowired
	private DataLibraryUploadMapper dataLibraryUploadMapper;
	
	@Autowired
	private DataLibraryGroupService dataLibraryGroupService;

	/**
	 * 데이터 라이브러리 업로드 파일 총 건수
	 * @param dataLibraryUpload
	 * @return
	 */
	@Transactional(readOnly=true)
	public Long getDataLibraryUploadTotalCount(DataLibraryUpload dataLibraryUpload) {
		return dataLibraryUploadMapper.getDataLibraryUploadTotalCount(dataLibraryUpload);
	}

	/**
	 * 데이터 라이브러리 업로드 파일 목록
	 * @param dataLibraryUpload
	 * @return
	 */
	@Transactional(readOnly=true)
	public List<DataLibraryUpload> getListDataLibraryUpload(DataLibraryUpload dataLibraryUpload) {
		return dataLibraryUploadMapper.getListDataLibraryUpload(dataLibraryUpload);
	}

	/**
	 * 데이터 라이브러리 업로드 파일 목록
	 * @param dataLibraryUpload
	 * @return
	 */
	@Transactional(readOnly=true)
	public List<DataLibraryUploadFile> getListDataLibraryUploadFile(DataLibraryUpload dataLibraryUpload) {
		return dataLibraryUploadMapper.getListDataLibraryUploadFile(dataLibraryUpload);
	}

	/**
	 * 데이터 라이브러리 업로딩 정보
	 * @param dataLibraryUpload
	 * @return
	 */
	@Transactional(readOnly=true)
	public DataLibraryUpload getDataLibraryUpload(DataLibraryUpload dataLibraryUpload) {
		return dataLibraryUploadMapper.getDataLibraryUpload(dataLibraryUpload);
	}

	/**
	 * 업로딩 데이터 라이브러리
	 * @param dataLibraryUploadFile
	 * @return	업로딩 데이터 파일
	 */
	@Transactional(readOnly=true)
	public DataLibraryUploadFile getDataLibraryUploadFile(DataLibraryUploadFile dataLibraryUploadFile) {
		return dataLibraryUploadMapper.getDataLibraryUploadFile(dataLibraryUploadFile);
	}
	
	/**
	 * 데이터 라이브러리 업로딩 정보 입력
	 * @param dataLibraryUpload
	 * @param dataLibraryUploadFileList
	 * @return
	 */
	@Transactional
	public int insertDataLibraryUpload(DataLibraryUpload dataLibraryUpload, List<DataLibraryUploadFile> dataLibraryUploadFileList) {
		int result = dataLibraryUploadMapper.insertDataLibraryUpload(dataLibraryUpload);

		Long dataLibraryUploadId = dataLibraryUpload.getDataLibraryUploadId();
//		Integer dataGroupId = uploadData.getDataGroupId();
//		String sharing = uploadData.getSharing();
//		String dataType = uploadData.getDataType();
		String userId = dataLibraryUpload.getUserId();
		for(DataLibraryUploadFile dataLibraryUploadFile : dataLibraryUploadFileList) {
			dataLibraryUploadFile.setDataLibraryUploadId(dataLibraryUploadId);
			dataLibraryUploadFile.setUserId(userId);
			dataLibraryUploadMapper.insertDataLibraryUploadFile(dataLibraryUploadFile);
			result++;
		}
		return result;
	}

	/**
	 * 데이터 라이브러리 업로드 정보 수정
	 * @param dataLibraryUpload
	 * @return
	 */
	@Transactional
	public int updateDataLibraryUpload(DataLibraryUpload dataLibraryUpload) {
		return dataLibraryUploadMapper.updateDataLibraryUpload(dataLibraryUpload);
	}

}
