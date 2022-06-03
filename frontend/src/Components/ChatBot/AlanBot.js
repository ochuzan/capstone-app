import alanBtn from '@alan-ai/alan-sdk-web';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom"
const { REACT_APP_API_BOT_KEY } = process.env

function AlanBot(){
  const navigate = useNavigate();
  
    useEffect(() => {
        alanBtn({
            key: REACT_APP_API_BOT_KEY,
            onCommand: (commandData) => {
              if (commandData.command === 'go:back') {
                // Call the client code that will react to the received command
              }
              if(commandData.command === 'articles'){
                navigate('/articles')
              }
              if(commandData.command === 'home'){
                navigate('/')
              }
              if(commandData.command === 'create-profile'){
                navigate('/users/new')
              }
              if(commandData.command === 'user-login'){
                navigate('/users/login')
              }
              if(commandData.command === 'view-profile'){
                navigate('/users')
              }
              if(commandData.command === 'articles'){
                navigate('/articles')
              }
              if(commandData.command === 'articles/0'){
                navigate('/articles/0')
              }
              if(commandData.command === 'articles/1'){
                navigate('/articles/1')
              }
              if(commandData.command === 'articles/2'){
                navigate('/articles/2')
              }
              if(commandData.command === 'articles/3'){
                navigate('/articles/3')
              }
              if(commandData.command === 'articles/4'){
                navigate('/articles/4')
              }
              if(commandData.command === 'articles/5'){
                navigate('/articles/5')
              }
              if(commandData.command === 'videos'){
                navigate('/videos')
              }
              if(commandData.command === 'videos/0'){
                navigate('/videos/0')
              }
              if(commandData.command === 'videos/1'){
                navigate('/videos/1')
              }
              if(commandData.command === 'videos/2'){
                navigate('/videos/2')
              }
              if(commandData.command === 'videos/3'){
                navigate('/videos/3')
              }
              if(commandData.command === 'videos/4'){
                navigate('/videos/4')
              }
              if(commandData.command === 'videos/5'){
                navigate('/videos/5')
              }
              if(commandData.command === 'news'){
                navigate('/news')
              }
            },
        });
      }, []);
}

export default AlanBot;