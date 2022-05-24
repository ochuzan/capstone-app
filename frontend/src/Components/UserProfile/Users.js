import axios from "axios";
import { useState, useEffect } from "react";
import User from "./User.js";

const API = process.env.REACT_APP_API_URL;

function Users() {
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
        <h1>Admin page - All Users</h1>
        <table>
          <thead>
            <tr>
              <th>Active</th>
              <th>User</th>
              <th>Username</th>
              <th>Password</th>
              <th>Contact Email</th>
              <th>See this profile</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return <User key={user.id} user={user} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Users;
