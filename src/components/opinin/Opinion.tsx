import styles from "../../style"
import Cards from "./Cards"

const Opinion = () => {
  return (
    <div className={`${styles.paddingx} ${styles.paddingY} bg-light_balck`}>
    <h1 className="text-[2.8735rem] not-italic font-semibold leading-[3.44594rem] text-white mb-20 text-center font-Raleway ">Real Stories from Real Professionals</h1>
    <Cards />
    </div>
  )
}

export default Opinion