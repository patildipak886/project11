package com.example.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.entities.Complaint;
import com.example.entities.DeptName;;

public interface DeptDao  extends JpaRepository<DeptName, Integer> {
	List<DeptName> findByComplaintId(String ComplaintId);
	
	
	@Query(value="select * from dept_name where dept_no=?1", nativeQuery=true)
	DeptName findByDeptNo(int parseInt);
	
	@Query(value="select * from dept_name where dept_name=any(?1)", nativeQuery=true)
	List<DeptName> findByDeptN(String deptname);
	
	@Query(value="select * from dept_name where pincode=any(select pincode from admin where user_id=?1) and status is null", nativeQuery=true)
	List<Complaint> findForComplaints(int pincodes);

	


}
