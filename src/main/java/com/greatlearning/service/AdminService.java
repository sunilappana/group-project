package com.greatlearning.service;

import com.greatlearning.entity.Admin;


public interface AdminService {
	
	public boolean AdminExists(String email, String password); 
	
	public Admin addAdmin(Admin admin);
	
	public Boolean isUserAdmin(String email);

}
