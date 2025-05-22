import { MdSportsCricket } from "react-icons/md";
import { IoIosStar } from "react-icons/io";


interface EventCardProps {
  width: string; 
}


export default function EventCard({ width } : EventCardProps){
    const img = "https://img.freepik.com/free-photo/cricket-bat-ball-foreground-pitch_91128-4644.jpg?semt=ais_hybrid&w=740";
    return <div className={`rounded-xl bg-white mr-10 ${width} h-65 mt-10 shadow-xl`}>
        <img src={img} alt="Cricket" className={`rounded-t-lg shadow-xl ${width} h-40`} />
        <div className="p-5">
        <div className="flex flex-row justify-between">
            <div className="flex flex-row">
                <MdSportsCricket className="text-gray-700 font-bold" />
                 <div className="text-[14px] text-[#22334F] font-semibold ml-3">Cricket and more</div>
            </div>
            <div className="flex flex-row">
                <IoIosStar className="text-yellow-400 font-bold" />
                <div className="text-[13px] text-gray-500 ml-3 font-semibold">4.3</div>
            </div>
        </div>
        <div className="flex flex-row justify-between">
            <div className="text-[16px] text-[#22334F] mt-4 font-semibold">Cricket Ground Munich</div>
            <div className="text-[16px] text-[#22334F] mt-4 font-semibold">20$</div>
        </div>
        </div>
    </div>
}