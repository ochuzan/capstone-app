import "./News.css";
import axios from 'axios';
import { useState , useEffect } from "react";
import NewsArticle from "./NewsArticle";

const Resources_API = process.env.REACT_APP_API_URL;

function News({getNewsData}) {
  const [newsData, setNews] = useState([])

  useEffect(() => {
    axios
      .get(`${Resources_API}/resources`)
      .then((res) => {
        const news = res.data.filter((article)=>{
          return article.category === "news";
        })
        setNews(news)
      })
      .catch((err) => {
        console.log(err);
      });
    }, []);

  getNewsData(newsData)
  
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
