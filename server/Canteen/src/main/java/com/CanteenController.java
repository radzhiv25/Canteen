package com;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.entity.*;
import com.service.CanteenService;

@CrossOrigin
@RestController
public class CanteenController {

	@Autowired
	CanteenService service;

	// DISPLAY LISTS

	// DISPLY USERS
	@GetMapping("/List_User")
	public List<Users> List_user(ModelMap user_model) {
		List<Users> user_list = service.getUsers();
		return user_list;
	}
}