import styles from '../../style'
import Button from './Button'

const Titel = ({titel , pargraf , name } : {titel:string , pargraf:string , name:string} ) => {
  return (
    <div className={`${styles.flexBetween} gap-10 w-full flex-wrap`}>
    <div className=" mb-8 md:mb-[4.38rem] text-white">
        <h1 className="text-[2.8735rem] not-italic font-semibold leading-[3.44594rem] font-Raleway">{titel}s</h1>
        <p className="text-xl not-italic font-normal leading-[normal] font-Poppins mt-1 max-w-lg">{pargraf}</p>
    </div>
    <Button name={name} style={""} />
</div>
  )
}

export default Titel