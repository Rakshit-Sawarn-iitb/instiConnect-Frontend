function Trendingtopics() {
  return (
    <>
      <div className="w-[300px] h-[363px] bg-[#372F51] flex flex-col items-center justify-start px-7 rounded-[20px] pt-5">
        <div className="font-lexend font-bold text-white text-2xl mb-4">
          Trending Topics
        </div>

        <div className="grid grid-cols-2 gap-x-6 gap-y-5">
          {/* Row 1 */}
          <button className="px-6 h-12 bg-[#372F51] text-gray-400 rounded-full flex items-center justify-center font-medium border-2 border-gray-400">
            DevCom
          </button>
          <button className="px-6 h-12 bg-[#372F51] text-gray-400 rounded-full flex items-center justify-center font-medium border-2 border-gray-400">
            Internships
          </button>

          {/* Row 2 */}
          <button className="px-6 h-12 bg-[#372F51] text-gray-400 rounded-full flex items-center justify-center font-medium border-2 border-gray-400">
            Courses
          </button>
          <button className="px-6 h-12 bg-[#372F51] text-gray-400 rounded-full flex items-center justify-center font-medium border-2 border-gray-400">
            ML
          </button>

          {/* Row 3 */}
          <button className="px-6 h-12 bg-[#372F51] text-gray-400 rounded-full flex items-center justify-center font-medium border-2 border-gray-400">
            Analytics
          </button>
          <button className="px-6 h-12 bg-[#372F51] text-gray-400 rounded-full flex items-center justify-center font-medium border-2 border-gray-400">
            Consulting
          </button>

          {/* Row 4 */}
          <button className="px-6 h-12 bg-[#372F51] text-gray-400 rounded-full flex items-center justify-center font-medium border-2 border-gray-400">
            Finance
          </button>
          <button className="px-6 h-12 bg-[#372F51] text-gray-400 rounded-full flex items-center justify-center font-medium border-2 border-gray-400">
            Placements
          </button>
        </div>
      </div>
    </>
  );
}

export default Trendingtopics;
