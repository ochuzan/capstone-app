import { useState, useEffect } from "react";
import axios from "axios";
import "./Articles.css"

let key = process.env.REACT_APP_API_ARTICLE_KEY;

function Articles() {
const[articles, setArticles]= useState([]);


let url = 'https://newsapi.org/v2/everything?' +
          'q=Bitcoin&' +
          'from=2022-05-12&' +
          'language=en&'+
          'sortBy=relevancy&' +
          `apiKey=${key}`;

  useEffect(()=>{
    axios.get(url)
    .then((res)=>{
      setArticles(res.data.articles);
    }).catch((err)=>{
      console.log(err)
    })
  }, []);

console.log(articles)

let fetchedArticles = articles.slice(11).map((article, index)=>{
    return(
      <div className="article" key={index}>
        <h4>{article.title}</h4>
        <p>{article.description}</p>
        <p>{article.url}</p>
      </div>
    )
});
console.log(fetchedArticles.length)
    return (
      <div className="Articles">
        <h1>Articles Go Here</h1>
        <div className="articles">
          {fetchedArticles}
        </div>
      </div>
    );
  }
  
  export default Articles;
  