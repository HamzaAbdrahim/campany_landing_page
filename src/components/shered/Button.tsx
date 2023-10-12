const Button = ({name , style} : {name:string , style:string}) => {
  return (
    <button className={`text-white text-xl not-italic font-medium leading-[normal] px-[1.875rem] py-[0.8125rem] rounded-[3.125rem] font-Poppins bg-thered ${style}`}>{name}</button>
  )
}

export default Button