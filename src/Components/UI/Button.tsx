import { ButtonInterface } from '../../Constants/Constants'

const Button = ({name , icon : Icon , outline , ismobile}: ButtonInterface) => {
  console.log(ismobile);
  
  return (
    <div className={`btn     rounded-lg h-fit    px-6  py-3  ${outline ? 'border-2 border-primary btn-outline btn-primary ' : 'bg-primary hover:bg-primary/80 ' } ${ismobile ? 'w-full' : 'w-fit'}  `}>
        <span className={`font-semibold text-sm ${outline ? ' ' : 'text-white'}`}>{name}</span>
        {Icon && <Icon className={` size-6 ${outline ? '' : 'text-white '}`}/>}
    </div>
  )
}

export default Button