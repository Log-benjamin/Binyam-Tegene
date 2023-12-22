import React from 'react';
import ProjectCard from './ProjectCard';
import "../projectpage.css";
import { TiHtml5 } from "react-icons/ti";
import { IoLogoCss3, IoLogoReact } from "react-icons/io5";
import { TbBrandJavascript, TbApi } from "react-icons/tb";
import { SiWebpack, SiJest, SiBabel, SiEslint, SiStylelint, SiRubyonrails, SiPostgresql, SiRubocop, SiBootstrap, SiRedux } from "react-icons/si";

const projectsData = [
  {
    id: 1,
    title: "IEEE-ICASSP-Website",
    description: "ICASSP is a website that gives detailed information about the 2023 Institute of Electrical and Electronics Engineers Conference. It includes information about events on the program, Registration options, keynote speakers, Venues, Accommodations, and Contact information.",
    image: "/images/projects/1.JPG",
    gitUrl: "https://github.com/Log-benjamin/IEEE-ICASSP-Conference-Website",
    previewUrl: "https://log-benjamin.github.io/IEEE-ICASSP-Conference-Website/",
    techStack: [[<TiHtml5 key={1} size={30} />,"https://html.com/html5/"], [<IoLogoCss3 key={2} size={25} />,"https://www.w3.org/Style/CSS/Overview.en.html"], [<TbBrandJavascript key={3} size={30} />,"https://www.javascript.com/"]]
  },
  {
    id: 2,
    title: "Xplore",
    description: "Xplore is a web app built based on country rest api. It provides information about countries via a RESTful API. It collects information from the REST countries site, and provide it in a simple organized way as a web application so that it can be applicable for different organizations.",
    image: "/images/projects/2.JPG",
    gitUrl: "https://github.com/Log-benjamin/Xplore",
    previewUrl: "https://log-benjamin.github.io/Xplore/dist/",
    techStack: [[<TbBrandJavascript key={1} size={30} />,"https://www.javascript.com/"], [<SiWebpack key={2} size={30} />,"https://webpack.js.org/"],[<SiJest key={3} size={25} />,"https://jestjs.io/"], [<TbApi key={4} size={25} />,"https://restfulapi.net/"]]
  },
  {
    id: 3,
    title: "Math Magicians",
    description: "This is a fully responsive calculator built in React,  Coupled with interesting, randomly generated Mathematics quotes.",
    image: "/images/projects/3.JPG",
    gitUrl: "https://github.com/Log-benjamin/Math-Magicians",
    previewUrl: "https://math-magicians-c1og.onrender.com/",
    techStack: [[<IoLogoReact key={1} size={33} />, "https://react.dev/"], [<SiBabel key={2} size={27} />, "https://babeljs.io/"], [<SiStylelint key={3} size={27} />, "https://stylelint.io/"], [<SiEslint key={4} size={30} />, "https://eslint.org/"]]
  },
  {
    id: 4,
    title: "Space-Travelers Hub",
    description: "This is an app for Space X that provides commercial and scientific space travel services. Built with React and Redux, The app allows users to reserve rockets and join selected space missions.",
    image: "/images/projects/4.JPG",
    gitUrl: "https://github.com/Log-benjamin/space-travelers",
    previewUrl: "https://space-travelers-sigma.vercel.app/",
    techStack: [[<IoLogoReact key={1} size={33} />, "https://react.dev/"], [<SiRedux key={2} size={33} />, "https://redux.js.org/"], [<TbApi key={4} size={25} />,"https://restfulapi.net/"], [<SiBootstrap key={4} size={33} />, "https://getbootstrap.com/" ]]
  },
  {
    id: 5,
    title: "Book Store",
    description: "A simple webapp built with react that provides information about different generes of books, progress report on the book with comment and edit features.",
    image: "/images/projects/5.JPG",
    gitUrl: "https://github.com/Log-benjamin/React-Bookstore",
    previewUrl: "https://final-bookstore.onrender.com/",
    techStack: [[<IoLogoReact key={1} size={33} />, "https://react.dev/"], [<SiBabel key={2} size={27} />, "https://babeljs.io/"], [<SiStylelint key={3} size={27} />, "https://stylelint.io/"], [<SiEslint key={4} size={30} />, "https://eslint.org/"]]
  },
  {
    id: 6,
    title: "Wheels-4-Rent",
    description: "This is an api tailored fullstack web application for vehicle rental services that streamlines the integration of rental functionalities into various applications an systems. It empowers users to execute essential tasks associated with vehicle rental, including reservation and inventory management.",
    image: "/images/projects/6.JPG",
    gitUrl: "https://github.com/Log-benjamin/Wheels-4-Rent-frontend",
    previewUrl: "https://wheels-4-rentv1.onrender.com/",
    techStack: [[<IoLogoReact key={1} size={33} />, "https://react.dev/"], [<SiRedux key={2} size={33} />, "https://redux.js.org/"], [<SiRubyonrails key={3} size={35} />, "https://rubyonrails.org/"], [<SiPostgresql  key={4} size={30} />, "https://www.postgresql.org/"]]
  }
];

const Project = () => {
  return (
    <section id="projects">
      <div className="project-container mt-10">
        <h2 className="text-center font-mono italic text-4xl py-3 sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-600">
          Featured Projects
        </h2>
        <br />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-14 mt-10">
          {projectsData.map((project, id) => {
            return <ProjectCard key={id} project={project} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default Project; 
