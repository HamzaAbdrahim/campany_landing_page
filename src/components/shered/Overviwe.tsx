import { Overviwetypes } from "../../Hooks/types"
import styles, { layout } from "../../style"

const Overviwe = ({img , arraycontent} : {img:string , arraycontent:Overviwetypes[]}) => {
  return (
    <div className={`${styles.paddingx} ${styles.paddingY} ${layout.section} gap-[4.25rem] w-full`}>
    <img src={img} alt="happy_man" className="rounded-[1.25rem]" />
    <div className={`flex flex-col gap-5 `}>
    {arraycontent.map((ele , index:number) => (
    <div key={index}>
    <h1 className="text-scond_blacky text-[2.5rem] mb-1 not-italic font-semibold leading-[normal] capitalize font-Raleway">{ele.titel}</h1>
    <p className="text-scond_blacky text-xl not-italic font-normal leading-[174%] font-Poppins">{ele.pargraf}</p>
    </div>
    ))}
    </div>
</div>
  )
}

export default Overviwe