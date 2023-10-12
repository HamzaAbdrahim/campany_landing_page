import Button from './Button';

const Bgcontent = ({ img, titel, pargraf }: { img: string, titel: string, pargraf: string }) => {
  return (
    <>
    <div className='relative w-full h-full'>
    <img src={img} alt="bg-content" />
    <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col text-center w-full'>
    <h1 className='text-white font-Raleway text-5xl not-italic font-semibold leading-[135.4%] capitalize'>{titel}</h1>
    <p className='font-Poppins text-white text-xl not-italic font-normal leading-[normal] my-8'>{pargraf}</p>
    <Button name='Get Started' style='w-fit m-auto' />
    </div>
    </div>
    </>
  );
}

export default Bgcontent;