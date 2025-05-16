
var occur =document.getElementById('event1-name').value;
localStorage.setItem('event1-name', occur);
var date=document.getElementById('event1-date').value;
localStorage.setItem('evvent1-date',date);

/** 
function save(eventId,dateId,timeId,eventNumber){
    const eventName= document.getElementById(eventId).value;
    const eventDate= document.getElementById(dateId).value;
    const eventTime= document.getElementById(timeId).value;

    const eventDetails={
        name: eventName,
        date: eventDate,
        time: eventTime
    };

    localStorage.setItem(`event${eventNumber}`,JSON.stringify(eventDetails));
    console.log("Event:",eventName);
    console.log("date:",eventDate);
    console.log("time:",eventTime);

    alert("Event saved successfully");

}
    
for(let i=1;i<=10;i++){
    document.getElementById(`event${i}-remind`).onclick=function(){
        save(`event${i}-name`,`event${i}-date`,`event${i}-time`,i);

    };
}

**/