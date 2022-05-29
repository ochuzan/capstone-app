import axios from "axios";
import { useState, useEffect } from "react";
import "./News.css";
import NewsArticle from "./NewsArticle";
// import newsData from "../data/newsData";

const Resources_API = process.env.REACT_APP_API_URL;

//helper function will grab fetched articles from Resources_API, & send back up to App.js 

function News({getNewsData}) {
  const [newsData, setNews] = useState([]);

  useEffect(() => {
    axios
      .get(`${Resources_API}`)
      .then((res) => {
        console.log(res.data)
        setNews(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  getNewsData(newsData);
  
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
        {newsData.map((oneArticle, index, id) => {
          return (
            <article key={index}>
              <NewsArticle oneArticle={oneArticle} index={index} id={id} />
            </article>
          );
        })}
      </div>
    </div>
  );
}

export default News;
