let section="";
 document.addEventListener("DOMContentLoaded", function () {
            const eventContainer = document.querySelector(".events-container");
             section = eventContainer.dataset.section;

            function createEventBox() {
                return `
                    <div class="box">
                        <p>Event  </p>
                        <input type="text" id="event-name" placeholder="Enter event type">
                        <input type="date" id="event-date">
                        <input type="time" id="event-time">
                        <button type="button" onclick="saveEvent()">Set Reminder</button>
                        <p id="save-status" class="status-message"></p>
                    </div>`;
            }
            eventContainer.innerHTML = createEventBox();
});
  function saveEvent() {
    const eventName = document.getElementById(`event-name`).value.trim();
    const eventDate = document.getElementById(`event-date`).value;
    const eventTime = document.getElementById(`event-time`).value;
    const statusElement = document.getElementById(`save-status`);

// Get existing events for this section
    if (eventName && eventDate && eventTime) {
        let eventsData = JSON.parse(localStorage.getItem(`${section}-events`)) || [];

        // Create new event object
        const newEvent = {
            name: eventName.toLowerCase(),
            date: eventDate,
            time: eventTime
        };
        //handling duplicates
    let isDuplicate = eventsData.some(event => 
        event.name === newEvent.name &&
        event.date === newEvent.date &&
        event.time === newEvent.time
    );

    if (isDuplicate) {
         statusElement.textContent = "This event already exists!";
        statusElement.style.color = "red";
        return; 
    }

        // Add the new event to the array
        eventsData.push(newEvent);

        // Save updated array back to localStorage
        localStorage.setItem(`${section}-events`, JSON.stringify(eventsData));

        statusElement.textContent = "Event Saved Successfully!";
        statusElement.style.color = "green";
        alert("Event Saved Successfully");

        // Clear the form
        document.getElementById(`event-name`).value = "";
        document.getElementById(`event-date`).value = "";
        document.getElementById(`event-time`).value = "";
    } else {
        statusElement.textContent = "Please fill in all fields!";
        statusElement.style.color = "red";
    }
}
