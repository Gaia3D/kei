package kei.controller.view;

import kei.domain.PageType;
import kei.domain.common.Pagination;
import kei.domain.microservice.MicroService;
import kei.service.MicroServiceService;
import kei.support.SQLInjectSupport;
import kei.utils.DateUtils;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.List;

/**
 * 서비스 관리
 */
@Slf4j
@Controller
@RequestMapping("/micro-service")
public class MicroServiceController {

	@Autowired
	private MicroServiceService microServiceService;

	/**
	 * MicroService 목록
	 * @param request
	 * @param model
	 * @return
	 */
	@GetMapping(value = "/list")
	public String list(HttpServletRequest request, MicroService microService, Model model) {
		List<MicroService> microServiceList = microServiceService.getListMicroService(microService);

		model.addAttribute("microServiceList", microServiceList);

		return "/micro-service/list";
	}

	/**
	 * MicroService 등록 화면
	 * @param model
	 * @return
	 */
	@GetMapping(value = "/input")
	public String input(Model model) {
		MicroService microService = new MicroService();
		model.addAttribute("microService", microService);
		return "/micro-service/input";
	}

	/**
	 * 수정 페이지로 이동
	 * @param request
	 * @param microServiceId
	 * @param model
	 * @return
	 */
	@GetMapping(value = "/modify")
	public String modify(HttpServletRequest request, @RequestParam Integer microServiceId, Model model) {
		MicroService microService = microServiceService.getMicroService(microServiceId);

		model.addAttribute(microService);

		return "/micro-service/modify";
	}

	/**
	 * 검색 조건
	 * @param pageType
	 * @param microService
	 * @return
	 */
	private String getSearchParameters(PageType pageType, MicroService microService) {
		return microService.getParameters();
	}
}