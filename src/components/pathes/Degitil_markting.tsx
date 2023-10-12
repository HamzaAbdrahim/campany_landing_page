import Bgcontent from '../shered/Bgcontent'
import Curriculum from '../shered/Curriculum'
import assest from '../../assets/imges'
import Instrectar from '../shered/Instrectar'
import { Curriculum_list_digtal_markting, overviwecontentdigtalmarkting } from '../../content/Index'
import Overviwe from '../shered/Overviwe'

const Degitil_markting = () => {
  return (
<>
<Bgcontent img={assest.degital_markting_bg} titel={"Digital Marketing Fundamentals"} pargraf={"Unlock the Power of Digital Marketing Strategies"}  />
<Overviwe arraycontent={overviwecontentdigtalmarkting} img={assest.degital_markting_instracter} />
<Curriculum  
pargraf={'The innovative educational platform designed to bridge the gap between traditional college education and the fast-paced demands of the IT industry.'}
titelofcourse={'Digital Marketing Fundamentals'} img_of_course={assest.progarming_img} list={Curriculum_list_digtal_markting} />
<Instrectar img={assest.digtal_markting_instracter} name={'John Smith'} pargraf={'John Smith is a seasoned digital marketing professional with a proven track record in creating impactful online campaigns. With over 8 years of experience, he has spearheaded successful marketing initiatives for both global brands and startups. John is passionate about helping others understand the intricacies of digital marketing and how it can drive business growth.'} />
  </>
  )
}

export default Degitil_markting