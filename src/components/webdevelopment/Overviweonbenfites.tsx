import { Overviwetypes } from "../../Hooks/types"
import Overviwe from "../shered/Overviwe"

const Overviweonbenfites = ({overviwe_img , arraycontent } : {overviwe_img:string , arraycontent:Overviwetypes[] }) => {
  return (
    <Overviwe img={overviwe_img} arraycontent={arraycontent} />
  )
}

export default Overviweonbenfites