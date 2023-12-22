"use client";
import React, { useState } from "react";
import Image from 'next/image';
import "../Modal.css";

export default function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      <button  onClick={toggleModal} className="flex resume-btn w-fit px-6 py-3 sm:ml-0 rounded-full sm:mr-4 text-white">
        <span className="text-lg mr-3">
          Education
        </span>
        <img width="32" height="32" src="https://img.icons8.com/color-glass/48/education.png" alt="education"/>
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>

          <div className="modal-content flex flex-col">
            <div className="self-end mb-5">
              <button className="close-modal" onClick={toggleModal}>
              <img width="30" height="30" src="https://img.icons8.com/glyph-neue/64/000000/delete-sign.png" alt="delete-sign"/>
              </button>
            </div>
            <div className="modal-container flex flex-col md:flex-row justify-between px-5 overflow-scroll">
              <div>
                <h2 className="mt-5 text-white font-bold ">
                  BSc.Electrical & Computer Engineering
                </h2>
                <h2 className="text-lg text-white font-bold">
                  Addis Ababa University
                </h2>
                <a href="https://drive.google.com/file/d/1cmIpMvxq6fkybe4YqI8kirfrXhKqWmiw/view?usp=sharing">
                  <Image
                    src="/images/Bsc.jpg"
                    alt="Bsc Degree image"
                    className="rounded mt-2"
                    width={300}
                    height={300}
                  />
                 </a>
              </div>
              <div>
                <h2 className="mt-5 mb-3 text-white font-bold ">
                  Full-stack Development
                  <br />
                  Microverse
                </h2>
                <a href="https://drive.google.com/file/d/12UJlFq1Fbl6Qtt4JZDfUpIQR7H0ZJ7t2/view?usp=sharing">
                  <Image
                    src="/images/Full-Stack.jpg"
                    alt="Bsc Degree image"
                    className="rounded mt-2"
                    width={270}
                    height={270 }
                  />
                </a>
              </div>
              <div>
                <h2 className="mt-5 mb-3 text-white font-bold ">
                  Google Data Analytics
                  <br />
                  Coursera
                </h2>
                <a href="https://drive.google.com/file/d/1YegI3svi_CEuv-SvK5PVXJ_MdD2zCMNL/view?usp=sharing">
                  <Image
                    src="/images/Data-Analytics.jpg"
                    alt="Bsc Degree image"
                    className="rounded mt-2"
                    width={270}
                    height={270 }
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}