import assest from "../../assets/imges"
import Campnaylinks from "./footerlinks"
import Emailus from "./Emailus"
import { navlinks, servicescampny } from "../../content/Index"
import styles from "../../style"
import Input from "../shered/Input"

const Footer = () => {
  return (
    <>
    <footer style={{background:'linear-gradient(263deg, #172458 0.01%, #191726 99.6%)'}}  className={`${styles.paddingY} ${styles.paddingx}`} >
    <div className={`grid grid-cols-1 items-start md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5`}>
    <img src={assest.logo} alt="logo" />
    <Campnaylinks arrayliks={navlinks} titel="Company" />
    <Campnaylinks arrayliks={servicescampny} titel="Services" />
    <Emailus />
    <Input w={"w-full"} name={""} type={"text"} />
    </div>
    <h1 className="text-white text-center text-base not-italic font-medium leading-[1.625rem] tracking-[-0.02rem] pt-14 mt-14 border-t-2 font-Manrope  border-white border-solid">© 2023 Ricoz. All Rights Reserved.</h1>
    </footer>
    </>
  )
}

export default Footer