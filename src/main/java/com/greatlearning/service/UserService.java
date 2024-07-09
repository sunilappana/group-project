package com.greatlearning.service;

import java.util.List;

import com.greatlearning.entity.User;

public interface UserService {
	
	public User addUser(User user);
	
	public List<User> getUsers();
	
	public void updateUser(String email);
	
	public void deleteUser(String email);
	
	public boolean UserExists(String email, String password); 

}
