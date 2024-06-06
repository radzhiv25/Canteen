package com.dao;

import java.util.List;

import org.springframework.web.bind.annotation.PathVariable;

import com.entity.Users;

public interface CanteenDao {
	public List<Users> getUsers();
}
