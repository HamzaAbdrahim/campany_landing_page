import assest from "../../assets/imges"
import styles, { layout } from "../../style"
import Formintech from "./Formintech"

const Getintach = ({ textcolor , bordercolor} : {bgcolor:string , textcolor:string  , bordercolor:string }) => {
  return (
  <div className={`${styles.paddingx} ${styles.paddingY} ${layout.section} gap-32`}>
  <img src={assest.intechimg} alt="intechimg" />
  <Formintech textcolor = {textcolor} bordercolor = {bordercolor}  />
  </div>
  )
}

export default Getintach