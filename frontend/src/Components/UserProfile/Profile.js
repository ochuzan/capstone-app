import { Link } from "react-router-dom";

function Profile({ user }) {
  return (
    <tr>
      <td>
        {user.active ? (
          <span>⭐️</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}
      </td>
      <td>
        {user.firstname} {user.lastname}
      </td>
      <td>
        <Link to={`/users/${user.id}`}>👀</Link>
      </td>
    </tr>
  );
}

export default Profile;
