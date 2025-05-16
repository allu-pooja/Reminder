// notify.js

// Request permission for notifications
if ('Notification' in window) {
    Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
            console.log('Notification permission granted.');
        } else {
            console.log('Notification permission denied.');
        }
    });
}

// Function to trigger notifications
function showNotification(eventName, eventDate, eventTime) {
    // Check if notification permission is granted
    if (Notification.permission === 'granted') {
        // Trigger the notification
        const notification = new Notification("Event Reminder", {
            body: `Event: ${eventName} at ${eventTime} on ${eventDate}`,
            icon: 'https://th.bing.com/th?id=OIP.Od5BN0ez2WapogRBlqjJ-wHaHa&w=250&h=250&c=8&rs=1&qlt=90&r=0&o=6&dpr=1.3&pid=3.1&rm=2' // Update this to the correct icon path
        });
    }
}

// Function to check for notifications
function checkForNotifications() {
    // Check events every minute
    setInterval(() => {
        const now = new Date();
        const currentDate = now.toISOString().split('T')[0]; // Get YYYY-MM-DD
        const currentTime = now.toTimeString().split(' ')[0].slice(0, 5); // Get HH:MM

        for (let i = 1; i <= 10; i++) {
            const eventName = localStorage.getItem(`event${i}-name`);
            const eventDate = localStorage.getItem(`event${i}-date`);
            const eventTime = localStorage.getItem(`event${i}-time`);

            if (eventName && eventDate && eventTime) {
                if (eventDate === currentDate && eventTime === currentTime) {
                    showNotification(eventName, eventDate, eventTime);
                    alert(`Your ${eventName} is at ${eventTime} on ${eventDate}.`);
                }
            }
        }
    }, 60000); // Check every minute
}

// Call the function to start checking for notifications
checkForNotifications();
