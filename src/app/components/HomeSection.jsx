"use client";
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { FaInstagram, FaLinkedin, FaSquareGithub,  FaXTwitter } from "react-icons/fa6";
import "../homepage.css";

const HomeSection = () => {
  return (
    <section className="home-container mr-2">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-6 place-self-center mt-6 text-center sm:text-left">
          <h1 className="mb-2 text-3xl sm:text-5xl py-2 lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-600">
            Hi, I&apos;m{" "}Binyam
          </h1>
          <h2 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <TypeAnimation
              sequence={[
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
          </h2>
          <p className="text-[#ADB7BE] text-base sm:text-lg md-6 lg:text-xl">
            An open source enthusiast that turns ideas into functional and visually stunning realities.
            I build websites focusing on simplicity, accessibility, and responsive design.
          </p>
          <div className="mt-2 place-self-center">
            <div className="home-sci mt-2 mb-2 ml-5 flex justify-between sm:justify-start sm:ml-0">
              <a href="#"><FaLinkedin size={17} /></a>
              <a href="#"><FaSquareGithub size={17} /></a>
              <a href="#"><FaXTwitter size={17} /></a>
              <a href="#"><FaInstagram size={17} /></a>
            </div>
            <button className="start-collab-btn w-full sm:w-fit px-8 py-3 sm:ml-0 rounded-full mr-4 text-white">
              Start Collaboration
            </button>
          </div>
        </div>
        <div className="col-span-6 hidden sm:block place-self-center mt-4 lg:mt-0">
          <div className="Img-container mt-10 rounded bg-[#181818] sm:ml-5 sm:w-[280px] sm:h-[170px] md:w-[400px] md:h-[250px] lg:w-[540px] lg:h-[400px] lg:mr-2 relative">
            <Image
              src="/images/home-page2.jpg"
              alt="hero image"
              className="home-pageimg absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={550}
              height={550}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeSection;
