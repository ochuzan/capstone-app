import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function User() {
    const [ user, setUser] = useState({});

    const API = process.env.REACT_APP_API_URL;
    // const { id } = useParams();
    // let navigate = useNavigate();
    // const username = 
    // const usernameStr = atob(localStorage.getItem('username').replace(/"/g, ""));
    // const username = "Christina_234"
    // console.log(username)

    let username;
    if (localStorage.getItem('username')) {
        username = atob(localStorage.getItem('username').replace(/"/g, ""));
    }

    useEffect(() => {
        axios.get(`${API}/users/${username}`)
            .then((res) => {
                setUser(res.data);
                console.log(res.data)
            }).catch((error) => {
                console.log(error);
            })
    }, [])

    return (
        <div>
            <h2>User Page</h2>
            <div>{user.firstname}</div>
            <div>{user.lastname}</div>
            <div>{user.username}</div>
            <div>{user.contact_email}</div>
        </div>

    )
}

export default User;