localStorage.getItem("event1-name");


/** 
function displaySavedEvents(){
    const eventList=document.getElementById("event-list");
    eventList.innerHTML='';

    for(let i=0;i<=10;i++){
        const eventName=JSON.parse(localStorage.getItem('event${i}'));
        const eventDate=null;
        const eventTime=null;
        const eventNumber=1;
        const eventDetails={
            name: eventName,
            date: eventDate,
            time: eventTime
        };
        localStorage.getItem(`event${eventNumber}`,JSON.stringify(eventDetails));
          console.log("Event:",eventName);
           console.log("date:",eventDate);
            console.log("time:",eventTime);
    
    if(eventDetails){
        const listItem=document.createElement('li');
        listItem.textContent=`Event ${i}:${eventName},Date ${i}:${eventDate},Time ${i}:${eventTime}`;
        console.log(`Event ${i}:${eventName},Date ${i}:${eventDate},Time ${i}:${eventTime}`)
        eventList.appendChild(listItem);
    }
    }
}


for(let i=1;i<=10;i++){
    document.getElementById(`event${i}-remind`).onclick=function(){
        save(`event${i}-name`,`event${i}-date`,`event${i}-time`,i);
    };
}
 window.onload=displaySavedEvents;

 **/