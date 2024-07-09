package com.greatlearning.service;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.greatlearning.entity.User;
import com.greatlearning.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService{
	
	@Autowired
	private UserRepository userRepo;

	@Override
	public User addUser(User user) {
		
		userRepo.save(user);
		
		return user;
	}

	@Override
	public List<User> getUsers() {
	
		return userRepo.findAll();
	}

	@Override
	public void updateUser(String email) {
		
		User user = userRepo.findByEmail(email);
		
	}

	

	@Override
	public void deleteUser(String email) {
		User user = userRepo.findByEmail(email);
		
		userRepo.delete(user);
		
		
	}

	@Override
	public boolean UserExists(String email, String password) {
	
		  return userRepo.findByPassword(password) != null && userRepo.findByEmail(email) != null;
	}

}
