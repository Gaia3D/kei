package kei.controller.view;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import kei.controller.AuthorizationController;
import kei.domain.*;
import kei.domain.common.Pagination;
import kei.domain.extrusionmodel.DesignLayer;
import kei.domain.extrusionmodel.DesignLayerFileInfo;
import kei.domain.extrusionmodel.DesignLayerGroup;
import kei.domain.policy.GeoPolicy;
import kei.domain.policy.Policy;
import kei.domain.role.RoleKey;
import kei.domain.urban.UrbanGroup;
import kei.domain.user.UserSession;
import kei.service.*;
import kei.support.LogMessageSupport;
import kei.support.SQLInjectSupport;
import kei.utils.DateUtils;
import kei.utils.FormatUtils;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.List;

/**
 * 디자인 레이어 관리
 */
@Slf4j
@Controller
@RequestMapping("/design-layer")
public class DesignLayerController implements AuthorizationController {

    @Autowired
    private DesignLayerService designLayerService;
    @Autowired
    private DesignLayerFileInfoService designLayerFileInfoService;
    @Autowired
    private DesignLayerGroupService designLayerGroupService;
    @Autowired
    private ObjectMapper objectMapper;
    @Autowired
    private GeoPolicyService geoPolicyService;
    @Autowired
    private PolicyService policyService;
    @Autowired
    private UrbanGroupService urbanGroupService;

    /**
     * 디자인 레이어 목록
     */
    @GetMapping(value = "/list")
    public String list(HttpServletRequest request, @RequestParam(defaultValue = "1") String pageNo, DesignLayer designLayer, Model model) {
        designLayer.setSearchWord(SQLInjectSupport.replaceSqlInection(designLayer.getSearchWord()));
        designLayer.setOrderWord(SQLInjectSupport.replaceSqlInection(designLayer.getOrderWord()));

        log.info("@@ designLayer = {}", designLayer);

        String roleCheckResult = roleValidate(request);
        if(roleCheckResult != null) return roleCheckResult;

        String today = DateUtils.getToday(FormatUtils.YEAR_MONTH_DAY);
        if (StringUtils.isEmpty(designLayer.getStartDate())) {
            designLayer.setStartDate(today.substring(0, 4) + DateUtils.START_DAY_TIME);
        } else {
            designLayer.setStartDate(designLayer.getStartDate().substring(0, 8) + DateUtils.START_TIME);
        }
        if (StringUtils.isEmpty(designLayer.getEndDate())) {
            designLayer.setEndDate(today + DateUtils.END_TIME);
        } else {
            designLayer.setEndDate(designLayer.getEndDate().substring(0, 8) + DateUtils.END_TIME);
        }

        Long totalCount = designLayerService.getDesignLayerTotalCount(designLayer);
        Pagination pagination = new Pagination(request.getRequestURI(), designLayer.getParameters(),
                totalCount, Long.parseLong(pageNo), designLayer.getListCounter());
        designLayer.setOffset(pagination.getOffset());
        designLayer.setLimit(pagination.getPageRows());

        List<DesignLayer> designLayerList = new ArrayList<>();
        if (totalCount > 0L) {
            designLayerList = designLayerService.getListDesignLayer(designLayer);
        }

        model.addAttribute(pagination);
        model.addAttribute("designLayer", designLayer);
        model.addAttribute("totalCount", totalCount);
        model.addAttribute("designLayerList", designLayerList);

        return "/design-layer/list";
    }

    /**
     * 디자인 레이어 등록
     *
     * @param model
     * @return
     */
    @GetMapping(value = "/input")
    public String input(HttpServletRequest request, Model model) {

        String roleCheckResult = roleValidate(request);
        if(roleCheckResult != null) return roleCheckResult;

        Policy policy = policyService.getPolicy();
        List<UrbanGroup> urbanGroupList = urbanGroupService.getListUrbanGroup();
        List<DesignLayerGroup> designLayerGroupList = designLayerGroupService.getListDesignLayerGroup();

        model.addAttribute("policy", policy);
        model.addAttribute("designLayer", new DesignLayer());
        model.addAttribute("urbanGroupList", urbanGroupList);
        model.addAttribute("designLayerGroupList", designLayerGroupList);

        return "/design-layer/input";
    }

