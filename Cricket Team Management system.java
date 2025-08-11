package com.hexaware.cricket.dto;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class PlayerDTO {

	@NotBlank(message = "cannot be blank")
	private long playerId;

	@Size(min = 3, max = 30)
	private String name;

	@Min(value = 1, message = "cannot be negative")
	private long jerseyNo;

	@Size(min = 3, max = 30)
	private String role;
	
	@Min(value = 1, message = "cannot be negative")
	private int totalMatches;
	
	@Size(min = 3, max = 30)
	private String teamName;
	
	@Size(min = 3, max = 30)
	private String stateName;
	
	@Size(min = 3, max = 100)
	private String description;
}
