import Link from "next/link";
import { MdSportsCricket } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";


export default function BookingCard() {
   

    return (
      <div className="flex flex-row  w-full h-40 mt-10 rounded-2xl bg-white shadow-2xl"> 
            <div className="w-[25%] h-40 order-1 "><img className="w-full h-full object-cover rounded-l-2xl" src="https://www.alternate-sportpark.de/wp-content/uploads/2024/08/Badminton_DSC_4340_b.jpg"></img></div>
     
            <div className="w-[70%] order-2 p-5">
                <div className="flex flex-row ">
                    <MdSportsCricket className="text-gray-500 font-bold text-[18px]"/>
                    <div className="ml-3 text-[18px] text-gray-500 font-bold">Cricket</div>
                </div>

                <div className="ml-1 mt-3.5 text-[22px] text-[#22334F] font-semibold">ZHS Badmintion Hall</div>

                 <div className="mt-5 text-[16px] text-gray-500 font-semibold">14 Jan 2025 | 9.00AM - 10.00 AM</div>
            </div>

            <div className="w-[5%] flex justify-center items-center order-last mr-5">
                <Link href={`play/${1}`}>
                    <MdOutlineKeyboardDoubleArrowRight  className="text-[#22334F] text-[50px]"/>
                </Link>
            </div>

            
      </div>
    );
}