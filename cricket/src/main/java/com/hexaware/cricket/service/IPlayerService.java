package com.hexaware.cricket.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.hexaware.cricket.entity.Player;

@Service
public interface IPlayerService {

	Player create(Player player);

	Player getById(long id);

	List<Player> getAll();

	Player update(Long id, Player player);

	String deleteById(long id);

	List<Player> getByRole(String role);

	List<Player> getByTeam(String teamName);

	List<Player> findSecondHighest(String teamName);

}
