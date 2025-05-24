interface TabBarProps {
     tab: string,
     onTab: React.Dispatch<React.SetStateAction<string>>;
}


export default function Tabbar({tab, onTab} : TabBarProps) {
    const namesList = ['Upcoming', 'Past' , 'Cancelled'];
        
    const mytabsList = namesList.map((item, index) => (
            <div key={index} onClick={()=> onTab(item)} className={`flex-1 h-20 rounded-full flex items-center justify-center ${item == tab ? "bg-[#4FD58E]" : "bg-[#22334F]" }`}>
                    <div className="text-[22px] text-white font-semibold">{item}</div>
            </div>
    ));

    return (
      <div className="flex flex-row w-full h-20 rounded-full bg-[#22334F]"> 
            {mytabsList}
      </div>
    );
}