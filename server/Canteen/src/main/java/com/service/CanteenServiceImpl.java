package com.service;

import java.util.List;

import com.entity.Users;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.dao.CanteenDao;

@Service
public class CanteenServiceImpl implements CanteenService{
	
	@Autowired
	CanteenDao cdao;	


	@Override
	public List<Users> getUsers() {
		return cdao.getUsers();
	}
}

//Controller->Service->Dao->Mapper->Database;
