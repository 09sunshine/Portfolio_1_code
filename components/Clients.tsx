"use client";

import React from "react";
import Image from 'next/image'
import { companies, testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";

export const Clients = () => {
  return (
    <section id="testimonials" className="py-20">
      <h1 className="text-4xl md:text-5xl text-center">
        Kind words from
        <span className="text-purple-300"> satisfied clients</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div
          
          className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden"
        >
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
            
          />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
          {companies.map((company) => (
            <React.Fragment key={company.id}>
              <div className="flex md:max-w-60 max-w-32 gap-2 items-center">
                <Image
                  height={30}
                  width={30}
                  src={company.img}
                  alt={company.name}
                  className="md:w-10 w-5"
                />
                <p className="text-xl lg:text-xl md:text-[0.75rem]">{company.name}</p>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

