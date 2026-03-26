import { useState } from 'react'
import { HiBars3BottomRight } from 'react-icons/hi2';
import Button from './UI/Button';
import { Link } from 'react-router';
import { useLocation } from 'react-router';

interface NavBarInterface {
    name?: string
    link: string
}


const NavBarData : Array<NavBarInterface> = [
    {
        name:"Home",
        link:"/"
    },
    {
        name:"Who we are ?",
        link:"/about"
    },
    {
        name: "Our Services",
        link:"/services"
    },
    {
        name: "Our Projects",
        link:"/projects"
    },
    {
        name:"Contacts Us",
        link:"/contacts"
    }
]


const NavBar = () => {

    const [isvisible , setIsVisible] = useState<boolean>(false);
    const location = useLocation();
    
    


  return (
    <nav className='w-full h-20 fixed top-0  z-30 left-0 bg-white shadow dark:bg-dark-main'>
        <div className='md:mx-37.5 mx-5'>
            <div className='flex items-center  h-20 justify-between'>
                <h1 className=' text-primary heading_two'>Setup Ai</h1>
                <ul className={`md:items-center  md:flex justify-between  w-154.25  md:gap-4  max-md:absolute max-md:top-20 max-md:left-0 max-md:w-full max-md:shadow-xl max-md:bg-white max-md:flex max-md:flex-col  max-md:items-center  max-md:gap-10  max-md:py-5  max-md:px-5  ${isvisible ? "max-md:flex" : "max-md:hidden"} `}>
                    {NavBarData.map(({name,link} , index) =>{
                        const isActive  = location.pathname === link
                        return (
                            <li className='flex  flex-col' key={index}>
                                <Link  to={link} className=' text-meduin  text-text'>{name}</Link>
                                <span className={`${isActive? "active" : "" } `}></span>
                            </li>
                        )
                    })}
                     
                    
                </ul>
                <Link to={"/contacts"} className='hidden md:block'>
                    <div className='hidden md:block'>
                        <Button name={'Get a Quote'}   outline={false} />
                    </div>
                </Link>

                <HiBars3BottomRight className='md:hidden size-10 cursor-pointer' onClick={() => setIsVisible(!isvisible)} />
            </div>
        </div>
    </nav>

  )
}

export default NavBar