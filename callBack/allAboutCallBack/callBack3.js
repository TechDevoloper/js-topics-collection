// This task involves creating a function that simulates a user login system with asynchronous behavior, and handling the login process through callbacks.

// Task: Simulate a User Login System
// You need to create a function that simulates a user login. The function should:

// Accept a username and password.
// Simulate a delay using setTimeout() (to mimic the time taken for an authentication process).
// Use a callback to either return an error message if the login fails or return a success message if the login is successful.
// If the login is successful, the callback should print a message saying "Login successful, welcome [username]!"
// If the login fails (wrong credentials), the callback should print "Invalid username or password.

const validUsername = "sourabh";
const validPassword = "251390sss";

function loginCallBack(username, password, callback) {
  setTimeout(() => {
    if (username === validUsername && password === validPassword) {
      callback(`login successfull, welcome ${username}`);
    } else {
      callback(`Invalid username or password`);
    }
  }, 2000);
}

function handleLoginResult(message) {
    console.log(message);
  
}

//  loginCallBack("sourabh", "251390sss", handleLoginResult);
  loginCallBack("s","251390sss",handleLoginResult);
