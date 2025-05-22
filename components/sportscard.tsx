import { MdSportsCricket } from "react-icons/md";
import { IoLocation } from "react-icons/io5";



export default function SportsCard(){
    const img = "https://images.tagesschau.de/image/2d3df85e-c25e-4d44-be0a-865e6a2985d9/AAABlRg3cYk/AAABkZLiamM/16x9-1920/elon-musk-242.jpg";
    return <div className="outline-2 outline-[#22334F] rounded-xl bg-white mr-10 w-123 h-65 mt-10 p-5">
        <div className="outline-1 outline-black rounded-xl bg-white w-70 h-10  p-2.5">
            <div className="flex flex-row justify-evenly">
                <MdSportsCricket className="text-gray-700 font-bold" />
                <h1 className="text-[14px] text-[#22334F] font-semibold">Cricket | Beginner to Intermediate</h1>
            </div>
        </div>

    
            <div className="flex flex-row mt-4">
                <div className="relative w-[10rem] h-14">
                <div className="absolute top-4 w-14 h-14 bg-blue-200 rounded-full overflow-hidden">
                    <img
                        src={img}
                        alt="Profile"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="absolute top-4 left-10 w-14 h-14 bg-blue-200 rounded-full overflow-hidden">
                    <img
                        src={img}
                        alt="Profile"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="absolute top-4 left-20 w-14 h-14 bg-blue-200 rounded-full overflow-hidden">
                    <img
                        src={img}
                        alt="Profile"
                        className="w-full h-full object-cover"
                    />
                </div>
                </div>

                <div className="ml-2 mt-6 text-[25px] text-[#22334F] font-semibold">3 / 4 Going</div>
            </div>

            <div className="mt-8  text-[14px] text-[#22334F] font-bold">1. Jun, 7:00pm</div>

            <div className="flex flex-row mt-3">
                <IoLocation className="text-gray-700 font-bold "/>
                <div className="ml-3 text-[16px] text-[#22334F] font-semibold ">Munich Turf Arena</div>
            </div>

    </div>
}