function FavoriteAdmin({ favorite }) {
    return (
        <div>
            <ul>
                <li>Favorite ID: {favorite.id}</li>
                <li>favorited date: {favorite.favorited_date}</li>
                <li>resources ID: {favorite.resources_id}</li>
                <li>users ID: {favorite.users_id}</li>
            </ul>
        </div>
    );
}
  
export default FavoriteAdmin;