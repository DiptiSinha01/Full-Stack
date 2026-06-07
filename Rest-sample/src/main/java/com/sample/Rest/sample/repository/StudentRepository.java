package com.sample.Rest.sample.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sample.Rest.sample.model.Student;

public interface StudentRepository extends JpaRepository<Student,Integer>{
	
	}

