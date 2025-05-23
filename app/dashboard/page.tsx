import BookingCard from "@/components/bookingcard";
import EventCard from "@/components/eventcard";
import Header from "@/components/header";
import Tabbar from "@/components/tabbar";

export default function DashBoard(){

    const l = ["El1","2", "EL3", "EL4"];

    const bookingcomponentsList = l.map((item, index) => (
        <BookingCard key={index} />
    ));
      
    return (
      <div>
            <Header />
        <div className="p-20">
            <Tabbar />

            {bookingcomponentsList}

        
        </div>
        </div>
    )
}