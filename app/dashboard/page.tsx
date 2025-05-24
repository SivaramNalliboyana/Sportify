"use client";

import BookingCard from "@/components/bookingcard";
import EventCard from "@/components/eventcard";
import Header from "@/components/header";
import Tabbar from "@/components/tabbar";
import { useState } from "react";

export default function DashBoard(){

    const l = ["El1","2", "EL3", "EL4"];

    const [tab, setTab] = useState<string>('Upcoming');;


    const bookingcomponentsList = l.map((item, index) => (
        <BookingCard key={index} />
    ));
    
      
    return (
      <div>
            <Header />
        <div className="p-20">
            <Tabbar tab={tab} onTab={setTab}/>

            {bookingcomponentsList}

        
        </div>
        </div>
    )
}