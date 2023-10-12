import styles from "../../style"
import Titel from "../shered/Titel"
import Cards from "./Cards"

const Ourcourses = () => {
  return (
  <div className={`${styles.paddingx} ${styles.paddingY} bg-light_balck`} >
  <Titel 
  name="Explore More" 
  pargraf="The innovative educational platform designed to bridge the gap between traditional college education and the fast-paced demands of the IT industry."
  titel="Our Courses " />
  <Cards cardbgcolor = "bg-[#17245B]" fontcolor = "text-withe"/>
  </div>
  )
}

export default Ourcourses