import React, { memo } from 'react'
import Button from './Button'
import { CardInterface} from '../../Constants/Constants'
import { FiChevronRight } from "react-icons/fi";
import { Link } from 'react-router';
Link
const Card = memo(({title , content , link}: CardInterface) => {
  return (
    <div className='flex flex-col gap-3.5 justify-between md:w-67'>
        <h3 className='text-primary  heading_four'>{title}</h3>
        <p className=' heading_regular text-gry text-justify  text-wrap'>{content}</p>
        <Link to={link}>
          <Button name={'Learn More'} outline={true}  icon={FiChevronRight} />
        </Link>

    </div>
  )
})

export default Card