interface Props {
  about: string;
  name: string;
  description: string;
}

const ProfilePage = () => {
  return (
    <div className="h-contain w-[68.25vw] rounded-[1.25rem] bg-[#2B273B]">
      <img
        src="dummyBG.png"
        alt="dummy"
        className="h-[15.875rem] w-full rounded-t-[1.25rem]"
      />
      <div className="flex text-white">
        <img
          src="example.png"
          alt="example"
          className="-mt-[7.03125rem] h-[14.0625rem] w-[14.0625rem] rounded-full ml-4"
        />
        <div className="pt-3 pl-3">
          <span className="text-[2.5rem] font-semibold leading-[1.09375rem] block">
            Andrew NG
          </span>
          <span className="pt-2 text-[1.25rem] font-light opacity-50 block">
            some description
          </span>
        </div>
        <div className="w-[11.25rem] h-[2.375rem] bg-[#9D77FFB5] rounded-r-full rounded-l-full flex items-center justify-center ml-auto mt-5 mr-8">
          <span className="text-[1.25rem]">Connected</span>
        </div>
      </div>
      <div className="ml-4 mt-10">
        <p className="text-[#D6C9F8] text-[2rem] leading-[2.5rem]">About</p>
        <p className="text-white text-[1.5rem] mt-2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo minus
          voluptates ipsa qui perspiciatis cum? Porro itaque id ducimus adipisci
          impedit exercitationem, totam laborum dolorum temporibus obcaecati
          omnis! Nemo ducimus quidem illum alias tempora vel rerum sunt animi ad
          nam sed eveniet delectus quasi, inventore corrupti! Quae quas ipsam
          magnam.
        </p>
      </div>
      <div className="ml-4 mt-5">
        <p className="text-[#D6C9F8] text-[2rem] leading-[2.5rem]">
          Liked Posts
        </p>
      </div>
    </div>
  );
};

export default ProfilePage;
