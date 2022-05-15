import { Link, useParams } from "react-router-dom";
import Articles from "./Articles";
import articlesData from "../data/articlesData";
import "./Article.css";
import Video from "./Video";

function Article(){
    const { id } = useParams();
    let links = articlesData.map((article)=>{
        let index = articlesData.indexOf(article)
        return(
            <li><Link to={`/articles/${index}`}><h3>{article.source}</h3></Link></li>
        )
    })
    return(
        <div>
        <h1>{articlesData[id].source}</h1>
        <article id="article">
        <ol>{links}</ol>
        <iframe id="inlineFrame"
          title={articlesData[id].source}
          width="1000"
          height="800"
          src={`${articlesData[id].url}`}>
        </iframe>
        </article>
        {/* <Video /> */}
        </div>
    )
}

export default Article;