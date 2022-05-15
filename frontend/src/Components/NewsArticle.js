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
              width="300"
              height="200"
              src="https://www.bitcoin.com/get-started/where-can-i-spend-bitcoin-and-crypto/">
            </iframe>
            <br />
            Crypto News Favorite? {oneArticle.favorite ? "💰 yes" : "📈 no"}
        </section>
    </article>
  );
}

export default NewsArticle;
