import React from "react";
import { Link } from "react-router-dom";

const ProjectLink = () => {
  return (
    <>
      <div className="max-w-sm mx-auto w-[450px] mb-4 rounded-xl bg-white">
        <div class=" py-2 px-5 bg-white max-w-sm  gap-2 rounded-lg">
          <h5 class="mb-2 text-2xl font-bold tracking-tight font-serif text-orange-500 mt-2 uppercase text-center py-2 border-b-2 border-dashed border-gray-200">
            Project Links
          </h5>
          <div className="flex justify-center items-center gap-2">
            <div className="mb-1 mt-1">
              <div className="border-b-[1px]  border-dashed border-gray-100 -space-y-4 flex flex-col gap-3">
                <Link
                  to="https://yashinfosolutionservices.com/" target="_balnk"
                  class="mb-3  text-xl text-black hover:text-blue-600 font-semibold"
                >
                  Yash Info solution Services
                </Link>

                <Link
                  to="https://passportworld.in/" target="_balnk"
                  class="mb-3  text-xl text-black hover:text-blue-600 font-semibold"
                >
                  Passport World
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectLink;
