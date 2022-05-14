import SingleTickerBTC from "./Widgets/SingleTickerBTC";
import SymbolOverview from "./Widgets/SymbolOverview";

function Home() {
  return(
      <div>
        <SingleTickerBTC />
        <SymbolOverview />
      </div>
  )  
}

  export default Home;