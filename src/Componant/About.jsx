import React, { useContext } from 'react'
import FetchContext from '../Context/FetchContext'

const About = () => {

    const { data } =  useContext(FetchContext)

  return (
    <>
     {
        data.map((currEle) =>{
            return(
                <>
                   <div className="max-w-sm mx-auto w-[450px] mt-5 mb-4 bg-white rounded-xl">
          <div class="bgChange p-5 bg-white max-w-sm mt-4 gap-2 rounded-lg">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight font-serif text-orange-500 dark:text- uppercase text-center">
                About Us
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {currEle.aboutus}
            </p>
          </div>
        </div>

                </>
            )
        })
     }
    </>
  )
}

export default About