let cookieValueElement;
window.addEventListener("load", function(){
        const cookies = document.cookie.split(";");

        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if(cookie.startsWith("data-login" + "=")){
                let cookieValue = cookie.substring("data-login=".length);
                document.getElementById("logInNav").style.display = 'none';
                document.getElementById("logOutNav").style.display = 'inline';
                cookieValueElement = document.getElementById("emailDisplay");
                cookieValueElement.textContent = cookieValue;
                document.getElementById("nav-bar").style.paddingTop = '3vh';
                document.getElementById("emailDisplay").style.paddingBottom = '1vh';
                document.getElementById("container-userInterface2").style.display ="inline";
                document.getElementById("container-userInterface").style.display ="none";
                document.getElementById("FUN").style.display ="inline";
            }
            else{
                document.getElementById("nav-bar").style.paddingTop = '6vh';
                document.getElementById("container-userInterface2").style.display ="none";
                document.getElementById("FUN").style.display ="none"; 
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
        document.getElementById("container-userInterface2").style.display ="none";
        document.getElementById("container-userInterface").style.display ="inline";
        document.getElementById("FUN").style.display ="none";
    });