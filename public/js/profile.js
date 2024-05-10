// creating a widget to upload images
// var myWidget = cloudinary.createUploadWidget({
//   cloudName: 'dwiyfuh6h',
//   uploadPreset: 'vjiganr9'
// }, (error, result) => {
//   if (!error && result && result.event === "success") {
//     console.log('Done! Here is the image info: ', result.info);
//   }
// });
// adding functionality to the button to perform upload on click


console.log('js reached')
const profileFormHandler = async (event) => {
  event.preventDefault();
  const first_name = document.querySelector('#firstName').value.trim();
  const last_name = document.querySelector('#lastName').value.trim();
  const years_coding = document.querySelector('#yearsCoding').value.trim();
  const stack_type = document.querySelector('#stackType').value.trim();
  const portfolio_url = document.querySelector('#portfolioUrl').value.trim();
  const photo_url = document.querySelector('#photoUrl').value.trim();

  console.log(first_name, last_name, years_coding, stack_type, portfolio_url, photo_url)
  const response = await fetch('/api/users/profile', {
    method: 'POST',
    body: JSON.stringify({ first_name, last_name, years_coding, stack_type, portfolio_url, photo_url }),
    headers: { 'Content-Type': 'application/json' },
  });

  console.log(response);
  if (response.ok) {
    // If successful, redirect the browser to the profile page
    document.location.replace('/profile');
  } else {
    alert('Profile not updated, please double check the form.');
  }
}

document
.querySelector('.profile-data')
.addEventListener('submit', profileFormHandler);


// document.getElementById("upload_widget").addEventListener("click", function () {
//   myWidget.open();
// }, false);