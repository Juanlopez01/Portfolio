import React from 'react'

const ExperienceMob = () => {
  return (
    <div className='flex flex-col items-center gap-4'>
        <h2 className='text-2xl'>EXPERIENCE</h2>
        <div className='flex w-11/12 m-auto sm:hidden'>
            <div className='w-1/3'>
                <img className='rounded-l-md' src='https://res.cloudinary.com/dg0okhqyc/image/upload/v1675515934/logoHenry_lg5nvg.png'/>
            </div>
            <div className='bg-gray-500 bg-opacity-50 w-2/3 rounded-r-md flex flex-col items-center pt-1'>
                <h5>HENRY HERO</h5>
                <label className="font-mont">Oct / 2022 - Dic / 2022</label>
            </div>
        </div>
    </div>
  )
}

export default ExperienceMob