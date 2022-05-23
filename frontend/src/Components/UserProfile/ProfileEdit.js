import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function ProfileEdit() {
    let { id } = useParams();
    let navigate = useNavigate();

    const [editProfile, setEditProfile] = useState({
        firstname: "",
        lastname: "",
        username: "",
        password: "",
        contactEmail: "",
        active: true
    });

    const updateProfile = (updatedProfile) => {
        axios.put(`${API}/profile/${id}`, updatedProfile)
            .then(()=>{
                    navigate(`/profile/${id}`);
                },
                (error) => console.error(error)
            )
            .catch((c)=> console.warn("catch", c));
    };

    const handleTextChange = (event) => {
        setEditProfile({ ...editProfile, [event.target.id]: event.target.value })
    };

    const handleCheckboxChange = () => {
        setEditProfile({ ...editProfile, active: !editProfile.active });
    }

    useEffect(()=>{
        axios.get(`${API}/profile/${id}`).then(
            (response) => setEditProfile(response.data),
            (error) => navigate(`/not-found`)
        );
    }, [id, navigate])

    const handleSubmit = (event) => {
        event.preventDefault();
        updateProfile(editProfile, id)
    };

    return (
        <div className="Edit">
            Hello ProfileEdit.js
            <form onSubmit={handleSubmit} >
                <label htmlFor="firstname">First Name:</label>
                <input 
                    id="firstname"
                    value={editProfile.firstname}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="Edit First Name"
                />

                <label htmlFor="lastname">Last Name:</label>
                <input 
                    id="lastname"
                    value={editProfile.lastname}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="Edit Last Name"
                />

                <label htmlFor="username">Username:</label>
                <input 
                    id="username"
                    value={editProfile.username}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="Edit username"
                />

                <label htmlFor="password">Password:</label>
                <input 
                    id="password"
                    value={editProfile.password}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="Edit Password"
                />

                <label htmlFor="contactEmail">Contact Email:</label>
                <input 
                    id="contactEmail"
                    value={editProfile.contactEmail}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="Edit Last Name"
                />

                <label htmlFor="active">Active:</label>
                <input 
                    id="active"
                    type="checkbox"
                    onChange={handleCheckboxChange}
                    checked={editProfile.active}

                />

                <br />
                <input type="submit" />

            </form>
            <Link to={`/users/${id}`} >
                <button>Nevermind!</button>
            </Link>
            <h1>Profile Edit Page</h1>
        </div>
    )
}

export default ProfileEdit;