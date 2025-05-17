 let section="";
 document.addEventListener("DOMContentLoaded", function () {
            const eventContainer = document.querySelector(".events-container");
             section = eventContainer.dataset.section;

            function createEventBox(index) {
                return `
                    <div class="box">
                        <p>Event ${index}</p>
                        <input type="text" id="event${index}-name" placeholder="Enter event type">
                        <input type="date" id="event${index}-date">
                        <input type="time" id="event${index}-time">
                        <button type="button" onclick="saveEvent(${index})">Set Reminder</button>
                        <p id="save-status-${index}" class="status-message"></p>
                    </div>`;
            }

            for (let i = 1; i <= 10; i++) {
                eventContainer.innerHTML += createEventBox(i);
            }
});

        function saveEvent(eventIndex) {
    const eventName = document.getElementById(`event${eventIndex}-name`).value.trim();
    const eventDate = document.getElementById(`event${eventIndex}-date`).value;
    const eventTime = document.getElementById(`event${eventIndex}-time`).value;
    const statusElement = document.getElementById(`save-status-${eventIndex}`);

    if (eventName && eventDate && eventTime) {
        const existingName = localStorage.getItem(`${section}-event${eventIndex}-name`);
        const existingDate = localStorage.getItem(`${section}-event${eventIndex}-date`);
        const existingTime = localStorage.getItem(`${section}-event${eventIndex}-time`);

        if (existingName || existingDate || existingTime) {
            statusElement.textContent = "Event already exists. Please choose another slot.";
            statusElement.style.color = "red";
            alert("Event already exists. Please choose another slot.");
        } else {
            localStorage.setItem(`${section}-event${eventIndex}-name`, eventName);
            localStorage.setItem(`${section}-event${eventIndex}-date`, eventDate);
            localStorage.setItem(`${section}-event${eventIndex}-time`, eventTime);

            statusElement.textContent = "Event Saved Successfully!";
            statusElement.style.color = "green";
            alert("Event Saved Successfully");
        }
    } else {
        statusElement.textContent = "Please fill in all fields!";
        statusElement.style.color = "red";
    }
}
