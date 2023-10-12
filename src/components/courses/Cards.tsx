import { courses_cards } from '../../content/Index'
import styles from '../../style'
import Learnmore from './Learnmore'

const Cards = ({cardbgcolor , fontcolor} : {cardbgcolor:string , fontcolor:string}) => {
  return (
    <div className={`${styles.cards_grid_system} gap-[2.81rem]`}>
        {courses_cards.map((card , index) => (
            <div key={index} className={`${cardbgcolor}`}>
                <img src={card.img} alt="course_img" className='rounded-t-xl' />
                <div className={`!${fontcolor} pl-[1.56281rem] pr-[3.40569rem] pt-[1.73413rem] pb-[1.12238rem]`}>
                <h1 className='text-[1.75rem] not-italic font-medium leading-[normal] text-gray_900 font-Inter'>{card.titel}</h1>
                <h3 className='text-balck_two my-[1.2rem] text-[1.75rem] not-italic font-bold leading-[normal] font-Inter'>₹{card.price},000</h3>
                <p className='text-[0.96175rem] not-italic font-light leading-[normal] font-Poppins text-gray_600'>{card.pargraf}</p>
                <Learnmore />
                </div>
            </div>
        ))}
    </div>
  )
}

export default Cards