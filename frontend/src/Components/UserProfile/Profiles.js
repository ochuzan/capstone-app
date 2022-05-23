import axios from "axios";
import { useState, useEffect } from "react";
import Profile from "./Profile.js";

const API = process.env.REACT_APP_API_URL;

function Profiles() {
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    axios.get( API + "/users" )
    .then((res)=>{
        setUsers(res.data);
        console.log(res.data)
    }).catch((err)=>{
      console.log(err);
    })
  }, []);

  return (
    <div>
      <section>
        <table>
          <thead>
            <tr>
              <th>Active</th>
              <th>User</th>
              <th>See this profile</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return <Profile key={user.id} user={user} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Profiles;
