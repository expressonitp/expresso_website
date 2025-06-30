import React, { useState } from "react";
import Image from "next/image";
import LiteratureCard from "../../components/LiteratureCard.jsx";
import LiteratureData from "../../constants/LiteratureData.js";

const LiteratureDesc = () => {
  const [toggle, setToggle] = useState(0); // Start with the first literature piece
  const literatureKeys = Object.keys(LiteratureData);

  // Calculate the number of sets of literature cards to display
  const totalSets = Math.ceil(literatureKeys.length / 5);

  const handleButtonLeft = () => {
    setToggle((prevIndex) => (prevIndex - 1 + totalSets) % totalSets);
  };

  const handleButtonRight = () => {
    setToggle((prevIndex) => (prevIndex + 1) % totalSets);
  };

  // Get the current set of literature cards to display
  const startIndex = toggle * 5;
  const endIndex = startIndex + 5;
  const currentLiteratureSet = literatureKeys.slice(startIndex, endIndex);



 // LARGE SCREENS
 const [toggleL, setToggleL] = useState(0); // Start with the first art piece
//  const [overlayL, setOverlayL] = useState({ isOpen: false, art: null });

 const literatureKeysL = Object.keys(LiteratureData);

 // Calculate the number of sets of art cards to display
 const totalSetsL = Math.ceil(literatureKeysL.length / 8);

 const handleButtonLeftL = () => {
   setToggleL((prevIndex) => (prevIndex - 1 + totalSetsL) % totalSetsL);
 };

 const handleButtonRightL = () => {
   setToggleL((prevIndex) => (prevIndex + 1) % totalSetsL);
 };


 const startIndexL = toggleL * 8;
 const endIndexL = startIndexL + 8;
 const currentLiteratureSetL = literatureKeysL.slice(startIndexL, endIndexL);


  return (
    <div className="flex flex-col min-h-screen bg-cover bg-center" style={{ backgroundImage: "url(https://res.cloudinary.com/dfvf4xowl/image/upload/v1750748484/art-desc-bg_zf9qnp_ccvcpp.png)" }}>

      {/* Displaying cards for smaller screens */}
      <div className="flex flex-col w-full items-center m-2 gap-y-4 md:hidden">
        <div className="flex flex-col gap-y-4">
          {currentLiteratureSet.slice(0, 5).map((key) => (
            <LiteratureCard key={key} literature={LiteratureData[key]} />
          ))}
        </div>
        <div className="flex flex-col w-full justify-center items-center">
          <div className="w-full flex items-center justify-center">
            <div className="mr-4 cursor-pointer">
              <Image onClick={handleButtonLeft} src="https://res.cloudinary.com/dfvf4xowl/image/upload/v1750748601/leftArrow_roirvg_wamtuf.png" width={50} height={50} alt="leftarrow" />
            </div>
            <div className="mr-4 font-Antonio text-5xl ml-4 flex items-center justify-center w-14 h-14 rounded-full bg-black text-white border-[#FDB851] border-4 p-2">
              {toggle + 1}
            </div>
            <div className="ml-4 cursor-pointer">
              <Image onClick={handleButtonRight} src="https://res.cloudinary.com/dfvf4xowl/image/upload/v1750748400/rightArrow_acnskv_itwswu.png" width={50} height={50} alt="rightarrow" />
            </div>
          </div>
        </div>
      </div>

      {/* MEDIUM SCREENS */}
      <div className="hidden md:flex flex-col w-full h-full lg:hidden">
        {/* Displaying cards for medium screens */}
        <div className="flex flex-col w-full gap-y-4 my-4">
          <div className="flex flex-row w-[70%] justify-center items-center px-2">
            {currentLiteratureSet.slice(0, 2).map((key) => (
              <div key={key} className="w-1/2">
                <LiteratureCard literature={LiteratureData[key]} />
              </div>
            ))}
          </div>
          <div className="flex flex-row w-full gap-y-4 justify-center items-center">
            {currentLiteratureSet.slice(2, 5).map((key) => (
              <div key={key} className="w-1/3 p-4">
                <LiteratureCard literature={LiteratureData[key]} />
              </div>
            ))}
          </div>
        </div>

        {/* Displaying toggle button for medium screens */}
        <div id="toggle" className="absolute top-[750px] right-5 h-1/2 w-1/3 mt-10 lg:mt-20">
          <div id="details" className="mt-12 mr-2 flex flex-col justify-center items-center h-full w-full">
            <div className="w-1/2 flex flex-col justify-center items-start text-white">
              <div className="w-full flex items-center justify-center">
                <div className="mr-4 mt-10">
                  <div className="mt-0 flex items-center justify-center w-full">
                    <div className="w-full text-center">
                      <h1 className="text-6xl ml-4 font-Antonio whitespace-nowrap overflow-hidden overflow-ellipsis">LITERATURE</h1>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-10 flex flex-row items-center justify-between w-full">
                <div className="cursor-pointer">
                  <Image onClick={handleButtonLeft} src="https://res.cloudinary.com/dfvf4xowl/image/upload/v1750748601/leftArrow_roirvg_wamtuf.png" width={50} height={50} alt="leftarrow" />
                </div>
                <div className="font-Antonio text-5xl flex items-center justify-center w-14 h-14 rounded-full bg-black text-white border-[#FDB851] border-4 p-2 mx-1">
                  {toggle + 1}
                </div>
                <div className="cursor-pointer">
                  <Image onClick={handleButtonRight} src="https://res.cloudinary.com/dfvf4xowl/image/upload/v1750748409/rightarrow-artdesc_yckiew_tdbwqd.png" width={50} height={50} alt="rightarrow" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>




      {/* LARGER SCREENS */}
      <div className="hidden lg:flex flex-col w-full h-full lg:max-w-[1500px]">
        {/* Displaying cards for larger screens */}
        <div className="flex flex-col w-full lg:w-2/3 h-1/2">
          <div className="flex flex-col lg:flex-row lg:mt-8 p-0">
            <div className="flex flex-row">
              {currentLiteratureSetL.slice(0, 3).map((key) => (
                <div key={key} className="w-full lg:w-1/3 px-2">
                  <LiteratureCard literature={LiteratureData[key]} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Displaying toggle button for larger screens */}
        <div id="toggle" className="absolute top-[780px]] right-5 mt-10 h-1/2 w-1/3 lg:mt-20">
          <div id="details" className="mr-2 flex flex-col justify-center items-center h-full w-full">
            <div className="w-1/2 flex flex-col flex-wrap justify-center items-start text-white">
              <div className="w-full flex items-center justify-center">
                <div className="mr-4 mt-10">
                  <div className="mt-0 flex items-center justify-center w-full">
                    <div className="w-full text-center">
                      <h1 className="text-7xl mb-4 ml-4 font-Antonio whitespace-nowrap overflow-hidden overflow-ellipsis">LITERATURE</h1>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center justify-center w-full">
                <div className="cursor-pointer">
                  <Image onClick={handleButtonLeftL} src="https://res.cloudinary.com/dfvf4xowl/image/upload/v1750748601/leftArrow_roirvg_wamtuf.png" width={50} height={50} alt="leftarrow" />
                </div>
                <div className="font-Antonio text-5xl ml-4 mr-4 flex items-center justify-center w-14 h-14 rounded-full bg-black text-white border-[#FDB851] border-4">
                  {toggleL + 1}
                </div>
                <div className="cursor-pointer">
                  <Image onClick={handleButtonRightL} src="https://res.cloudinary.com/dfvf4xowl/image/upload/v1750748409/rightarrow-artdesc_yckiew_tdbwqd.png" width={50} height={50} alt="rightarrow" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Displaying cards for larger screens */}
        <div className="flex flex-col w-full h-1/2 lg:flex-row lg:justify-between items-center">
          <div className="flex flex-col lg:flex-row lg:flex-wrap justify-between mt-12 mb-8 h-full lg:h-auto lg:overflow-wrap ">
            <div className="lg:flex justify-between p-0">
              {currentLiteratureSetL.slice(3,8).map((key) => (
                <div key={key} className="w-full lg:w-1/5 px-2 justify-between"> {/* Each card takes 1/5 of the row for larger screens */}
                  <LiteratureCard literature={LiteratureData[key]} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiteratureDesc;
