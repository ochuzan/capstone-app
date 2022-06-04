import { useParams, Link } from "react-router-dom"

function NewsPage({newsData}){
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
                        width="850"
                        height="600"
                        src={`${newsData[id].url}`} >
                    </iframe>
                </div>
                <div className="vid-container">
                <form>
                {/* <h3>FAVORITE</h3> {is_favorite ? "💰 YES" : "📈 NO"} */}
                </form>
                </div>
            </article>
        </div>
  );
}

export default NewsPage;