import { testimonial } from "../../content/Index"
import styles from "../../style"

const Testimonial = () => {
  return (
    <div className={`${styles.paddingx} ${styles.paddingY} `} >
    <h1 className="text-blacky text-[2.5rem] not-italic font-semibold font-Raleway leading-[normal] capitalize mb-[3.12rem]">Explore Our Platform's Unique Features</h1>
    <div className={`${styles.cards_grid_system} gap-6`}>
      {testimonial.map(ele => (
        <div className="rounded-[2.3425rem] bg-scondary py-[2.17rem] px-10" key={ele.id}>
        <img src={ele.icon} alt="testimonial_icon" className="p-1 rounded-full bg-white" />
        <h3 className="text-white text-3xl not-italic font-semibold leading-[normal] capitalize font-Raleway mb-[0.51rem] mt-[2.76rem]">{ele.titel}</h3>
        <p className="text-white text-[1.4055rem] not-italic font-light leading-[normal] font-Poppins">{ele.pargraf}</p>
        </div>
          ))}
    </div>
    </div>
  )
}

export default Testimonial