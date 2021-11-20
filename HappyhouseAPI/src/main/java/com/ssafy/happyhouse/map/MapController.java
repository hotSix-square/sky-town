package com.ssafy.happyhouse.map;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.happyhouse.map.model.SidoGugunCode;
import com.ssafy.happyhouse.map.model.service.MapService;
import com.ssafy.happyhouse.util.model.Category;
import com.ssafy.happyhouse.util.model.HouseInfoDto;

@RestController
@RequestMapping("/map")
public class MapController {

	@Autowired
	private MapService happyHouseMapService;

	@GetMapping("/sido")
	public ResponseEntity<List<SidoGugunCode>> sido() throws Exception {
		return new ResponseEntity<List<SidoGugunCode>>(happyHouseMapService.getSido(), HttpStatus.OK);
	}

	@GetMapping("/gugun")
	public ResponseEntity<List<SidoGugunCode>> gugun(@RequestParam("sido") String sido) throws Exception {
		return new ResponseEntity<List<SidoGugunCode>>(happyHouseMapService.getGugunInSido(sido), HttpStatus.OK);
	}

	@GetMapping("/dong")
	public ResponseEntity<List<HouseInfoDto>> dong(@RequestParam("gugun") String gugun) throws Exception {
		return new ResponseEntity<List<HouseInfoDto>>(happyHouseMapService.getDongInGugun(gugun), HttpStatus.OK);
	}

	@GetMapping("/apt")
	public ResponseEntity<List<HouseInfoDto>> apt(@RequestParam("dong") String dong,
			@RequestParam(value = "start", required = false, defaultValue = "0") int start,
			@RequestParam(value = "cnt", required = false, defaultValue = "5") int cnt,
			@RequestParam(value = "price", required = false, defaultValue = "0") int price) throws Exception {
		return new ResponseEntity<List<HouseInfoDto>>(happyHouseMapService.getAptInDong(dong, start, cnt, price),
				HttpStatus.OK);
	}

	@GetMapping("/page")
	public int page(@RequestParam("dong") String dong,
			@RequestParam(value = "price", required = false, defaultValue = "0") int price) throws Exception {
		return happyHouseMapService.getCountApt(dong, price);
	}
	
	@GetMapping("/category")
	public ResponseEntity<List<Category>> dong() throws Exception {
		return new ResponseEntity<List<Category>>(happyHouseMapService.getCategory(), HttpStatus.OK);
	}
	
	
}