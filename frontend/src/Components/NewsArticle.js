import { Link } from "react-router-dom";

function NewsArticle({ oneArticle , index }) {

  return (
    <article>
        <section className="article-preview">
          <Link to={`/news/${index}`}><h3 className="hvr-grow">{oneArticle.name}</h3></Link>
            <iframe id="inlineFrameExample"
              title="Inline Frame Example"
              width="520"
              height="350"
              src={oneArticle.url}>
            </iframe>
            <br />
            {/* <h3>Crypto News Favorite?{oneArticle.is_favorite ? "💰 YES " : "📈 NO"}</h3> */}
        </section>
    </article>
  );
}

export default NewsArticle;
