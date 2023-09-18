import './nav-bar.css';

function NavBar(){

    return(
        <div id = "nav">
            <div class="link">
                <a href="https://accounts.google.com/signup/v2/createaccount?service=mail&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&flowName=GlifWebSignIn&flowEntry=SignUp&theme=glif">Gmail</a>
            </div>
            <div class="link">
                <a href="https://twitter.com/">Twitter</a>              
            </div>
            <div class="link">
                <a href="https://telegram.org/">Telegram</a>   
            </div>
        </div>
    );
}

export default NavBar;