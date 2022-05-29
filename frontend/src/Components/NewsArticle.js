import { Link } from "react-router-dom";


function NewsArticle({ oneArticle , index }) {

  return (
    <article>
         <header>
          <Link to={`/news/${index}`}><h3 className="hvr-grow">{oneArticle.name}</h3></Link>
        </header>
        <section className="article-preview"> 
            <div>
                {/* Date: {oneArticle.date} - Views: {oneArticle.views} */}

            </div>
            {/* <div>
                <img className="news-image" src={oneArticle.photo} alt="coins for crypto" />
            </div> */}
            <br />
            <iframe id="inlineFrameExample"
              title="Inline Frame Example"
              width="450"
              height="250"
              src={oneArticle.url}>
            </iframe>
            <br />
            {/* <h3>Crypto News Favorite?{oneArticle.is_favorite ? "💰 YES " : "📈 NO"}</h3> */}
        </section>
    </article>
  );
}

export default NewsArticle;
