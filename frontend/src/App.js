import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import Header from "./Components/Header"
import Cryptocurrency from "./Components/Cryptocurrency";
import Education from "./Components/Education";
import PageNotFound from "./Components/PageNotFound";
import News from "./Components/News";
import Popchat from "./Components/ChatBot/Popchat";
import Articles from "./Components/Articles";
import Article from "./Components/Article";
import Footer from "./Components/Footer";
import NewsPage from "./Components/NewsPage"
import Videos from "./Components/Videos"
// import Bot from "./Components/ChatBot/Bot";
import Video from "./Components/Video";
import User from "./Components/UserProfile/User";
import UserLogin from "./Components/UserProfile/UserLogin";
import UserCreate from "./Components/UserProfile/UserCreate";
import UserEdit from "./Components/UserProfile/UserEdit";
// import MuiSandbox from "./Components/MuiSandbox";


function App() {
  return (
    <Router>
      <Header />
      <NavBar/>
      <Routes>
        {/* <Route path="/sandbox" element={<MuiSandbox />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/:id" element={<NewsPage />} />
        <Route path="/cryptocurrency" element={<Cryptocurrency />} />
        <Route path="/education" element={<Education/>} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:id" element={<Article />} />
        <Route path="videos" element={<Videos />} />
        <Route path="/videos/:id" element={<Video />} />
        <Route path="/users" element={<User />} />
        <Route path="/users/login" element={<UserLogin />} />
        <Route path="/users/new" element={<UserCreate />} />
        <Route path="/users/:id/edit" element={<UserEdit />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
      <Footer />
      <Popchat />
    </Router>
  );
}

export default App;
