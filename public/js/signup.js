const signupFormHandler = async (event) => {
  event.preventDefault();
console.log('javascript called');

  const username = document.querySelector('#username').value.trim();
  const email = document.querySelector('#email').value.trim();
  const password = document.querySelector('#password').value.trim();
  const role = document.querySelector('#userType').value.trim();
  
  console.log(username, email, password, role);
  
  if (username && email && password && role) {
    
    const response = await fetch('/api/users/createAccount', {
      method: 'POST',
      body: JSON.stringify({ username, email, password, role}),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      const userData = await response.json()
      if(userData.role === 'client'){
        document.location.replace('/');
      }else{
        document.location.replace('/profile');
      }
    } else {
      alert(response.statusText);
    }
  }
};

document
.querySelector('.signup-form')
.addEventListener('submit', signupFormHandler);

console.log('reach js');