import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

/* importing Reviews */
// import Reviews from "./Reviews";

const API = process.env.REACT_APP_API_URL;

function UserDetails() {
  const [user, setUser] = useState({});
  let { id } = useParams();
  let navigate = useNavigate();

  useEffect(()=>{
    // http://localhost:3000/users/1
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
        navigate("/users")
      }).catch((err)=>{
        console.log(err);
      })
  }

  return <article>
  <h3>{true ? <span>⭐️</span> : null} { user.firstname }</h3>
  <div>
    Profile details for {user.firstname} {user.lastname}:
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
      <Link to={`/users`}>
        <button>Back</button>
      </Link>
    </div>
    <div>
      <Link to={`/users/${user.id}/edit`}>
        <button>Edit</button>
      </Link>
    </div>
    <div>
      <button onClick={handleDelete}>Delete</button>
    </div>
  </div>
  {/* Adding Reviews component here */}
  {/* <Reviews /> */}
</article>;
}

export default UserDetails;