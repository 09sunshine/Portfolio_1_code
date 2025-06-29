"use client";

import { FaLocationArrow } from "react-icons/fa6";
import Image from 'next/image'
import { projects } from "@/data";
import { PinContainer } from "./ui/3d-pin";


export const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="text-4xl md:text-5xl text-center">
        A small selection of{" "}
        <span className="text-purple-300">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
        {projects.map((item) => (
          <div
            className=" sm:h-[41rem] lg:min-h-[32.5rem] h-[32rem] flex items-center justify-center sm:w-[520px] w-[80vw]"
            key={item.id}
          >
            <PinContainer
              title={item.link}
              href={item.link}
            >
              <div className="relative flex items-center justify-center sm:w-[520px] w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <Image fill={true} objectFit="cover"  src="/bg.png" alt="bgimg" />
                </div>
                <Image
                  objectFit="cover"
                  fill={true}
                  src={item.img}
                  alt="cover"
                  className="z-10 absolute bottom-0 rounded-xl"
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${9 * index + 2}px)`,
                      }}
                    >
                      <Image height={50} width={50} src={icon} alt="icons" className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <a className="flex lg:text-xl md:text-xs text-sm text-purple" href={item.link}>
                    Check Live Site
                  </a>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

