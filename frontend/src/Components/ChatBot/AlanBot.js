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
            }
        });
      }, []);
}

export default AlanBot;