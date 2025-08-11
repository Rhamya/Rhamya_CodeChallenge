package com.hexaware.cricket.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
public class Player {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@SequenceGenerator(name = "play_seq", sequenceName = "player_sequence", allocationSize = 1)
	private long playerId;
	private String name;
	private long jerseyNo;
	private String role;
	private int totalMatches;
	private String teamName;
	private String stateName;
	private String description;
	
	
}
