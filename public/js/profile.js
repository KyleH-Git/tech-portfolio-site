let photo_url;
var myWidget = cloudinary.createUploadWidget({
  cloudName: 'dwiyfuh6h',
  uploadPreset: 'vjiganr9'
}, (error, result) => {
  if (!error && result && result.event === "success") {
    console.log('Done! Here is the image info: ', result.info);
    photo_url = result.info.url;
  }
});



console.log('js reached')
const profileFormHandler = async (event) => {
  event.preventDefault();

  const first_name = document.querySelector('#firstName').value.trim();
  const last_name = document.querySelector('#lastName').value.trim();
  const years_coding = document.querySelector('#yearsCoding').value.trim();
  const stack_type = document.querySelector('#stackType').value.trim();
  const portfolio_url = document.querySelector('#portfolioUrl').value.trim();


  console.log(first_name, last_name, years_coding, stack_type, portfolio_url, photo_url)
  const response = await fetch('/api/users/profile', {
    method: 'POST',
    body: JSON.stringify({photo_url, years_coding, stack_type, first_name, last_name, portfolio_url}),
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
.querySelector('#form-submit')
.addEventListener('click', profileFormHandler);


document.getElementById("upload_widget").addEventListener("click", function (event) {
  event.preventDefault();
  myWidget.open();
}, false);