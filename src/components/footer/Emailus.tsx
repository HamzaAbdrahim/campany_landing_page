import assest from "../../assets/imges"
import styles from "../../style"

const Emailus = () => {
    return (
    <div>
        <h1 className="font-Poppins text-lg not-italic font-bold leading-[normal] text-white mb-2">Email Us</h1>
        <p className=" text-[0.9375rem] not-italic font-bold leading-[normal] underline text-white font-Poppins mb-[1.41rem]">Ricoz1234@gmail.com</p>
        <h1 className="font-Poppins text-lg not-italic font-bold leading-[normal] text-white mb-2">Contact Us</h1>
        <p className=" text-[0.9375rem] not-italic font-bold leading-[normal] underline text-white font-Poppins mb-[1.41rem]">+91 9098885099</p>
        <ul className={`${styles.flexitems} gap-3`}>
        <img src={assest.facebook} alt="facebook" />
        <img src={assest.twitter} alt="twitter" />
        <img src={assest.linkedin} alt="linkedin" />
        <img src={assest.instagram} alt="instagram" />
        <img src={assest.logos_spotify} alt="logos_spotify" />
        </ul>
    </div>
    )
}

export default Emailus