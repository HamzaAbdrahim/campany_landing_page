import { NavLink } from 'react-router-dom'
import { navlinks } from '../../content/Index'
import styles from '../../style'
"mt-4 md:mt-0"
const Navlinks = () => {
  return (
    <ul className={` hidden md:flex items-center gap-9 `}>
        {navlinks.map((nav) => (
            <NavLink to={"/"} className=" text-white text-xl not-italic font-medium leading-[normal] font-Poppins" key={nav.id}>{nav.titel}</NavLink>
        ))}
    </ul>
  )
}

export default Navlinks