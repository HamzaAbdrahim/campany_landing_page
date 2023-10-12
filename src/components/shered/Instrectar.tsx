import styles, { layout } from "../../style"

const Instrectar = ({img , name , pargraf} : {img:string  , name:string , pargraf:string}) => {
    return (
    <div className={`${styles.paddingx} ${styles.paddingY} text-scond_blacky`}>
    <h1 className="text-[2.8735rem] mb-12 text-center not-italic font-semibold leading-[3.44594rem]">Meet Your Instructor</h1>
    <div className={`${layout.section} items-center gap-6 md:gap-[8.45rem]`}>
    <img src={img} alt="" className="rounded-[5px_163px_24px]" />
    <div>
    <h1 className="text-3xl not-italic font-semibold leading-[3.44594rem]  mb-4">{name}</h1>
    <p className="font-Poppins text-xl not-italic font-normal leading-[180%]  ">{pargraf}</p>
    </div>
    </div>
    </div>
    )
}

export default Instrectar