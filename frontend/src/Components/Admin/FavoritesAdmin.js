import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import FavoriteAdmin from "./FavoriteAdmin";

const API = process.env.REACT_APP_API_URL;

function FavoritesAdmin({ user }) {
  const [favorites, setFavorites] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    axios.get(`${API}/users/${id}/favorites`).then((res) => {
      console.log(res.data);
      setFavorites(res.data);
    });
  }, [id]);

  return (
    <section>
      <h3>Favorites for {user.username}</h3>
      {favorites.map((favorite) => (
        <FavoriteAdmin
            key={favorite.id}
            favorite={favorite}
        />
      ))}
    </section>
  );
}

export default FavoritesAdmin;