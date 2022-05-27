import { Link } from "react-router-dom";

function UserAdmin({ user }) {
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
        {user.username}
      </td>
      <td>
        {user.password}
      </td>
      <td>
        {user.contact_email}
      </td>
      <td>
        <Link to={`/admin/${user.id}`}>👀</Link>
      </td>
    </tr>
  );
}

export default UserAdmin;
