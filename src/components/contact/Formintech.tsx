import styles from "../../style"
import Button from "../shered/Button"

const Formintech = ({textcolor , bordercolor} : {textcolor:string , bordercolor:string}) => {
  return (
    <div className="w-full ">
        <h1 className="text-white text-[2.5625rem] not-italic font-normal leading-[normal] font-Abril_Fatface">Get in Touch</h1>
        <h1 className={`${textcolor}text-white text-2xl not-italic font-semibold leading-[normal] font-Inter mt-14 mb-1 pb-7 border-b-2 w-full border-${bordercolor} border-solid `}>Name</h1>
        <div className={`${styles.flexitems} gap-[2.56rem]`}>
        <h1  className={`${textcolor}text-white text-2xl not-italic font-semibold leading-[normal] font-Inter mt-14 mb-1 pb-7 border-b-2 w-full border-${bordercolor} border-solid `} >Email</h1>
        <h1 className={`${textcolor}text-white text-2xl not-italic font-semibold leading-[normal] font-Inter mt-14 mb-1 pb-7 border-b-2 w-full border-${bordercolor} border-solid `} >Phone number</h1>
        </div>
        <h1 className={`${textcolor}text-white text-2xl not-italic font-semibold leading-[normal] font-Inter mt-14 mb-10 pb-7 border-b-2 w-full border-${bordercolor} border-solid `} >Message</h1>
        <Button name="Submit Now" style={""} />
    </div>
  )
}

export default Formintech