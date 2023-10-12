import assest from "../../assets/imges"
import styles from "../../style"

const Learnmore = () => {
  return (
    <>
    <div className={`${styles.flexitems} gap-[0.72rem] mt-[1.32rem]`}>
        <p className="font-Poppins text-[0.96175rem] not-italic font-normal leading-[normal] text-light_blue">Learn more</p>
        <img src={assest.arrow_right} alt="arrow_right}" />
    </div>
    </>
  )
}

export default Learnmore