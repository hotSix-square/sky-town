package com.ssafy.happyhouse.recommend;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileOutputStream;
import java.io.FileWriter;
import java.io.IOException;
import java.io.OutputStreamWriter;
import java.net.URL;
import java.nio.charset.Charset;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import javax.servlet.http.HttpServletRequest;
import org.apache.mahout.cf.taste.common.TasteException;
import org.apache.mahout.cf.taste.impl.similarity.PearsonCorrelationSimilarity;
import org.apache.mahout.cf.taste.recommender.RecommendedItem;
import org.apache.mahout.cf.taste.recommender.UserBasedRecommender;
import org.apache.mahout.cf.taste.impl.model.file.FileDataModel;
import org.apache.mahout.cf.taste.impl.model.jdbc.MySQLJDBCDataModel;
import org.apache.mahout.cf.taste.impl.neighborhood.ThresholdUserNeighborhood;
import org.apache.mahout.cf.taste.impl.recommender.GenericUserBasedRecommender;
import org.apache.mahout.cf.taste.model.DataModel;
import org.apache.mahout.cf.taste.neighborhood.UserNeighborhood;
import org.apache.mahout.cf.taste.similarity.UserSimilarity;
//import org.postgresql.ds.PGPoolingDataSource;
//import com.mysql.jdbc.jdbc2.optional.MysqlDataSource;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.google.gson.Gson;
import com.ssafy.happyhouse.apt.model.Apt;
import com.ssafy.happyhouse.recommend.model.RecommendInfo;
import com.ssafy.happyhouse.recommend.model.ReommendAptInfo;
import com.ssafy.happyhouse.recommend.model.service.RecommendService;

@RestController
@RequestMapping("/recommend")
public class UserBasedRecommendCsvGrandeController {
	private static Logger log = LoggerFactory.getLogger(UserBasedRecommendCsvGrandeController.class);

	@Autowired
	private RecommendService recomService;

	public static int createCsvFile(String filePath, List<RecommendInfo> list) {
		int resultCount = 0;
		try {
			BufferedWriter csvWriter = new BufferedWriter(new FileWriter(filePath, false));
			String userid = list.get(0).getUserId();
			for (RecommendInfo ri : list) {
				if (!ri.getUserId().equals(userid)) {
					csvWriter.newLine();
					userid = ri.getUserId();
				}
				csvWriter.write(ri.getUserId() + "");
				csvWriter.write(",");
				csvWriter.write(ri.getItemId().substring(1, ri.getItemId().length()) + "");
				csvWriter.write(",");
				csvWriter.write(Integer.toString(ri.getScore()) + ".0");
				csvWriter.newLine();
			}
			csvWriter.flush();
			csvWriter.close();
		} catch (IOException ie) {
			ie.printStackTrace();
		}
		return resultCount;
	}

	@GetMapping
	public String recommend(HttpServletRequest request) {
		System.out.println("추천시스템 서버!!");
		try {
			// 이부분에 db recommendtable 에서 데이터를 얻어와 csv 파일로 변환하는 것 적용
			List<RecommendInfo> list = recomService.getRecommendInfo();

			System.out.println("db 에서 꺼낸 아파트 추천 정보 개수: " + list.size());
			createCsvFile("csv/ttttt.csv", list);


			DataModel model = new FileDataModel(new File("csv/ttttt.csv")); // 데이터 파일 읽기 -> ID,아이템ID,추천점수 순
			UserSimilarity similarity = new PearsonCorrelationSimilarity(model); // 읽은 데이터로 유저 유사도 계산 //
																					// https://en.wikipedia.org/wiki/Pearson_correlation_coefficient
			UserNeighborhood neighborhood = new ThresholdUserNeighborhood(0.1, similarity, model); // 유저 유사도 계산된걸 바탕으로
			UserBasedRecommender recommender = new GenericUserBasedRecommender(model, neighborhood, similarity);
			List<RecommendedItem> recommendations = recommender.recommend(1, 10); // 추천 조회 user_id, 갯수
			
			ArrayList<Long> aptIdLists = new ArrayList<>();
			for (RecommendedItem recommendation : recommendations) {
				System.out.println("id: " + recommendation.getItemID() + "   value: " + recommendation.getValue());
				log.debug("############## " + "id: " + recommendation.getItemID() + "   value: "
						+ recommendation.getValue());
				aptIdLists.add(recommendation.getItemID());
			}

			// System.out.println(recommendations);
			// [RecommendedItem[item:104, value:4.0], RecommendedItem[item:106, value:4.0]]

			// 여기서 item 에 해당하는 상세 정보 가지고 와서 json 다시 만들기
			List<ReommendAptInfo> recommendAptList = new ArrayList<>();
			for(int i=0;i<aptIdLists.size();i++) {
				Apt aptInfo = recomService.selectAptInfo("A"+aptIdLists.get(i).toString());
				ReommendAptInfo rInfo = new ReommendAptInfo();
				rInfo.setApt(aptInfo);
				rInfo.setItemId(Long.toString(recommendations.get(i).getItemID()));
				rInfo.setScore(recommendations.get(i).getValue());
				recommendAptList.add(rInfo);
			}

			Gson gson = new Gson();
			return gson.toJson(recommendAptList);

		} catch (TasteException e) {
			e.printStackTrace();
			log.error("##" + e.toString());
		} catch (Exception e) {
			e.printStackTrace();
			log.error("##" + e.toString());
		}

		return "";
	}
}
