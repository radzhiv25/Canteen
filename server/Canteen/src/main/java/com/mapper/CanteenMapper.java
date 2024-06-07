package com.mapper;

import java.util.List;

import org.apache.ibatis.annotations.*;

import com.fasterxml.jackson.databind.deser.std.NumberDeserializers.BooleanDeserializer;

import com.entity.Users;
//import com.sun.istack.internal.FinalArrayList;

public interface CanteenMapper {

	// SELECT ALL / DISPLAY ALL

	final String getUsers = "SELECT * FROM users";


	@Select(getUsers)
	@Results(value = { @Result(property = "id", column = "id"),
			@Result(property = "name", column = "name"),
			@Result(property = "email", column = "email"),
			@Result(property = "phone", column = "phone"),
			@Result(property = "password", column = "password"),
			@Result(property = "role", column = "role"), })
	List<Users> getUsers();

}
