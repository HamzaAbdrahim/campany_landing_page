import assest from "../../assets/imges"

const Input = ({w , name , type } : {w:string , name:string , type:string }) => {
  return (
    <>
    <div>
    <h1 className="text-lg not-italic font-medium leading-[normal] text-white mb-[1.50rem]">SUBSCRIBE TO NEWSLETTER</h1>
    <div className={`${w} relative`}>
    <img src={assest.search_two} alt="" className="absolute top-1/2  left-5 h-6 -translate-x-1/2" />
    <input name={name} type={type} className={`${w} px-[0.72513rem] bg-transparent py-[0.77019rem] border-white rounded-[2.71875rem] border-[1.447px] border-solid`} />
    </div>
    </div>
    </>
  )
}

export default Input