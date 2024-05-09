const loginHandler = async (event) => {
    event.preventDefault();
  
    const email = document.querySelector('#login-email').value.trim();
    const password = document.querySelector('#login-password').value.trim();
  
    if (email && password) {
      const response = await fetch('/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to log in. Double check your login information or sign up if you\'re a new user.');
      }
    }
  };