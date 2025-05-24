import ChatView from "@/components/chatviews";
import Header from "@/components/header";


export default function Chat(){

  const list = ['1', '2', '3', '4', '5', '6'];

  const chatsCompos = list.map((item, index) => (
    <ChatView key={index}/>
  ));
     
    return (
      <div className="h-screen">
        <Header />

        <div className="flex flex-row h-full w-full mt-10">
        <div className="w-[25%]">
            {chatsCompos}
        </div>

         <div className="w-px bg-gray-400 mx-2"></div> {/* vertical divider */}

        <div className="w-[75%]">
            
        </div>
        </div>
      </div>
    )
}