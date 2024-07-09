package com.greatlearning.dto;

import com.greatlearning.entity.Admin;
import com.greatlearning.entity.User;

public class UserToAdmin {
	


    public Admin convertUserToAdmin(User user) {
        Admin admin =new Admin();
       admin.setAdminName(user.getUserName());
       admin.setEmail(user.getEmail());
       admin.setPassword(user.getPassword());
       admin.setRole(user.getRole());

        return admin;
    }


}
