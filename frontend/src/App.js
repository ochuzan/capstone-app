import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import News from "./Components/News";
import Videos from "./Components/Videos";
import PageNotFound from "./Components/PageNotFound";
import Bot from "./Components/Bot"

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
      <Bot />
      <Footer />
    </Router>
  );
}

export default App;
