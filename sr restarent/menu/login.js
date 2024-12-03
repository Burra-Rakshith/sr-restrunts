// Switch between Login and Signup forms
document.getElementById("goToLogin").addEventListener("click", () => {
    document.getElementById("signup").classList.add("hidden");
    document.getElementById("login").classList.remove("hidden");
  });
  
  document.getElementById("goToSignup").addEventListener("click", () => {
    document.getElementById("login").classList.add("hidden");
    document.getElementById("signup").classList.remove("hidden");
  });
  
  // Signup functionality
  document.getElementById("signupForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("signupUsername").value;
    const password = document.getElementById("signupPassword").value;
  
    if (localStorage.getItem(username)) {
      alert("User already exists! Please log in.");
    } else {
      localStorage.setItem(username, password);
      alert("Signup successful! You can now log in.");
      document.getElementById("goToLogin").click();
    }
  });
  
  // Login functionality
  document.getElementById("loginForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;
  
    const storedPassword = localStorage.getItem(username);
    if (storedPassword === password) {
      alert("Login successful! Welcome back, " + username + "!");
    } else {
      alert("Invalid username or password.");
    }
  });





  // Login functionality
document.getElementById("loginForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;
  
    const storedPassword = localStorage.getItem(username);
    if (storedPassword === password) {
      alert("Login successful! Redirecting to home page...");
      // Redirect to home page (index.html)
      window.location.href = "index.html";
    } else {
      alert("Invalid username or password.");
    }
  });
  
  