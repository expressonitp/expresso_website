"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa6";

const UpcomingEvent = () => {
  const [time, setTime] = useState(new Date());
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const events = [
    {
      id: 1,
      title: "Artopia",
      subtitle: "Heritage Hues",
      datetime: new Date("2025-03-27T18:00:00"),
      link: "https://meet.google.com/zqp-yfjj-zyw",
      whatsappLink: "https://chat.whatsapp.com/KCrJqu6KMlAJwB3cL8ZifV",
      description: `The NIT Patna, under the vibrant organization of Expresso - The Literary & Art Club, is set to host an exhilarating three-day online event, ARTOPIA: A Digital Arts Extravaganza, from March 25th, 2025.

      Attendees will be immersed in the world of graphic design, animation, and interactive media, witnessing live digital art showcases, engaging in hands-on workshops, and exploring breathtaking exhibitions featuring both emerging and renowned artists. Adding to the experience, insightful talks by industry experts will provide valuable perspectives on the ever-evolving landscape of digital art.

      ARTOPIA is open to all, offering a platform for artists, designers, and enthusiasts to create, innovate, and inspire.

      This artistic celebration promises to be a landmark event, made possible by the unwavering dedication and enthusiasm of Expresso - The Literary & Art Club of NIT Patna. 🚀`,
      images: [
        "https://res.cloudinary.com/dfvf4xowl/image/upload/v1750748264/Vidushini_Prasad_svicrl.png",
      ],
      venue: "Online",
    },
  ];

  useEffect(() => {
    setSelectedEvent(events[0]);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (selectedEvent) {
      const imageInterval = setInterval(() => {
        setCurrentImageIndex(
          (prevIndex) => (prevIndex + 1) % selectedEvent.images.length
        );
      }, 5000);
      return () => clearInterval(imageInterval);
    }
  }, [selectedEvent]);

  const getCountdown = (eventDate) => {
    const now = new Date();
    const timeDiff = eventDate - now; // Difference in milliseconds

    if (timeDiff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
    const seconds = Math.floor((timeDiff / 1000) % 60);

    return { days, hours, minutes, seconds };
  };

  const countdown = selectedEvent ? getCountdown(selectedEvent.datetime) : null;

  return (
    <div className="flex flex-col lg:flex-row bg-black px-2">
      <div className="w-full lg:w-1/3 bg-yellow-500 text-white flex flex-col lg:px-4 py-3 rounded-3xl my-4 lg:ml-4">
        <div className="text-black text-4xl text-center xl:text-5xl font-bold leading-10 tracking-wide lg:ml-4 mt-4 pl-2">
          UPCOMING EVENTS
        </div>

        {/* <div className="text-center">
          <select
            className="p-2 text-black rounded-lg w-[348px] ml-4 text-center"
            onChange={(e) => {
              const event = events.find(
                (event) => event.id === Number(e.target.value)
              );
              setSelectedEvent(event);
              setCurrentImageIndex(0);
            }}
            value={selectedEvent?.id || ""}
          >
            {events.map((event) => (
              <option key={event.id} value={event.id}>
                {event.title}
              </option>
            ))}
          </select>
        </div> */}

        <div className="w-full text-white flex flex-col justify-center px-4 py-0 mx-auto rounded-md">
          {selectedEvent && (
            <>
              <div className="text-white text-3xl xl:text-4xl font-bold uppercase text-center">
                {selectedEvent.title}
              </div>
              <div className="text-white text-3xl xl:text-4xl font-bold uppercase text-center mb-4">
                {selectedEvent.subtitle}
              </div>
              <div className="flex justify-center relative">
                <img
                  src={selectedEvent.images[currentImageIndex]}
                  alt={`${selectedEvent.title} image ${currentImageIndex + 1}`}
                  className="w-[372px] h-[500px] rounded-lg border border-black transition-opacity duration-500"
                />
              </div>
            </>
          )}
        </div>
      </div>
      <div className="w-full lg:w-2/3 bg-black text-white flex flex-col justify-center p-8">
        {selectedEvent && countdown && (
          <>
            <div className="flex flex-col lg:flex-row">
              <div className="w-full lg:w-[400px] flex flex-col text-center justify-center items-center">
                <div className="w-[270px] xl:w-[400px]">
                  <div className="opacity-50 text-white text-center text-4xl font-normal font-['Montserrat'] leading-snug tracking-wider mb-6">
                    COUNTDOWN
                  </div>
                  <div className="flex mb-8 justify-center">
                    <div className="flex flex-col items-center">
                      <span className="text-orange-400 text-6xl font-medium text-center">
                        {String(countdown.days).padStart(2, "0")}:
                      </span>
                      <span className="text-white mt-2">Days</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="text-orange-400 text-6xl font-medium">
                        {String(countdown.hours).padStart(2, "0")}:
                      </span>
                      <span className="text-white mt-2">Hours</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="text-orange-400 text-6xl font-medium">
                        {String(countdown.minutes).padStart(2, "0")}:
                      </span>
                      <span className="text-white mt-2">Minutes</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="text-orange-400 text-6xl font-medium">
                        {String(countdown.seconds).padStart(2, "0")}
                      </span>
                      <span className="text-white mt-2">Seconds</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-4 mt-4">
                    <Image
                      src="https://res.cloudinary.com/dfvf4xowl/image/upload/v1750748384/pinLocation_glqqiy_met3st.png"
                      alt="Location Pin"
                      width={30}
                      height={30}
                    />
                    <div className="flex flex-col items-center">
                      <span className="text-orange-400 text-base">VENUE</span>
                      <span className="text-white text-lg font-bold">
                        {selectedEvent.venue}
                      </span>
                    </div>
                    {selectedEvent.link && (
                      <div className="flex flex-col items-start">
                        <a
                          href={selectedEvent.link}
                          className="text-blue-400 text-xl"
                        >
                          <button className="bg-blue-400 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                            Meet Link
                          </button>
                        </a>
                      </div>
                    )}
                  </div>
                  <div className="flex items-center justify-center gap-4 mt-4">
                    <a
                      href={selectedEvent.whatsappLink}
                      className="text-center text-xl flex items-center text-green-600"
                    >
                      <button className="hover:bg-slate-200 hover:text-green-800 text-white px-4 py-2 rounded-lg bg-green-800">
                        <FaWhatsapp size={30} className="inline mr-2" />{" "}
                        Whatsapp Group
                      </button>
                    </a>
                  </div>
                  <div className="w-full px-16 lg:px-2">
                    <div className="w-full mt-5 flex flex-col">
                      <hr className="w-full border-t-4 border-orange-400 my-3" />
                      <hr className="w-full border-t-4 border-orange-400 my-3" />
                      <hr className="w-full border-t-4 border-orange-400 my-3" />
                    </div>
                  </div>
                  <div className="w-64 h-64 mx-auto">
                    <img
                      src="/assets/logoYellow.svg"
                      alt="logo"
                      className="w-full h-full"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 text-justify">
                <div className="text-white text-lg mt-6 p-4">
                  {selectedEvent.description}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default UpcomingEvent;
