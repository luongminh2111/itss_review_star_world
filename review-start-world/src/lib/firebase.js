// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from './firebase';

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFeJQRxEQYWNiGpUv4sibDSclBdOmsRzQ",
  authDomain: "itss-word-review.firebaseapp.com",
  databaseURL: "https://itss-word-review-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "itss-word-review",
  storageBucket: "itss-word-review.appspot.com",
  messagingSenderId: "88268407369",
  appId: "1:88268407369:web:11ffaf90f28fcc3df43598",
  measurementId: "G-16F4JD49H8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = firebase.auth()
const database = firebase.database()

// Set up our register function0
export function register () {
  // Get all our input fields
  var email = document.getElementById('email').value
  var password = document.getElementById('password').value
  var firstname = document.getElementById('firstname').value
  var address = document.getElementById('address').value
  var lastname = document.getElementById('lastname').value

  // Validate input fields
  if (validate_email(email) === false || validate_password(password) === false) {
    alert('Email or Password is Outta Line!!')
    return
    // Don't continue running the code
  }
  if (validate_field(firstname) === false || validate_field(address) === false || validate_field(lastname) === false) {
    alert('One or More Extra Fields is Outta Line!!')
    return
  }

 
  // Move on with Auth
  auth.createUserWithEmailAndPassword(email, password)
  .then(function() {
    // Declare user variable
    var user = auth.currentUser

    // Add this user to Firebase Database
    var database_ref = database.ref()

    // Create User data
    var user_data = {
      email : email,
      firstname : firstname,
      address : address,
      lastname : lastname,
      last_login : Date.now()
    }

    // Push to Firebase Database
    database_ref.child('users/' + user.uid).set(user_data)

    // DOne
    alert('User Created!!')
  })
  .catch(function(error) {
    // Firebase will use this to alert of its errors
    // var error_code = error.code
    var error_message = error.message

    alert(error_message)
  })
}

// Set up our login function
function login () {
  
  // Get all our input fields
  var email = document.getElementById('email').value
  var password = document.getElementById('password').value

  // Validate input fields
  if (validate_email(email) === false || validate_password(password) === false) {
    alert('Email or Password is Outta Line!!')
    return
    // Don't continue running the code
  }

  auth.signInWithEmailAndPassword(email, password)
  .then(function() {
    // Declare user variable
    var user = auth.currentUser

    // Add this user to Firebase Database
    var database_ref = database.ref()

    // Create User data
    var user_data = {
      last_login : Date.now()
    }

    // Push to Firebase Database
    database_ref.child('users/' + user.uid).update(user_data)

    // DOne
    alert('User Logged In!!')

  })
  .catch(function(error) {
    // Firebase will use this to alert of its errors
    // var error_code = error.code
    var error_message = error.message

    alert(error_message)
  })
}

// Validate Functions
function validate_email(email) {
  var expression = /^[^@]+@\w+(\.\w+)+\w$/
  if (expression.test(email) === true) {
    // Email is good
    return true
  } else {
    // Email is not good
    return false
  }
}

function validate_password(password) {
  // Firebase only accepts lengths greater than 6
  if (password < 6) {
    return false
  } else {
    return true
  }
}

function validate_field(field) {
  if (field == null) {
    return false
  }

  if (field.length <= 0) {
    return false
  } else {
    return true
  }
}

export default app;