import { benfites_content } from "../../content/Index"
import Benfites from "./Benfites"

const Cardbenfites = () => {
  return (
  <div className="grid justify-center grid-cols-3 gap-4 mb-[5rem]">
    <div className="flex gap-40 flex-col justify-between">
    {benfites_content.slice(0 , 2).map((benfite , index) => (
    <div key={index} className="text-center">
    <h3 className="text-[4.99675rem] not-italic font-semibold leading-[5.99225rem] font-Poppins">{benfite.icon}</h3>
    <h2 className="text-2xl not-italic font-semibold leading-[normal] font-Raleway text-blacky_three">{benfite.titel}</h2>
    <p className="font-Poppins text-[1.1875rem] not-italic font-light leading-[130.5%] tracking-[0.00594rem]">{benfite.pargraf}</p>
    </div>
    ))}
    </div>
    <Benfites />
    <div className="flex gap-40 flex-col justify-between">
    {benfites_content.slice(2).map((benfite , index) => (
    <div key={index + 2}  className="text-center">
    <h3 className="text-[4.99675rem] not-italic font-semibold leading-[5.99225rem] font-Poppins">{benfite.icon}</h3>
    <h2 className="text-2xl not-italic font-semibold leading-[normal] font-Raleway text-blacky_three">{benfite.titel}</h2>
    <p className="font-Poppins text-[1.1875rem] not-italic font-light leading-[130.5%] tracking-[0.00594rem]">{benfite.pargraf}</p>
    </div>
    ))}
    </div>
    </div>
  )
}

export default Cardbenfites