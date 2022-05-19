import { useParams, Link } from "react-router-dom"
import newsData from "../data/newsData";


function NewsPage(){
    const { id } = useParams();
    let links = newsData.map((article)=>{
        let index = newsData.indexOf(article);
        return(
            <li><Link to={`/news/${index}`}><h3 className="hvr-grow">{article.name}</h3></Link></li>
        )
    })
    return(
        <div>
            <h1>{newsData[id].name}</h1>
            <article id="article">
                <ul className="vid-container">{links}</ul>
                <div className="vid-container">
                    <iframe id="inlineFrame"
                        title={newsData[id].name}
                        width="750"
                        height="750"
                        src={`${newsData[id].url}`} >
                    </iframe>
                </div>
                <div className="vid-container">
                <h3> Favorite {newsData[id].is_favorite ? "💰 yes" : "📈 no"}</h3>
                </div>
            </article>
        </div>
    )
}

export default NewsPage;