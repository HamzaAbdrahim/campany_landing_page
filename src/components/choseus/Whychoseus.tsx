import { chose_us } from "../../content/Index"

const Whychoseus = () => {
  return (
    <ul className="flex flex-col gap-[3.19rem]">
        {chose_us.map(ele => (
        <li className={`flex items-start  gap-[2.31rem]`} key={ele.id}>
        <img className="p-1 rounded-full bg-white" src={ele.icon} alt="choseus_icon" />
        <h1 className="text-white text-2xl not-italic font-medium leading-[normal] font-Poppins">{ele.titel}
        <p className="block text-white text-xl not-italic font-normal leading-[normal] mt-1 ">{ele.pargraf}</p></h1>
        </li>
        ))}
    </ul>
  )
}

export default Whychoseus