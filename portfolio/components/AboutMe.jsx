import React from 'react'

const AboutMe = () => {
  return (
    <div className='h-screen w-screen flex flex-col items-center gap-8 max-sm:hidden'>
        <h2 className='pt-20 text-4xl font-barlow tracking-wider'>ABOUT ME</h2>
        <div className='flex w-11/12'>
          <div className='w-1/2'>
            <p className='text-lg pt-14'>Hello! I am Juan, I help companies get closer to their dream website, through my knowledge and my tireless desire to learn, so that we both push ourselves to be our best versions.<br></br>
            I am 21 years old and I am Argentine, I study civil engineering and I graduated as Full Stack Web Developer.<br></br> 
            A few years ago I could start my own venture, and that, mixed with the interest that I always had to learn to program (because I think that everyone calls our attention the words of colors) made me the person that I am today, looking to help all those who, Like me, it was hard and difficult to push their ideas and dreams.<br></br> 
            I like to work as a team, I am very organized and I have many long-term goals.<br></br> 
            I play amateur football, I am passionate and eager to grow professionally.
            </p>
          </div>
          <div className='w-2/4 h-2/4 flex justify-center'>
            <img src='https://res.cloudinary.com/dg0okhqyc/image/upload/v1676212554/IMG_E4264_xyrfbv.jpg' className='rounded-xl'/>
          </div>
        </div>
    </div>
  )
}

export default AboutMe