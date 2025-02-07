import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./components/register"; // Adjust path as needed
import { profile } from "./assets/dummy";
import BlogCard from "./components/blogCard.tsx";
import PeopleYouMayKnow from "./components/peopleYouMayKnow.tsx";
import ProfilePage from "./components/profilePage";
import ConnectButton from "./components/shared/connectButton";
import Navbar from "./components/Navbar";
import Logo from "./components/Shared/Logo.tsx";
import Startblog from "./components/Startblog.tsx";
import TalkBlog from "./components/Talkblog.tsx";
import Postbutton from "./components/Shared/Postbutton.tsx";
import Trendingtopics from "./components/Trendingtopics.tsx";
import Homepage from "./pages/homepage.tsx";
import Login from "./components/login.tsx";
function App() {
  return (
    <Router>
      <Routes>
        {/* Add route for the landing page */}
        <Route path="/" element={<Homepage />} />
        {/* You can add other routes as needed */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}
export default App;
