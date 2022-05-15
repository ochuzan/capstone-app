// import { useState, useEffect } from "react";
import videos from "./VideoData";
import "./Video.css";

function Video() {
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
          <h3 className="hvr-grow">{vid.title}</h3>
          <iframe
            width="400"
            height="300"
            src={`https://www.youtube.com/embed/${vid.videoId}`}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="video"
			    />
        </div>
    )
  })
  console.log(videos)
    return (
      <div className="Videos">
        <h1>Videos go Here</h1>
        <div className="vids">{fetchedVids}</div>
      </div>
    );
  }
  
  export default Video;