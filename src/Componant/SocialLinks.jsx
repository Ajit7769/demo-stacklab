import React from 'react'
import { Link } from 'react-router-dom'

const SocialLinks = () => {
  return (
    <>
       <div className="max-w-sm mx-auto w-[450px] mb-4 rounded-xl bg-white ">
        <div class=" py-2 px-5 bg-white max-w-sm  gap-2 rounded-lg">
        <h5 class="mb-2 text-2xl font-bold tracking-tight font-serif text-orange-500 mt-2 uppercase text-center py-2 border-b-2 border-dashed border-gray-200">
              Find Me Here
            </h5>
          <Link
            to=''
            className="flex justify-center items-center gap-2"
          >
    
          <div className="mb-1 mt-4">
            <div className="border-b-[1px]  border-dashed border-gray-100 -space-y-4 flex justify-start items-center">
              <p class="mb-3  text-xl text-orange-500 dark:text-orange-400 font-semibold">
                <img src='Images/instagram.png' className='h-10'/>
              </p>
              <p class="mb-1 mt-5 text-2xl text-black  font-semibold font-serif  mx-4">
                Instagram
              </p>
            </div>
          </div>

          </Link>
        </div>
      </div>

      <div className="max-w-sm mx-auto w-[450px] mb-4 rounded-xl bg-white">
        <div class=" py-2 px-5 bg-white max-w-sm  gap-2 rounded-lg">
          <Link
            to='http://www.linkedin.com/in/ajitsarwade'
            className="flex justify-center items-center gap-2"
            target='_blank'
          >
           <div className="mt-4">
            <div className=" -space-y-4 flex justify-start items-center">
              <p class="mb-3  text-xl text-orange-500 dark:text-orange-400 font-semibold">
                <img src='Images/linkedin.png' className='h-10'/>
              </p>
              <p class="mb-3 mt-9 text-2xl text-black  font-semibold font-serif  mx-4">
              Linkedin
              </p>
            </div>
           
          </div>
          </Link>
        </div>
      </div>

      <div className="max-w-sm mx-auto w-[450px] mb-4 rounded-xl bg-white">
        <div class=" py-2 px-5 bg-white max-w-sm  gap-2 rounded-lg">
          <Link
            to='https://github.com/Ajit7769'
            className="flex justify-center items-center gap-2"
            target='_blank'
          >
           <div className="mt-4">
            <div className=" -space-y-4 flex justify-start items-center">
              <p class="mb-3  text-xl text-orange-500 dark:text-orange-400 font-semibold">
                <img src='Images/github.png' className='h-10'/>
              </p>
              <p class="mb-3 mt-9 text-2xl text-black  font-semibold font-serif  mx-4">
              GitHub
              </p>
            </div>
           
          </div>
          </Link>
        </div>
      </div>

    </>
  )
}

export default SocialLinks