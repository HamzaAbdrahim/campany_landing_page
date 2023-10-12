import styles from "../../style"
import Cards from "./Cards"
import Titel from "./Titel"

const Courses = () => {
  return (
    <div className={`${styles.paddingx} ${styles.paddingY}`}>
        <Titel />
        <Cards />
    </div>

  )
}

export default Courses