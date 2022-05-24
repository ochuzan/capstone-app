import alanBtn from '@alan-ai/alan-sdk-web';
import { useEffect } from "react";
const { REACT_APP_API_ARTICLE_KEY } = process.env


function AlanBot(){
  
    useEffect(() => {
        alanBtn({
            key: REACT_APP_API_ARTICLE_KEY,
            onCommand: (commandData) => {
              if (commandData.command === 'go:back') {
                // Call the client code that will react to the received command
              }
              if(commandData.command === 'Good Afternoon'){
                alert('this is CryptoTalk, a voice assistant for learning about cryptocurrencies. Start by saying: What can I do with this app?')
              }
            },
        });
      }, []);
}

export default AlanBot;