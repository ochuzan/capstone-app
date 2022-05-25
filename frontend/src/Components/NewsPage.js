import { useParams, Link } from "react-router-dom"
import newsData from "../data/newsData";
import { useState } from 'react';


function NewsPage(){
    const [is_favorite, setFavorite] = useState(false)
    const { id } = useParams();
    let links = newsData.map((article)=>{
        let index = newsData.indexOf(article);
        return(
            <li><Link to={`/news/${index}`}><h3 className="hvr-grow">{article.name}</h3></Link></li>
        )
    })

    const handleCheckboxChange = () => {
        setFavorite(!is_favorite);
    }
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
                <form>
                <h3>FAVORITE</h3> {is_favorite ? "💰 YES" : "📈 NO"}
                <span><input type="checkbox" onChange={handleCheckboxChange} checked={newsData[id].is_favorite} /></span>
                </form>
                </div>
            </article>
        </div>
    )
}

export default NewsPage;