import { useEffect } from "react";

function SymbolOverview() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://s3.tradingview.com/tv.js'
        script.async = false;
        script.innerHTML = new window.TradingView.MediumWidget(
            {
                "symbols": [
                    [
                        "Bitcoin",
                        "COINBASE:BTCUSD|12M"
                    ],
                    [
                        "Ethereum",
                        "COINBASE:ETHUSD|12M"
                    ],
                    [
                        "Cardano",
                        "COINBASE:ADAUSD|12M"
                    ],
                    [
                        "Litecoin",
                        "BITSTAMP:LTCUSD|12M"
                    ],
                    [
                        "Tether",
                        "BINANCEUS:USDTUSD|12M"
                    ],
                    [
                        "Solana",
                        "FTX:SOLUSD|12M"
                    ],
                    [
                        "USD Coin",
                        "CRYPTOCAP:USDC|12M"
                    ],
                    [
                        "BNB",
                        "CURRENCYCOM:BNBUSD|12M"
                    ],
                    [
                        "Dogecoin",
                        "BITTREX:DOGEUSD|12M"
                    ],
                    [
                        "XRP",
                        "BITSTAMP:XRPUSD|12M"
                    ],
                    [
                        "Uniswap",
                        "KRAKEN:UNIUSD|12M"
                    ]
                ],
                "chartOnly": false,
                "width": 1000,
                "height": 500,
                "locale": "en",
                "colorTheme": "dark",
                "gridLineColor": "rgba(240, 243, 250, 0)",
                "fontColor": "#787B86",
                "isTransparent": false,
                "autosize": false,
                "showVolume": false,
                "hideDateRanges": false,
                "scalePosition": "no",
                "scaleMode": "Normal",
                "fontFamily": "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
                "noTimeScale": false,
                "valuesTracking": "1",
                "chartType": "line",
                "container_id": "tradingview_0c358"
            }
        )
        document.getElementById("tradingview_0c358").appendChild(script);
    }, [])
    return (
        <div className="tradingview-widget-container">
            <div id="tradingview_0c358"></div>
            <div className="tradingview-widget-copyright">
            </div>
        </div>
    )
}

export default SymbolOverview;