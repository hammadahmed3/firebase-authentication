import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getAuth ,signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js";
 
  const firebaseConfig = {
    apiKey: "AIzaSyCHEZ5ZIAnHeXMWT0qJLtKnoC681axOi0c",
    authDomain: "almustafa-e20f5.firebaseapp.com",
    projectId: "almustafa-e20f5",
    storageBucket: "almustafa-e20f5.appspot.com",
    messagingSenderId: "991534346523",
    appId: "1:991534346523:web:acd2acb12e83ed078ae3be",
    measurementId: "G-XXKD70ZG84"
  };
  
  
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  

let lbtn = document.getElementById('lbtn')
lbtn.addEventListener('click',()=>{
    let email =  document.getElementById('lemail').value
    let password =  document.getElementById('lpass').value
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user.email)
    alert('User login successfully')
    location.href = './welcome.html'
    document.getElementById('abc').innerHTML = user.email
})
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode,errorMessage)
  });
})












  
  
//   let btn = document.getElementById('sbtn')
//   btn.addEventListener('click',()=>{
      
//       let email = document.getElementById('semail').value
//       let password = document.getElementById('spass').value
//       createUserWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//       const user = userCredential.user;
//       console.log(user.email)
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       console.log(errorCode,errorMessage)
//     });
//   })









