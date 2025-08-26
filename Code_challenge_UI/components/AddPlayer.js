import React, {useState} from "react";
import { createPlayer} from "../services/PlayerService";
import { useNavigate} from "react-router-dom";
import '../App.css'; 

function AddPlayer(){

    const navigate = useNavigate();

    const[player, setPlayer]= useState(
        {
            name:'',
            jerseyNo:'',
            role:'',
            totalMatches:'',
            teamName:'',
            stateName:'',
            description:''
        }
    );

    const [errors, setErrors] = useState({});

    const handleChange=(e)=>{
        setPlayer({...player,[e.target.name]:e.target.value});
    };


    const handleSubmit=(e)=>{
       e.preventDefault();
       if (!validate()) return; 

       createPlayer(player).then(()=>navigate('/')).catch(error=>console.error(error));
    };


    const validate = () => {
        const errs = {};

        if (!player.name.trim()) errs.name = 'Name cannot be blank';

        if (!player.jerseyNo || player.jerseyNo <= 0) errs.jerseyNo = 'Jersey Number must be > 0';

        const validRoles = ['Batsman', 'Bowler', 'Keeper', 'All Rounder'];
        if (!validRoles.includes(player.role)) errs.role = 'Role must be one of: Batsman, Bowler, Keeper, All Rounder';
    
        setErrors(errs);
        return Object.keys(errs).length === 0;
      };
    
    return(
         <div>
            <h2 className="heading">Add player</h2>
            <div className="add_form">
            <form onSubmit={handleSubmit} className="row g-3">
                <div className="col-md-6">
                <label className="form-label">Name</label>
                <input type="text" name="name" value={player.name} onChange={handleChange} className="form-control" required/>
                 {errors.role && <small className="text-danger">{errors.name}</small>}
                </div>

                <div className="col-md-6">
                <label className="form-label">Jersey Number</label>
                <input type="number" name="jerseyNo" value={player.jerseyNo} onChange={handleChange} className="form-control"required/>
                 {errors.role && <small className="text-danger">{errors.jerseyNo}</small>}
                </div>


                <div className="col-md-6">
                <label className="form-label">Role</label>
                <input type="text" name="role" value={player.role} onChange={handleChange} className="form-control"required/>
                  {errors.role && <small className="text-danger">{errors.role}</small>}

                </div>


                <div className="col-md-6">
                <label className="form-label">Total matches</label>
                <input type="number" name="totalMatches" value={player.totalMatches} onChange={handleChange} className="form-control"required/>
                </div>

                <div className="col-md-6">
                <label className="form-label">Team Name</label>
                <input type="text" name="teamName" value={player.teamName} onChange={handleChange} className="form-control"required/>
                </div>


                <div className="col-md-6">
                <label className="form-label">State Name</label>
                <input type="text" name="stateName" value={player.stateName} onChange={handleChange} className="form-control"required/>
                </div>

                <div className="col-12">
                <label className="form-label">Description</label>
                <textarea name="description" value={player.description} onChange={handleChange} className="form-control"required/>
                </div>


                <div className="col-12">
                    <button type="submit" className="btn btn-success">Submit</button>
                    </div>
            </form>
            </div>
        </div>
    )
}

export default AddPlayer;