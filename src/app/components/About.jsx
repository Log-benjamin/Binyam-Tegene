import React from 'react';
import { SiRubyonrails, SiMongodb  } from "react-icons/si";
import Modal from './Modal';
import "../about.css";

const About = () => {
  return (
    <section className="my-14" id="about">
      <div className=" py-5">
        <h2 className="text-center font-mono italic text-4xl py-3 sm:text-6xl font-bold mt-10 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-600">
          About Me
        </h2>
        <p className="text-[#ADB7BE] text-lg sm:text-xl text-center my-10">
          After graduating with a degree in Electrical and Computer Engineering, I joined Powerchina, an internation construction firm working on upgrading the electrical network system in Addis Ababa, Ethiopia.
          I worked as a site supervisor, electrical engineer and assistant manager in technical and logistics department over a span of 5 years. By the end of 2022, I decided to pursue my passion for programming.
          I enrolled at Microverse, an online school that offers a worldclass curriculem to learn full-stack web development. My favourite part of programming is the problem solving aspect. I love the feeling of 
          finally figuring out a solution to a problem. My core stack includes React.js, Ruby on Rails, Node.js, PostgreSQL, and MongoDB. I am also familar with other programming language related with data analysis,
          such as Python and R. When I am not coding, i enjoy brushing my mandarine, watching documentaries, and discovering new things. I am always eager to collaborate and learn new technologies.
          Currently I am looking for a position as a software developer.
        </p>
        <div className="flex flex-col sm:flex-row justify-center align-center items-center py-3">
          <button className="resume-btn mb-10 sm:mb-0 w-fit px-8 py-3 sm:ml-0 rounded-full sm:mr-12 text-white">
            <a className="flex" href="https://drive.google.com/file/d/1R7QBc8onpcXdrEkI6jVEuHQQVX5mhDm5/view?usp=sharing">
              <span className="text-lg mr-3">
                Resume
              </span>
              <img width="30" height="30" src="https://img.icons8.com/fluency/48/downloading-updates.png" alt="downloading-updates"/>
            </a>
          </button>
          <Modal />
        </div>
        <h3 className="text-center mx-[5%] my-10 text-2xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-600">
          My Skills
        </h3>
        <div className="mx-[5%] flex flex-col justify-center items-center my-10">
          <h3 className="self-start text-xl sm:text-4xl font-bold mb-5 text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-blue-300">
            Language
          </h3>
          <div className="w-[100%] logos h-15 sm:h-30">
            <div className="logos-slide sm:my-5">
              <span className="slide items-center">
                <img width="75" height="75" src="https://img.icons8.com/color/48/javascript--v1.png" alt="javascript--v1"/>
                <p className="hidden md:block text-xl font-semibold text-yellow-500">JavaScript</p>
              </span>
              <span className="slide items-center">
                <img width="75" height="75" src="https://img.icons8.com/color/48/ruby-programming-language.png" alt="ruby-programming-language"/>
                <p className="hidden md:block text-xl font-semibold text-red-600">Ruby</p>
              </span>
              <span className="slide items-center">
                <img width="75" height="75" src="https://img.icons8.com/color/48/python--v1.png" alt="python--v1"/>
                <p className="hidden md:block text-xl font-semibold text-sky-500">Python</p>
              </span>
              <span className="slide items-center">
                <img width="75" height="75" src="https://img.icons8.com/fluency/48/r-project.png" alt="r-project"/>
                <p className="hidden md:block text-xl font-semibold text-sky-300">R</p>
              </span>
              <span className="slide items-center">
                <img width="75" height="75" src="https://img.icons8.com/arcade/64/sql.png" alt="sql"/>
                <p className="hidden md:block text-xl font-semibold text-orange-500">SQL</p>
              </span>
              <span className="slide items-center">
                <img width="80" height="80" src="https://img.icons8.com/plasticine/100/bash.png" alt="bash"/>
                <p className="hidden md:block text-xl font-semibold text-green-600">Bash Script</p>
              </span>
            </div>
            <div className="logos-slide sm:my-5">
              <span className="slide items-center">
                <img width="75" height="75" src="https://img.icons8.com/color/48/javascript--v1.png" alt="javascript--v1"/>
                <p className="hidden md:block text-xl font-semibold text-yellow-500">JavaScript</p>
              </span>
              <span className="slide items-center">
                <img width="75" height="75" src="https://img.icons8.com/color/48/ruby-programming-language.png" alt="ruby-programming-language"/>
                <p className="hidden md:block text-xl font-semibold text-red-600">Ruby</p>
              </span>
              <span className="slide items-center">
                <img width="75" height="75" src="https://img.icons8.com/color/48/python--v1.png" alt="python--v1"/>
                <p className="hidden md:block text-xl font-semibold text-sky-500">Python</p>
              </span>
              <span className="slide items-center">
                <img width="75" height="75" src="https://img.icons8.com/fluency/48/r-project.png" alt="r-project"/>
                <p className="hidden md:block text-xl font-semibold text-sky-300">R</p>
              </span>
              <span className="slide items-center">
                <img width="75" height="75" src="https://img.icons8.com/arcade/64/sql.png" alt="sql"/>
                <p className="hidden md:block text-xl font-semibold text-orange-500">SQL</p>
              </span>
              <span className="slide items-center">
                <img width="80" height="80" src="https://img.icons8.com/plasticine/100/bash.png" alt="bash"/>
                <p className="hidden md:block text-xl font-semibold text-green-600">Bash Script</p>
              </span>
            </div>
          </div>
          <h3 className="self-end text-xl sm:text-4xl font-bold mt-10 mb-5 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-blue-300">
            Frontend
          </h3>
          <div className="w-[100%] logos h-15 sm:h-30">
            <div className="logos-slide sm:my-5">
              <span className="slide items-center">
                <img width="75" height="75" src="https://img.icons8.com/color/48/html-5--v1.png" alt="html-5--v1"/>
                <p className="hidden md:block text-xl font-semibold text-orange-500">HTML5</p>
              </span>
              <span className="slide items-center">
                <img width="75" height="75" src="https://img.icons8.com/color/48/css3.png" alt="css3"/>
                <p className="hidden md:block text-xl font-semibold text-sky-400">CSS3</p>
              </span>
              <span className="slide items-center">
                <img width="75" height="75" src="https://img.icons8.com/fluency/48/bootstrap.png" alt="bootstrap"/>
                <p className="hidden md:block text-xl font-semibold text-fuchsia-600">Bootstrap</p>
              </span>
              <span className="slide items-center">
                <img width="75" height="75" src="https://img.icons8.com/color/48/tailwindcss.png" alt="tailwindcss"/>
                <p className="hidden md:block text-xl font-semibold text-cyan-400">Tailwindcss</p>
              </span>
              <span className="slide items-center">
                <img width="75" height="75" src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png" alt="external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo"/>            
                <p className="hidden md:block text-xl font-semibold text-sky-500">React.js</p>
              </span>
              <span className="slide items-center">
                <img width="80" height="80" src="https://img.icons8.com/nolan/64/nextjs.png" alt="nextjs"/>
                <p className="hidden md:block text-xl font-semibold text-cyan-50">NEXT.js</p>
              </span>
            </div>
            <div className="logos-slide sm:my-5">
              <span className="slide items-center">
                <img width="75" height="75" src="https://img.icons8.com/color/48/html-5--v1.png" alt="html-5--v1"/>
                <p className="hidden md:block text-xl font-semibold text-orange-500">HTML5</p>
              </span>
              <span className="slide items-center">
                <img width="75" height="75" src="https://img.icons8.com/color/48/css3.png" alt="css3"/>
                <p className="hidden md:block text-xl font-semibold text-sky-400">CSS3</p>
              </span>
              <span className="slide items-center">
                <img width="75" height="75" src="https://img.icons8.com/fluency/48/bootstrap.png" alt="bootstrap"/>
                <p className="hidden md:block text-xl font-semibold text-fuchsia-600">Bootstrap</p>
              </span>
              <span className="slide items-center">
                <img width="75" height="75" src="https://img.icons8.com/color/48/tailwindcss.png" alt="tailwindcss"/>
                <p className="hidden md:block text-xl font-semibold text-cyan-400">Tailwindcss</p>
              </span>
              <span className="slide items-center">
                <img width="75" height="75" src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png" alt="external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo"/>            
                <p className="hidden md:block text-xl font-semibold text-sky-500">React.js</p>
              </span>
              <span className="slide items-center">
                <img width="80" height="80" src="https://img.icons8.com/nolan/64/nextjs.png" alt="nextjs"/>
                <p className="hidden md:block text-xl font-semibold text-cyan-50">NEXT.js</p>
              </span>
            </div>
          </div>
          <h3 className="self-start text-xl sm:text-4xl font-bold mt-10 mb-5 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500">
            Backend
          </h3>
          <div className="w-[100%] logos h-15 sm:h-30 sm:my-2">
            <div className="logos-slide sm:my-5">
              <span className="slide items-center">
                <SiRubyonrails size={75} color="red" />
                <p className="hidden md:block text-xl font-semibold text-rose-700">Rails</p>
              </span>
              <span className="slide items-center">
                <img width="75" height="75" src="https://img.icons8.com/fluency/48/node-js.png" alt="node-js"/>
                <p className="hidden md:block text-xl font-semibold text-green-400">Node.js</p>
              </span>
              <span className="slide items-center">
                <img width="75" height="75" src="https://img.icons8.com/color/48/postgreesql.png" alt="postgreesql"/>
                <p className="hidden md:block text-xl font-semibold text-sky-500">PostgreSQL</p>
              </span>
              <span className="slide items-center">
                <SiMongodb size={75} color="green" />
                <p className="hidden md:block text-xl font-semibold text-emerald-700">MongoDB</p>
              </span>
              <span className="slide items-center">
                <img width="75" height="75" src="https://img.icons8.com/external-tal-revivo-filled-tal-revivo/24/external-django-a-high-level-python-web-framework-that-encourages-rapid-development-logo-filled-tal-revivo.png" alt="external-django-a-high-level-python-web-framework-that-encourages-rapid-development-logo-filled-tal-revivo"/>
                <p className="hidden md:block text-xl font-semibold text-lime-200">django</p>
              </span>
              <span className="slide items-center">
                <img width="75" height="75" src="https://img.icons8.com/offices/30/express-js.png" alt="express-js"/>
                <p className="hidden md:block text-xl font-semibold text-cyan-100">Express.js</p>
              </span>
            </div>
            <div className="logos-slide sm:my-5">
              <span className="slide items-center">
                <SiRubyonrails size={75} color="red" />
                <p className="hidden md:block text-xl font-semibold text-rose-700">Rails</p>
              </span>
              <span className="slide items-center">
                <img width="75" height="75" src="https://img.icons8.com/fluency/48/node-js.png" alt="node-js"/>
                <p className="hidden md:block text-xl font-semibold text-green-400">Node.js</p>
              </span>
              <span className="slide items-center">
                <img width="75" height="75" src="https://img.icons8.com/color/48/postgreesql.png" alt="postgreesql"/>
                <p className="hidden md:block text-xl font-semibold text-sky-500">PostgreSQL</p>
              </span>
              <span className="slide items-center">
                <SiMongodb size={75} color="green" />
                <p className="hidden md:block text-xl font-semibold text-emerald-700">MongoDB</p>
              </span>
              <span className="slide items-center">
                <img width="75" height="75" src="https://img.icons8.com/external-tal-revivo-filled-tal-revivo/24/external-django-a-high-level-python-web-framework-that-encourages-rapid-development-logo-filled-tal-revivo.png" alt="external-django-a-high-level-python-web-framework-that-encourages-rapid-development-logo-filled-tal-revivo"/>
                <p className="hidden md:block text-xl font-semibold text-lime-200">django</p>
              </span>
              <span className="slide items-center">
                <img width="75" height="75" src="https://img.icons8.com/offices/30/express-js.png" alt="express-js"/>
                <p className="hidden md:blocktext-xl font-semibold text-cyan-100">Express.js</p>
              </span>
            </div>
          </div>
          <h3 className="self-end text-xl sm:text-4xl font-bold mt-10 mb-5 text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-rose-300">
            Tools
          </h3>
          <div className="w-[100%] logos h-15 sm:h-30 sm:my-2">
            <div className="logos-slide sm:my-5">
              <span className="slide items-center">
                <img width="75" height="75" src="https://img.icons8.com/color/48/git.png" alt="git"/>
                <p className="hidden md:block text-xl font-semibold text-red-400">Git</p>
              </span>
              <span className="slide items-center">
                <img width="75" height="75" src="https://img.icons8.com/fluency/48/000000/github.png" alt="github"/>
                <p className="hidden md:block text-xl font-semibold text-black">GitHub</p>
              </span>
              <span className="slide items-center">
                <img width="75" height="75" src="https://img.icons8.com/color/48/visual-studio--v2.png" alt="visual-studio--v2"/>
                <p className="hidden md:block text-xl font-semibold text-pink-500">Visual Studio</p>
              </span>
              <span className="slide items-center">
                <img width="75" height="75" src="https://img.icons8.com/color/48/docker.png" alt="docker"/>
                <p className="hidden md:block text-xl font-semibold text-sky-500">Docker</p>
              </span>
              <span className="slide items-center">
                <img width="75" height="75" src="https://img.icons8.com/color/48/slack.png" alt="slack"/>
                <p className="hidden md:block text-xl font-semibold text-rose-400">Slack</p>
              </span>
              <span className="slide items-center">
                <img width="75" height="75"  src="https://img.icons8.com/color/48/linux--v1.png" alt="linux--v1"/>
                <p className="hidden md:block text-xl font-semibold text-yellow-300">Linux</p>
              </span>
            </div>
            <div className="logos-slide sm:my-5">
              <span className="slide items-center">
                <img width="75" height="75" src="https://img.icons8.com/color/48/git.png" alt="git"/>
                <p className="hidden md:block text-xl font-semibold text-red-400">Git</p>
              </span>
              <span className="slide items-center">
                <img width="75" height="75" src="https://img.icons8.com/fluency/48/000000/github.png" alt="github"/>
                <p className="hidden md:block text-xl font-semibold text-black">GitHub</p>
              </span>
              <span className="slide items-center">
                <img width="75" height="75" src="https://img.icons8.com/color/48/visual-studio--v2.png" alt="visual-studio--v2"/>
                <p className="hidden md:block text-xl font-semibold text-pink-500">Visual Studio</p>
              </span>
              <span className="slide items-center">
                <img width="75" height="75" src="https://img.icons8.com/color/48/docker.png" alt="docker"/>
                <p className="hidden md:block text-xl font-semibold text-sky-500">Docker</p>
              </span>
              <span className="slide items-center">
                <img width="75" height="75" src="https://img.icons8.com/color/48/slack.png" alt="slack"/>
                <p className="hidden md:block text-xl font-semibold text-rose-400">Slack</p>
              </span>
              <span className="slide items-center">
                <img width="75" height="75"  src="https://img.icons8.com/color/48/linux--v1.png" alt="linux--v1"/>
                <p className="hidden md:block text-xl font-semibold text-yellow-300">Linux</p>
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;