import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

// Components
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import Header from "./Components/Header";
import Cryptocurrency from "./Components/Cryptocurrency";
import Education from "./Components/Education";
import Footer from "./Components/Footer";
import PageNotFound from "./Components/PageNotFound";

// Users Components - Admin
import UsersAdmin from "./Components/Admin/UsersAdmin";
import UserEditAdmin from "./Components/Admin/UserEditAdmin";
import UserDetailsAdmin from "./Components/Admin/UserDetailsAdmin";
// Users Components - For User
import UserCreate from "./Components/UserProfile/UserCreate";
import UserLogin from "./Components/UserProfile/UserLogin";
import User from "./Components/UserProfile/User";
import UserEdit from "./Components/UserProfile/UserEdit";

// News Articles and Videos Components
import News from "./Components/News";
import NewsPage from "./Components/NewsPage";
import Articles from "./Components/Articles";
import Article from "./Components/Article";
import Videos from "./Components/Videos"
import Video from "./Components/Video";

// Chatbot 
import AlanBot from "./Components/ChatBot/AlanBot";



function App() {
  const [newsData, setNewsData] = useState([])
  const [educationArticles, setEducationArticles] = useState([])
  const [videosData, setVideosData] = useState([])
  
  const getNewsData = (news) =>{
    setNewsData(news)
  }
  const getEducationData = (data) =>{
    setEducationArticles(data)
  }
  const getVideosData =(videos)=>{
    setVideosData(videos)
  }
  
  return (
    <Router>
      <Header />
      <NavBar/>
      <Routes>
        {/* <Route path="/sandbox" element={<MuiSandbox />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News getNewsData={getNewsData} />} />
        <Route path="/news/:id" element={<NewsPage newsData={newsData}/>} />
        <Route path="/cryptocurrency" element={<Cryptocurrency />} />
        <Route path="/articles" element={<Articles getEducationData={getEducationData}/>} />
        <Route path="/articles/:id" element={<Article educationArticles={educationArticles}/>} />
        <Route path="videos" element={<Videos getVideosData={getVideosData}/>} />
        <Route path="/videos/:id" element={<Video videosData={videosData}/>} />

        <Route path="/users" element={<User />} />
        <Route path="/users/login" element={<UserLogin />} />
        <Route path="/users/new" element={<UserCreate />} />
        <Route path="/users/:id/edit" element={<UserEdit />} />
        <Route path="/*" element={<PageNotFound />} />

        <Route path="/admin" element={<UsersAdmin />} />
        <Route exact path="/admin/:id" element={<UserDetailsAdmin />} />
        <Route path="/admin/:id/edit" element={<UserEditAdmin />} />
      </Routes>
      <Footer />
      <AlanBot />
    </Router>
  );
}

export default App;
