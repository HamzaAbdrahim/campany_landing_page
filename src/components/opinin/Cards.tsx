import assest from '../../assets/imges'
import { opinions_card } from '../../content/Index'
import styles from '../../style'

const Cards = () => {
    return (
    <div className={`${styles.cards_grid_system} gap-[2.81rem]`} >
    {opinions_card.map((opinion , index) => (
    <div key={index} className='rounded-[1.676rem] pl-[2.51481rem] pr-[2.08663rem] pt-[4.11038rem] pb-[4.83825rem] bg-white'>
    <div className={`${styles.flexitems} gap-[0.89rem] mb-[1.56rem]`}>
    <img src={opinion.img} alt="" />
    <p className='text-[1.34081rem] not-italic font-normal leading-[1.34081rem] font-Poppins text-gray_900'>{opinion.name}<span className='block text-gray-600 text-[1.00556rem] mt-1'>{opinion.role}</span></p>
    </div>
    <h1 className='font-Poppins text-[1.78775rem] not-italic font-normal leading-[140%] text-gray_900'>"{opinion.his_opinion}"</h1>
    <p className='text-[0.89388rem] my-[1.56rem] not-italic font-light leading-[1.34081rem] font-Poppins text-gray_700 '>{opinion.pargraf}</p>
    <img src={assest.stars} alt="stars" />
    </div>
    ))}
    </div>
    )
}

export default Cards