import { Link } from "react-router-dom";

function NewsArticle({ oneArticle }) {
  return (
    <article>
         <header>
            <h2>{oneArticle.name}</h2>
        </header>
        <section className="article-preview"> 
            <div>
                Date: {oneArticle.date} - Views: {oneArticle.views}
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
            <h2>Crypto News Favorite? {oneArticle.is_favorite ? "💰 yes" : "📈 no"}</h2>
        </section>
    </article>
  );
}

export default NewsArticle;
