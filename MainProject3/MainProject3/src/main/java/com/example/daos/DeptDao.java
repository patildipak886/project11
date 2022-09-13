package com.example.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.entities.DeptName;;

public interface DeptDao  extends JpaRepository<DeptName, Integer> {
	
	DeptName findByComplaintId(int parseInt);

}
