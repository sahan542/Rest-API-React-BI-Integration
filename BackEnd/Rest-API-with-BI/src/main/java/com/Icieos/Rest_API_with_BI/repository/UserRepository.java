package com.Icieos.Rest_API_with_BI.repository;

import com.Icieos.Rest_API_with_BI.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {

}