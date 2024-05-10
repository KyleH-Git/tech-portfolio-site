// creating a widget to upload images
var myWidget = cloudinary.createUploadWidget({
  cloudName: 'dwiyfuh6h',
  uploadPreset: 'vjiganr9'
}, (error, result) => {
  if (!error && result && result.event === "success") {
    console.log('Done! Here is the image info: ', result.info);
  }
}
)
// adding functionality to the button to perform upload on click
document.getElementById("upload_widget").addEventListener("click", function () {
  myWidget.open();
}, false);

// grabs values of inputs during signup and posts them to the server api route
const signupHandler = async (event) => {
  event.preventDefault();
  const username = document.querySelector('#signup-username').value.trim();
  const email = document.querySelector('#signup-email').value.trim();
  const password = document.querySelector('#signup-password').value.trim();

  if (username && email && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ username, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Profile already exists. Log in or use a different email.');
      
    }
  }
};

document.getElementById("login").addEventListener("click", function () {
  document.location.replace('/login');
 });