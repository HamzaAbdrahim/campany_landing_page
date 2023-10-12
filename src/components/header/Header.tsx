import assest from "../../assets/imges"
import styles from "../../style"
import Button from "../shered/Button"
import Navlinks from "./Navlinks"

const Header = () => {
  return (
    <header className={`${styles.flexAround} bg-primary py-[1.19rem]`}>
      <img src={assest.logo} alt="logo"  />
      <Navlinks />
      <Button name="Sign Up" style = "hidden md:block"/>
      <img src={assest.humberger_menu} alt="" className="md:hidden h-6" />
    </header>
  )
}

export default Header