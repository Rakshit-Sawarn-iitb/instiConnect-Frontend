import { profile } from "./assets/dummy";
import BlogCard from "./components/BlogCard";
import PeopleYouMayKnow from "./components/peopleYouMayKnow";
import ProfilePage from "./components/profilePage";
import ConnectButton from "./components/shared/connectButton";
import Navbar from "./components/Navbar";
import Logo from "./components/Shared/Logo.tsx";
import Startblog from "./components/startblog.tsx";

function App() {
  return (
    <>
    <PeopleYouMayKnow profiles={profile}/>
      <div className="flex flex-col">
        <Navbar />
      </div>
      <div>
        <Startblog />
      </div>
    </>
  );
}

export default App;
