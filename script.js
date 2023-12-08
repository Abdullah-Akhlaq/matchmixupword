

// script.js
function performSignup() {
    const signupUsername = document.getElementById("signup-username").value;
    const signupEmail = document.getElementById("signup-email").value;
    const signupPassword = document.getElementById("signup-password").value;

    createUserWithEmailAndPassword(auth, signupEmail, signupPassword)
        .then((userCredential) => {
            // User signed up successfully
            const user = userCredential.user;
            console.log("User signed up:", user);
        })
        .catch((error) => {
            // Handle errors
            console.error("Error signing up:", error.message);
        });

    alert('testing');
}
