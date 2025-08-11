package com.hexaware.cricket.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.hexaware.cricket.entity.Player;

@Repository
public interface PlayerRepository extends JpaRepository<Player, Long> {

	List<Player> findByRole(String role);

	List<Player> findByTeamName(String teamName);

	@Query("SELECT p FROM Player p WHERE p.teamName = :teamName AND p.totalMatches = ("
			+ "SELECT MAX(p2.totalMatches) FROM Player p2 WHERE p2.teamName = :teamName AND p2.totalMatches < ("
			+ "SELECT MAX(p3.totalMatches) FROM Player p3 WHERE p3.teamName = :teamName))")
	List<Player> findSecondHighest(@Param("teamName") String teamName);

}
