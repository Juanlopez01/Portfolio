import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/router'
const NavBar = () => {
  const router = useRouter()
  let page = router.route
  return (
    <>
    <div className="btm-nav bg-opacity-50 sm:hidden">
        <button className={page === '/' ? "active bg-opacity-60" : ''} id='Home' onClick={() => router.push('/')}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
            <path fillRule="evenodd" d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z" clipRule="evenodd" />
          </svg>
          <label>Home</label>
        </button>
      <button className={page === '/projects' ? "active bg-opacity-60" : ''} id='Projects' onClick={() => router.push('/projects')} >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
          <path fillRule="evenodd" d="M4.25 2A2.25 2.25 0 002 4.25v11.5A2.25 2.25 0 004.25 18h11.5A2.25 2.25 0 0018 15.75V4.25A2.25 2.25 0 0015.75 2H4.25zm4.03 6.28a.75.75 0 00-1.06-1.06L4.97 9.47a.75.75 0 000 1.06l2.25 2.25a.75.75 0 001.06-1.06L6.56 10l1.72-1.72zm4.5-1.06a.75.75 0 10-1.06 1.06L13.44 10l-1.72 1.72a.75.75 0 101.06 1.06l2.25-2.25a.75.75 0 000-1.06l-2.25-2.25z" clipRule="evenodd" />
        </svg>
        <label>Projects</label>
      </button>
      <button className={page === '/about' ? "active bg-opacity-60": ''} id='About' onClick={() => router.push('/about')} >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-5.5-2.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM10 12a5.99 5.99 0 00-4.793 2.39A6.483 6.483 0 0010 16.5a6.483 6.483 0 004.793-2.11A5.99 5.99 0 0010 12z" clipRule="evenodd" />
        </svg>
        <label>About</label>
      </button>
      <button className={page === '/contact' ? "active bg-opacity-60" : ''} id='Contact' onClick={() => router.push('/contact')} >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
          <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clipRule="evenodd" />
        </svg>
        <label>Contact</label>
      </button>
    </div>
    <div className="hidden sm:navbar bg-blue-700 bg-opacity-20 fixed top-0 z-50">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">JUAN LOPEZ</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li><Link href='#home'>Home</Link></li>
          <li><Link href='#projects'>Projects</Link></li>
          <li><Link href='#about'>About</Link></li>
          <li><Link href='#studies'>Studies</Link></li>
          <li><Link href='#contact'>Contact</Link></li>
          <li className="dropdown dropdown-end">
            <label tabIndex={0} className="btn m-1">CV</label>
            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
              <li><Link href='https://drive.google.com/file/d/1tEfA3ELjFeTTZw84E87OpQrs-wR3aunU/view?usp=sharing' target='_blank'><img src='https://media.flaticon.com/dist/min/img/flags/es.svg' className='w-[30px]'/>Spanish</Link></li>
              <li><Link href='https://drive.google.com/file/d/1PJFW5_IETt4_605VUu82GC-UhJOUMNZd/view?usp=sharing' target='_blank'><img src='https://media.flaticon.com/dist/min/img/flags/en.svg' className='w-[30px]'/>English</Link></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    </>
  )
}

export default NavBar