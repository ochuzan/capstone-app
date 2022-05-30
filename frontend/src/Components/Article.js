import { Link, useParams } from "react-router-dom";
import "./Article.css";

function Article({educationArticles}){
    const { id } = useParams();
    let links = educationArticles.map((article)=>{
        let index = educationArticles.indexOf(article)
        return(
        <div key={index} className="link-container">
            <li className="links"><Link to={`/articles/${index}`}><h3 className="">{article.name}</h3></Link></li>
            {/* <span>{articlesData[id].is_favorite ? "💰 favorite" : "📈 not-favorite"}</span> */}
        </div>
        )
    })
    return(
        <div className="video-container">
            <h1 >{educationArticles[id].name}</h1>
            <article id="article" className="articles">
            <ul className="">{links}</ul>

            <div className="articles">
            <iframe id="inlineFrame"
            title={educationArticles[id].name}
            width="850"
            height="600"
            src={`${educationArticles[id].url}`}>
            </iframe>
            </div>
            <div className="articles"> Favorite?</div>
            </article>
        </div>
    )
}

export default Article;