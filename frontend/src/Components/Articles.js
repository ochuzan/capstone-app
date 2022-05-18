// import { useState, useEffect } from "react";
// import axios from "axios";
import {Link} from "react-router-dom";
import "./Articles.css";
import articlesData from "../data/articlesData";

let key = process.env.REACT_APP_API_ARTICLE_KEY;

function Articles() {
// const[articles, setArticles]= useState([]);


// let url = 'https://newsapi.org/v2/everything?' +
//           'q=Bitcoin&' +
//           'from=2022-05-12&' +
//           'language=en&'+
//           'sortBy=relevancy&' +
//           `apiKey=${key}`;

//   useEffect(()=>{
//     axios.get(url)
//     .then((res)=>{
//       setArticles(res.data.articles);
//     }).catch((err)=>{
//       console.log(err)
//     })
//   }, []);

console.log(articlesData)

let fetchedArticles = articlesData.map((article, index)=>{
    return(
      <div className="article" key={index}>
        <Link to={`/articles/${index}`}><h3 className="hvr-grow">{article.source}</h3></Link>
        <iframe id="inlineFrameExample"
          title={article.source}
          width="450"
          height="250"
          src={`${article.url}`}>
        </iframe>
        {/* <h3>{article.title}</h3>
        <p>{article.description}</p>
        <p>{article.url}</p> */}
      </div>
    )
});
console.log(fetchedArticles.length)
    return (
      <div className="Articles">
        {/* <h1>Articles Go Here</h1> */}
        <div className="articles">
          {fetchedArticles}
        </div>
      </div>
    );
  }
  
  export default Articles;
  