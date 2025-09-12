
document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      let name = form["name"].value;
      if (name == "" || name == null) {
        alert("Name must be filled out");
        return;
      }
      let email = form["email"].value;
      if (email == "" || email == null) {
        alert("Email must be filled out");
        return;
      }
      let message = form["message"].value;
      if (message == "" || message == null) {
        alert("Message must be filled out");
        return;
      }
      alert("Thank you for contacting us! We will get back to you shortly.");
      form.reset();
    });
  }
});