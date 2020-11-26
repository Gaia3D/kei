package kei.schedule;

import kei.domain.Health;
import kei.domain.microservice.MicroService;
import kei.service.MicroServiceService;
import kei.support.LogMessageSupport;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import java.util.List;

/**
 * 디지털 트윈 서비스 Health Check
 */
@Slf4j
@Component
public class HealthCheckScheduler {

    @Autowired
    private MicroServiceService microServiceService;
    @Autowired
    private RestTemplate restTemplate;

    @Scheduled(cron = "${kei.schedule.health.check}")
    public void healthCheck() throws Exception {
        List<MicroService> microServiceList = microServiceService.getListMicroService(new MicroService());
        for(MicroService microService : microServiceList) {
            String serviceUrl = microService.getUrlScheme() + "://" + microService.getUrlHost() + ":" + microService.getUrlPort() + "/" + microService.getUrlPath();

            HttpStatus status = null;
            String health = null;
            try {
                ResponseEntity<String> response = restTemplate.getForEntity(serviceUrl, String.class);
                status = response.getStatusCode();
                if(HttpStatus.OK == status) {
                    health = Health.UP.name().toLowerCase();
                } else if(HttpStatus.SERVICE_UNAVAILABLE == status || HttpStatus.INTERNAL_SERVER_ERROR == status) {
                    health = Health.DOWN.name().toLowerCase();
                } else {
                    health = Health.UNKNOWN.name().toLowerCase();
                }
            } catch(Exception e) {
                status = HttpStatus.INTERNAL_SERVER_ERROR;
                health = Health.UNKNOWN.name().toLowerCase();
                LogMessageSupport.printMessage(e, "@@@@@@@@@@@@ exception. message = {}", e.getCause() != null ? e.getCause().getMessage() : e.getMessage());
            }
            log.info("@@ httpStatus = {}, serviceUrl = {}", status, serviceUrl);

            microService.setStatus(health);
            microServiceService.updateMicroServiceStatus(microService);
        }
    }
}
