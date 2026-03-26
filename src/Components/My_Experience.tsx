import { memo } from 'react'
import { BiSolidBadgeCheck } from "react-icons/bi";
import Project from './../assets/images/Project.svg'
import Cloud from "./../assets/images/Cloud.svg"
import Ai from "./../assets/images/Ai.svg"



const My_Experience = memo(() => {
  return (
    <div className='mt-18 md:mt-0'>
      <div className='md:mx-37.5 mx-5'>
          <h3 className='heading_three text-primary'>My Experience</h3>
          <div className='md:w-[80%]  w-full mx-auto place-content-center  grid grid-cols-1 md:grid-cols-3 gap-7 mt-12.5'>
            
            {/* Programing */}
            <div className='flex flex-col  shadow-2xl/65 shadow-primary cursor-pointer hover:shadow-primary/80 hover:-translate-y-4 transition-all duration-75   items-start gap-3  w-full  pt-5 px-8 pb-16  h-[531px] rounded-xl from-primary to-secondary bg-linear-to-t  text-white  ' data-aos="fade-up" data-aos-duration="2000">
              <div className='flex flex-col  items-center w-full mb-8'>
                <div className=' mb-8'>
                  <img src={Project} alt=""  />
                </div>
                <h3 className='heading_four  text-center text-white'>Web & Software Development (Fullstack & Desktop)</h3>
              </div>
              <div className='w-full h-full flex flex-col justify-between '>
                <div className='flex items-center gap-4'> 
                  <BiSolidBadgeCheck className='text-green-500 size-7'/>
                  <span className='heading_meduim text-white'>Front-end(React, JS , HTML/CSS)</span>
                </div>
                <div className='flex items-center gap-4'> 
                  <BiSolidBadgeCheck className='text-green-500 size-7'/>
                  <span className='heading_meduim text-white'>Backend (Laravel, Node.js, Python)</span>
                </div>
                <div className='flex items-center gap-4'> 
                  <BiSolidBadgeCheck className='text-green-500 size-7'/>
                  <span className='heading_meduim text-white'>Database (MySQL, MongoDB)</span>
                </div>
                <div className='flex items-center gap-4'> 
                  <BiSolidBadgeCheck className='text-green-500 size-7'/>
                  <span className='heading_meduim text-white'>Desktop  (C++, Qt, Electron.js)</span>
                </div>
              </div>

            </div>


            {/* AI & Data Engineering */}
            <div className='flex flex-col shadow-2xl/65 shadow-primary cursor-pointer items-start gap-3  hover:shadow-primary/80 hover:-translate-y-4 transition-all duration-75  w-full  pt-5 px-8 pb-16  h-[531px] rounded-xl from-primary to-green-500 bg-linear-to-t text-white  grow-0  order-0  flex-none' data-aos="fade-up" data-aos-duration="2000">
              <div className='flex flex-col items-center w-full mb-8'>
                <div className=' mb-8'>
                  <img src={Ai} alt=""  />
                </div>
                <h3 className='heading_four text-white'>AI & Data Engineering</h3>
              </div>
              <div className='w-full h-full flex flex-col justify-between '>
                <div className='flex items-center gap-4'> 
                  <BiSolidBadgeCheck className='text-orange-500 size-7'/>
                  <span className='heading_meduim text-white'>Core AI (Python, Deep Learning)</span>
                </div>
                <div className='flex items-center gap-4'> 
                  <BiSolidBadgeCheck className='text-orange-500 size-7'/>
                  <span className='heading_meduim text-white'>Data Science (Pandas, NumPy)</span>
                </div>
                <div className='flex items-center gap-4'> 
                  <BiSolidBadgeCheck className='text-orange-500 size-7'/>
                  <span className='heading_meduim text-white'>Frameworks ( PyTorch, Scikit-learn)</span>
                </div>
                <div className='flex items-center gap-4'> 
                  <BiSolidBadgeCheck className='text-orange-500 size-7'/>
                  <span className='heading_meduim text-white'>Analysis, Modeling, Integration</span>
                </div>
              </div>

            </div>

            {/* Cloud & Devops */}
            <div className='flex flex-col shadow-2xl/65 shadow-primary cursor-pointer hover:shadow-primary/80 hover:-translate-y-4 transition-all duration-75   items-start gap-3   w-full pt-5 px-8 pb-16   h-[531px] rounded-xl from-primary to-yellow-500 bg-linear-to-t text-white  grow-0  order-0  flex-none' data-aos="fade-up" data-aos-duration="2000">
              <div className=' flex flex-col items-center w-full mb-8'>
                <div className=' mb-8'>
                  <img src={Cloud} alt=""  />
                </div>
                <h3 className='heading_four text-white'>DevOps & Infrastructure</h3>
              </div>
              <div className='w-full h-full flex flex-col justify-between  '>
                <div className='flex items-center  gap-4'> 
                  <BiSolidBadgeCheck className='text-yellow-500 size-7'/>
                  <span className='heading_meduim text-white'>Cloud/Container (AWS, Docker, Kubernetes)</span>
                </div>
                <div className='flex items-center  gap-4'> 
                  <BiSolidBadgeCheck className='text-yellow-500 size-7'/>
                  <span className='heading_meduim text-white'>CI/CD (GitHub Actions, GitLab CI)</span>
                </div>
                <div className='flex items-center gap-4'> 
                  <BiSolidBadgeCheck className='text-yellow-500 size-7'/>
                  <span className='heading_meduim text-white'>IaC (Terraform)</span>
                </div>
                <div className='flex items-center gap-4'> 
                  <BiSolidBadgeCheck className='text-yellow-500 size-7'/>
                  <span className='heading_meduim text-white'>Networks (Server, Security,Cisco) </span>
                </div>
              </div>

            </div>


          </div>
      </div>
    </div>
  )
})

export default My_Experience