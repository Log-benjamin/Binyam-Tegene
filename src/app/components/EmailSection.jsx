"use client";
import React, { useState } from "react";
import { FaInstagram, FaLinkedin, FaSquareGithub,  FaXTwitter } from "react-icons/fa6";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);

    if (response.status === 200) {
      setEmailSubmitted(true);
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 mt-12 gap-4"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div>
        <h5 className="text-xl font-bold text-white my-4">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] max-w-md">
          {" "}
          I&apos;m currently looking for new opportunities. Whether you have a question or want to collab,
           my inbox is always open. I will get back to you!
        </p>
        <div className="home-sci mb-2 ml-5 flex justify-between sm:justify-start sm:ml-0">
          <a href="https://www.linkedin.com/in/binyamtegene/"><FaLinkedin size={17} /></a>
          <a href="https://github.com/Log-benjamin/"><FaSquareGithub size={17} /></a>
          <a href="https://twitter.com/@binyam_tegene"><FaXTwitter size={17} /></a>
          <a href="https://www.instagram.com/mengistu.binyam/"><FaInstagram size={17} /></a>
        </div>
      </div>
      <div>
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">
            Email sent successfully!
          </p>
        ) : ( null 
        )}
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#214964] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-3"
                placeholder="benji@gmail.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-white block text-sm mb-2 font-medium"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#214964]   border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-3"
                placeholder="Just saying hi"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="6"
                className="bg-[#214964] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-3"
                placeholder="Let's talk about..."
              />
            </div>

            <button type="submit" className="self-center email-sbt-btn w-full md:w-fit mt-5 px-8 py-3 sm:ml-0 rounded text-white">
              Send Message
            </button>
          </form>
      </div>
    </section>
  );
};

export default EmailSection;