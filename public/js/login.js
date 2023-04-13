const loginFormHandler = async (event) => {
  event.preventDefault();
  // event.stopPropagation();

  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (email && password) {
    const response = await fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    }
    //   else {
    // alert('Failed to log in.');
    // }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  if (email && password) {
    const response = await fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/login");
      // } else {
      //   alert('Failed to sign up.');
      // }
    }
  }
};

const blah = document.querySelector(".login-form")

if (blah !== null) {
  blah.addEventListener("click", loginFormHandler);
}
  
const blah2 = document.querySelector(".signup-form")

if (blah2 !== null) {
  blah2.addEventListener("click", signupFormHandler);
}
  
