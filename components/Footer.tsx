import { FaLocationArrow } from "react-icons/fa6";
import Image from 'next/image'
import { socialMedia } from "@/data";
import MagicButton from "./ui/MagicButton";
import { FaHeart } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
       <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <Image
          height={60}
          width={60}
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>
      <div className="flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl text-center font-bold lg:max-w-[45vw]">
            Ready to take <span className="text-purple-300">your</span> digital
            presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
            Reach out to me today and let&apos;s discuss how I can help you
            achieve your goals.
        </p>
        <a href="mailto:sanshey2711@gmail.com" target="_blank">
            <MagicButton 
            title="Let's get in touch" 
            icon={<FaLocationArrow/>}
            position="right"
            />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base flex gap-2 items-center text-sm md:font-normal font-light">
            Made with <span className="text-red-500"><FaHeart/></span> by Sanshey
        </p>

        <div className="flex items-center md:gap-3 gap-6">
            {socialMedia.map((info) => (
                <div key={info.id}
                className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter 
                backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border
                border-black-300">
                  <a href={info.link} target="_blank"><Image src={info.img} alt="icons" width={20} height={20} /></a>
                  
                </div>
                
            ))}
        </div>
      </div>
    </footer>
  )
}

