import styles from "./Professor.module.css";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import React, { useState, useEffect } from "react";

function Professor() {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [parentHeight, setParentHeight] = useState(500); // Initial height

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 500);
    };

    handleResize(); // Check initial window size
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Update the height of Parent3 when showFullDescription changes
    if (showFullDescription) {
      setParentHeight(700); // Auto height when full description is shown
    } else {
      setParentHeight(380); // Default height when full description is not shown
    }
  }, [showFullDescription]);

  const handleReadMore = () => {
    setShowFullDescription(true);
  };

  const handleReadLess = () => {
    setShowFullDescription(false);
  };

  const fullText = `Dear Members and Aspirants,

  It is with great enthusiasm that I welcome you all to Expresso-The Literary and Art Club NIT Patna! \n As the President of this wonderful community, I am proud to represent a group of individuals bound by their passion for creativity and self-expression.
  Our club stands as a platform for dreamers, thinkers, and creators—a space where words come alive and art speaks volumes. In the weeks ahead, we have a host of exciting events and activities lined up that are designed to inspire, challenge, and bring out the best in every member.
  Here, we celebrate individuality and collaboration alike, believing that each idea contributes to the vibrant tapestry of our club. Whether you’re a poet, an artist, a storyteller, or simply someone who appreciates the beauty of literature and art, this is your space to shine.
  Let us work together to turn this club into a thriving community of ideas and imagination. Thank you for joining us on this creative journey. Your energy and enthusiasm are what make this club truly special.

  With Best Wishes,
  Aniket Kumar
  President
  Expresso-The Literary and Art Club, NIT Patna
  `;

  const fullTextWithLineBreaks = fullText.split("\n").map((line, index) => (
    <React.Fragment key={index}>
      {line.trim()}
      <br />
    </React.Fragment>
  ));

  const shortText = fullText.split(" ").slice(0, 120).join(" ") + "...";

  return (
    <>
      <div className="bg-black p-0 m-0 min-h-[400px] flex flex-col gap-y-4 justify-center w-full md:bg-[url('https://res.cloudinary.com/dfvf4xowl/image/upload/v1750748397/profbg_vptvyp_h6jqmk.png')] md:bg-cover">
        <div className="flex flex-col items-center lg:justify-start lg:items-start lg:ml-40 lg:z-10">
          <div className="text-white flex flex-row items-center space-x-2">
            <Image
              src="https://res.cloudinary.com/dfvf4xowl/image/upload/v1750748648/Letter_q0gqv7_vc7rpe.png"
              width={44}
              height={140}
              alt="msg-image"
            />
            <span className="font-antonio text-xl md:text-[46px] ">
              MESSAGE FROM OUR
            </span>
          </div>

          <div className="text-[#FEB952] text-xl mt-[-50px] md:text-[46px] md:mt-[-10px]">
            PRESIDENT
          </div>
          <div className="font-antonio text-md  text-gray-200 md:text-[30px] md:pt-4 ">
            EXPRESSO LITERARY AND ART CLUB
          </div>
        </div>

        <div className="flex flex-row justify-center items-center relative lg:mt-[-9.5%] lg:ml-[70%] lg:z-10">
          <span>
            <Image
              src="https://res.cloudinary.com/dfvf4xowl/image/upload/v1750748457/Aniket_Kumar_pbbbfq_xuddvi.png"
              width={240}
              height={230}
              alt="Professor Image"
            />
          </span>
          <span className="absolute right-0 top-1/2 transform -translate-y-1/2 mr-24 md:mr-64 lg:mr-28">
            <a
              href="https://www.linkedin.com/in/aniket-kumar-99b591234"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-white w-6 h-6" />
            </a>
          </span>
        </div>

        <div className="text-sm text-white m-4 p-4 overflow-auto lg:mx-36 lg:text-lg lg:backdrop-filter lg:backdrop-blur-md lg:mt-[-15%] lg:z-8 lg:pt-32 lg:rounded-md">
          <p>
            {isMobile && !showFullDescription
              ? shortText
              : fullTextWithLineBreaks}
          </p>
          {isMobile &&
            (showFullDescription ? (
              <span
                className={`read-less cursor-pointer underline ${styles.readLess}`}
                onClick={handleReadLess}
              >
                Read Less
              </span>
            ) : (
              <span
                className={`read-more cursor-pointer underline ${styles.readMore}`}
                onClick={handleReadMore}
              >
                Read More
              </span>
            ))}
        </div>
      </div>
    </>
  );
}

export default Professor;
