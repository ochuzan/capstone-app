import {Link} from "react-router-dom";
import "./Articles.css";
import articlesData from "../data/articlesData";

function Articles() {
  console.log(articlesData)
  let fetchedArticles = articlesData.map((article, index)=>{
    return(
      <div className="article" key={index}>
        <Link to={`/articles/${index}`}><h3 className="articles-links">{article.source}</h3></Link>
        <div>
          <iframe id="inlineFrameExample"
          title={article.source}
          width="450"
          height="350"
          src={`${article.url}`}>
        </iframe>
        </div>
        {/* <h3 className="hvr-grow">Favorite {article.is_favorite? "💰 yes" : "📈 no"}</h3> */}
      </div>
    )
});
console.log(fetchedArticles.length)
    return (
      <div className="Articles">
        {/* <h1>Articles</h1> */}
        <div className="articles">
          {fetchedArticles}
        </div>
      </div>
    );
  }
  
  export default Articles;
  