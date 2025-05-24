"use client";

import PlayPage from "@/app/play/page";
import EventCard from "@/components/eventcard";
import Header from "@/components/header";
import SportsCard from "@/components/sportscard";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";





export default function Home() {
const myList = ['item1', 'item2', '3'];
  const mySportsList = ['item1', 'item2' , '3', '4', '5'];

  const myComponentList = myList.map((item, index) => (
    <EventCard width="w-123" key={index}/>
  ));

  const sportsList = mySportsList.map((item, index) => (
    <SportsCard key={index}/>
  ));


  const slideLeft = () => {
    var slider = document.getElementById('slider');
    slider!.scrollLeft = slider!.scrollLeft - 500;

  }

   const slideRight = () => {
    var slider = document.getElementById('slider');
    slider!.scrollLeft = slider!.scrollLeft + 500;

  }


  return (
    <div>
      <Header />
    <div className="">
    <div className="flex justify-between ml-13 mr-10 mt-10">
      <div className="order-first text-[20px] font-semibold">Book a venue nearby</div>
      <h1 className="order-last text-[20px] font-semibold">See all</h1>
    </div>
   
    <div className="flex flex-row justify-between ml-13 mr-10 mt-5">

    {myComponentList}
    </div>

    <div className="order-first text-[20px] font-semibold ml-11 mr-10 mt-10">Join a game nearby</div>

    <div className="relative flex items-center">
      <MdChevronLeft onClick={slideLeft} size={40} />
      <div id='slider' className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide mr-3">
        {sportsList}
      </div>

       <MdChevronRight onClick={slideRight} size={40} />
    </div>

    </div>
    </div>
  );
}



