function validateForm() {
    let name = document.forms["contact-form"]["name"].value;
    if (name == "" || name == null) {
      alert("Name must be filled out");
      return false;
    }

    let email = document.forms["contact-form"]["email"].value;
    if (email == "" || email == null) {
        alert("Email must be filled out");
        return false;
    }
    let message = document.forms["contact-form"]["message"].value;
    if (message == "" || message == null) {
      alert("Message must be filled out");
      return false;
    }

    document.getElementById("submit-button").addEventListener("click", function(event) {
        event.preventDefault();
        alert("Thank you for reaching out to us! We will get back to you shortly.");
        document.getElementById("contact-form").reset();
    });
}
