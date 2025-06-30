import React, { useEffect, useState } from "react";
import Image from "next/image";
import TeamCard from "@/components/TeamCard";
import teamData from "@/constants/teamDetails";

const TeamDesc = () => {
  const [toggle, setToggle] = useState(0); // Start with the first team
  const teamKeys = Object.keys(teamData);
  const currentTeam = teamKeys[toggle];
  const teamInfo = teamData[currentTeam];
  const teamMembers = teamInfo.members;
  const [teamName, setTeamName] = useState(teamInfo.teamName);
  const [teamImage, setTeamImage] = useState(teamInfo.teamImage);

  const handleButtonLeft = () => {
    setToggle(
      (prevIndex) => (prevIndex - 1 + teamKeys.length) % teamKeys.length
    );
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
    const newTeamInfo = teamData[newTeam];
    setTeamName(newTeamInfo.teamName);
    setTeamImage(newTeamInfo.teamImage);
  }, [toggle, teamKeys]);

  return (
    <div
      className="flex flex-col min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://res.cloudinary.com/dfvf4xowl/image/upload/v1750748507/background_tbltbq_u1i9yb.png)",
      }}
    >
      {/* laptop */}
      <div className="hidden lg:flex flex-col w-full h-full">
        <div className="flex flex-row w-full lg:w-2/3 h-1/2 overflow-auto lg:overflow-hidden">
          <div className="flex flex-wrap justify-around gap-12 mt-6 mr-5 ml-16 lg:ml-10">
            {topQuarter.map((member) => (
              <div
                className="flex-1 min-w-[200px] max-w-[calc(33%-16px)] box-border"
                key={member.id}
              >
                <TeamCard member={member} />
              </div>
            ))}
          </div>
        </div>

        <div id="toggle" className="absolute right-5 h-1/2 w-1/3">
          <div
            id="details"
            className="mr-2 flex flex-col justify-center items-center mb-8 h-full w-full"
          >
            <div className="w-1/2 mb-24 flex flex-col justify-center items-start text-white">
              <div className="w-full flex items-center justify-center">
                <div className="mr-4 mt-10">
                  <div className="flex items-center justify-center w-20 h-20">
                    <Image
                      height={150}
                      src={teamImage}
                      width={130}
                      alt="developerImage"
                    />
                  </div>
                  <div className="mt-0 flex items-center justify-center w-full">
                    <div className="w-full text-center">
                      <h1 className="text-xl font-Antonio whitespace-nowrap overflow-hidden overflow-ellipsis">
                        {teamName}
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="mt-14 ml-5 flex items-center justify-center w-40 h-30">
                  <Image
                    src="https://res.cloudinary.com/dfvf4xowl/image/upload/v1750748415/team_soc27i_rezzgk.png"
                    width={620}
                    height={550}
                    alt="teamImage"
                  />
                </div>
              </div>
              <div className="mt-10 flex flex-row items-center justify-center w-full">
                <div className="mr-4 cursor-pointer">
                  <Image
                    onClick={handleButtonLeft}
                    src="https://res.cloudinary.com/dfvf4xowl/image/upload/v1750748601/leftArrow_roirvg_wamtuf.png"
                    width={50}
                    height={50}
                    alt="leftarrow"
                  />
                </div>
                <div className="mr-4 font-Antonio text-5xl font-bold ml-4 flex items-center justify-center w-14 h-14 rounded-full bg-white text-black">
                  {toggle + 1}
                </div>
                <div className="ml-4 cursor-pointer">
                  <Image
                    onClick={handleButtonRight}
                    src="https://res.cloudinary.com/dfvf4xowl/image/upload/v1750748400/rightArrow_acnskv_itwswu.png"
                    width={50}
                    height={50}
                    alt="rightarrow"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full h-1/2 lg:flex-row lg:justify-between items-center">
          <div className="flex flex-wrap justify-around gap-12 mb-6 pt-10 lg:mr-5 lg:ml-10 h-full lg:h-auto lg:overflow-hidden">
            {bottomHalf.map((member) => (
              <div
                className="flex-1 min-w-[200px] max-w-[calc(20%-16px)] box-border"
                key={member.id}
              >
                <TeamCard member={member} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* mobile or normal */}
      <div className="flex flex-col w-full lg:hidden">
        <div className="flex flex-col space-y-6 mt-6 ml-28 mb-6">
          {teamMembers.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
        <div id="toggle" className="w-full mb-10">
          <div
            id="details"
            className="flex flex-col justify-center items-center w-full"
          >
            <div className="w-full flex flex-col justify-center items-center text-white">
              <div className="w-full flex flex-col items-center">
                <div className="flex items-center justify-center w-20 h-20">
                  <Image
                    height={150}
                    src={teamImage}
                    width={100}
                    alt="developerImage"
                  />
                </div>
                <div className="mt-4 flex items-center justify-center w-full">
                  <div className="w-full text-center">
                    <h1 className="text-xl font-Antonio whitespace-nowrap overflow-hidden overflow-ellipsis">
                      {teamName}
                    </h1>
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-center w-40 h-30">
                  <Image
                    src="https://res.cloudinary.com/dfvf4xowl/image/upload/v1750748415/team_soc27i_rezzgk.png"
                    width={600}
                    height={500}
                    alt="teamImage"
                  />
                </div>
              </div>
              <div className="mt-6 flex flex-row items-center justify-center w-full">
                <div className="mr-4 cursor-pointer">
                  <Image
                    onClick={handleButtonLeft}
                    src="https://res.cloudinary.com/dfvf4xowl/image/upload/v1750748601/leftArrow_roirvg_wamtuf.png"
                    width={50}
                    height={50}
                    alt="leftarrow"
                  />
                </div>
                <div className="mr-4 font-Antonio text-5xl font-bold ml-4 flex items-center justify-center w-14 h-14 rounded-full bg-white text-black">
                  {toggle + 1}
                </div>
                <div className="ml-4 cursor-pointer">
                  <Image
                    onClick={handleButtonRight}
                    src="https://res.cloudinary.com/dfvf4xowl/image/upload/v1750748400/rightArrow_acnskv_itwswu.png"
                    width={50}
                    height={50}
                    alt="rightarrow"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamDesc;
