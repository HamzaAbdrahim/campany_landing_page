import { Curriculum_list_types } from "../../Hooks/types"
import styles from "../../style"
import Button from "./Button"

const Curriculum = ({ pargraf , titelofcourse , img_of_course , list} : {pargraf:string , titelofcourse:string , img_of_course:string , list:Curriculum_list_types[]}) => {
    return (
    <div className={`${styles.paddingx} ${styles.paddingY} text-white bg-light_balck`}>
    <div className="shadow-[3px_9px_4px_0px_rgba(0,0,0,0.50)] rounded-[1.68369rem] bg-scondary w-full p-2">
    <h1 className="text-[2.8735rem] not-italic font-semibold leading-[3.44594rem] font-Raleway mb-2">Curriculum</h1>
    <p className="text-xl not-italic font-normal leading-[normal] max-w-lg font-Poppins">{pargraf}</p>
    <div className={`flex mt-[3.37rem] items-start justify-between flex-col-reverse xl:flex-row gap-6`}>
    <div>
    <h1 className="text-2xl not-italic font-bold leading-[normal] font-Open_Sans mb-[1.37rem]">{titelofcourse}</h1>
    <ul>
        {list.map((ele , index) => (
        <li 
        key={index} 
        style={{marginBottom:index !== list.length - 1 ? "1rem" : "2rem"}}
        >{`>> ${ele.titel}`}</li>
        ))}
    </ul>
    <Button name="Register now" style="" />
    </div>
    <img src={img_of_course} alt="" />
    </div>
    </div>
    </div>
    )
}

export default Curriculum