package com.example.services;

import java.util.List;

import com.example.entities.Complaint;
import com.example.entities.DeptName;

public interface DeptNameAction {
	
	//Complaint getComplaint(String description,String department, String date);
	
	DeptName registerDeptName(DeptName deptname);
	
	List<DeptName> getAllDeptName(DeptName deptname);
	
	

	//DeptName getDeptname(DeptName deptname);
	DeptName getDeptname(int deptname);
	//DeptName getDeptname(String string);

}
