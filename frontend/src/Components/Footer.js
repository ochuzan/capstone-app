import {useEffect} from "react";

function Footer() {
  useEffect(() => {
    const script = document.createElement('script');
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js'
      script.async = true;
      script.innerHTML = JSON.stringify({
          "symbols": [
            {
              "proName": "BITSTAMP:BTCUSD",
              "title": "Bitcoin"
            },
            {
              "proName": "BITSTAMP:ETHUSD",
              "title": "Ethereum"
            },
            {
              "description": "Litecoin",
              "proName": "BITFINEX:LTCUSD"
            },
            {
              "description": "Chainlink",
              "proName": "BINANCE:LINKUSD"
            },
            {
              "description": "Matic",
              "proName": "COINBASE:MATICUSD"
            },
            {
              "description": "Cardano",
              "proName": "KRAKEN:ADAUSD"
            },
            {
              "description": "Monero",
              "proName": "KRAKEN:XMRUSD"
            }
          ],
          "showSymbolLogo": true,
          "colorTheme": "dark",
          "isTransparent": false,
          "displayMode": "adaptive",
          "locale": "en"
        }
      )
      document.getElementById("myContainer").appendChild(script);
    }, [])
  return(
      <div id="myContainer">
          {/* <div className="tradingview-widget-container"> */}
          {/* </div> */}
      </div>
    )
  }

  
  export default Footer;
  
  
    