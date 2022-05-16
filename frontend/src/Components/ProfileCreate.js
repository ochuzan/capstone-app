import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProfileCreate() {
    let { id } = useParams();
    
    return (
        <h1>Profile Create Page</h1>
    )
}

export default ProfileCreate;