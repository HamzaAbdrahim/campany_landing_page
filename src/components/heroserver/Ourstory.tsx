import assest from "../../assets/imges"
import styles, { layout } from "../../style"

const Ourstory = () => {
  return (
    <div className={`${styles.paddingx} ${styles.paddingY} ${layout.section} gap-[4.25rem] w-full`}>
        <img src={assest.happy_man} alt="happy_man" className="rounded-[1.25rem]" />
        <div className={`flex flex-col gap-6 `}>
        <h1 className="text-Gray_500 text-[2.5rem] not-italic font-semibold leading-[normal] capitalize font-Raleway">
        Unlock Your Potential with Our Courses.</h1>
        <p className="text-black text-xl not-italic font-normal leading-[174%] font-Poppins">Our courses span a wide spectrum of tech-related subjects, 
        from web development and design to marketing strategies and more.
        There's something for everyone. Learn from industry experts who bring their real-world
        experiences and insights into the classroom. Gain insights you can't find in textbooks alone. 
        Study at your own pace, on your own terms. Our flexible learning options make it easy to fit educatio
        n into your busy schedule.Dive into practical assignments and projects that mirror real-world scenarios.
        Apply what you learn and build a portfolio that stands out.</p>
        </div>
    </div>
  )
}

export default Ourstory