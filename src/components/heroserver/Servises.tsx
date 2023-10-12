import styles from "../../style"
import Button from "../shered/Button"

const Servises = () => {
  return (
    <div style={{background:"linear-gradient(102deg, #191727 0.73%, #182357 99.5%)"}} className={`${styles.paddingx} ${styles.paddingY} flex flex-col gap-6 `} >
        <h1 className="text-white text-center text-[3.4375rem] not-italic font-semibold leading-[135.4%] capitalize font-Raleway">Acquire New Skills and Advance Your Career</h1>
        <p className="text-white text-center text-xl not-italic font-normal leading-[normal] font-Poppins">Are you ready to take your skills to the next level? Welcome to our Courses Page, where learning knows no boundaries. Whether you're a seasoned professional seeking to expand your horizons or a newcomer eager to dive into the world of technology</p>
        <Button name="Get Started" style="m-auto" />
    </div>
  )
}

export default Servises