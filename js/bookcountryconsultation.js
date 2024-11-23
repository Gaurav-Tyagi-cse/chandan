document.addEventListener('DOMContentLoaded', function () {
    const popupContainer = document.getElementById('divBookConsultation');

    // Load the popup content dynamically
    fetch('/common/bookCountryConsultation.html')
        .then(response => response.text())
        .then(data => {
            popupContainer.innerHTML = data;

            initializePredictiveText();
        })
        .catch(error => console.error('Error loading popup:', error));
});

function initializePredictiveText() {
    $(document).ready(function () {
        // Call the function from predictive-course.js to initialize predictive text
        if (typeof initializePredictiveAutocomplete === "function") {
            initializePredictiveAutocomplete();
        } else {
            console.error("Predictive text initialization function not found.");
        }
    });
}

