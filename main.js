// Initialize Firebase

var config = {
   apiKey: '**************************',
   authDomain: '**************************.firebaseapp.com',
   databaseURL:
      'https://**************************.firebaseio.com',
   projectId: '**************************',
   storageBucket: '**************************.appspot.com',
   messagingSenderId: '324937665222',
   appId: '1:324937665222:web:941cc8e841a9483a8365c7',
   measurementId: 'G-GKN4YV04QR',
};

firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document
   .getElementById('contactForm')
   .addEventListener('submit', submitForm);

// Submit form
function submitForm(e) {
   e.preventDefault();

   // Get values
   var name = getInputVal('name');
   var company = getInputVal('company');
   var email = getInputVal('email');
   var phone = getInputVal('phone');
   var message = getInputVal('message');

   // Save message
   saveMessage(name, company, email, phone, message);

   // Show alert
   document.querySelector('.alert').style.display = 'block';

   // Hide alert after 3 seconds
   setTimeout(function () {
      document.querySelector('.alert').style.display =
         'none';
   }, 3000);

   // Clear form
   document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id) {
   return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message) {
   var newMessageRef = messagesRef.push();
   newMessageRef.set({
      name: name,
      company: company,
      email: email,
      phone: phone,
      message: message,
   });
}
