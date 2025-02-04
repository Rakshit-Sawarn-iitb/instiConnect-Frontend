function Postbutton() {
  return (
    <div className="w-[100px] h-[40px] bg-[#372F51] rounded-[8px] flex flex-row items-center justify-center px-3">
      <span className="text-white font-medium mr-2">Post</span>
      {/* SVG Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-5 w-5 text-white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>
    </div>
  );
}

export default Postbutton;
