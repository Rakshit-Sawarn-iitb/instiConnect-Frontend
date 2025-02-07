import { useState } from "react";
import Navbar from "../components/Navbar.tsx";
import Startblog from "../components/Startblog.tsx";
import TalkBlog from "../components/Talkblog.tsx";
import BlogCard from "../components/blogCard.tsx";
import Trendingtopics from "../components/Trendingtopics.tsx";
import PeopleYouMayKnow from "../components/peopleYouMayKnow.tsx";

function Homepage() {
  const [showTalkBlog, setShowTalkBlog] = useState(false);

  return (
    <>
      <Navbar />
      <body>
        {" "}
        <div className="h-screen">
          {/* Background Content */}
          <div className={`bg-[#1B1826] flex relative`}>
            {/* Background Overlay for Dimming */}
            {showTalkBlog && (
              <div className="absolute inset-0 bg-black bg-opacity-55 z-10"></div>
            )}
            <PeopleYouMayKnow />
            <div className={`flex-grow p-4 flex flex-col space-y-4 z-0`}>
              <Startblog onStartBlog={() => setShowTalkBlog(true)} />
              <BlogCard
                name="Andrew NG"
                description="something"
                likes={10}
                comments={10}
                text="something"
                date="1 day ago"
              />
            </div>

            {/* Right Section */}
            <div className="w-1/4 pl-1">
              <Trendingtopics />
            </div>
          </div>

          {/* TalkBlog Component */}
          {showTalkBlog && (
            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center z-20">
              <TalkBlog onClose={() => setShowTalkBlog(false)} />
            </div>
          )}
        </div>
      </body>
      <footer></footer>
    </>
  );
}

export default Homepage;
