import axios from "axios";
import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import Youtube from "react-youtube";

function Video() {
  const [videos, setVideos] = useState([]);
  const [searchValue, setSearchValue] = useState("Crypto Basics")

  useEffect(()=>{
    axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=9&q=${searchValue}&type=video&key=${process.env.REACT_APP_API_KEY}`)
    .then((res)=>{
      setVideos(res.data.items);
      console.log(videos)
    }).catch((err)=>{
      console.log(err)
    })
  }, []);


  console.log(videos)

  const setSearch = (e) =>{
    setSearchValue(e)
  }

  let fetchedVids = videos.map((vid, index)=>{
    return(
        <div className="vid" key={index}>
          <Youtube 
            videoId={vid.id.videoId}
            opts={{height: "150", width:"150"}}
          />
        </div>
    )
  })
    return (
      <div className="Videos">
        <h1>Videos go Here</h1>
        <div className="vids">{fetchedVids}</div>
      </div>
    );
  }
  
  export default Video;