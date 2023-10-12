import { navlinks } from "../../content/Index"

const Campnaylinks = ({titel , arrayliks} : {titel:string , arrayliks:any }) => {
  return (
    <ul>
    <h1 className="text-[1.3125rem] not-italic font-bold leading-6 text-white mb-[1.75rem]">{titel}</h1>
    {arrayliks.map(nav  => (
    <li className="text-base not-italic font-medium leading-6 font-Manrope text-white" key={nav.id}>{nav.titel}</li>
    ))}
    </ul>
  )
}

export default Campnaylinks