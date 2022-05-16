import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProfileCreate() {
    const [ userProfile, setUserProfile ] = useState({
        username: "",
        password: "",
        contact_email: "",
        active: false
    });

    
    return (
        <h1>Profile Create Page</h1>
    )
}

export default ProfileCreate;