    /**
     * 디자인 레이어 수정
     *
     * @param model
     * @return
     */
    @GetMapping(value = "/modify")
    public String modify(HttpServletRequest request, @RequestParam Long designLayerId, Model model) {
        String roleCheckResult = roleValidate(request);
        if(roleCheckResult != null) return roleCheckResult;

        Policy policy = policyService.getPolicy();
        DesignLayer designLayer = designLayerService.getDesignLayer(designLayerId);
        List<DesignLayerGroup> designLayerGroupList = designLayerGroupService.getListDesignLayerGroup();
        List<UrbanGroup> urbanGroupList = urbanGroupService.getListUrbanGroup();

        model.addAttribute("policy", policy);
        model.addAttribute("designLayer", designLayer);
        model.addAttribute("designLayerGroupList", designLayerGroupList);

        List<DesignLayerFileInfo> designLayerFileInfoList = designLayerFileInfoService.getListDesignLayerFileInfo(designLayerId);
        DesignLayerFileInfo designLayerFileInfo = new DesignLayerFileInfo();
        for (DesignLayerFileInfo fileInfo : designLayerFileInfoList) {
            if (ShapeFileExt.SHP == ShapeFileExt.valueOf(fileInfo.getFileExt().toUpperCase())) {
                designLayerFileInfo = fileInfo;
            }
        }
        model.addAttribute("designLayerFileInfo", designLayerFileInfo);
        model.addAttribute("designLayerFileInfoList", designLayerFileInfoList);
        model.addAttribute("designLayerFileInfoListSize", designLayerFileInfoList.size());
        model.addAttribute("urbanGroupList", urbanGroupList);

        return "/design-layer/modify-upload";
    }

    /**
     * 디자인 레이어 지도 보기
     *
     * @param model
     * @return
     */
    @GetMapping(value = "/{designLayerId}/map")
    public String viewLayerMap(HttpServletRequest request, @PathVariable Long designLayerId, Long designLayerFileInfoId, Model model) {
        log.info("@@ designLayerId = {}, designLayerFileInfoId = {}", designLayerId, designLayerFileInfoId);

        GeoPolicy policy = geoPolicyService.getGeoPolicy();
        DesignLayer designLayer = designLayerService.getDesignLayer(designLayerId);
        String designLayerExtent = designLayerService.getDesignLayerExtent(designLayer);
        Integer versionId = 0;
        if (designLayerFileInfoId != null) {
            versionId = designLayerFileInfoService.getDesignLayerShapeFileVersion(designLayerFileInfoId);
        }

        String policyJson = "";
        String designLayerJson = "";
        try {
            policyJson = objectMapper.writeValueAsString(policy);
            designLayerJson = objectMapper.writeValueAsString(designLayer);
        } catch (JsonProcessingException e) {
            LogMessageSupport.printMessage(e, "@@ JsonProcessingException. message = {}", e.getCause() != null ? e.getCause().getMessage() : e.getMessage());
        }

        model.addAttribute("policyJson", policyJson);
        model.addAttribute("designLayerJson", designLayerJson);
        model.addAttribute("versionId", versionId);
        model.addAttribute("designLayerExtent", designLayerExtent);

        return "/design-layer/popup-map";
    }

    private String roleValidate(HttpServletRequest request) {
        UserSession userSession = (UserSession) request.getSession().getAttribute(Key.USER_SESSION.name());
        int httpStatusCode = getRoleStatusCode(userSession.getUserGroupId(), RoleKey.ADMIN_EXTRUSION_MODEL_MANAGE.name());
        if (httpStatusCode > 200) {
            log.info("@@ httpStatusCode = {}", httpStatusCode);
            request.setAttribute("httpStatusCode", httpStatusCode);
            return "/error/error";
        }

        return null;
    }
}
