
import PlayPage from "@/app/play/page";
import EventCard from "@/components/eventcard";
import Header from "@/components/header";
import SportsCard from "@/components/sportscard";





export default function Home() {
const myList = ['item1', 'item2', '3'];
  const mySportsList = ['item1', 'item2' , '3', '4', '5'];

  const myComponentList = myList.map((item, index) => (
    <EventCard width="w-123" key={index}/>
  ));

  const sportsList = mySportsList.map((item, index) => (
    <SportsCard key={index}/>
  ));


  return (
    <div>
      <Header />
    <div className="ml-10 mr-10 mt-10">
    <div className="flex justify-between">
      <div className="order-first text-[20px] font-semibold">Book a venue nearby</div>
      <h1 className="order-last text-[20px] font-semibold">See all</h1>
    </div>
   
    <div className="flex flex-row justify-between">

    {myComponentList}
    </div>

    <div className="order-first text-[20px] font-semibold mt-12">Join a game nearby</div>

    <div className="relative flex items-center">
      <div id='slider' className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide">
        {sportsList}
      </div>
    </div>

    </div>
    </div>
  );
}



