// import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import videos from "./VideoData";
import "./Videos.css";

function Videos() {
  // const [videos, setVideos] = useState([]);
  // const [searchValue, setSearchValue] = useState("ETH Basics")

  // let search = "BTC Basics"

  // useEffect(()=>{
  //   fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=9&q=${search}&type=video&key=${process.env.REACT_APP_API_KEY}`)
  //   .then(res=> res.json())
  //   .then((data)=>{
  //     setVideos(data.items);
  //     console.log(data)
  //   }).catch((err)=>{
  //     console.log(err)
  //   })
  // }, []);

  // const setSearch = (e) =>{
  //   setSearchValue(e)
  // }
  

  let fetchedVids = videos.map((vid, index)=>{
    return(
        <div className="vid" key={index}>
          <Link to={`/videos/${index}`}><h3 className="">{vid.title}</h3></Link>
          <div >
          <iframe
            width="500"
            height="350"
            src={`https://www.youtube.com/embed/${vid.videoId}`}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="video"
			    />
          </div>
          {/* <div><h3 className="hvr-grow">Favorite {vid.is_favorite ? "💰 yes" : "📈 no"}</h3></div>    */}
        </div>
    )
  })
  console.log(videos)
    return (
      <div className="Videos">
        {/* <h1>Videos</h1> */}
        <div className="vids">{fetchedVids}</div>
      </div>
    );
  }
  
  export default Videos;