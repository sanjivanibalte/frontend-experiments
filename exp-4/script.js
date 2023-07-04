function validateForm() {
	const firstName = document.getElementById("firstName").value;
	const lastName = document.getElementById("lastName").value;
	const address = document.getElementById("address").value;
	const password = document.getElementById("password").value;
	const email = document.getElementById("email").value;
	const mobileNumber = document.getElementById("mobileNumber").value;
  
	// Regular expressions for validation
	const nameRegex = /^[A-Za-z]{6,}$/;
	const passwordRegex = /^.{6,}$/;
	const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
	const mobileRegex = /^[0-9]{10}$/;
  
	// Validate First Name
	if (!nameRegex.test(firstName)) {
	  alert(
		"First Name should contain alphabets only and be at least 6 characters long."
	  );
	  return false;
	}
  
	// Validate Last Name
	if (!nameRegex.test(lastName)) {
	  alert(
		"Last Name should contain alphabets only and be at least 6 characters long."
	  );
	  return false;
	}
  
	// Validate Address
	if (address === "") {
	  alert("Address cannot be empty.");
	  return false;
	}
  
	// Validate Password
	if (!passwordRegex.test(password)) {
	  alert("Password should be at least 6 characters long.");
	  return false;
	}
  
	// Validate Email
	if (!emailRegex.test(email)) {
	  alert("Invalid Email address.");
	  return false;
	}
  
	// Validate Mobile Number
	if (!mobileRegex.test(mobileNumber)) {
	  alert("Mobile Number should contain exactly 10 digits.");
	  return false;
	}
  
	// All fields are valid
	return true;
  }