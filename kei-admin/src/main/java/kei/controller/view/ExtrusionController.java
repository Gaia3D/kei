package kei.controller.view;

import kei.domain.Key;
import kei.domain.PageType;
import kei.domain.common.Pagination;
import kei.domain.data.DataGroup;
import kei.domain.data.DataInfoLog;
import kei.domain.urban.UrbanGroup;
import kei.domain.user.UserSession;
import kei.service.DataGroupService;
import kei.service.DataLogService;
import kei.service.UrbanGroupService;
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
import java.util.Locale;

@Slf4j
@Controller
@RequestMapping("/extrusion")
public class ExtrusionController {

    @Autowired
    private UrbanGroupService urbanGroupService;

    /**
     * extrusion model example
     * @param request
     * @param model
     * @return
     */
    @GetMapping(value = "/list")
    public String list(HttpServletRequest request, Model model) {

        UrbanGroup urbanGroup = UrbanGroup.builder().depth(1).build();
        List<UrbanGroup> oneDepthUrbanGroupList  = urbanGroupService.getListUrbanGroup();

        model.addAttribute("oneDepthUrbanGroupList", oneDepthUrbanGroupList);
        return "/extrusion/list";
    }

    /**
     * 검색 조건
     * @param pageType
     * @param dataInfoLog
     * @return
     */
    private String getSearchParameters(PageType pageType, DataInfoLog dataInfoLog) {
        return dataInfoLog.getParameters();
    }
}