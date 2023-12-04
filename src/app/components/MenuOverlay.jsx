import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import mobileLinkVars from './Animate';

const MenuOverlay = ({links}) => {
  return (
    <motion.div variants={mobileLinkVars} className="text-base uppercase">
      <ul className="flex flex-col py-4 items-center font-nunito">
        {links.map((link, index)=>(
          <li key={index} className="hover:bg-black hover:rounded px-5 font-nunito">
            <Link href={link.path} className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-blue">
              {link.title}
            </Link>    
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default MenuOverlay;
