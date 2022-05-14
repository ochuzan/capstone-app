import SingleTickerBTC from "./Widgets/SingleTickerBTC";
import SymbolOverview from "./Widgets/SymbolOverview";
import "./Home.css";

function Home() {
  return (
    <div id="chartContainer">
      <header>
        <h1>Welcome to App-Name.com</h1>
        <h4>your education portal for crypto</h4>
        <hr />
      </header>
      <div id="chatbot">
        Chatbot
        <div>
          <img
            src="https://hybrid.chat/wp-content/uploads/2019/12/auto-hide-text-box.gif"
            alt="chatbot"
          />
        </div>
      </div>
      <div id="chart-coins-container">
        <div id="chart-widget">
          BTC Chart or Crypto Market widget
          <SingleTickerBTC />
          <SymbolOverview />
          <div id="chart">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Pushkin_population_history.svg/1200px-Pushkin_population_history.svg.png"
              alt="chart"
            />
          </div>
        </div>
        <div id="top-coins">
          <header>Top Coins</header>
          <div id="coins-list">
            <div id="coin">DEBCOIN</div>
            <div id="coin">OLIVERCOIN</div>
            <div id="coin">CHRISTINEUM</div>
            <div id="coin">MILTONERIUM</div>
            <div id="coin">BITCOIN</div>
            <div id="coin">GRRRRCOIN</div>
            <div id="coin">CARDANO</div>
            <div id="coin">RUBENCOIN</div>
            <div id="coin">LITECOIN</div>
            <div id="coin">STELLAR</div>
            <div id="coin">ETHEREUM</div>
            <div id="coin">DOGECOIN</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
