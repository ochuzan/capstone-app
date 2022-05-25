import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

/* importing Resources */
import ResourcesAdmin from "./ResourcesAdmin.js";
import FavoritesAdmin from "./FavoritesAdmin.js";

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

  return <article>
  <h3>Profile Details for { user.firstname }</h3>
  <div>
    <ul>
      <li>id: {user.id}</li>
      <li>username: {user.username}</li>
      <li>password: {user.password}</li>
      <li>contact_email: {user.contact_email}</li>
      <li>active: {true ? <span>⭐️</span> : null} </li>
    </ul>
  </div>
  <div className="showNavigation">
    <div>
      <Link to={`/admin`}>
        <button>Back to All Users</button>
      </Link>
    </div>
    <div>
      <Link to={`/admin/${user.id}/edit`}>
        <button>Edit User</button>
      </Link>
    </div>
    <div>
      <button onClick={handleDelete}>Delete User</button>
    </div>
  </div>
  <ResourcesAdmin user={user} />
  <FavoritesAdmin user={user} />
</article>;
}

export default UserDetailsAdmin;