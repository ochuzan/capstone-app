import { useEffect } from "react";

function TickerTape() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js'
    script.async = false;
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
              "description": "Cardano",
              "proName": "KRAKEN:ADAUSD"
            },
            {
              "description": "Litecoin",
              "proName": "BITSTAMP:LTCUSD"
            },
            {
              "description": "Tether",
              "proName": "BINANCEUS:USDTUSD"
            },
            {
              "description": "Solana",
              "proName": "FTX:SOLUSD"
            },
            {
              "description": "USD Coin",
              "proName": "BITSTAMP:USDCUSD"
            },
            {
              "description": "BNB",
              "proName": "BINANCE:BNBUSD"
            },
            {
              "description": "Dogecoin",
              "proName": "BITTREX:DOGEUSD"
            },
            {
              "description": "XRP",
              "proName": "BITSTAMP:XRPUSD"
            },
            {
              "description": "Uniswap",
              "proName": "KRAKEN:UNIUSD"
            }
          ],
          "showSymbolLogo": true,
          "colorTheme": "dark",
          "isTransparent": false,
          "displayMode": "adaptive",
          "locale": "en"
        })
    document.getElementById("ticker-tape-container").appendChild(script);
    }, [])
  return(
      <div id="ticker-tape-container">
      </div>
    )
}

export default TickerTape;