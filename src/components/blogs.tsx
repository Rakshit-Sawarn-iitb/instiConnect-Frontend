const Blogs: React.FC = () => {
  return (
    <div className="relative w-full h-screen flex justify-center items-center overflow-hidden bg-gray-900">
      <div className="relative w-[600px] h-[400px]">
        <div className="absolute bg-yellow-500 blur-[20px] opacity-100 w-[250px] h-[250px] rounded-full animate-rotate-yellow"></div>

        <div className="absolute bg-pink-500 blur-[20px] opacity-100 w-[250px] h-[250px] rounded-full animate-rotate-pink"></div>

        <div className="absolute bg-blue-500 blur-[20px] opacity-100 w-[250px] h-[250px] rounded-full animate-rotate-blue"></div>

        <div className="absolute bg-red-500 blur-[20px] opacity-100 w-[250px] h-[250px] rounded-full animate-rotate-red"></div>
      </div>
    </div>
  );
};

export default Blogs;
