package com.greatlearning.controller;

import java.util.HashMap;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.greatlearning.dto.UserToAdmin;
import com.greatlearning.entity.Admin;
import com.greatlearning.entity.User;
import com.greatlearning.service.AdminService;
import com.greatlearning.service.UserService;

@RestController
@CrossOrigin(origins = "*")
public class UserController {
	
  @Autowired
  private UserService userService;
  
  @Autowired
  private AdminService adminService;
  
  @PostMapping(path ="register")
  public String addUser(@RequestBody User user)
	{
	  String role = user.getRole();
	  
	 // System.out.println(role);
	  
	  if(role.equals("admin")) {
		  
		  
		   UserToAdmin userToAdmin = new UserToAdmin();
		   Admin admin = userToAdmin.convertUserToAdmin(user);
		   
		   
		   
		   if (adminService.AdminExists(admin.getEmail(), admin.getPassword())) {
		          return "Admin already present";
		      } else {
		          adminService.addAdmin(admin);
		          return "Admin inserted Successfully";
		      }
	  }
	  
	  else {
		 
		  if (userService.UserExists(user.getEmail(), user.getPassword())) {
	          return "User already present";
	      } else {
	          userService.addUser(user);
	          return "User inserted Successfully";
	      }
	  }
	  
	}
  

  

  @PostMapping("/login")
  private String login(@RequestBody HashMap<String, String> body) {
      String email = body.get("email");
      String password = body.get("password");
      
     // System.out.println(adminService.isUserAdmin(email));
      
      if(adminService.isUserAdmin(email)) {
    	  
    	  return "User is admin";
    	  
      }
      
      else if (userService.UserExists(email, password)) {
          return "Login";
      }
      
      else {
          return "Invalid Login";
      }
      
     
  }

 }
