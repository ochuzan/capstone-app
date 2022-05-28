import { Link } from "react-router-dom";


function NewsArticle({ resource, id }) {

  return (
    <article>
         <header>
          <Link to={`/users/${resource.users_id}/news/${resource.id}`}><h3 className="hvr-grow">{resource.name}</h3></Link>
        </header>
        <section className="article-preview"> 
            <div>
                {/* Date: {resource.date} - Views: {resource.views} */}

            </div>
            {/* <div>
                <img className="news-image" src={resource.photo} alt="coins for crypto" />
            </div> */}
            <br />
            <iframe id="inlineFrameExample"
              title="Inline Frame Example"
              width="450"
              height="250"
              src={resource.url}>
            </iframe>
            <br />
            <h3>Crypto News Favorite?{resource.is_favorite ? "💰 YES " : "📈 NO"}</h3>
        </section>
    </article>
  );
}

export default NewsArticle;
