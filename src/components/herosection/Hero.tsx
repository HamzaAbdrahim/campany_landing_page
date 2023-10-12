import styles from "../../style"
import Herocontent from "./Herocontent"
import Heroimges from "./Heroimges"

const Hero = () => {
  return (
    <div style={{background: 'linear-gradient(102deg, #181623 0.73%, #17245b 99.5%)'}} className={`${styles.paddingx} ${styles.paddingY}  ${styles.flexBetween}`}>
        <Herocontent />
        <Heroimges />
    </div>
  )
}

export default Hero