import React, { useState, useEffect } from "react";
import { getAllPlayers, deletePlayer, getPlayerById, getSecondHighestByTeam} from "../services/PlayerService";
import { Link } from "react-router-dom";
import '../App.css'; 


function PlayerList() {
    const [players, setPlayers] = useState([]);
    const [searchId, setSearchId] = useState('');
    const [searchTeam, setSearchTeam] = useState('');
    

    useEffect(() => {
        loadPlayers();
    }, []);



    const loadPlayers = () => {
        getAllPlayers()
            .then(response => {
                if (Array.isArray(response.data))
                    setPlayers(response.data);
                else
                    setPlayers([]);
            })
            .catch(error => console.error("Error loading players:", error));
    };



    const handleDelete = (id) => {
        deletePlayer(id)
            .then(() => loadPlayers())
            .catch(error => console.error("Error deleting player:", error));
    };



    const handleSearchById = () => {
        if (!searchId) {
        loadPlayers();
        return;
        }
        getPlayerById(searchId)
        .then(response => {
            setPlayers(response.data ? [response.data] : []);
        })
        .catch(error => {
            console.error(error);
            setPlayers([]);
        });
    };


  const handleSearchByTeam = () => {
    if (!searchTeam) {
        loadPlayers();
        return;
    }
    getSecondHighestByTeam(searchTeam)
    .then(response => {
        if (Array.isArray(response.data))
            setPlayers(response.data);
        else
            setPlayers([]);
        })
    .catch(error => {
        console.error(error);
        setPlayers([]);
    });
    };




    return (
        <>
            <header className="heading">
                <h1>Cricket Team Management System</h1>
            </header>

            <div className="search-bar">
            <input type="number" placeholder="Search by ID" value={searchId} onChange={e => setSearchId(e.target.value)} className="form-control" style={{ maxWidth: '150px' }}/>
            <button className="btn btn-secondary btn-sm" onClick={handleSearchById}>Search</button>

            <input type="text" placeholder="Second Highest by Team"  value={searchTeam} onChange={e => setSearchTeam(e.target.value)} className="form-control" style={{ maxWidth: '200px' }}/>
            <button className="btn btn-secondary btn-sm" onClick={handleSearchByTeam}>Search</button>


            <button className="btn btn-primary btn-sm"  onClick={loadPlayers} >Reset</button>
        </div>

           
            <Link to="/add" className="btn btn-primary mb-3">Add player</Link>

            <table className="table table-bordered table-hover ">
                <thead>
                    <tr className="table-dark">
                        <th>ID</th>
                        <th>Name</th>
                        <th>Jersey No</th>
                        <th>Role</th>
                        <th>Total matches</th>
                        <th>Team name</th>
                        <th>State name</th>
                        <th>Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {players.length > 0 ? (
                        players.map(p => (
                            <tr key={p.playerId}>
                                <td>{p.playerId}</td>
                                <td>{p.name}</td>
                                <td>{p.jerseyNo}</td>
                                <td>{p.role}</td>
                                <td>{p.totalMatches}</td>
                                <td>{p.teamName}</td>
                                <td>{p.stateName}</td>
                                <td>{p.description}</td>
                                <td>
                                    <Link to={`/edit/${p.playerId}`} className="btn btn-sm btn-warning me-2">Edit</Link>
                                    <button onClick={() => handleDelete(p.playerId)} className="btn btn-sm btn-danger">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="9">No players found</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    );
}

export default PlayerList;
