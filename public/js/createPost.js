async function newPostHandler(event) {
    event.preventDefault();
  
    const code_block = document.querySelector('.file').value;
    const text = document.querySelector('.textarea').value;
    const user_name = document.querySelector('#user').value;
  
    const response = await fetch(`/`, {
      method: 'POST',
      body: JSON.stringify({
        code_block,
        text,
        user_name,
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
  
  document
    .addEventListener('submit', newPostHandler);


var cancelButton = document.getElementById('cancelButton');
    cancelButton.addEventListener('click', function() {
    window.location.href = 'home.html'; 
    });
  