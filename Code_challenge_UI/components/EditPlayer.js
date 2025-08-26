import React, { useEffect, useState } from 'react';
import { getPlayerById, updatePlayer } from '../services/PlayerService';
import { useNavigate, useParams } from 'react-router-dom';
import '../App.css'; 

function EditPlayer() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [player, setPlayer] = useState({
    playerId: '',
    name: '',
    jerseyNo: '',
    role: '',
    totalMatches: '',
    teamName: '',
    stateName: '',
    description: ''
  });

  useEffect(() => {
    getPlayerById(id)
      .then(response => setPlayer(response.data))
      .catch(error => console.error(error));
  }, [id]);

  const handleChange = (e) => {
    setPlayer({ ...player, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updatePlayer(id, player)
      .then(() => navigate('/'))
      .catch(error => console.error(error));
  };



  return (
    <div>
      <h2 className="heading">Edit Player</h2>
      <div className='add_form'>
      <form onSubmit={handleSubmit} className="row g-3">

        <div className="col-md-6">
        <label className="form-label">Player ID</label>
        <input type="text" name="playeId" value={player.playerId} className="form-control" readOnly/>
        </div>


        <div className="col-md-6">
        <label className="form-label">Name</label>
        <input type="text" name="name" value={player.name} onChange={handleChange} className="form-control" required/>
        </div>

        <div className="col-md-6">
        <label className="form-label">Jersey Number</label>
        <input type="number" name="jerseyNo" value={player.jerseyNo} onChange={handleChange} className="form-control" required/>
        </div>


        <div className="col-md-6">
        <label className="form-label">Role</label>
        <input type="text" name="role" value={player.role} onChange={handleChange} className="form-control" required/>
        </div>


        <div className="col-md-6">
        <label className="form-label">Total matches</label>
        <input type="number" name="totalMatches" value={player.totalMatches} onChange={handleChange} className="form-control" required/>
        </div>

        <div className="col-md-6">
        <label className="form-label">Team Name</label>
        <input type="text" name="teamName" value={player.teamName} onChange={handleChange} className="form-control" required/>
        </div>


        <div className="col-md-6">
        <label className="form-label">State Name</label>
        <input type="text" name="stateName" value={player.stateName} onChange={handleChange} className="form-control" required/>
        </div>

        <div className="col-12">
        <label className="form-label">Description</label>
        <textarea name="description" value={player.description} onChange={handleChange} className="form-control" required/>
        </div>

    <div className="col-12 text-center">
        <button type="submit" className="btn btn-success">Update Player</button>
    </div>
    </form>
    </div>
</div>
  );
}

export default EditPlayer;