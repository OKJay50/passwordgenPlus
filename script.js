// Generate a random password
function generatePassword() {
    // Retrieve user input
    var passwordLength = parseInt(document.getElementById("password-length").value);
    var includeLowercase = document.getElementById("include-lowercase").checked;
    var includeUppercase = document.getElementById("include-uppercase").checked;
    var includeNumeric = document.getElementById("include-numeric").checked;
    var includeSpecial = document.getElementById("include-special").checked;
  
    // Validate password length
    if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
      alert("Please enter a valid password length between 8 and 128 characters.");
      return;
    }
  
    // Validate at least one character type is selected
    if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
      alert("Please select at least one character type.");
      return;
    }
  
    // Define character sets
    var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numericChars = "0123456789";
    var specialChars = "!@#$%^&*()-_=+[{]}\\|;:'\",<.>/?";
  
    // Define the character set based on user selection
    var characterSet = "";
    if (includeLowercase) {
      characterSet += lowercaseChars;
    }
    if (includeUppercase) {
      characterSet += uppercaseChars;
    }
    if (includeNumeric) {
      characterSet += numericChars;
    }
    if (includeSpecial) {
      characterSet += specialChars;
    }
  
    // Generate the password
    var password = "";
    for (var i = 0; i < passwordLength; i++) {
      var randomIndex = Math.floor(Math.random() * characterSet.length);
      password += characterSet[randomIndex];
    }
  
    // Display the generated password
    document.getElementById("generated-password").value = password;
  }
  
  // Attach event listener to the generate button
  document.getElementById("generate-btn").addEventListener("click", generatePassword);
  
