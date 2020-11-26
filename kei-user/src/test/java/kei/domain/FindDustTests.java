package kei.domain;

import lombok.extern.slf4j.Slf4j;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.junit.jupiter.api.Disabled;
import org.springframework.http.*;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponents;
import org.springframework.web.util.UriComponentsBuilder;

import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;
import java.nio.charset.Charset;
import java.util.List;

@Slf4j
public class FindDustTests {

    private JSONParser parser = new JSONParser();

    @Disabled
    void 미세먼지_샘플_데이터_생성() throws IOException, ParseException {
        JSONArray jsonArray = new JSONArray();
        JSONObject stationJson = (JSONObject) parser.parse(new FileReader(this.getClass().getClassLoader().getResource("msrstn_info.json").getFile()));
        List<?> stationList = (List<?>) stationJson.get("list");

        stationList.forEach(f -> {
            var locationInfo = (JSONObject) f;
            try {
                String response = getAPIResult((String) locationInfo.get("STATION_NAME"));
                JSONObject apiResultJson = (JSONObject) parser.parse(response);
                List<?> apiResultList = (List<?>) apiResultJson.get("list");
                apiResultList.forEach(a -> {
                    var obj = (JSONObject) a;
                    obj.put("DM_Y", locationInfo.get("DM_Y"));
                    obj.put("DM_X", locationInfo.get("DM_X"));
                    obj.put("ENG_STATION_ADDR", locationInfo.get("ENG_STATION_ADDR"));
                    obj.put("ENG_DATA_TIME", locationInfo.get("ENG_DATA_TIME"));
                    obj.put("STATION_CODE", locationInfo.get("STATION_CODE"));
                    obj.put("STATION_ADDR", locationInfo.get("STATION_ADDR"));
                    obj.put("STATION_NAME", locationInfo.get("STATION_NAME"));
                    obj.put("DATA_TIME", locationInfo.get("DATA_TIME"));

                    jsonArray.add(obj);
                });
            } catch (URISyntaxException | ParseException e) {
                e.printStackTrace();
            }
        });

        try {
            FileWriter file = new FileWriter("D:\\findDustSample.json", true);
            file.write(jsonArray.toJSONString());
            file.flush();
            file.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private String getAPIResult(String stationName) throws URISyntaxException {
        String url = "http://openapi.airkorea.or.kr/openapi/services/rest/ArpltnInforInqireSvc/getMsrstnAcctoRltmMesureDnsty";
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(new MediaType("application", "json", Charset.forName("UTF-8")));
        HttpEntity<String> entity = new HttpEntity<>(headers);
        UriComponents builder = UriComponentsBuilder.fromHttpUrl(url)
                .queryParam("ServiceKey", "4EA8xQz4hBCUI0azTs4P6Xznia8j5fjbeA%2F33IADvvdxt2MkVGsjVzU4yjn2tjyrjkww73GoOncpjz5L4nKdvg%3D%3D")
                .queryParam("numOfRows", 10000)
                .queryParam("pageNo", 1)
                .queryParam("stationName", stationName)
                .queryParam("dataTerm", "DAILY")
                .queryParam("ver", 1.3)
                .queryParam("_returnType", "json")
                .build(false);    //자동으로 encode해주는 것을 막기 위해 false
        // TODO ServiceKey 는 발급받은 키로 해야함. 개발용 api key 는 하루 request 500건으로 제한
        ResponseEntity<?> response = restTemplate.exchange(new URI(builder.toString()), HttpMethod.GET, entity, String.class);
        log.info("-------- statusCode = {}, body = {}", response.getStatusCodeValue(), response.getBody());

        return response.getBody().toString();
    }

    @Disabled
    void 코드값_추가() throws IOException, ParseException {
        JSONArray jsonArray = new JSONArray();
        JSONObject stationJson = (JSONObject) parser.parse(new FileReader(this.getClass().getClassLoader().getResource("msrstn_info.json").getFile()));
        JSONObject tempJson = (JSONObject) parser.parse(new FileReader("D:\\findDustSample.json"));
        List<?> stationList = (List<?>) stationJson.get("list");
        List<?> tempList = (List<?>) tempJson.get("list");
        stationList.forEach(f -> {
            var locationInfo = (JSONObject) f;
            tempList.forEach(a -> {
                var tempInfo = (JSONObject) a;
                if(locationInfo.get("STATION_NAME").equals(tempInfo.get("STATION_NAME"))) {
                    tempInfo.put("STATION_CODE", locationInfo.get("STATION_CODE"));
                    jsonArray.add(tempInfo);
                }
            });

        });

        try {
            FileWriter file = new FileWriter("D:\\temp.json", true);
            file.write(jsonArray.toJSONString());
            file.flush();
            file.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
