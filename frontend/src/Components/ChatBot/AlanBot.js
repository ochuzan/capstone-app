import alanBtn from '@alan-ai/alan-sdk-web';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom"
const { REACT_APP_API_ARTICLE_KEY } = process.env




function AlanBot(){
  const navigate = useNavigate();
  
    useEffect(() => {
        alanBtn({
            key: REACT_APP_API_ARTICLE_KEY,
            onCommand: (commandData) => {
              if (commandData.command === 'go:back') {
                // Call the client code that will react to the received command
              }
              if(commandData.command === 'videos'){
                console.log(" to videos")
                navigate('/videos/1')
              }
              if(commandData.command === 'news'){
                console.log('to news')
                navigate('/news/1')
              }
              if(commandData.command === 'articles'){
                navigate('/articles/1')
              }
              if(commandData.command === 'home'){
                navigate('/')
              }
              if(commandData.command === 'create-profile'){
                navigate('/create-profile')
              }
              if(commandData.command === 'profile-page'){
                navigate('/edit-profile')
              }
              if(commandData.command === 'view-profile'){
                navigate('/profile')
              }
            },
        });
      }, []);
}

export default AlanBot;