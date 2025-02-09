import { useState } from "react";
import Postbutton from "./Shared/Postbutton";
import { postBlog } from "../api";

function TalkBlog({ onClose }) {
  const [blogTitle, setBlogTitle] = useState("");
  const [blogContent, setBlogContent] = useState("");

  const handlePostBlog = async () => {
    if (!blogTitle || !blogContent) {
      alert("Please fill in both the title and content!");
      return;
    }

    try {
      const response = await postBlog({
        title: blogTitle,
        text: blogContent,
      });
      console.log("Blog posted successfully:", response.data);
      alert("Blog posted successfully!");
      onClose();
    } catch (error) {
      console.error("Error posting blog:", error);
      alert("Failed to post the blog.");
    }
  };

  return (
    <div className="flex flex-col items-start relative">
      <div className="w-[800px] h-[600px] bg-[#1B1826] flex flex-col items-start rounded-[13px] px-7 pt-5 relative">
        {/* Close Button */}
        <button
          className="absolute top-3 right-5 text-white text-2xl font-bold focus:outline-none cursor-pointer"
          onClick={onClose}
        >
          X
        </button>

        {/* Title Input */}
        <input
          type="text"
          value={blogTitle}
          onChange={(e) => setBlogTitle(e.target.value)}
          placeholder="Write the title of your blog"
          className="mt-6 w-full bg-[#2B253A] text-white text-xl rounded-md p-4 focus:outline-none focus:ring-2 focus:ring-[#605DEC]"
        />

        {/* Content Input */}
        <textarea
          value={blogContent}
          onChange={(e) => setBlogContent(e.target.value)}
          placeholder="What do you want to talk about?"
          className="mt-4 w-full h-40 bg-[#2B253A] text-white text-lg rounded-md p-4 focus:outline-none focus:ring-2 focus:ring-[#605DEC]"
        />

        {/* Post Button */}
        <div
          className="absolute bottom-5 right-5 cursor-pointer"
          onClick={handlePostBlog}
        >
          <Postbutton />
        </div>
      </div>
    </div>
  );
}

export default TalkBlog;
