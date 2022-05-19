import { useParams, Link } from "react-router-dom"
import newsData from "../data/newsData";


function NewsPage(){
    const { id } = useParams();
    let links = newsData.map((article)=>{
        let index = newsData.indexOf(article);
        return(
            <li><Link to={`/news/${index}`}>{article.name}</Link></li>
        )
    })
    return(
        <div>
            <h1>{newsData[id].name}</h1>
            <article>
                <ul>{links}</ul>
                <div>
                    <iframe
                        title=""
                        width="500"
                        height=""
                        src={`${newsData[id].url}`}
                        >
                    </iframe>
                </div>
                <h3> Favorite {newsData[id].is_favorite ? "💰 yes" : "📈 no"}</h3>
            </article>
        </div>
    )
}

export default NewsPage;