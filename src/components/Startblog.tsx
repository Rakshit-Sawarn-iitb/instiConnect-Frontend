function Startblog() {
  return (
    <>
      <div className="w-[723px] h-[107px] bg-[#1B1826] flex flex-col items-start justify-center px-7">
        <span className="font-lexend text-2xl font-medium leading-10  text-[#D6C9F8] decoration-skip-ink mb-0">
          <p>Hi Rakshit! What's on your mind today?</p>
        </span>
        <div className="flex mt-3 flex-row items-center">
          <img
            src="./src/assets/img.png"
            alt="Logo"
            className="h-10 w-10 rounded-[20px] self-start"
          />
          <div className="w-[630px] h-[35px]  font-lexend bg-[#372F51] text-gray-400 cursor-pointer rounded-[15px] ml-4 flex items-center justify-left pl-3">
            Start a blog right here...
          </div>
        </div>
      </div>
    </>
  );
}

export default Startblog;
