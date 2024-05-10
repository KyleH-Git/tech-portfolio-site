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

  // allow user to update description on click of edit button 
  document.addEventListener('DOMContentLoaded', function() {
    const descriptionDisplay = document.getElementById('description-display');
    const editBtn = document.getElementById('edit-btn');

    editBtn.addEventListener('click', function() {
        const currentDescription = descriptionDisplay.textContent;
        const descriptionInput = document.createElement('input');
        descriptionInput.setAttribute('type', 'text');
        descriptionInput.setAttribute('value', currentDescription);

        descriptionDisplay.replaceWith(descriptionInput);

        editBtn.textContent = 'Save';

        editBtn.addEventListener('click', function() {
            const newDescription = descriptionInput.value;
            descriptionInput.replaceWith(descriptionDisplay);
            descriptionDisplay.textContent = newDescription;
            editBtn.textContent = 'Edit';
        });
    });
});