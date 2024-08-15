let increaseBtn = document.querySelector(".increment_btn");
let decreaseBtn = document.querySelector(".decrement_btn");
let counterNotification = document.getElementById("counter");

// Initialize the counter value
let counterValue = 0;

// Function to update the displayed counter value
function updateCounter() {
    counterNotification.textContent = counterValue;
}

// Event listener for the increment button
increaseBtn.addEventListener("click", function() {
    counterValue++;
    updateCounter();
});

// Event listener for the decrement button
decreaseBtn.addEventListener("click", function() {
    if (counterValue > 0) { // Ensure the counter doesn't go below 0
        counterValue--;
        updateCounter();
    }
});

// Initialize the counter display
updateCounter();