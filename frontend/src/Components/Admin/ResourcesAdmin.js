import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Resource from "./ResourceAdmin";

const API = process.env.REACT_APP_API_URL;

function ResourcesAdmin({ user }) {
  const [resources, setResources] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    axios.get(`${API}/users/${id}/resources`).then((res) => {
      console.log(res.data);
      setResources(res.data);
    });
  }, [id]);

  return (
    <section>
      <h3>Resources for {user.username}</h3>
      {resources.map((resource) => (
        <Resource
            key={resource.id}
            resource={resource}
        />
      ))}
    </section>
  );
}

export default ResourcesAdmin;