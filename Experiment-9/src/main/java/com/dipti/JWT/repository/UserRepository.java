package com.dipti.JWT.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dipti.JWT.usermodel.UserEntity;

import java.util.Optional;

public interface UserRepository extends JpaRepository<UserEntity,Integer> {
    Optional<UserEntity> findByUsername(String username);
}