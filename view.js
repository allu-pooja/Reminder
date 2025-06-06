window.onload = function () {
    const eventList = document.getElementById('event-list');
    const categories = ["Academics", "Personal", "Events"];
    let allEvents = [];

    // Collect events
    categories.forEach(category => {
        const eventsData = JSON.parse(localStorage.getItem(`${category}-events`)) || [];
        eventsData.forEach((event, index) => {
            allEvents.push({ ...event, category, index });
        });
    });

    // Sorting
    allEvents.sort((a, b) => {
        const dateTimeA = new Date(`${a.date}T${a.time}`);
        const dateTimeB = new Date(`${b.date}T${b.time}`);
        return dateTimeA - dateTimeB;
    });

    eventList.innerHTML = "";

    if (allEvents.length === 0) {
        eventList.innerHTML = "<p>No events saved yet</p>";
    } else {
        allEvents.forEach(event => {
            const eventBox = document.createElement('div');
            eventBox.classList.add('event-box', event.category);
            eventBox.textContent = `${event.name} (${event.category}) - ${event.time} on ${event.date}`;

            const optionsMenu = document.createElement('div');
            optionsMenu.classList.add('event-options');
            optionsMenu.style.display = "none";

            //edit btn
            const editBtn = document.createElement('button');
            editBtn.textContent = "Edit";
            editBtn.onclick = (e) => {
                e.stopPropagation();
                editEvent(event.category, event.index);
            };

            //delete btn
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = "Delete";
            deleteBtn.onclick = (e) => {
                e.stopPropagation();
                deleteEvent(event.category, event.index);
            };

            optionsMenu.appendChild(editBtn);
            optionsMenu.appendChild(deleteBtn);
            eventBox.appendChild(optionsMenu);

            eventBox.addEventListener("click", () => {
                document.querySelectorAll('.event-options').forEach(menu => {
                    if (menu !== optionsMenu) menu.style.display = "none";
                });
                optionsMenu.style.display = optionsMenu.style.display === "none" ? "block" : "none";
            });

            eventList.appendChild(eventBox);
        });
    }

    // Close any open menu if clicked outside event box
    document.addEventListener('click', function (e) {
        if (!e.target.closest('.event-box')) {
            document.querySelectorAll('.event-options').forEach(menu => {
                menu.style.display = "none";
            });
        }
    });
};

//edit function
function editEvent(category, index) {
    const events = JSON.parse(localStorage.getItem(`${category}-events`)) || [];
    const event = events[index];

    const newName = prompt("Edit event name:", event.name);
    const newDate = prompt("Edit event date (YYYY-MM-DD):", event.date);
    const newTime = prompt("Edit event time (HH:MM):", event.time);

    if (newName && newDate && newTime) {
        events[index] = { name: newName, date: newDate, time: newTime };
        localStorage.setItem(`${category}-events`, JSON.stringify(events));
        location.reload();
    } else {
        alert("Edit cancelled or invalid input.");
    }
}

// delete function
function deleteEvent(category, index) {
    if (confirm("Are you sure you want to delete this event?")) {
        const events = JSON.parse(localStorage.getItem(`${category}-events`)) || [];
        events.splice(index, 1);
        localStorage.setItem(`${category}-events`, JSON.stringify(events));
        location.reload();
    }
}
