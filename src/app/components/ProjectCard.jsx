import React from 'react';
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

const ProjectCard = ({ project: { title, description, image, gitUrl, previewUrl, techStack },
  }) => {
  return (
    <div className='project-card-container bg-[#17374c] py-5 px-5'>
      <div
        className="h-40 md:h-60 md:w-50 relative group"
        style={{background: `url(${image})`, backgroundSize: "cover" }}
      >
        <div className="overlay flex items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
          <Link href={gitUrl} className="h-14 w-14 mr-3 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link">
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absoulute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute cursor-pointer group-hover/link:text-white" />
          </Link>

          <Link href={previewUrl} className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link">
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] absoulute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute cursor-pointer group-hover/link:text-white" />
          </Link>
        </div>
      </div>
      <h5 className="text-white mt-3 first-letter:text-xl font-semibold mb-1">{title}</h5>
      <div className="desc-container h-20 bg-[#183950] px-2 py-2 overflow-scroll text-white">
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
      <div className="flex justify-between">
        {techStack.map((tech, id) => {
          return (
            <div key={id} className="techStack-cont mt-2 mb-2 flex justify-between">
              <a href={tech[1]}>{tech[0]}</a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProjectCard;