import assest from '../../assets/imges'
import styles from '../../style'

const Content = ({bgcolor , fontcolor} : {bgcolor:string , fontcolor:string}) => {
  return (
    <div className={`${styles.flexBetween} ${styles.paddingx} ${styles.paddingY} pt-12 border-t-2 border-solid w-full flex-wrap border-${fontcolor}`}>
  <div className={`${styles.flexitems} gap-[1.88rem]`}>
  <h1 className={`font-Inter text-3xl not-italic font-normal leading-[normal] ${fontcolor}`}>+91-7011112666</h1>
  <img src={assest.telephone} alt="" className={`${bgcolor} h-16 pt-[0.95919rem] pb-[0.97638rem] px-[0.62069rem] rounded-[5.64238rem]`} />
  </div>
  <div className={`${styles.flexitems} gap-[1.88rem]`}>
  <h1 className={`font-Inter text-3xl not-italic font-normal leading-[normal] ${fontcolor}`}>info@Ricoz.in</h1>
  <img src={assest.logos_google} alt="" className={`${bgcolor} h-16  pt-[0.95919rem] pb-[0.97638rem] px-[0.62069rem] rounded-[5.64238rem]`} />
  </div>
  <div className={`${styles.flexitems} gap-[1.88rem]`}>
  <h1 className={`font-Inter text-3xl not-italic font-normal leading-[normal] ${fontcolor}`}>Ricoz.in</h1>
  <img src={assest.instagram} alt="" className={`${bgcolor} h-16 pt-[0.95919rem] pb-[0.97638rem] px-[0.62069rem] rounded-[5.64238rem]`}/>
  </div>

    </div>
  )
}

export default Content