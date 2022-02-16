package com.ssafy.happyhouse.user.model.service;

import java.util.List;
import java.util.Map;

import com.ssafy.happyhouse.user.model.User;

public interface UserService {
User login(Map<String, String> map) throws Exception;
	
	int idCheck(String checkId) throws Exception;
	void registerMember(User memberDto) throws Exception;
	
	List<User> listMember() throws Exception;
	User getMember(String userId) throws Exception;
	void updateMember(User memberDto) throws Exception;
	void deleteMember(String userId) throws Exception;
}