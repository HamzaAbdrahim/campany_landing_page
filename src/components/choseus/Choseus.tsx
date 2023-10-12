import assest from "../../assets/imges"
import styles, { layout } from "../../style"
import Whychoseus from "./Whychoseus"

const Choseus = () => {
    return (
    <div className={`${styles.paddingx} ${styles.paddingY} bg-light_balck`}>
        <h1 className="text-white text-[2.5rem] not-italic font-semibold mb-[3.87rem] leading-[normal] text-center font-Raleway ">Why Choose Ricoz?</h1>
        <div className={`${layout.section} gap-[6.45rem]`}>
        <img src={assest.choseus} alt="choseus_img" />
        <Whychoseus />
        </div>
    </div>
    )
}

export default Choseus