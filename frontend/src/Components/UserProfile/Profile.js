import { Link } from "react-router-dom";

import "./Profile.css";

function Profile({ user }) {
  return (
    <tr>
      <td>
        {user.firstname}
      </td>
      <td>
          {user.lastname}
      </td>
      <td>
        <Link to={`/users/${user.id}`}>✏️</Link>
      </td>
    </tr>
  );
}

export default Profile;
