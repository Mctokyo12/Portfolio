import { ButtonInterface } from '../../Constants/Constants'

const Button = ({name , icon : Icon , outline , ismobile}: ButtonInterface) => {
  return (
    <div className={`btn  rounded-lg h-fit w-fit  px-6  py-4  ${outline ? 'border-2 border-primary' : 'bg-primary' } ${ismobile && 'w-full'}  `}>
        <span className={`font-semibold text-lg ${outline ? 'text-primary' : 'text-white'}`}>{name}</span>
        {Icon && <Icon className={` size-6 ${outline ? 'text-primary' : 'text-white'}`}/>}
    </div>
  )
}

export default Button