
let buttonIn= document.getElementById("butIn");
        let Email;

        const substring = "@";
        let strongPassword = new RegExp('(?=.{8,})')
       buttonIn.addEventListener("click", function(buttonIn){
        buttonIn.preventDefault()
            if((document.getElementById("email").value).includes(substring)){

                document.getElementById("email").style.backgroundColor = 'lightgreen';

                if(strongPassword.test(document.getElementById("password").value)){

                    let currentDate = new Date(Date.now()+7200000);
                    document.cookie = "acurrent-date=" + currentDate.toUTCString() + ";expires=" + new Date(Date.now() + 3600000).toUTCString() + ";path=/";

                    Email = document.getElementById("email").value;
                    let password = document.getElementById("password").value;
                    document.cookie = "data-login=email:" + Email + ";Password:" + password + ";expires=" + new Date(Date.now() + 3600000).toUTCString() + ";path=/";
                    
                    window.location.href="index.html";

                    document.getElementById("logInNav").style.display = 'none';
                    document.getElementById("logOutNav").style.display = 'inline';
                    document.getElementById("checkbox").style.display = 'none';

                    document.getElementById("password").style.backgroundColor = 'lightgreen';

                }
                else{
                    document.getElementById("password").style.backgroundColor = 'red';
                    alert('Password is not strong enough, it must containt minimum of 8 characters!')
                }
            }
            else{
                alert('Incorrect email, please try again!')
                document.getElementById("email").style.backgroundColor = 'red';

            }
        });
        let cookieValueElement;
        let logOutNav = document.getElementById("logOutNav");
        logOutNav.addEventListener("click", function(){
            document.getElementById("logOutNav").style.display = 'none';
            document.getElementById("logInNav").style.display = 'inline';
            document.getElementById("checkbox").style.display = 'inline';
            document.cookie = "data-login= ;expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            cookieValueElement.textContent = " ";
            document.getElementById("nav-bar").style.paddingTop = '5vh'; 
        });
        

        window.addEventListener("load", function(){
            const cookies = document.cookie.split(";");

            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                if(cookie.startsWith("data-login=")){
                    let cookieValue = cookie.substring("data-login=".length);
                document.getElementById("logInNav").style.display = 'none';
                document.getElementById("logOutNav").style.display = 'inline';
                document.getElementById("checkbox").style.display = 'none';
                cookieValueElement = document.getElementById("emailDisplay");
                    cookieValueElement.textContent = cookieValue;
                    document.getElementById("nav-bar").style.paddingTop = '3vh';
                    document.getElementById("emailDisplay").style.paddingBottom = '1vh';
                }
                else{
                    document.getElementById("nav-bar").style.paddingTop = '6vh'; 
                }
            }
        });