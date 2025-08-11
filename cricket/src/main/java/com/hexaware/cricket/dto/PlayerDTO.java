package com.hexaware.cricket.dto;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class PlayerDTO {

	private long playerId;

	@NotBlank(message = "cannot be blank")
	private String name;

	@Min(value = 1, message = "cannot be negative")
	@NotNull(message = "cannot be blank")
	private long jerseyNo;

	@Pattern(regexp = "(Batsman|Bowler|Keeper|All Rounder)", message = "Role must be one of: Batsman, Bowler, Keeper, All Rounder")
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
