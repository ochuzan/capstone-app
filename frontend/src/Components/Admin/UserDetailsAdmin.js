import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

/* importing Resources */
import ResourcesAdmin from "./ResourcesAdmin.js";
import FavoritesAdmin from "./FavoritesAdmin.js";

import './Admin.css';

/* importing MUI */
import { ButtonGroup, Button } from "@mui/material";

const API = process.env.REACT_APP_API_URL;

function UserDetailsAdmin() {
  const [user, setUser] = useState({});
  let { id } = useParams();
  let navigate = useNavigate();

  useEffect(()=>{
    // http://localhost:3000/admin/1
    axios.get(API + "/users/" + id)
      .then((res)=>{
        setUser(res.data);
      }).catch((err)=>{
        console.log(err);
      })
  }, [id]);

  const handleDelete=()=>{
    axios.delete(API + "/users/" + id)
      .then((res)=>{
        navigate("/admin")
      }).catch((err)=>{
        console.log(err);
      })
  }

  return (
  <article id="admin">
    <h1>Admin page - Profile, Resources, and Favorites for {user.username}</h1>
    <div className="admin-buttons">
      <ButtonGroup variant="contained" aria-label="primary button group">
        <Button component={Link} to={`/admin`}>Back to All Users</Button>
        <Button component={Link} to={`/admin/${user.id}/edit`}>Edit User</Button>
      </ButtonGroup>
      <ButtonGroup variant="contained" aria-label="primary button group">
        <Button onClick={handleDelete}>Delete User</Button>
      </ButtonGroup>
    </div>
    <hr />
    <div>
      <h3>Profile Details for { user.username }</h3>
      <div>
        <ul>
          <li>id: {user.id}</li>
          <li>username: {user.username}</li>
          <li>password: {user.password}</li>
          <li>contact_email: {user.contact_email}</li>
          <li>active: {true ? <span>⭐️</span> : null} </li>
        </ul>
      </div>
      <hr />
      <div id="resources-and-favorites">
        <ResourcesAdmin user={user} />
        <FavoritesAdmin user={user} />
      </div>
    </div>
    <hr />
  </article>
  )
}

export default UserDetailsAdmin;