// grabs values of inputs during signup and posts them to the server api route
const signupHandler = async (event) => {
  event.preventDefault();
  const username = document.querySelector('#signup-username').value.trim();
  const email = document.querySelector('#signup-email').value.trim();
  const password = document.querySelector('#signup-password').value.trim();
  const role = document.querySelector('#role').value.trim();
  const portfolio_url = document.querySelector('#portfolio_url').value.trim();
  const stackType = document.querySelector('#code_type').value.trim();




  if (username && email && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ username, email, password, role, portfolio_url, stackType }),
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