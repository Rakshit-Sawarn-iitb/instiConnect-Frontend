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
      <div className="w-[300px] h-[363px] bg-[#372F51] flex flex-col items-center justify-start px-7 rounded-[20px] pt-5">
        <div className="font-lexend font-bold text-white text-2xl mb-4">
          Trending Topics
        </div>

        <div className="grid grid-cols-2 gap-x-6 gap-y-5">
          {topics.map((topic) => (
            <button
              key={topic}
              className={`px-6 h-12 bg-[#372F51] text-gray-400 rounded-full flex items-center justify-center font-medium border-2 border-gray-400 hover:border-orange-500 transition-colors`}
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
