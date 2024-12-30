// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("adopt-form");

    // Create a notification container
    const notificationContainer = document.createElement("div");
    notificationContainer.classList.add("notification-container");
    document.body.appendChild(notificationContainer); // Append the notification container to the body

    // Handle form submission
    form.addEventListener("submit", function(event) {
        // Prevent the form from submitting to a server (since we're doing it with JavaScript)
        event.preventDefault();

        // Collect form data
        const name = document.getElementById("name").value;
        const address = document.getElementById("address").value;
        const phone = document.getElementById("phone").value;
        const animalCode = document.getElementById("animal-code").value;
        const animalName = document.getElementById("animal-name").value;

        // Simple form validation
        if (!name || !address || !phone || !animalCode || !animalName) {
            showNotification("Please fill out all fields.", "error");
            return;
        }

        // Display a confirmation notification
        showNotification(`Thank you for your interest in adopting ${animalName} (${animalCode}). Your details have been submitted.`, "success");

        // Optionally, clear the form after submission
        form.reset();
    });

    // Function to show notification
    function showNotification(message, type) {
        // Create a new notification element
        const notification = document.createElement("div");
        notification.classList.add("notification", type);
        notification.innerText = message;

        // Append the notification to the container
        notificationContainer.appendChild(notification);

        // Automatically remove the notification after 5 seconds
        setTimeout(() => {
            notification.remove();
        }, 5000);
    }
});
