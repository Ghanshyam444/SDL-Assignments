function validateForm() {
  var fullName = document.getElementById("fullName").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var phoneNumber = document.getElementById("phoneNumber").value;
  var country = document.getElementById("country").value;
  var gender = document.querySelector('input[name="gender"]:checked');
  var terms = document.getElementById("terms");

  document.getElementById("fullNameError").innerHTML = "";
  document.getElementById("emailError").innerHTML = "";
  document.getElementById("passwordError").innerHTML = "";
  document.getElementById("phoneNumberError").innerHTML = "";
  document.getElementById("countryError").innerHTML = "";
  document.getElementById("genderError").innerHTML = "";
  document.getElementById("termsError").innerHTML = "";

  // Validate Full Name
  if (fullName.length < 3) {
    document.getElementById("fullNameError").innerHTML =
      "Full Name must be at least 3 characters.";
    return false;
  }

  // Validate Email
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    document.getElementById("emailError").innerHTML =
      "Enter a valid email address.";
    return false;
  }

  // Validate Password
  if (password.length < 6) {
    document.getElementById("passwordError").innerHTML =
      "Password must be at least 6 characters.";
    return false;
  }

  // Validate Phone Number
  var phoneRegex = /^[0-9]{10}$/;
  if (!phoneRegex.test(phoneNumber)) {
    document.getElementById("phoneNumberError").innerHTML =
      "Enter a valid 10-digit phone number.";
    return false;
  }

  // Validate Country
  if (country === "") {
    document.getElementById("countryError").innerHTML = "Select your country.";
    return false;
  }

  // Validate Gender
  if (!gender) {
    document.getElementById("genderError").innerHTML = "Select your gender.";
    return false;
  }

  // Validate Terms and Conditions checkbox
  if (!terms.checked) {
    document.getElementById("termsError").innerHTML =
      "You must agree to the terms and conditions.";
    return false;
  }

  alert("Registration successful!");
  return true;
}
