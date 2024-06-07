package com.dao;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.entity.Users;
import com.mapper.CanteenMapper;


@Repository
public class CanteenDaoImpl implements CanteenDao{

	@Autowired
	private SqlSessionTemplate sqlsessiontemplate;
	
	@Autowired
	private CanteenMapper mapper;	
	
	@Override
	public List<Users> getUsers() {
		return mapper.getUsers();
	}
}
