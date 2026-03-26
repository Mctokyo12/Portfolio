import { memo } from 'react'
import { CoreSkillInterface } from '../../Constants/Constants'

const CoreSkill = memo(({ background, icon, title, content }: CoreSkillInterface) => {
  return (
    <div style={{backgroundColor: `#${background}`}} className={`flex  flex-col  items-start  md:p-1 p-2  rounded-lg md:flex-row  md:w-full md:h-30 md:items-center gap-4  text-white`}>
        <img src={icon} alt="" className='md:size-12.5 size-17.5' />
        <div className='flex  flex-col items-start gap-2'>
            <span className='heading_regular font-semibold dark:text-white'>{title}</span>
            <span className='md:text-xs text-regular white w-full text-justify' >{content}</span>
        </div>
    </div>
  )
})

export default CoreSkill