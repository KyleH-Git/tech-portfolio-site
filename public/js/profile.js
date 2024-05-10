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