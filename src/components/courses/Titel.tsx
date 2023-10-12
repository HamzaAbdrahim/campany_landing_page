import styles from "../../style"
import Button from "../shered/Button"

const Titel = () => {
  return (
    <div className={`${styles.flexBetween} w-full flex-wrap`}>
        <div className=" mb-8 md:mb-[4.38rem]">
            <h1 className="text-[2.8735rem] not-italic font-semibold leading-[3.44594rem] font-Raleway">Unlock New Skills with Our Courses</h1>
            <p className="text-xl not-italic font-normal leading-[normal] font-Poppins mt-1">Learn and Grow at Your Own Pace.</p>
        </div>
        <Button name="Explore More" style={""} />
    </div>
  )
}

export default Titel