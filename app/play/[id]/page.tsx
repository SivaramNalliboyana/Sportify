import Header from "@/components/header";
import { IoIosStar } from "react-icons/io";


export default function DisplayPage(){
    const groundpic = "https://mybayutcdn.bayut.com/mybayut/wp-content/uploads/Indoor-cricket-in-Dubai-Cover-13-06.jpg";


    return (
        <div>
            <Header />
       
        <div className="mt-20 ml-30 mr-30 mb-10">
            <div className="flex justify-center">
                <img src={groundpic} className="w-full h-140"></img>
            </div>

            <div className="flex flex-row justify-between mt-10">
                <div className="text-[28px] font-semibold text-white">
                    Cricket ground ZHS - Munich
                </div>

               <div className="flex flex-row justify-center items-center mr-10">
                <IoIosStar className="text-yellow-400 font-bold text-[28px]" />
                    <div className="text-[25px] text-gray-500 ml-3 font-semibold">4.3</div>
                </div>
            </div>

            <div className="mt-3">
                1 JUN 25 | 11:00 AM - 12:00 AM
            </div>

            <div className="flex justify-center items-center h-20 bg-[#22334F] mt-10">
                <button className="text-white text-[22px] font-semibold">Book now</button>
            </div>
        </div>
         </div>
    )
}