package com.ssafy.happyhouse.recommend.model.service;

import java.sql.SQLException;
import java.util.List;

import com.ssafy.happyhouse.recommend.model.RecommendInfo;

public interface RecommendService {
	public List<RecommendInfo> getRecommendInfo() throws SQLException;
}
