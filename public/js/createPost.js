let code_block = "";

async function newPostHandler(event) {
  event.preventDefault();

  const text = document.querySelector('.textarea').value;


  const response = await fetch(`/api/posts`, {
    method: 'POST',
    body: JSON.stringify({
      code_block,
      text,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    document.location.push('/');
  } else {
    alert('Failed to add post');
  }
}

document.querySelector("#submitButton").addEventListener('click', newPostHandler);

var myWidget = cloudinary.createUploadWidget({
  cloudName: 'dwymtagmc',
  uploadPreset: 'tjj6snc6'
}, (error, result) => {
  if (!error && result && result.event === "success") {
    console.log('Done! Here is the image info: ', result.info);
    code_block = result.info.url
    const previewImage = document.getElementById ("previewImage");
    previewImage.setAttribute ("src", code_block)
  }
}
)

document.getElementById("upload_widget").addEventListener("click", function (event) {
  event.preventDefault();
  myWidget.open();
}, false);


const cancel = async () => {
  const response = await fetch('/', {
    method: 'GET',
  });

  if (response.ok) {
    document.location.replace('/');
  } 
};

document.querySelector('#cancelButton').addEventListener('click', cancel);
