import { Link, useParams } from "react-router-dom";
import articlesData from "../data/articlesData";
import "./Article.css";

function Article(){
    const { id } = useParams();
    let links = articlesData.map((article)=>{
        let index = articlesData.indexOf(article)
        return(
        <div className="link-container">
            <li className="links"><Link to={`/articles/${index}`}><h3 className="">{article.source}</h3></Link></li>
            {/* <span>{articlesData[id].is_favorite ? "💰 favorite" : "📈 not-favorite"}</span> */}
        </div>
        )
    })
    return(
        <div className="video-container">
            <h1 >{articlesData[id].source}</h1>
            <article id="article" className="articles">
            <ul className="">{links}</ul>

            <div className="articles">
            <iframe id="inlineFrame"
            title={articlesData[id].source}
            width="850"
            height="600"
            src={`${articlesData[id].url}`}>
            </iframe>
            </div>
            <div className="articles"> Favorite?</div>
            </article>
        </div>
    )
}

export default Article;