import { useState, useEffect } from "react";
import { fetchUsers } from "../api";
import ConnectButton from "./Shared/connectButton";

interface Profile {
  id: number;
  name: string;
  description: string;
  image_url: string;
}

const PeopleYouMayKnow = () => {
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [maxProfiles, setMaxProfiles] = useState(5); // Default number

  // Fetch users from backend
  useEffect(() => {
    const loadProfiles = async () => {
      try {
        const response = await fetchUsers();
        setProfiles(response.data.content); // Assuming API returns { status: 200, content: [...] }
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch users.");
        setLoading(false);
      }
    };
    loadProfiles();
  }, []);

  // Adjust max profiles based on screen height
  useEffect(() => {
    const updateMaxProfiles = () => {
      const availableHeight = window.innerHeight * 0.8 - 100; // Adjust for title & button
      const profileHeight = 64; // Approximate height per profile
      setMaxProfiles(Math.floor(availableHeight / profileHeight)); // Dynamically adjust
    };

    updateMaxProfiles();
    window.addEventListener("resize", updateMaxProfiles);
    return () => window.removeEventListener("resize", updateMaxProfiles);
  }, []);

  const displayedProfiles = profiles.slice(0, maxProfiles);

  return (
    <div className="text-white w-full max-w-[20rem] h-[80vh] bg-[#2B273B] rounded-[1rem] shadow-lg p-3 flex flex-col">
      {/* Title Section */}
      <div className="flex-none text-center py-2">
        <p className="text-lg font-medium">People You May Know</p>
      </div>

      {/* Loading/Error Handling */}
      {loading ? (
        <p className="text-center text-sm opacity-70">Loading...</p>
      ) : error ? (
        <p className="text-center text-sm text-red-500">{error}</p>
      ) : (
        <>
          {/* Profiles List */}
          <div className="flex-1 flex flex-col gap-2 overflow-hidden">
            {displayedProfiles.map(({ id, name, description, image_url }) => (
              <div className="flex items-center gap-2 p-1" key={id}>
                <img
                  src={image_url || "example.png"} // Use backend image if available
                  alt={name}
                  className="w-[18%] h-auto rounded-[0.5rem]"
                />
                <div className="flex-1">
                  <span className="text-sm font-semibold block">{name}</span>
                  <span className="text-xs opacity-50 block">
                    {description}
                  </span>
                </div>
                <div className="ml-auto">
                  <ConnectButton />
                </div>
              </div>
            ))}
          </div>

          {/* "See More" Button (Always Visible) */}
          <div className="flex-none w-[65%] max-w-[10rem] h-[2rem] bg-[#9D77FFB5] rounded-md mx-auto flex justify-center items-center cursor-pointer hover:bg-[#8a65e6] transition">
            <span className="text-white font-medium text-xs">See More</span>
          </div>
        </>
      )}
    </div>
  );
};

export default PeopleYouMayKnow;
