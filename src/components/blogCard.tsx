interface Props {
  title: string;
  text: string;
  date: string;
  likes: number;
}

const BlogCard: React.FC<Props> = ({ title, text, date, likes }) => {
  return (
    <div className="text-[#FFFFFF] p-4 h-auto w-[40rem] rounded-[0.9375rem] bg-[#2B273B] shadow-md">
      <div>
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="opacity-50 text-sm">{date}</p>
      </div>
      <div className="font-thin my-2">{text}</div>
      <div className="flex justify-between mt-4">
        <p className="text-[#FFFFFF66] text-sm">{likes} likes</p>
      </div>
    </div>
  );
};

export default BlogCard;
