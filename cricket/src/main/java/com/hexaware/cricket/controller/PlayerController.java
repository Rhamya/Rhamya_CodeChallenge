package com.hexaware.cricket.controller;

import java.util.List;

import jakarta.validation.Valid; 
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.hexaware.cricket.dto.PlayerDTO;
import com.hexaware.cricket.entity.Player;
import com.hexaware.cricket.service.IPlayerService;

@RestController
@RequestMapping("/api/cricket")
public class PlayerController {

	@Autowired
	IPlayerService playerservice;

	@PostMapping("/create")
	public Player create(@Valid @RequestBody PlayerDTO playerDto) {
		Player player = mapDtoToEntity(playerDto);
		return playerservice.create(player);
	}

	@GetMapping("/getById/{id}")
	public Player getById(@PathVariable long id) {
		return playerservice.getById(id);
	}

	@GetMapping("/getAll")
	public List<Player> getAll() {
		return playerservice.getAll();
	}

	@PutMapping("/update/{id}")
	public Player update(@PathVariable Long id, @Valid @RequestBody PlayerDTO playerDto) {
		Player player = mapDtoToEntity(playerDto);
		return playerservice.update(id, player);
	}

	@DeleteMapping("/deleteById/{id}")
	public String deleteById(@PathVariable long id) {
		return playerservice.deleteById(id);
	}

	@GetMapping("/getByRole/{role}")
	public List<Player> getByRole(@PathVariable String role) {
		return playerservice.getByRole(role);
	}

	
	@GetMapping("/getBySecondHighest/{teamName}")
	public List<Player> findSecondHighest(@PathVariable String teamName) {
		return playerservice.findSecondHighest(teamName);
	}
	
	
	@GetMapping("/getByTeam/{teamName}")
	public List<Player> getByTeam(@PathVariable String teamName) {
		return playerservice.getByTeam(teamName);
	}

	private Player mapDtoToEntity(PlayerDTO dto) {
		Player player = new Player();
		player.setPlayerId(dto.getPlayerId());
		player.setName(dto.getName());
		player.setJerseyNo(dto.getJerseyNo());
		player.setRole(dto.getRole());
		player.setTotalMatches(dto.getTotalMatches());
		player.setTeamName(dto.getTeamName());
		player.setStateName(dto.getStateName());
	
		return player;
		//private
	}
}
