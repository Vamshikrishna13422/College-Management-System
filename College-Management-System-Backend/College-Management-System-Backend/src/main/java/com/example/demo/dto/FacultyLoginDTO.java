package com.example.demo.dto;

public class FacultyLoginDTO {
	
	private String email;
	private String password;
	
	public FacultyLoginDTO() {
		super();
	}

	public FacultyLoginDTO(String email, String password) {
		super();
		this.email = email;
		this.password = password;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public String toString() {
		return "FacultyLoginDTO [email=" + email + ", password=" + password + "]";
	}
	
	
}
