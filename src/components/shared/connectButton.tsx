interface Props {
  isConnected: boolean;
}

const ConnectButton = () => {
  return (
    <div className="flex h-[1.25rem] w-[5rem] text-[#D6C9F8] justify-center items-center cursor-pointer bg-transparent hover:bg-[#42315e] rounded-md transition-colors">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-5 w-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
        />
      </svg>
      <p className="text-[0.875rem] pl-[0.25rem]">Connect</p>
    </div>
  );
};

export default ConnectButton;
