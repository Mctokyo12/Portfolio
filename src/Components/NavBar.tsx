import React from 'react'
import { HiBars3BottomRight } from 'react-icons/hi2';
import Button from './UI/Button';
import { Link } from 'react-router';

interface NavBarInterface {
    name?: string;
}


const NavBar = () => {
  return (
    <nav className='w-full h-20 fixed top-0 left-0 bg-white dark:bg-dark-main'>
        <div className='md:mx-37.5 mx-5'>
            <div className='flex items-center h-full justify-between'>
                <h1 className=' text-primary heading_two'>Setup Ai</h1>
                <ul className='items-center hidden md:flex justify-between  w-154.25  gap-4'>
                    <li className='flex flex-col'>
                        <Link  to={"/"} className=' text-meduin text-text'>Home</Link>
                        <span className='active'></span>
                    </li>
                    <li className='flex flex-col'>
                        <Link to={"/about"} className=' text-meduin text-text opacity-60'>Who we are ?</Link>
                        <span className=''></span>
                    </li>
                    <li className='flex flex-col'>
                        <Link to={"/services"} className=' text-meduin text-text opacity-60'>Our Services</Link>
                        <span className=''></span>
                    </li>
                    <li className='flex flex-col'>
                        <Link  to={"/projects"} className=' text-meduin text-text opacity-60'>Our Projects</Link>
                        <span className=''></span>
                    </li>
                    <li className='flex flex-col'>
                        <Link to={"/contacts"} className=' text-meduin text-text opacity-60'>Contacts Us</Link>
                        <span className=''></span>
                    </li>
                </ul>
                <div className='hidden md:block'>
                    <Button name={'Get a Quote'}   outline={false} />
                </div>
                <HiBars3BottomRight className='md:hidden size-10'/>
            </div>
        </div>
    </nav>

  )
}

export default NavBar