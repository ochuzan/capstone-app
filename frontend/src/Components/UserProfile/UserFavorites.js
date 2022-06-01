import UserFavorite from "../UserProfile/UserFavorite";
import axios from "axios";
import { useEffect, useState } from "react";
// api call would be /users/:id

const API = process.env.REACT_APP_API_URL;


function UserFavorites(){
    const[favorites, setFavorites] = useState([])

    useEffect(() => {
        axios
          .get(`${API}/users/2/favorites`)
          .then((res) => {
            console.log(res.data)
            setFavorites(res.data)
          })
          .catch((err) => {
            console.log(err);
          });
        }, []);

    console.log(favorites)
    // may need a helper function tp send individual favorie to Userfavorite component

    let userfavorites = favorites.map((favorite)=>{
        return(
            <div>
                <h2> {favorite.resources_name} --- </h2>
                {favorite.resources_url}
            </div>
        )
    })
    return(
        <div>
            <h1> User Favorites Page</h1>
            <div>{userfavorites}</div>
            <div> <UserFavorite /></div>
        </div>
    )
}

export default UserFavorites;