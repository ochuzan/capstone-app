import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Video from "./Components/Video";
import Education from "./Components/Education";
import PageNotFound from "./Components/PageNotFound";
import Bot from "./Components/Bot"
import NewsArticles from "./Components/NewsArticles";

function App() {
  return (
    <Router>
      <NavBar/>
      <Bot />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<NewsArticles />} />
        <Route path="/education" element={<Education/>} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
