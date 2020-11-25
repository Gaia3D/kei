package kei;

import kei.filter.XSSFilter;
import kei.listener.KeiHttpSessionBindingListener;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.context.annotation.Bean;
import org.springframework.scheduling.annotation.EnableScheduling;

import javax.servlet.http.HttpSessionBindingListener;
import java.util.ArrayList;
import java.util.List;

@Slf4j
@EnableScheduling
@SpringBootApplication
public class KeiUserApplication extends SpringBootServletInitializer {

	public static void main(String[] args) {
		SpringApplication.run(KeiUserApplication.class, args);
	}

	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
		return application.sources(KeiUserApplication.class);
	}
	
	@Bean
    public FilterRegistrationBean<XSSFilter> xSSFilter() {
		FilterRegistrationBean<XSSFilter> registrationBean = new FilterRegistrationBean<>(new XSSFilter());
		
		List<String> urls = getUrlList();
		
		registrationBean.setUrlPatterns(urls);
		//registrationBean.addUrlPatterns(/*);
		return registrationBean;
    }
	
	@Bean
	public HttpSessionBindingListener httpSessionBindingListener() {
		log.info(" $$$ KeiUserApplication registerListener $$$ ");
		return new KeiHttpSessionBindingListener();
	}
	
	private List<String> getUrlList() {
		List<String> urls = new ArrayList<>();
		
		urls.add("/search/*");
		urls.add("/data/*");
		urls.add("/datas/*");
		urls.add("/upload-data/*");
		urls.add("/upload-datas/*");
		urls.add("/converter/*");
		urls.add("/converters/*");
		urls.add("/data/*");
		urls.add("/datas/*");
		urls.add("/data-adjust-log/*");
		urls.add("/data-adjust-logs/*");
		urls.add("/data-log/*");
		urls.add("/data-logs/*");
		urls.add("/issues/*");
		urls.add("/map/*");
		urls.add("/searchmap/*");
		urls.add("/layer/*");
		urls.add("/user-policy/*");
		
		return urls;
	}
}