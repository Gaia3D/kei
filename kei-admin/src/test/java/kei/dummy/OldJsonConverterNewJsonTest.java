package kei.dummy;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Test;

import java.io.FileWriter;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@Slf4j
public class OldJsonConverterNewJsonTest {

    @Test
    void 인천계양_옛날json_새Json_포맷으로() {
        Path relativePath = Paths.get("");
        String oldJsonFile = relativePath.toAbsolutePath().toString() +"\\src\\test\\java\\kei\\dummy\\data\\gyeyang.json";
        String newJsonFile = relativePath.toAbsolutePath().toString() +"\\src\\test\\java\\kei\\dummy\\data\\new.json";

        try {
            StringBuilder builder = new StringBuilder();
            builder = getPrefix(builder);

            byte[] jsonData = Files.readAllBytes(Paths.get(oldJsonFile));
            String encodingData = new String(jsonData, StandardCharsets.UTF_8);

            ObjectMapper objectMapper = new ObjectMapper();
            //read JSON like DOM Parser
            JsonNode jsonNode = objectMapper.readTree(encodingData);

//			String dataName = jsonNode.path("data_name").asText();
//			String dataKey = jsonNode.path("data_key").asText();
//            String longitude = jsonNode.path("longitude").asText().trim();
//            String latitude = jsonNode.path("latitude").asText().trim();
//            String altitude = jsonNode.path("height").asText().trim();
//            String mappingType = jsonNode.path("mappingType").asText();
//            JsonNode metainfo = jsonNode.path("metainfo");
            JsonNode childrenNode = jsonNode.path("children");

//            dataGroup.setDataGroupId(dataGroupId);
//			dataGroup.setDataGroupName(dataName);
//			dataGroup.setDataGroupKey(dataKey);

            if(childrenNode.isArray() && childrenNode.size() != 0) {
                builder = parseChildren(builder, 0, childrenNode);
            }

            builder = getPostfix(builder);

            FileWriter fileWriter = new FileWriter(newJsonFile);
            fileWriter.write(builder.toString());
            fileWriter.flush();
            fileWriter.close();
        } catch (IOException e) {
            throw new RuntimeException("Data 일괄 등록 Json 파일 파싱 오류! message = " + e.getMessage());
        }
    }

    /**
     * 자식 data 들을 재귀적으로 파싱
     * @param builder
     * @param depth
     * @param childrenNode
     * @return
     */
    private StringBuilder parseChildren(StringBuilder builder, int depth, JsonNode childrenNode) {

        depth++;
        int viewOrder = 0;
        for(JsonNode jsonNode : childrenNode) {
            Long dataId = jsonNode.path("data_id").asLong();
            String dataName = jsonNode.path("data_name").asText();
            String dataKey = jsonNode.path("data_key").asText();
            String longitude = jsonNode.path("longitude").asText().trim();
            String latitude = jsonNode.path("latitude").asText().trim();
            String altitude = jsonNode.path("altitude").asText().trim();
            String heading = jsonNode.path("heading").asText().trim();
            String pitch = jsonNode.path("pitch").asText().trim();
            String roll = jsonNode.path("roll").asText().trim();
            String mappingType = jsonNode.path("mapping_type").asText();
            JsonNode metainfo = jsonNode.path("attributes");

//            String metainfo = "{\"isPhysical\": true,\"heightReference\":\"clampToGround\",\"flipYTexCoords\": true}";

            JsonNode childrene = jsonNode.path("children");
//            String label = jsonNode.path("label").asText();
//            String labelTemplate = jsonNode.path("labelTemplate").asText();

            builder.append("{")
//                    .append("\"dataId\"")
//                    .append(":")
//                    .append("\"")
//                    .append(dataId)
//                    .append("\",")
                    .append("\"dataName\"")
                    .append(":")
                    .append("\"")
                    .append(dataName)
                    .append("\",")
                    .append("\"dataKey\"")
                    .append(":")
                    .append("\"")
                    .append(dataKey)
                    .append("\",")
                    .append("\"longitude\"")
                    .append(":")
                    .append(longitude)
                    .append(",")
                    .append("\"latitude\"")
                    .append(":")
                    .append(latitude)
                    .append(",")
                    .append("\"heading\"")
                    .append(":")
                    .append(heading)
                    .append(",")
                    .append("\"pitch\"")
                    .append(":")
                    .append(pitch)
                    .append(",")
                    .append("\"roll\"")
                    .append(":")
                    .append(roll)
                    .append(",")
                    .append("\"metainfo\"")
                    .append(":")
                    .append(metainfo)
                    .append(",")
                    .append("\"status\"")
                    .append(":")
                    .append("\"use\"");

            viewOrder++;
            if(childrenNode.size() == viewOrder) {
                builder.append("}");
            } else {
                builder.append("},");
            }


//            if(childrene.isArray() && childrene.size() != 0) {
//                parseChildren(builder, depth, childrene);
//            }


        }

        log.info("childrenNode.size = {}, viewOrder = {}", childrenNode.size(), viewOrder);

        return builder;
    }

    private StringBuilder getPrefix(StringBuilder builder) {
        builder.append("{")
                .append("\"dataGroupKey\"")
                .append(":")
                .append("\"test\"")
                .append(",")
                .append("\"dataGroupName\"")
                .append(":")
                .append("\"test\"")
                .append(",")
                .append("\"dataGroupPath\"")
                .append(":")
                .append("\"infra/data/test\"")
                .append(",")
                .append("\"dataGroupTarget\"")
                .append(":")
                .append("\"admin\"")
                .append(",")
                .append("\"sharing\"")
                .append(":")
                .append("\"public\"")
                .append(",")
                .append("\"userId\"")
                .append(":")
                .append("\"admin\"")
                .append(",")
                .append("\"metainfo\"")
                .append(":")
                .append("{\"isPhysical\": false}")
                .append(",")
                .append("\"datas\"")
                .append(":")
                .append("[");
        return builder;
    }

    private StringBuilder getPostfix(StringBuilder builder) {
        builder.append("]")
        .append("}");
        return builder;
    }
}
