import axios from 'axios';
import {Link} from "react-router-dom";
import { useState , useEffect } from "react";
import "./Articles.css";

const Resources_API = process.env.REACT_APP_API_URL;

function Articles({getEducationData}) {
  const [educationData, setEducation] = useState([])

  useEffect(() => {
    axios
      .get(`${Resources_API}/resources`)
      .then((res) => {
        console.log(res.data)
        const education = res.data.filter((article)=>{
          return article.category === "education-article"
        });
        setEducation(education)
        console.log(educationData)
      })
      .catch((err) => {
        console.log(err);
      });
    }, []);

    getEducationData(educationData)  

  let fetchedArticles = educationData.map((article, index)=>{
    return(
      <div className="article" key={index}>
        <div>
          <Link to={`/articles/${index}`}><h3 className="articles-links">{article.name}</h3></Link>
          <iframe id="inlineFrameExample"
          title={article.name}
          width="525"
          height="350"
          src={`${article.url}`}>
        </iframe>
        </div>
        {/* <h3 className="hvr-grow">Favorite {article.is_favorite? "💰 yes" : "📈 no"}</h3> */}
      </div>
    )
});
console.log(fetchedArticles.length)
    return (
      <div className="Articles">
        <h1>Educational Articles</h1>
        <div className="articles">
          {fetchedArticles}
        </div>
      </div>
    );
  }
  
  export default Articles;
  