import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
// import News from "./Components/News";
import PageNotFound from "./Components/PageNotFound";
import Bot from "./Components/Bot"
import Cryptocurrency from "./Components/Cryptocurrency";
import Profile from "./Components/Profile";
import ProfileCreate from "./Components/ProfileCreate";
import ProfileEdit from "./Components/ProfileEdit";

function App() {
  return (
    <Router>
      <NavBar/>
      <Bot />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={null} />
        <Route path="/cryptocurrency" element={<Cryptocurrency />} />
        <Route path="/education" element={<null />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/create-profile" element={<ProfileCreate />} />
        <Route path="/edit-profile" element={<ProfileEdit />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
