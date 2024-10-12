import { IoArrowForwardSharp } from "react-icons/io5";

const ServiceCard = ({ service }) => {
   const { title, img, price } = service;
   return (
      <div className='p-6 rounded-md shadow-[0px_0px_3px_0px] shadow-gray-400'>
         <div>
            <img src={img} alt="" className='w-full rounded-md' />
         </div>
         <h2 className='font-bold py-4 text-lg sm:text-xl'>{title}</h2>
         <div className='flex items-center justify-between'>
            <h4 className='text-lg font-semibold'>Price : $ {price}</h4>
            <IoArrowForwardSharp className='text-2xl hover:rotate-[360deg] duration-300 hover:text-red-500 cursor-pointer' />
         </div>
      </div>
   );
};

export default ServiceCard;