import React from 'react'
// import './Responsive.css'

function About() {
  return (
    <div>
        
        <p className="about-heading  text-2xl text-center font-bold pt-11">About</p>
        <p className="about-heading  text-4xl text-center font-serif font-bold">Know me better</p>
        <div className="about-section py-4 flex justify-around flex-wrap">
            
          <div className="about-text w-1/2 ">
           <p className='text-4xl'>Hii, I'm a <span className='font-bold font-serif border-b-4 border-[#f5df4e]'>Sachin Yadav</span></p>
            <p className="about-para text-2xl leading-loose">
              I'm a frontend developer with a particular interest in making things
              simple and automating daily tasks. I try to keep up with security,
              and best practices, and am always looking for new things to
              learn.
            </p>
          </div>
          <div className="about-image flex flex-col items-center">
            <div className='h-28 w-28 bg-[#f5df4e] rounded-full text-center text-8xl font-bold '>
                <span className=''>6</span>
            </div>
            <p className="about-para1 text-4xl pt-4">
              Months of <span className='font-bold font-serif text-4xl border-b-4 border-[#f5df4e]'>Experience</span> 
            </p>
          </div>
      </div>
      <div className='contact-me pt-2 flex justify-around text-xl flex-wrap  text-gray-600'>
        <p>Name:<br/> <span className=' text-black'>Sachin Yadav</span></p>
        <p>Email:<br/> <span className=' text-black'>sky07082000@gmail.com</span></p>
        <p>Date of Birth:<br/> <span className=' text-black'>07/08/2002</span></p>
        <p>From:<br/> <span className=' text-black'>Lucknow UP</span></p>
      </div>
    
    </div>
  )
}

export default About