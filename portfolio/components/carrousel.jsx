import React from 'react'

const Carrousel = () => {
  return (
    <>
    <div className='p-2 flex justify-center sm:hidden'>
      <h3 className='max-sm:font-barlow text-2xl m-auto'>PROJECTS PREVIEW</h3>
    </div>
    <div className="hidden max-sm:carousel w-11/12 h-44 m-auto">
      <div id="sirunn" className="carousel-item relative w-full">
        <img src="https://res.cloudinary.com/dg0okhqyc/image/upload/v1674912357/Captura_de_pantalla_2023-01-28_102216_dvsq8o.png" className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#countries" className="btn btn-circle">❮</a> 
          <a href="#countries" className="btn btn-circle">❯</a>
        </div>
      </div> 
      <div id="countries" className="carousel-item relative w-full">
        <img src="https://res.cloudinary.com/dg0okhqyc/image/upload/v1674912354/Captura_de_pantalla_2023-01-28_102447_cjln1o.png" className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#sirunn" className="btn btn-circle">❮</a> 
          <a href="#sirunn" className="btn btn-circle">❯</a>
        </div>
      </div> 
      
      
    </div>
    </>
  )
}

export default Carrousel