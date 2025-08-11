package com.hexaware.cricket.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hexaware.cricket.entity.Player;
import com.hexaware.cricket.exception.InvalidRoleException;
import com.hexaware.cricket.exception.PlayerNotFoundException;
import com.hexaware.cricket.exception.TeamNotFoundException;
import com.hexaware.cricket.repository.PlayerRepository;

@Service
public class PlayerServiceImpl implements IPlayerService {

	@Autowired
	PlayerRepository playerrepo;

	@Override
	public Player create(Player player) {
		return playerrepo.save(player);
	}

	@Override
	public Player getById(long id) {
		return playerrepo.findById(id)
				.orElseThrow(() -> new PlayerNotFoundException("Player not found with id: " + id));
	}

	@Override
	public List<Player> getAll() {
		return playerrepo.findAll();
	}

	@Override
	public Player update(Long id, Player player) {
		Player p = getById(id);
		p.setName(player.getName());
		p.setRole(player.getRole());
		p.setJerseyNo(player.getJerseyNo());
		p.setTotalMatches(player.getTotalMatches());
		p.setStateName(player.getStateName());
		p.setTeamName(player.getTeamName());
		p.setDescription(player.getDescription());

		return playerrepo.save(p);
	}

	@Override
	public String deleteById(long id) {
		playerrepo.deleteById(id);
		return "Record deleted successfully with id: " + id;
	}

	@Override
	public List<Player> getByRole(String role) {

		List<Player> players = playerrepo.findByRole(role);
		if (players.isEmpty()) {
			throw new InvalidRoleException("Given role is invalid or no players with role: " + role);
		}
		return players;

	}

	@Override
	public List<Player> getByTeam(String teamName) {

		List<Player> players = playerrepo.findByTeamName(teamName);
		if (players.isEmpty()) {
			throw new TeamNotFoundException("Given team is invalid or no players with team: " + teamName);
		}
		return players;

	}

	@Override
	public List<Player> findSecondHighest(String teamName) {
		return playerrepo.findSecondHighest(teamName);
	}

}
