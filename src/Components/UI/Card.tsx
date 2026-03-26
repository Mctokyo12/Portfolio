import { memo } from 'react'
import Button from './Button'
import { CardInterface} from '../../Constants/Constants'
import { FiChevronRight } from "react-icons/fi";
import { Link } from 'react-router';
Link
const Card = memo(({title , content , link}: CardInterface) => {
  return (
    <div className='flex flex-col gap-3.5 justify-between md:w-61.5'>
        <h3 className='text-primary  heading_four'>{title}</h3>
        <p className=' text-sm text-text/60 text-justify  text-wrap'>{content}</p>
        <Link to={`${link}#OurService`}>
          <Button name={'Learn More'} outline={true}  icon={FiChevronRight} />
        </Link>

    </div>
  )
})

export default Card