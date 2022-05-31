import axios from 'axios';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Videos.css";

const Resources_API = process.env.REACT_APP_API_URL;

function Videos({getVideosData}) {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios
      .get(`${Resources_API}/resources`)
      .then((res) => {
        console.log(res.data)
        const vids = res.data.filter((vid)=>{
          return vid.type === "video";
        })
        setVideos(vids)
        console.log(videos)
      })
      .catch((err) => {
        console.log(err);
      });
    }, []);

    getVideosData(videos)

  let fetchedVids = videos.map((vid, index)=>{
    return(
        <div className="vid" key={index}>
          <Link to={`/videos/${index}`}><h3 className="">{vid.name}</h3></Link>
          <div >
            <article id="article">
            <iframe
              width="600"
              height="350"
              src={`${vid.url}`}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="video"
            />
            </article>
          </div>
          {/* <div><h3 className="hvr-grow">Favorite {vid.is_favorite ? "💰 yes" : "📈 no"}</h3></div>    */}
        </div>
    )
  })
  console.log(videos)
    return (
      <div className="Videos">
        <h1>Educational Videos</h1>
        <div className="vids">{fetchedVids}</div>
      </div>
    );
  }
  
  export default Videos;