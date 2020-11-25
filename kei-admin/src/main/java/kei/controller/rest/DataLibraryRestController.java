package kei.controller.rest;

import kei.config.PropertiesConfig;
import kei.domain.FileType;
import kei.domain.Key;
import kei.domain.UploadDataType;
import kei.domain.UploadDirectoryType;
import kei.domain.extrusionmodel.DataLibraryUpload;
import kei.domain.extrusionmodel.DataLibraryUploadFile;
import kei.domain.policy.Policy;
import kei.domain.user.UserSession;
import kei.service.DataLibraryService;
import kei.service.PolicyService;
import kei.support.LogMessageSupport;
import kei.utils.DateUtils;
import kei.utils.FileUtils;
import kei.utils.FormatUtils;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import java.io.*;
import java.util.*;
import java.util.zip.ZipEntry;
import java.util.zip.ZipFile;

/**
 * 데이터 라이브러리 파일 업로더
 * TODO 설계 파일 안의 texture 의 경우 설계 파일에서 참조하는 경우가 있으므로 이름 변경 불가.
 * @author jeongdae
 *
 */
@Slf4j
@RestController
@RequestMapping("/data-librarys")
public class DataLibraryRestController {
	
	// 파일 copy 시 버퍼 사이즈
	public static final int BUFFER_SIZE = 8192;
	
	@Autowired
	private PolicyService policyService;
	
	@Autowired
	private PropertiesConfig propertiesConfig;
	
	@Autowired
	private DataLibraryService dataLibraryService;


}
