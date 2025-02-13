// Function for enlarging the box on click and revealing more info
function enlargeBox(element) {
  // First, reset all cards to default size
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    if (card !== element) {
      card.classList.remove("enlarged");
    }
  });

  // Toggle the enlarged class on the clicked card
  element.classList.toggle("enlarged");
}

// Form Submission Handling
document
  .getElementById("lead-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Get form values
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let country = document.getElementById("country").value;

    // Validate name
    if (!/^[a-zA-Z ]+$/.test(name)) {
      alert("❌ Enter a valid name.");
      return;
    }

    // Validate email
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      alert("❌ Enter a valid email.");
      return;
    }

    // Validate phone
    if (!/^\d{10}$/.test(phone)) {
      alert("❌ Enter a valid 10-digit phone number.");
      return;
    }

    // Submit the form (Optional: You can send this data to a backend or show a success message)
    alert("🎉 Application Submitted Successfully! 🚀");

    // Optional: Reset the form after submission (if desired)
    document.getElementById("lead-form").reset();
  });
