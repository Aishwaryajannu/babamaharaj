import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import phoneIcon from "../assets/phone.png";
import mailIcon from "../assets/mail.png";
import linkedinIcon from "../assets/linkedin.png";
import locationIcon from "../assets/location.png";

const DigitalID = () => {
  const { username } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/profiles/${username}/`)
      .then((res) => setUser(res.data))
      .catch((err) => console.error("Error fetching profile:", err));
  }, [username]);

  if (!user) return <div className="pt-[160px] text-center">Loading...</div>;

  return (
    <div className="bg-#FEFEFE min-h-screen w-full overflow-hidden">
      {/* Navbar */}
      <header className="w-full bg-white shadow-md p-4 flex items-center justify-between fixed top-0 left-0 z-50">
        <div className="flex justify-left w-full">
          <img src="/logo.png" alt="Logo" className="w-25 h-12" />
        </div>
        <div className="flex md:flex">
          <a
            href="https://acespireconsulting.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 hover:bg-blue-600 w-[150px] h-[30px] flex items-center justify-center text-white text-sm font-semibold rounded"
          >
            Explore Our Website
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex justify-center items-center min-h-screen pt-[145px] md:pt-[80px] pb-0 p-4 relative overflow-hidden">
        <div className="bg-white rounded-[40px] shadow-[0_0_20px_rgba(0,0,0,0.1)] flex flex-col md:flex-row items-center text-center md:text-left p-6 md:p-10 relative w-full max-w-[820px] h-[500px] md:h-[360px]">
          {/* Image section */}
          <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 z-10 md:static md:transform-none md:top-auto md:left-auto md:translate-x-0 flex justify-center items-center w-full md:w-1/2 -mt-6 md:mt-0 mb-2 md:mb-0">
            <div className="flex rounded-full border-[17px] md:border-[30px] border-[#1A62A799]">
              <img
                src={user.image || "/default.png"}
                alt={user.full_name}
                className="flex rounded-full w-[200px] h-[200px] md:w-60 md:h-60 object-cover"
              />
            </div>
          </div>

          {/* Info section */}
          <div className="w-full md:w-1/2 px-2 mt-[140px] md:mt-18 md:mt-0 md:pl-[30px]">
            <h2 className="text-[24px] md:text-[25px]  font-extrabold text-gray-900 uppercase">{user.full_name}</h2>
            <p className="text-[16px] md:text-base text-gray-700 mt-2 mb-8 md:mb-6 uppercase">{user.designation}</p>

            <div className="pt-2 flex items-center justify-left md:justify-start gap-2 mb-4 text-gray-800 text-[15px] md:text-[16px] md:text-base">
              <a href={`tel:${user.phone}`} className="flex items-center gap-2 hover:underline">
                <img src={phoneIcon} alt="Phone" className="w-6 h-6" />
                {user.phone}
              </a>
            </div>
            <div className="flex items-center justify-left md:justify-start gap-2 mb-4 text-gray-800 text-[15px] md:text-[16px] md:text-base w-full overflow-hidden">
              <a href={`mailto:${user.email}`} className="flex items-center gap-2 hover:underline w-full overflow-hidden">
                <img src={mailIcon} alt="Email" className="w-6 h-6 shrink-0" />
                <span className="truncate overflow-hidden whitespace-nowrap w-full">{user.email}</span>
              </a>
            </div>
            <div className="flex items-center justify-left md:justify-start gap-2 mb-4 text-gray-800 text-[15px] md:text-[16px] md:text-base">
              <a href={user.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline">
                <img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6.02" />
                @{user.full_name}
              </a>
            </div>
            <div className="flex items-center justify-left md:justify-start gap-2 mb-4 text-gray-800 text-[15px] md:text-[16px] md:text-base w-full">
              <img src={locationIcon} alt="Location" className="w-5 h-5.5 shrink-0" />
              <span className="text-sm md:text-base break-words text-left leading-snug">{user.location}</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DigitalID;
