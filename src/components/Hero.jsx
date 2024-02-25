import React from "react";
import img from "../project-assets/loader16.svg";
import photo from "../project-assets/photograph.jpg";
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="bg-emerald-100 py-24">
      <div className="mx-auto max-w-7xl px-8 grid md:grid-cols-2 items-center gap-12">
        <article>
          <h1 className="flex text-7xl font-bold tracking-wider ">
            I Am Srungarapu Kamal Kumar
          </h1>
          <p className="mt-4 text-3xl text-slate-700 capitalize tracking-wide">
            Web Developer/Data Analyst
          </p>
          {/* <div className="photograph">
            <img src={photo} alt="photograph" className="rounded-full" />
          </div> */}

          <p className=" flex mt-2 text-2xl text-slate-700 capitalize tracking-wide">
            <img src={img} alt="eight" className="h-8 animate-spin " />
            Transforming Thoughts To Reality
          </p>
          <div className="flex gap-x-4 mt-4">
            <a href="#">
              <FaGithubSquare className="h-8 w-8 text-blue-500 hover:animate-pulse hover:underline"></FaGithubSquare>
            </a>
            <a href="#">
              <FaLinkedin className="h-8 w-8 text-blue-500 hover:animate-pulse hover:underline"></FaLinkedin>
            </a>
          </div>
        </article>
        <article className="hidden md:block ">
          <img src={photo} alt="photo" className="rounded-full h-80 lg:h-86" />
        </article>
      </div>
    </div>
  );
};

export default Hero;
