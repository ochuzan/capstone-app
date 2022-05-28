import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./News.css";
import NewsArticle from "./NewsArticle";

const API = process.env.REACT_APP_API_URL;

function News() {
  const [newsData, setNews] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${API}/users/${id}/resources`)
      .then((res) => {
        console.log(res.data);
        setNews(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="News">
      <h1>Crypto News</h1>
      <div className="news-dropdown">
        Sort By:
        <select name="topic" id="topic">
          <option value="" selected="selected">
            --Topics--
          </option>
          <option value="crypto">crypto</option>
          <option value="education">education</option>
        </select>
      </div>

      <div className="news-container">
        {newsData.map((resource) => {
          return (
            <article key={resource.id}>
              <NewsArticle resource={resource} key={resource.id} />
            </article>
          );
        })}
      </div>
    </div>
  );
}

export default News;
