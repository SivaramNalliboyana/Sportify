import EventCard from "@/components/eventcard";
import Header from "@/components/header";

export default function Book(){

    const myList = ['item1', 'item2', '3' ,'4'];
      const mySportsList = ['item1', 'item2' , '3'];
    
      const myComponentList = myList.map((item, index) => (
        <EventCard width="w-130"/>
      ));
      
    return (
      <div>
            <Header />
        <div className="p-20">
            <div className="text-[32px] text-white font-semibold text-center justify-center">
            Search for venues
        </div>
        <form className="container mx-auto h-16 m-10 bg-gray-200 rounded-2xl">
             <input className="w-full
             h-16
            bg-white
            placeholder:text-gray-400
            placeholder:font-medium
            text-gray-900
            text-[16px]
            font-semibold
            tracking-wide
            rounded-xl
            px-4
            py-3
            shadow-md
            focus:outline-none
            focus:ring-2
            focus:ring-blue-400
            transition
            duration-200
            ease-in-out
              " placeholder="Search here.."></input>
        </form>
        
        <div className="flex justify-center">
        <div className="grid grid-cols-2 auto-rows-auto gap-20">
            {myComponentList}
        </div>
        </div>

        
        </div>
        </div>
    )
}