import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function ProfileEdit() {
    let { id } = useParams();
    let navigate = useNavigate();

    const [user, setUser] = useState({
        firstname: "",
        lastname: "",
        username: "",
        password: "",
        contactEmail: "",
        active: true
    });

    const updateUser = (updatedUser) => {
        axios.put(`${API}/users/${id}`, updatedUser)
            .then(()=>{
                    navigate(`/users/${id}`);
                },
                (error) => console.error(error)
            )
            .catch((c)=> console.warn("catch", c));
    };

    const handleTextChange = (event) => {
        setUser({ ...user, [event.target.id]: event.target.value })
    };

    const handleCheckboxChange = () => {
        setUser({ ...user, active: !user.active });
    }

    useEffect(()=>{
        axios.get(`${API}/users/${id}`).then(
            (response) => setUser(response.data),
            (error) => navigate(`/not-found`)
        );
    }, [id, navigate])

    const handleSubmit = (event) => {
        event.preventDefault();
        updateUser(user, id)
    };

    return (
        <div className="Edit">
            <form onSubmit={handleSubmit} >
                <label htmlFor="firstname">First Name:</label>
                <input 
                    id="firstname"
                    value={user.firstname}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="Edit First Name"
                />

                <label htmlFor="lastname">Last Name:</label>
                <input 
                    id="lastname"
                    value={user.lastname}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="Edit Last Name"
                />

                <label htmlFor="username">Username:</label>
                <input 
                    id="username"
                    value={user.username}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="Edit username"
                />

                <label htmlFor="password">Password:</label>
                <input 
                    id="password"
                    value={user.password}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="Edit Password"
                />

                <label htmlFor="contactEmail">Contact Email:</label>
                <input 
                    id="contactEmail"
                    value={user.contactEmail}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="Edit Last Name"
                />

                <label htmlFor="active">Active:</label>
                <input 
                    id="active"
                    type="checkbox"
                    onChange={handleCheckboxChange}
                    checked={user.active}
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