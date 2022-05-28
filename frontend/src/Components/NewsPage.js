import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function NewsPage() {
  const [resources, setResources] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${API}/users/${id}/resources/${id}`)
      .then((res) => {
        console.log(res.data);
        setResources(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h1>{resources.name}</h1>
      <article id="article">
        <ul className="vid-container">
            List of Articles
        </ul>
        <div className="vid-container">
          <iframe
            id="inlineFrame"
            title={resources.name}
            width="750"
            height="750"
            src={`${resources.url}`}
          ></iframe>
        </div>
      </article>
    </div>
  );
}

export default NewsPage;