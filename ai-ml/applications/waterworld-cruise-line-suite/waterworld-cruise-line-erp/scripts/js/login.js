document.getElementById('loginForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  alert('test');
  if (username === 'admin' && password === 'admin') {
    localStorage.setItem('loggedIn', 'true');
    window.location.href = 'dashboard.html';
  } else {
    document.getElementById('loginMessage').textContent = 'Invalid credentials!';
  }
});
