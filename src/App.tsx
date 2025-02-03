import { profile } from "./assets/dummy";
import BlogCard from "./components/BlogCard";
import PeopleYouMayKnow from "./components/peopleYouMayKnow";
import ProfilePage from "./components/profilePage";
import ConnectButton from "./components/shared/connectButton";

function App() {
  return (
    <>
    <PeopleYouMayKnow profiles={profile}/>
    </>
  );
}

export default App;