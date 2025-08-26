import axios from 'axios';

const API_URL = 'http://localhost:8080/api/cricket';

export const getAllPlayers = () => axios.get(`${API_URL}/getAll`);
export const createPlayer = (player) => axios.post(`${API_URL}/create`, player);
export const updatePlayer = (id, player) => axios.put(`${API_URL}/update/${id}`, player);
export const deletePlayer = (id) => axios.delete(`${API_URL}/deleteById/${id}`);
export const getPlayerById = (id) => axios.get(`${API_URL}/getById/${id}`);
export const getSecondHighestByTeam = (team) => axios.get(`${API_URL}/getBySecondHighest/${team}`);



















// export const getPlayersByRole = (role) => axios.get(`${API_URL}/getByRole/${role}`);
// export const getPlayersByTeam = (team) => axios.get(`${API_URL}/getByTeam/${team}`);
// export const getPlayersByName = (name) => axios.get(`${API_URL}/getByName/${name}`);
