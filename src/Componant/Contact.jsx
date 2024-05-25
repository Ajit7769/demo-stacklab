import React, { useContext } from "react";
import {

    FaMobileAlt,
    FaDirections
  } from "react-icons/fa";
import FetchContext from "../Context/FetchContext";
import { Link } from "react-router-dom";

const Contact = () => {

    const { data } =  useContext(FetchContext)

  return (
    <>
      {
        data.map((currEle) =>{
            return(
                <>
                   <div className="max-w-sm mx-auto w-[450px] mb-4 rounded-xl bg-white">
        <div class=" py-2 px-5 bg-white max-w-sm  gap-2 rounded-lg">
          <a
            href="#"
            className="flex justify-center items-center gap-2 border-b-2 border-dashed border-gray-200"
          >
            <FaMobileAlt className="bg-black text-white rounded-full p-1 text-4xl " />
            <h5 class="mb-2 text-2xl font-bold tracking-tight font-serif  text-orange-500 mt-2 uppercase text-center py-2">
              Contact Us
            </h5>
          </a>
          <div className="mb-4 mt-4">
            <div className="border-b-[1px]  border-dashed border-gray-100 -space-y-4">
              <p class="mb-3 mt-2 text-xl text-orange-500 dark:text-orange-400 font-semibold">
                Call Us
              </p>
              <p class="mb-3 mt-2 text-lg text-black  font-normal">
                {currEle.mobile}
              </p>
            </div>
            <div className="border-b-[1px] border-dashed border-gray-100 -space-y-4">
              <p class="mb-3 mt-2 text-xl text-orange-500 dark:text-orange-400 font-semibold">
                Email
              </p>
              <p class="mb-3 mt-2 text-lg text-black  font-normal">
              {currEle.email}
              </p>
            </div>
            <div className=" -space-y-4">
              <p class="mb-3 mt-2 text-xl text-orange-500 dark:text-orange-400 font-semibold">
                Address
              </p>
              <p class="mb-3 mt-2 text-lg text-black  font-normal">
              {currEle.address}
              </p>
            </div>
            <div>
              <Link
                to='https://maps.app.goo.gl/WWtY7LVMScLbpFoH6'
                class="inline-flex mt-3 justify-center items-center px-4 py-2 text-md font-medium text-center text-white bg-orange-500 rounded-full hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Direction <FaDirections className="mx-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
                </>
            )
        })
      }
    </>
  );
};

export default Contact;
