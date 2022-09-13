package com.example.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Dept")
public class DeptName {
	
	@Id
	@Column(name="dept_name")
	private String pincode;
	
	@Column(name="status")
	private String adharId;
	
	@Column(name="complaint_id")
	private int complaintId ;

	public DeptName() {
		
	}
	public DeptName(String pincode, String adharId, int complaintId) {
		super();
		this.pincode = pincode;
		this.adharId = adharId;
		this.complaintId = complaintId;
	}
	public String getPincode() {
		return pincode;
	}
	public void setPincode(String pincode) {
		this.pincode = pincode;
	}
	public String getAdharId() {
		return adharId;
	}
	public void setAdharId(String adharId) {
		this.adharId = adharId;
	}
	public int getComplaintId() {
		return complaintId;
	}
	public void setComplaintId(int complaintId) {
		this.complaintId = complaintId;
	}
	
	
	@Override
	public String toString() {
		return "DeptName [pincode=" + pincode + ", adharId=" + adharId + ", complaintId=" + complaintId + "]";
	}
	
	
	

}
