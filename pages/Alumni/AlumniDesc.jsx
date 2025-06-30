import React, { useEffect, useState } from "react";
import Image from "next/image";
import AlumniCard from "@/components/AlumniCard";
import alumniData from "@/constants/alumniDetails";

const AlumniPage = () => {
  const [toggle, setToggle] = useState(0); // Start with the first team
  const teamKeys = Object.keys(alumniData);
  const currentTeam = teamKeys[toggle];
  const teamInfo = alumniData[currentTeam];
  const teamMembers = teamInfo.members;
  const [teamName, setTeamName] = useState(teamInfo.teamName);
  const [teamImage, setTeamImage] = useState(teamInfo.teamImage);

  const handleButtonleft = () => {
    setToggle((prevIndex) => (prevIndex - 1 + teamKeys.length) % teamKeys.length);
  };

  const handleButtonRight = () => {
    setToggle((prevIndex) => (prevIndex + 1) % teamKeys.length);
  };

  // Split the teamMembers array into topQuarter and bottomHalf
  const topQuarter = teamMembers.slice(0, 3);
  const bottomHalf = teamMembers.slice(3, 8);

  // Update team information when toggle changes
  useEffect(() => {
    const newTeam = teamKeys[toggle];
    const newTeamInfo = alumniData[newTeam];
    setTeamName(newTeamInfo.teamName);
    setTeamImage(newTeamInfo.teamImage);
  }, [toggle, teamKeys]);

  return (
    <div className="flex flex-col min-h-screen bg-cover bg-center" style={{ backgroundImage: "url(https://res.cloudinary.com/dfvf4xowl/image/upload/v1750748455/alumniBackground_x2sr8y_vsatvf.png)" }}>
      <div className="hidden lg:flex flex-col w-full h-full">
        <div className="flex flex-row w-full lg:w-2/3 h-1/2 overflow-auto lg:overflow-hidden">
          <div className="flex flex-col space-y-10 mt-6 mr-5 ml-16 lg:ml-10 lg:space-y-0 lg:space-x-10 lg:flex-row lg:flex-wrap">
            {topQuarter.map((member) => (
              <AlumniCard key={member.id} member={member} />
            ))}
          </div>
        </div>

        <div id="toggle" className="absolute right-5 h-1/2 w-1/3">
          <div id="details" className=" mr-2 flex flex-col justify-center mb-10 items-center h-full w-full">
            <div className="w-1/2 mb-14 flex flex-col justify-center items-start text-white">
              <div className="w-full flex items-center justify-center">
                <div className="mr-4 mt-10">
                  {/* <div className="flex items-center justify-center w-20 h-20">
                    <Image height={150} src={teamImage} width={130} alt="developerImage" />
                  </div> */}
                  <div className="mt-0 flex items-center justify-center w-full">
                    <div className="w-full text-center">
                      <h1 className="text-xl font-Antonio whitespace-nowrap overflow-hidden overflow-ellipsis">{teamName}</h1>
                    </div>
                  </div>
                </div>
                <div className="mr-4">
                <div className="mt-14 mb-0 flex items-center justify-center w-60 h-40">
                  <Image src='https://res.cloudinary.com/dfvf4xowl/image/upload/v1750748451/ALUMNI_qytbfe_ocvozg.png' width={900} height={600} alt="AlumniImage" />
                </div>
                </div>
              </div>
              <div className=" flex flex-row items-center justify-center w-full">
                <div className="mr-4 cursor-pointer">
                  <Image onClick={handleButtonleft} src="https://res.cloudinary.com/dfvf4xowl/image/upload/v1750748601/leftArrow_roirvg_wamtuf.png" width={50} height={50} alt="leftarrow" />
                </div>
                <div className="mr-4 font-Antonio text-5xl font-bold ml-4 flex items-center justify-center w-14 h-14 rounded-full bg-white text-black">
                  {toggle + 1}
                </div>
                <div className="ml-4 cursor-pointer">
                  <Image onClick={handleButtonRight} src="https://res.cloudinary.com/dfvf4xowl/image/upload/v1750748400/rightArrow_acnskv_itwswu.png" width={50} height={50} alt="rightarrow" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full h-1/2 lg:flex-row lg:justify-between items-center">
          <div className="flex flex-col lg:flex-row lg:space-x-10 justify-between mb-6 pt-10 lg:mr-5 lg:ml-10 h-full lg:h-auto lg:overflow-hidden">
            {bottomHalf.map((member) => (
              <AlumniCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full lg:hidden">
        <div className="flex flex-col space-y-6 mt-6 ml-20 mb-6 mx-4">
          {teamMembers.map((member) => (
            <AlumniCard key={member.id} member={member} />
          ))}
        </div>
        <div id="toggle" className="w-full mb-10">
          <div id="details" className="flex flex-col justify-center items-center w-full">
            <div className="w-full flex flex-col justify-center items-center text-white">
              <div className="w-full flex flex-col items-center">
                {/* <div className="flex items-center justify-center w-20 h-20">
                  <Image height={150} src={teamImage} width={100} alt="developerImage" />
                </div> */}
                <div className="mt-4 flex items-center justify-center w-full">
                  <div className="w-full text-center">
                    <h1 className="text-xl font-Antonio whitespace-nowrap overflow-hidden overflow-ellipsis">{teamName}</h1>
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-center w-40 h-30">
                  <Image src='https://res.cloudinary.com/dfvf4xowl/image/upload/v1750748451/ALUMNI_qytbfe_ocvozg.png' width={600} height={500} alt="teamImage" />
                </div>
              </div>
              <div className="mt-6 flex flex-row items-center justify-center w-full">
                <div className="mr-4 cursor-pointer">
                  <Image onClick={handleButtonleft} src="https://res.cloudinary.com/dfvf4xowl/image/upload/v1750748601/leftArrow_roirvg_wamtuf.png" width={50} height={50} alt="leftarrow" />
                </div>
                <div className="mr-4 font-Antonio text-5xl font-bold ml-4 flex items-center justify-center w-14 h-14 rounded-full bg-white text-black">
                  {toggle + 1}
                </div>
                <div className="ml-4 cursor-pointer">
                  <Image onClick={handleButtonRight} src="https://res.cloudinary.com/dfvf4xowl/image/upload/v1750748400/rightArrow_acnskv_itwswu.png" width={50} height={50} alt="rightarrow" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlumniPage;
