
import { FaLocationArrow, FaDownload } from 'react-icons/fa'
import MagicButton from './ui/MagicButton'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'


const Hero = () => {
  return (
    <div className="pb-20 pt-15">
       
        <div>
            <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white"/>
            <Spotlight className="top-10 left-full h-[100vh] w-[50vh]" fill="purple"/>
            <Spotlight className="top-28 left-80 h-[80vh] w-[50vh]" fill="blue"/>
        </div>
      
        
       
        <div className='flex flex-col justify-center items-center z-10 relative my-20'>
            <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vh] flex flex-col items-center justify-center'>
                <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>
                    [Let&apos;s work together]
                </h2>
            </div>
        
          <TextGenerateEffect 
          className="text-center text-[40px] md:text-5xl lg:text-6xl"
          words='Transforming Ideas into Impactful Digital Experiences'/>

          <p className='text-center md:tracking-wider mt-5 mb-4 text-sm md:text-lg lg:text-xl'>
            Hi, I&apos;m Sanshey — a <span className='text-purple-300'>Full-Stack Web Developer</span> & <span className='text-purple-300'>UI/UX Designer.</span>{' '}
            I build robust, scalable web solutions that are as delightful to use as they are powerful.
          </p>
          <a href='#projects'>
            <MagicButton 
            title="Show my work" icon={<FaLocationArrow />} 
            position='right'/>
            
          </a>
          <a className="flex justify-between pt-3 items-center lg:hidden " href="/SansheyResume.pdf" download="SansheyResume">
            <MagicButton 
            title="Download Resume" 
            icon={<FaDownload/>} position="right"/>
          </a>
        </div>
      
    </div>
  )
}

export default Hero
