import Postbutton from "./Shared/Postbutton";

function TalkBlog({ onClose }) {
  return (
    <div className="flex flex-col items-start relative">
      <div className="w-[800px] h-[506px] bg-[#1B1826] flex flex-col items-start rounded-[13px] px-7 pt-5 relative">
        {/* Close Button */}
        <button
          className="absolute top-3 right-5 text-white text-2xl font-bold focus:outline-none cursor-pointer"
          onClick={onClose} // Close button callback
        >
          X
        </button>

        {/* User Info */}
        <div className="flex flex-row items-center">
          <img
            src="./src/assets/img.png"
            alt="Logo"
            className="h-14 w-14 rounded-full"
          />
          <div className="ml-4 flex flex-col">
            <span className="font-lexend text-lg font-medium text-[#D6C9F8]">
              Rakshit Sawarn
            </span>
            <span className="font-lexend text-sm text-[#D6C9F8] mt-[1px]">
              Sophomore, IIT Bombay
            </span>
          </div>
        </div>

        {/* Prompt */}
        <span className="font-lexend text-2xl font-medium text-gray-400 mt-10">
          What do you want to talk about?
        </span>

        {/* Post Button */}
        <div className="absolute bottom-5 right-5 cursor-pointer">
          <Postbutton />
        </div>
      </div>
    </div>
  );
}

export default TalkBlog;
