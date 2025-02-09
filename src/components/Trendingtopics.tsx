function Trendingtopics() {
  const topics = [
    "DevCom",
    "Internships",
    "Courses",
    "ML",
    "Analytics",
    "Consulting",
    "Finance",
    "Placements",
  ];

  return (
    <>
      <div className="w-[260px] h-[320px] bg-[#372F51] flex flex-col items-center justify-start px-5 rounded-[15px] pt-4">
        <div className="font-lexend font-bold text-white text-xl mb-3">
          Trending Topics
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-4">
          {topics.map((topic) => (
            <button
              key={topic}
              className="px-5 h-10 bg-[#372F51] text-gray-400 rounded-full flex items-center justify-center font-medium border border-gray-400 hover:border-orange-500 transition-colors"
            >
              {topic}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default Trendingtopics;
