"use client";
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import "../homepage.css";

const HomeSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center mr-4 sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-600">
                Hi there, I&apos;m{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                'Binyam',
                2000,
                'Frontend Developer',
                2000,
                'Backend Developer',
                2000,
                'Full-stack Developer',
                2000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg md-6 lg:text-xl">
            An open source enthusiast that turns ideas into functional and visually stunning realities.
            I build websites focusing on simplicity, accessibility, and responsive design.
          </p>
          <div className="mt-4 place-self-center">
            <button className="start-collab-btn w-full sm:w-fit px-8 py-3 sm:ml-0 rounded-full mr-4 text-white">
              Start Collaboration
            </button>
          </div>
        </div>
        <div className="col-span-5 hidden sm:block place-self-center mt-4 lg:mt-0">
          <div className="Img-container mt-10 rounded bg-[#181818] sm:ml-5 sm:w-[280px] sm:h-[170px] md:w-[340px] md:h-[200px] lg:w-[440px] lg:h-[300px] relative">
            <Image
              src="/images/home-page2.jpg"
              alt="hero image"
              className="home-pageimg absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeSection;
