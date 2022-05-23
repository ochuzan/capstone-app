import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function Profile() {
    const [ user, setUser] = useState({});

    const API = process.env.REACT_APP_API_URL;
    // const { id } = useParams();
    // let navigate = useNavigate();
    const username = atob(localStorage.getItem('username').replace(/"/g, ""));
    // const username = "Christina_234"
    // console.log(username)

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
            <h2>Profile Page</h2>
            <div>{user.firstname}</div>
            <div>{user.lastname}</div>
            <div>{user.username}</div>
            <div>{user.contact_email}</div>
        </div>

    )
}

export default Profile;