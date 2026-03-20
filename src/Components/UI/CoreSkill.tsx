import React, { memo } from 'react'
import { CoreSkillInterface } from '../../Constants/Constants'

const CoreSkill = memo(({ background, icon, title, content }: CoreSkillInterface) => {
  return (
    <div style={{backgroundColor: `#${background}`}} className={`flex  p-4 rounded-lg flex-row  md:w-[49.5%] items-center gap-4  text-white`}>
        <img src={icon} alt="" />
        <div className='flex  flex-col items-start gap-2'>
            <span className='heading_meduim dark:text-white'>{title}</span>
            <span className='heading_meduim white w-full text-justify' >{content}</span>
        </div>
    </div>
  )
})

export default CoreSkill