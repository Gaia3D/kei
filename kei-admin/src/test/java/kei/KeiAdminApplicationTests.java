package kei;

import kei.domain.ShapeFileExt;
import org.junit.jupiter.api.Test;

class KeiAdminApplicationTests {

	@Test
	void contextLoads() {
		
		 System.out.println(ShapeFileExt.findBy("shp"));
	}

}
