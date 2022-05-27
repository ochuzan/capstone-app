import axios from "axios";
import { useState, useEffect } from "react";
import "./News.css";
import NewsArticle from "./NewsArticle";
// import newsData from "../data/newsData";

const API = process.env.REACT_APP_API_URL;

function News() {
  const [newsData, setNews] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}`)
      .then((res) => {
        console.log(res.data)
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
          <option value="" selected="selected">--Topics--</option>
          <option value="crypto">crypto</option>
          <option value="education">education</option>
        </select>
      </div>

      <div className="news-container">
        {newsData.map((oneArticle, index) => {
          return (
            <article key={index}>
              <NewsArticle oneArticle={oneArticle} index={index} />
            </article>
          );
        })}
      </div>
    </div>
  );
}

export default News;
