package com.greatlearning.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.greatlearning.entity.Admin;
import com.greatlearning.repository.AdminRepository;


@Service
public class AdminServiceImpl implements AdminService {

	@Autowired
	private AdminRepository adminRepo;
	

	public boolean AdminExists(String email, String password) {
		
		return adminRepo.findByPassword(password) != null && adminRepo.findByEmail(email) != null;
	}


	@Override
	public Admin addAdmin(Admin admin) {
		
	adminRepo.save(admin);
		
		return admin;
	}


	@Override
	public Boolean isUserAdmin(String email) {
		
		//System.out.println(adminRepo.findByEmail(email));
		
		return (adminRepo.findByEmail(email) != null) ;		
	}

	
	
}
