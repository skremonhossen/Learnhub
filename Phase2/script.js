function showSignup() {
  document.getElementById('signup-form').style.display = 'block';
}

function showLogin() {
  document.getElementById('signup-form').style.display = 'none';
}

function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  alert(`Logged in as ${email} (dummy function)`);
}

function signup() {
  const name = document.getElementById('signup-name').value;
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;
  alert(`Signed up as ${name} (${email}) (dummy function)`);
}
