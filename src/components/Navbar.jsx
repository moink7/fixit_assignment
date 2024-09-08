import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
  const navigate = useNavigate()
  const {loginWithRedirect, isAuthenticated} = useAuth0();
  return (
    <div>
        <header className='fixed top-0 z-50 w-full left-0 right-0   transition-all ease   duration-200  py-0  h-[60px]  bg-transparent block'>
      <nav className='relative w-full mx-auto h-full flex items-center justify-between'>
        <div className='flex items-center justify-between w-[95%] sm:w-[85%]  mx-auto'>
          <div className='flex items-center transition-all ease  duration-200  gap-x-2'>
            <img alt="fixit" 
                loading="lazy" 
                decoding="async" 
                src="/fixit_nav.svg" 
                className="w-[25px] h-[25px] text-transparent" />
            <h4 className="text-[2rem] text-white">fiXit</h4>
          </div>
          <div className='hidden md:flex text-sm   lg:w-80 max-w-80 justify-end items-center gap-x-5 false'>
            <a href='/about'>
                <button className="bg-transparent text-white rounded-sm  px-3 py-1.5 flex  min-w-fit text-main  border-main ">About Us</button>
            </a>
            
            {isAuthenticated ? navigate("/ask-question"): <button onClick={(e) => loginWithRedirect()} className="bg-transparent text-white rounded-sm  px-3 py-1.5 flex  min-w-fit text-main  border-main ">
                Login
            </button> }
          </div>
        </div>
      </nav>
    </header>
    </div>
  )
}

export default Navbar


