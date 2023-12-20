import React from 'react';
import ProjectCard from './ProjectCard';
import "../projectpage.css";
import { TiHtml5 } from "react-icons/ti";
import { IoLogoCss3, IoLogoReact } from "react-icons/io5";
import { TbBrandJavascript, TbApi } from "react-icons/tb";
import { SiWebpack, SiJest, SiBabel, SiEslint, SiStylelint, SiRubyonrails, SiPostgresql, SiRubocop, SiRubygems, SiRedux } from "react-icons/si";

const projectsData = [
  {
    id: 1,
    title: "IEEE-ICASSP-Website",
    description: "a website that gives detail information about the 2023 ICASSP Conference, including events on the program, Registration options, about keynote speakers, Venues, Accommodations and Contact information.",
    image: "/images/projects/1.JPG",
    gitUrl: "https://github.com/Log-benjamin/IEEE-ICASSP-Conference-Website",
    previewUrl: "https://log-benjamin.github.io/IEEE-ICASSP-Conference-Website/",
    techStack: [[<TiHtml5 key={1} size={30} />,"https://html.com/html5/"], [<IoLogoCss3 key={2} size={25} />,"https://www.w3.org/Style/CSS/Overview.en.html"], [<TbBrandJavascript key={3} size={30} />,"https://www.javascript.com/"]]
  },
  {
    id: 2,
    title: "Xplore",
    description: "a web app built based on REST countries API, that provides information about countries via a RESTful API. This project collects information from The REST countries site and provide it in a simple organized way as a web app so that it can be applicable by travel agencies or for personal use to get info about a country or region easily",
    image: "/images/projects/2.JPG",
    gitUrl: "https://github.com/Log-benjamin/Xplore",
    previewUrl: "https://log-benjamin.github.io/Xplore/dist/",
    techStack: [[<TbBrandJavascript key={1} size={30} />,"https://www.javascript.com/"], [<SiWebpack key={2} size={30} />,"https://webpack.js.org/"],[<SiJest key={3} size={25} />,"https://jestjs.io/"], [<TbApi key={4} size={25} />,"https://restfulapi.net/"]]
  },
  {
    id: 3,
    title: "Math Magicians",
    description: "a fully responsive calculator built in React coupled with interesting, randomly generated Mathematics quotes.",
    image: "/images/projects/3.JPG",
    gitUrl: "https://github.com/Log-benjamin/Math-Magicians",
    previewUrl: "https://math-magicians-c1og.onrender.com/",
    techStack: [[<IoLogoReact key={1} size={33} />, "https://react.dev/"], [<SiBabel key={2} size={27} />, "https://babeljs.io/"], [<SiStylelint key={3} size={27} />, "https://stylelint.io/"], [<SiEslint key={4} size={30} />, "https://eslint.org/"]]
  },
  {
    id: 4,
    title: "Book Store",
    description: "is a simple webapp built with react that provides information about different generes of books, progress report on the book with comment and edit features.",
    image: "/images/projects/4.JPG",
    gitUrl: "https://github.com/Log-benjamin/React-Bookstore",
    previewUrl: "https://final-bookstore.onrender.com/",
    techStack: [[<IoLogoReact key={1} size={33} />, "https://react.dev/"], [<SiBabel key={2} size={27} />, "https://babeljs.io/"], [<SiStylelint key={3} size={27} />, "https://stylelint.io/"], [<SiEslint key={4} size={30} />, "https://eslint.org/"]]
  },
  {
    id: 5,
    title: "Recipes",
    description: "an App that allows you to keep track of all your recipes, ingredients, and inventory in one place. It's a fully functional website created with Rails framework. The app makes it easy to plan your meals, shop for groceries, and cook your favorite dishes.",
    image: "/images/projects/5.JPG",
    gitUrl: "https://github.com/Log-benjamin/Recipe-app",
    previewUrl: "https://my-recipe-app-qigy.onrender.com/",
    techStack: [[<SiRubyonrails key={1} size={35} />, "https://rubyonrails.org/"], [<SiPostgresql  key={2} size={30} />, "https://www.postgresql.org/"], [<SiRubygems key={3} size={33} />, "https://rspec.info/"], [<SiRubocop key={4} size={33} />, "https://rubocop.org/" ]]
  },
  {
    id: 6,
    title: "Wheels-4-Rent",
    description: " is an API tailored fullstack web application for vehicle rental services that streamlines the integration of rental functionalities into various applications or systems. It empowers users to execute essential tasks associated with vehicle rental, including reservation and inventory management.",
    image: "/images/projects/6.JPG",
    gitUrl: "https://github.com/Log-benjamin/Wheels-4-Rent-frontend",
    previewUrl: "https://wheels-4-rentv1.onrender.com/",
    techStack: [[<IoLogoReact key={1} size={33} />, "https://react.dev/"], [<SiRedux key={2} size={33} />, "https://redux.js.org/"], [<SiRubyonrails key={3} size={35} />, "https://rubyonrails.org/"], [<SiPostgresql  key={4} size={30} />, "https://www.postgresql.org/"]]
  }
];

const ProjectSection = () => {
  return (
    <section id="projects">
      <div className="project-container">
        <h2 className="text-center font-mono italic text-4xl py-3 sm:text-6xl font-bold mt-10 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-600">
          My Projects
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

export default ProjectSection; 
