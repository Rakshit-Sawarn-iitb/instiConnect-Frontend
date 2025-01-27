import ConnectButton from "./shared/connectButton";
import { Profile } from "../assets/dummy";

interface Props {
  profiles: Profile[];
}

const PeopleYouMayKnow = ({ profiles }: Props) => {
  return (
    <div className="text-[#FFFFFF] w-[22.75rem] h-[60vh] p-[1.5rem] bg-[#2B273B] rounded-[1.25rem] shadow-[0px_0.25rem_0.9375rem_0.3125rem_#00000040]">
      <div className="flex justify-center items-center">
        <p className="text-[1.5rem] text-center font-medium">
          People You May Know
        </p>
      </div>

      {profiles.map(({ name, description }) => (
        <div className="flex pt-[2.5vh]" key={name}>
          <img
            src="example.png"
            alt="example"
            className="h-[3.125rem] w-[3.125rem] rounded-[0.4375rem]"
          />
          <div className="h-[3.0625rem] ml-[0.6875rem]">
            <span className="text-[1.5rem] leading-[1.09375rem] block">
              {name}
            </span>
            <span className="text-[0.625rem] opacity-50 block">
              {description}
            </span>
          </div>
          <div className="ml-auto">
            <ConnectButton />
          </div>
        </div>
      ))}
      <div className="w-[11.125rem] h-[2.375rem] bg-[#9D77FFB5] mt-[2.0625rem] rounded-[0.625rem] mx-auto flex justify-center items-center">
        <span>See More</span>
      </div>
    </div>
  );
};

export default PeopleYouMayKnow;
