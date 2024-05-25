import React, { useContext } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import FetchContext from "../Context/FetchContext";
import { Link } from "react-router-dom";

const Card = () => {

   const { data } =  useContext(FetchContext)

  return (
    <>
    {data.map((curEle) =>{
       return(
        <>
              <div className="flex justify-between mb-4 items-center sm:flex-col flex-wrap">
        <div className=" max-w-sm mx-auto w-[450px] rounded-xl  shadow-xl mb-4  shadow-white h-[65vh]">
          <div className="absolute max-w-sm rounded-lg">
            <div>
              <img
                class="rounded-t-lg rounded-xl"
                src="Images/header.jpg"
                alt=""
                className="h-96 rounded-lg"
              />
              <div className="profile absolute z-100">
                <img
                  class="rounded-t-lg w-36 h-36 object-cover"
                  src={curEle.imageUrl}
                  alt=""
                  className="h-40 w-40 object-cover"
                />
              </div>
              <div className="-mt-10 overflow-hidden">
                <hr class="w-[95%] h-1 bg-orange-500 border-0 dark:bg-gray-700 absolute rotate-[18deg] z-50 rounded-xl -mt-[290px] -right-[9px]" />
                <hr class="w-[50%] h-2 bg-orange-500 border-0 dark:bg-gray-700 absolute rotate-[18deg] z-50 -mt-[40px] rounded-xl -right-1" />
                <hr class="w-[100%] h-2 bg-orange-500 border-0 dark:bg-gray-700 absolute rotate-[18deg] z-50 -mt-[55px] rounded-xl -right-[9px]" />
                <hr class="w-[30%] h-2 bg-orange-500 border-0 dark:bg-gray-700 absolute rotate-[18deg] z-50 mt-[4px] rounded-xl  -right-[3px]" />
              </div>
            </div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className=" absolute z-10 max-w-sm  mt-[240px] gap-2 "
          >
            <path
              fill="#0099ff"
              fill-opacity="1"
              d="M0,32L24,58.7C48,85,96,139,144,149.3C192,160,240,128,288,101.3C336,75,384,53,432,48C480,43,528,53,576,80C624,107,672,149,720,170.7C768,192,816,192,864,165.3C912,139,960,85,1008,74.7C1056,64,1104,96,1152,101.3C1200,107,1248,85,1296,85.3C1344,85,1392,107,1416,117.3L1440,128L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"
            ></path>
          </svg>
          <div class="bgChange mb-4 w-full p-5 bg-gradient-to-r from-sky-500 to-indigo-400 absolute max-w-sm  mt-[307px] gap-2 rounded-lg">
            
              <h5 class="mb-2 mt-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {curEle.name}
              </h5>

            <p class="mb-3 font-normal mt-4 text-gray-700 dark:text-gray-400">
            {curEle.role}
            </p>
            <div className="flex mt-4 justify-start items-center gap-2">
              <Link
                to="https://www.facebook.com/ajju77699"
                class="inline-flex items-center px-4 py-4 text-md font-medium text-center text-white bg-orange-500 rounded-full hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <FaFacebookF />
              </Link>
              <Link
                to="https://www.instagram.com/ajit_sarwade_7/"
                class="inline-flex items-center px-4 py-4 text-md font-medium text-center text-white bg-orange-500 rounded-full hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <FaInstagram />
              </Link>
              <Link
                to='https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCJNstdJvZVxbBMqnzjZwpfdXKZtmNkzjZjppnRkPTmQwxNdCNZSwxRvMrNKxGdGLWGfZHvq'
                class="inline-flex items-center px-4 py-4 text-md font-medium text-center text-white bg-orange-500 rounded-full hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <FaEnvelope />
              </Link>
              <Link
                to='https://maps.app.goo.gl/WWtY7LVMScLbpFoH6'
                class="inline-flex items-center px-4 py-4 text-md font-medium text-center text-white bg-orange-500 rounded-full hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <FaLocationDot />
              </Link>
            </div>
          </div>
        </div>
      </div>

        </>
       )
    })}
         </>
  );
};

export default Card;
