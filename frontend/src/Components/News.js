// import axios from "axios";
// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

import "./News.css";
import NewsArticle from "./NewsArticle";
import newsData from "../data/newsData";

// const API = process.env.REACT_APP_API_URL;

function News() {
  // const [newsData, setNews] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get(`${API}/news`)
  //     .then((res) => {
  //       setNews(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

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
        {newsData.map((oneArticle) => {
          return (
            <article>
              <NewsArticle oneArticle={oneArticle} />
            </article>
          );
        })}
      </div>
    </div>
  );
}

export default News;
