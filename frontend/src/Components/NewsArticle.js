import { Link } from "react-router-dom";

function NewsArticle({ resource }) {
  return (
    <article>
      <header>
        <Link to={`/users/${resource.users_id}/news/${resource.id}`}>
          <h3 className="hvr-grow">{resource.name}</h3>
        </Link>
      </header>
      <section className="article-preview">
        <br />
        <iframe
          id="inlineFrameExample"
          title="Inline Frame Example"
          width="450"
          height="250"
          src={resource.url}
        ></iframe>
      </section>
    </article>
  );
}

export default NewsArticle;
