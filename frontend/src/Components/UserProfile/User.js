import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function User() {
    const [ user, setUser] = useState({});

    const API = process.env.REACT_APP_API_URL;

    let id;
    if (localStorage.getItem('id')) {
        id = atob(localStorage.getItem('id').replace(/"/g, ""));
    }
    console.log(id)
    useEffect(() => {
        axios.get(`${API}/users/${id}`)
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