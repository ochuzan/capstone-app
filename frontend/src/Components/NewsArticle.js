import { useState } from "react";
import { Link } from "react-router-dom";

import "./News.css";

function NewsArticle({ resource }) {
  const [showResults, setShowResults] = useState(true);

  const ToggleiFrame = () => {
    setShowResults(!showResults);
  }

  return (
    <article>
      <header>
        <Link to={`/users/${resource.users_id}/news/${resource.id}`}>
          <h3 className="hvr-grow">{resource.name}</h3>
        </Link>
      </header>
      <section className="article-preview">
        { showResults ?  
        <div>
            <iframe
            id="inlineFrameExample"
            title="Inline Frame Example"
            width="97%"
            height="300px"
            src={resource.url}
          ></iframe>
          <br />
          <input type="submit" value="Hide Article" onClick={ToggleiFrame} />
        </div>
        : 
        <input type="submit" value="Show Article" onClick={ToggleiFrame} />
        }
      </section>
    </article>
  );
}

export default NewsArticle;
