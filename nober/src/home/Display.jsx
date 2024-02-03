import React, { useState } from 'react'
import '../App.css'
import Typewriter from 'typewriter-effect';

const Display = () => {
    const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const rotateStyle = {
    transform: isHovered ? 'rotate(2deg)' : 'rotate(0deg)',
    transition: 'transform 0.3s ease-in-out',
  };

  return (
    <div className='mt-4'>
    <div className='flex justify-center'>
<div className='flex justify-center relative  w-full'>
<div
onMouseEnter={handleMouseEnter}
onMouseLeave={handleMouseLeave}
style={rotateStyle}
className='moving-words-container ml-[12rem] w-8/12 h-[20rem] wel-bg'>
<div className=' move-words text-neutral-300 text-2xl p-4 font-bold'>Welfare Management System</div>

<div className=' text-neutral-300 text-lg font-bold absolute top-[10rem] left-[6rem]  flex items-center'
>
<Typewriter
            options={{
              strings: [
                "We Ensure Every Contribution Counts",
                "Access Financial Records instantly by Phone",
                "Automated Welfare with Minimal Human Interaction"
              ],
              autoStart: true,
              loop: true,
              delay: 40,
              cursor: "|",
              deleteSpeed: 60

            }}
          />
</div>

</div>
</div>
    </div>
    </div>
  )
}

export default Display