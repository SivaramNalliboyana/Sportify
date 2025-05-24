



export default function ChatView() {
   const pic = "https://www.investmentweek.com/content/images/size/w1200/2024/12/InvestmentWeek---AI-auf-der-Kippe.jpg";


    return (
       <div className="bg-gray-500 m-3 h-20 rounded-2xl drop-shadow-xl"> 
                <div className="flex flex-row">
                    <div className="w-[10%] h-20 ">
                        <div className=" w-10 h-10 m-5 rounded-full overflow-hidden">
                                 <img src={pic} className="w-full h-full object-cover"></img>
                        </div>
                       
                    </div>

                     <div className="w-[75%] h-20">
                        <div className="p-4 ml-5">
                            <div className="text-[14px] text-black font-semibold">Sundar Pichai</div>
                            <div className="text-[12px] mt-2 ml-0.5 text-gray-300 font-semibold">Up for volleyball ?</div>
                        </div>
                     </div>



                      <div className="w-[15%] h-20">
                         <div className="p-4 text-[11px] text-black font-semibold">11 am</div>
                      </div>
                </div>
        </div>
    );
}