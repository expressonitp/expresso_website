import React from 'react';
import Image from 'next/image';

function EventDesc({ event }) {
  // Ensure event is defined before destructuring
  if (!event) {
    return <div>Loading...</div>; // Or handle loading state as appropriate
  }

  const { title, date, venue, description, images } = event;

  return (
    <div className="flex flex-col bg-[#4B4B4B] min-h-screen pt-4 px-4 sm:px-8">
      <button className="self-end h-[29px] w-[109px] mb-4">
        <div className="flex gap-1 flex-row-reverse items-center">
          <div className="text-white text-xl font-antonio pb-1">BACK</div>
          <div className="border-2 rounded-full border-white p-1">
            <Image src="https://res.cloudinary.com/dfvf4xowl/image/upload/v1750748459/Arrow2_epdbhb_e4ldhi.png" width={20} height={20} alt="Arrow" />
          </div>
        </div>
      </button>

      <div className="flex flex-col sm:flex-row items-center sm:items-start mt-4 gap-4">
        <div className="w-full sm:w-auto">
          {/* Use Next.js Image component */}
          <Image src="https://res.cloudinary.com/dfvf4xowl/image/upload/v1750748564/eventPicture_izmy0i_oegrtl.png" width={250} height={300} alt="Event Picture" className="object-cover w-full h-auto" />
        </div>
        <div className="flex flex-col w-full sm:ml-4">
          <div className="font-antonio text-[#FEFEFE] text-3xl sm:text-5xl">{title}</div>
          <div className="text-[#ffffff] text-sm sm:text-lg bg-cover bg-center p-4 mt-2 whitespace-pre-line overflow-y-auto max-h-64" style={{ backgroundImage: `url('/event.png')` }}>
            {description}
          </div>
          <div className="mt-4">
            <span className="text-[#ffffff] text-lg sm:text-3xl">DATE:</span>
            <span className="text-white text-lg sm:text-3xl pl-2">{date}</span>
          </div>
          <div className="mt-2">
            <span className="text-[#FFBC58] text-lg sm:text-3xl">VENUE:</span>
            <span className="text-white text-lg sm:text-3xl pl-2">{venue}</span>
          </div>
        </div>
      </div>

      <div className="font-antonio text-4xl sm:text-7xl pt-6 text-white text-center">
        glimpses
      </div>
      <div className="flex flex-wrap gap-4 mb-2 mt-4 pt-6 pb-6 justify-center">
        {images.map((image, index) => (
          <div key={index} className="bg-[#FFBC58] w-[150px] h-[200px] border-2 rounded-[10px]"></div>
        ))}
      </div>
    </div>
  );
}

export default EventDesc;
