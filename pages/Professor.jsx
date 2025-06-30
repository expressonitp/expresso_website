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

  const fullText = `Dear Club Enthusiasts, 

  We are thrilled to extend a warm welcome to you as you explore the vibrant world of the Literary and Art Club at NIT Patna.
   I am honored to introduce myself as the Professor Incharge of this dynamic community of creative minds. Our club is a melting pot of talent, where literature meets art in a fusion of imagination and expression. As you navigate through our website, you'll discover the diverse range of activities, projects, and events that define our creative journey. In the upcoming weeks, we have an exciting lineup of events that beckon your participation and artistic contribution. We believe in fostering an environment where every voice is heard, and every brushstroke tells a unique story. Feel free to explore, engage, and connect with us. Whether you're an aspiring writer, a visual artist, or someone passionate about the intersection of words and images, you've found your creative home. Let's embark on this artistic odyssey together, where inspiration knows no limits and the Literary and Art Club becomes a canvas for your imagination. Thank you for being a part of our creative community. 

    Best regards, 
    Dr. Dharmendra Kumar Dheer 
    Professor Incharge, 
    Expresso- Literary and Art Club
    NIT Patna
  `;

  const fullTextWithLineBreaks = fullText.split('\n').map((line, index) => (
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
            <Image src="https://res.cloudinary.com/dfvf4xowl/image/upload/v1750748648/Letter_q0gqv7_vc7rpe.png" width={44} height={140} alt="msg-image" />
            <span className="font-antonio text-xl md:text-[46px] ">MESSAGE FROM OUR</span>
          </div>

          <div className="text-[#FEB952] text-xl mt-[-50px] md:text-[46px] md:mt-[-10px]">
            PROFESSOR INCHARGE
          </div>
          <div className="font-antonio text-md  text-gray-200 md:text-[30px] md:pt-4 ">
            EXPRESSO LITERARY AND ART CLUB
          </div>
        </div>

        <div className="flex flex-row justify-center items-center relative lg:mt-[-9.5%] lg:ml-[70%] lg:z-10">
          <span>
            <Image
              src="https://res.cloudinary.com/dfvf4xowl/image/upload/v1750748537/dkdheer_fjnzpp_wnsohq.png"
              width={240}
              height={230}
              alt="Professor Image"
            />
          </span>
          <span className="absolute right-0 top-1/2 transform -translate-y-1/2 mr-24 md:mr-64 lg:mr-28">
            <a
              href="https://www.linkedin.com/in/dr-dharmendra-kumar-dheer-65b17b97?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-white w-6 h-6" />
            </a>
          </span>
        </div>

        <div className="text-sm text-white m-4 p-4 overflow-auto lg:mx-36 lg:text-lg lg:backdrop-filter lg:backdrop-blur-md lg:mt-[-15%] lg:z-8 lg:pt-32 lg:rounded-md">
          <p>
            {isMobile && !showFullDescription ? shortText : fullTextWithLineBreaks}
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
