import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

import "./Profile.css";

const API = process.env.REACT_APP_API_URL;

function ProfileDetails() {
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
  }, []);

  const handleDelete=()=>{
    axios.delete(API + "/users/" + id)
      .then((res)=>{
        navigate("/")
      }).catch((err)=>{
        console.log(err);
      })
  }

  return (<article>
  <h3>{true ? <span>⭐️</span> : null} { user.active }</h3>
  <h5>
      Hello Profile.js
    <span>
      <a href={user.firstname}>{ user.lastname }</a>
    </span>
    {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ user.username } */}
  </h5>
  <h6>{ user.password }</h6>
  <p>{ user.contact_email }</p>
  <div className="showNavigation">
    <div>
      <Link to={`/`}>
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
</article>);
}

export default ProfileDetails;