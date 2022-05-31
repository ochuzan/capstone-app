import UserFavorite from "../UserProfile/UserFavorite"
// api call would be /users/:id


function UserFavorites(){
    return(
        <div>
            <h1> User Favorites Page</h1>
            <div> <UserFavorite /></div>
        </div>
    )
}

export default UserFavorites;