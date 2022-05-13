// import { useState, useEffect } from "react";
import YoutubeEmbed from "./YoutubeEmbed";
import videos from "./VideoData"

function Video() {
  // const [videos, setVideos] = useState([]);
  // const [searchValue, setSearchValue] = useState("ETH Basics")

  // let searchValue = "BTC Basics"

  // useEffect(()=>{
  //   fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=9&q=${searchValue}&type=video&key=${process.env.REACT_APP_API_KEY}`)
  //   .then(res=> res.json())
  //   .then((data)=>{
  //     // setVideos(data.items);
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
          <h4>{vid.title}</h4>
          {/* <video controls width="250">
            <source src={`https://www.youtube.com/watch?v=${vid.vidId}`} type="youtube"/>
      
          </video> */}
              <iframe
      width="400"
      height="300"
      src={`https://www.youtube.com/watch?v=${vid.videoId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
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