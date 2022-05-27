import { Link, useParams } from "react-router-dom";
import articlesData from "../data/articlesData";
import "./Article.css";

function Article(){
    const { id } = useParams();
    let links = articlesData.map((article)=>{
        let index = articlesData.indexOf(article)
        return(
            <li ><Link to={`/articles/${index}`} ><h3 className="hvr-grow">{article.source}</h3></Link></li>
        )
    })
    return(
        <div>
        <h1 >{articlesData[id].source}</h1>
        <article id="article">
        <ul className="vid-container">{links}</ul>
        <div className="vid-container">
        <iframe id="inlineFrame"
          title={articlesData[id].source}
          width="1000"
          height="800"
          src={`${articlesData[id].url}`}>
        </iframe>
        </div>
        <div className="vid-container">
        <h3> Favorite {articlesData[id].is_favorite ? "💰 yes" : "📈 no"}</h3>
        </div>
        </article>
        </div>
    )
}

export default Article;