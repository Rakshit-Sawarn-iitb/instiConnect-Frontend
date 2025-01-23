interface Props {
  name: string;
  description: string;
  date: string;
  text: string;
  likes: number;
  comments: number;
}

const BlogCard = ({
  name,
  description,
  date,
  likes,
  comments,
  text,
}: Props) => {
  return (
    <div className="h-[21.3125rem] w-[45.1875rem] rounded-[0.9375rem] bg-[#2B273B] shadow-[0rem_0.3125rem_1.25rem_0.1875rem_rgba(0,0,0,0.25)]">
      <div className="pt-[0.6875rem] pl-[0.625rem] flex">
        <img
          src="example.png"
          alt="example"
          className="h-[3.125rem] w-[3.125rem] rounded-full"
        />
        <div className="text-[#FFFFFF] h-[3.0625rem] ml-[0.6875rem]">
          <span className="text-[0.875rem] leading-[1.09375rem] block">
            {name}
          </span>
          <span className="text-[0.625rem] opacity-50 block">
            {description}
          </span>
          <span className="text-[0.625rem] opacity-30 block">{date}</span>
        </div>
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

export default BlogCard;
