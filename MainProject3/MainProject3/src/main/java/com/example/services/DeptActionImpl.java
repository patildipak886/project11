package com.example.services;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.daos.ComplaintDao;
import com.example.daos.DeptDao;
import com.example.entities.Complaint;
import com.example.entities.DeptName;

@Service
@Transactional
public class DeptActionImpl implements DeptNameAction{

	@Autowired
	DeptDao deptdao;
	//ComplaintDao complaintdao;
	

	@Override
	public List<DeptName> getAllDeptName(DeptName deptname) {
		List<DeptName> list = new ArrayList<DeptName>();
		list.add(deptname);
		return list;
	}
	@Override
	public DeptName getDeptname(int deptname) {
		return deptdao.getById(deptname);
		
	}
	@Override
	public DeptName registerDeptName(DeptName deptname) {
		DeptName saveComplaint = deptdao.save(deptname);
		return saveComplaint;
	}
	
	
//	@Override
//	public DeptName getDeptname(DeptName deptname) {
//		DeptName saveDept = deptdao.save(deptname);
//		return saveDept;
//	}
	

	

	
	

}
