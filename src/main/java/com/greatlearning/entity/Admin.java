package com.greatlearning.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "ADMIN_TABLE")
public class Admin {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	private String adminName;
	
	private String email;
	
	private String password;
	
	private String role;
	
	

	public Admin() {
		
	}

	

	public Admin(String adminName, String email, String password, String role) {
		super();
		this.adminName = adminName;
		this.email = email;
		this.password = password;
		this.role = role;
	}



	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getAdminName() {
		return adminName;
	}

	public void setAdminName(String adminName) {
		this.adminName = adminName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	
	

	public String getRole() {
		return role;
	}



	public void setRole(String role) {
		this.role = role;
	}



	@Override
	public String toString() {
		return "Admin [id=" + id + ", adminName=" + adminName + ", email=" + email + ", password=" + password
				+ ", role=" + role + "]";
	}



	
	
	
}
