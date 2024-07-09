package com.greatlearning.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

import com.greatlearning.entity.Admin;


@Repository
public interface AdminRepository extends JpaRepository<Admin, Integer>{

	Admin findByEmail(String email);
	
	Admin findByPassword(String password);
	
	
}
