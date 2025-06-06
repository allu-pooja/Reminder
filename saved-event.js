window.onload = function () {
    const eventList = document.getElementById('event-list');
    const section = document.body.dataset.section; // Academics, Personal, Events
    let eventsFound = false;

    // Get the events array for this section
    const eventsData = JSON.parse(localStorage.getItem(`${section}-events`)) || [];

    if (eventsData.length === 0) {
        eventList.innerHTML = "<h3>No events saved yet</h3>";
        return;
    }

    eventsData.forEach(event => {
        const { name, date, time } = event;
        eventsFound = true;

        // Display the event
        const eventBox = document.createElement('div');
        eventBox.classList.add('event-box', section);
        eventBox.textContent = `Event: ${name}, Date: ${date}, Time: ${time}`;
        eventList.appendChild(eventBox);
    });
    if (!eventsFound) {
        eventList.innerHTML = "<p>No events saved yet</p>";
    }
};
