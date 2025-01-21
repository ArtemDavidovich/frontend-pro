import { useState } from "react";


export default function DayNightChanger() {
    const [dayTime, setDayTime] = useState(false);
    
   // let text = "Night 🌚";    

  const dayTimeText = () => {
    setDayTime((state) => !state);
    // if (text === "Night 🌚") {
    //   text = "Day 🌞";
      
    // } else if(text === "Day 🌞"){
    //   text = "Night 🌚";
      
    // }    
  };  

  return (
    <div>
      <span>{dayTime ? 'Day 🌞' : 'Night 🌚'}</span>
      <button onClick={dayTimeText}>Change</button>
    </div>
  );
}
