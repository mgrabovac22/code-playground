let cookieValueElement;
let cookieValueElement2;
window.addEventListener("load", function(){
   const cookies = document.cookie.split(";");

   for (let i = 0; i < cookies.length; i++) {
       const cookie = cookies[i].trim();
       if(cookie.startsWith("data-login" + "=")){
           let cookieValue = cookie.substring("data-login=email:".length);
           document.getElementById("logInNav").style.display = 'none';
           document.getElementById("logOutNav").style.display = 'inline';
           cookieValueElement = document.getElementById("emailDisplay");
           cookieValueElement.textContent = cookieValue;

           cookieValueElement2 = document.getElementById("EmailDisplayContent");
           cookieValueElement2.textContent = cookieValue;

           document.getElementById("nav-bar").style.paddingTop = '3vh';
           document.getElementById("emailDisplay").style.paddingBottom = '1vh';
       }
       else{
           document.getElementById("nav-bar").style.paddingTop = '6vh'; 
       }
   }
});
let timeDisplayElement;
let cookieValuee;
window.addEventListener("load", function() {
   const cookies = document.cookie.split(";");

   for (let i = 0; i < cookies.length; i++) {
   const cookie = cookies[i].trim();

       if (cookie.startsWith("acurrent-date" + "=")) {
           cookieValuee = cookie.substring("acurrent-date=".length);

           let displayedValue = cookieValuee.slice(0, -3);

           timeDisplayElement = document.getElementById("timeDisplay");
           timeDisplayElement.textContent = displayedValue;
           break;
                   }
               }
           });


let logOutNav = document.getElementById("logOutNav");
logOutNav.addEventListener("click", function(){
   document.getElementById("logOutNav").style.display = 'none';
   document.getElementById("logInNav").style.display = 'inline';
   document.cookie = "data-login= ;expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
   cookieValueElement.textContent = " ";
   document.getElementById("nav-bar").style.paddingTop = '5vh'; 
   window.location.href="index.html";   
});



let expirationDateElement;
let countdownInterval;

window.addEventListener("load", function() {
   const cookies = document.cookie.split(";");

   for (let i = 0; i < cookies.length; i++) {
       const cookie = cookies[i].trim();

       if (cookie.startsWith("acurrent-date" + "=")) {
           let cookieValuee = cookie.substring("acurrent-date=".length);


           let expirationDate = new Date(cookieValuee);
           expirationDate.setTime(expirationDate.getTime() - 3600000);


           clearInterval(countdownInterval);


           countdownInterval = setInterval(function() {
               let currentTime = new Date();
               let timeRemaining = expirationDate - currentTime;
 
 
               
   
               let secondsRemaining = Math.floor(timeRemaining / 1000);
               let minutes = Math.floor(secondsRemaining / 60);
               let seconds = secondsRemaining % 60;

   
               expirationDateElement = document.getElementById("expirationDateDisplay");
               expirationDateElement.textContent = "You have: " + minutes + " min and " + seconds + " s.";
 
               }, 1000); 

               break; 
       }
   }
});