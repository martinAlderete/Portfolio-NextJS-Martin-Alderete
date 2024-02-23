import { Socials } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="fixed top-0 z-[40] w-full h-[100px] bg-transparent flex justify-between items-center px-10 md:px-20">
      <Link href='/' className=" flex flex-col gap-3">
        <h1 className="text-white text-[25px] font-semibold">
            Martin.
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
            
            Dev
          </span>
        </h1>
      </Link>

      <div className="flex flex-row gap-5 mb-2">
        {Socials.map((social) => (
          <Link
          key={social.name}
          href={social.link}
          
          >

          <Image
            key={social.name}
            src={social.src}
            alt={social.name}
            width={28}
            height={28}
          />



            
          
          
          
          
          </Link>
        ))}
        <a className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500" href="./cv.pdf" download="CV_Martin_Alderete_eng">Download CV</a>
      </div>
    </div>
  );
};

export default Navbar;
