const registrationForm = document.getElementById('registrationForm');

registrationForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission
  
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');
  
  // Validate username and password
  if (validateUsername(usernameInput.value) && validatePassword(passwordInput.value)) {
    // Submit the form to the server
    registrationForm.submit();
  } else {
    // Display error messages or perform other actions
    console.log('Invalid username or password.');
  }
});

function validateUsername(username) {
  // Validate username (e.g., check length, special characters, etc.)
  return username.length >= 3;
}

function validatePassword(password) {
  // Validate password (e.g., check length, complexity, etc.)
  return password.length >= 6;
}
const addToWishlistButtons = document.querySelectorAll('.addToWishlist');
const wishlistItems = document.getElementById('wishlistItems');

// Add event listeners to each "Add to Wishlist" button
addToWishlistButtons.forEach(function(button) {
  button.addEventListener('click', function(event) {
    const bookTitle = event.target.previousElementSibling.textContent;
    addToWishlist(bookTitle);
  });
});

function addToWishlist(bookTitle) {
  const listItem = document.createElement('li');
  listItem.textContent = bookTitle;
  wishlistItems.appendChild(listItem);
}
