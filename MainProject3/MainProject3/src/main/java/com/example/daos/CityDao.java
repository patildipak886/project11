package com.example.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.entities.CityData;

public interface CityDao extends JpaRepository<CityData, String>{
	
	CityData findByPincode(String pincode);
	
	CityData findByAdharId(String adharId);
}
