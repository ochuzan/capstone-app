import { Link, useParams } from "react-router-dom";
// import Articles from "./Articles";
import articlesData from "../data/articlesData";
import "./Article.css";
// import Video from "./Video";

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
        <ul>{links}</ul>
        <iframe id="inlineFrame"
          title={articlesData[id].source}
          width="1000"
          height="800"
          src={`${articlesData[id].url}`}>
        </iframe>
        <h3> Favorite {articlesData[id].is_favorite ? "💰 yes" : "📈 no"}</h3>
        </article>
        {/* <Video /> */}
        </div>
    )
}

export default Article;