import "./footer.css";

function Footer(){

    return(
        <div id = "footer">
            <div id = "child1">
                <div id="logo">
                    <figure>
                        <img src="https://www.clarin.eu/sites/default/files/styles/medium/public/icon-services-fcs.png?itok=seug9Hqn" width="150" height="120"></img>
                        <figcaption>Search</figcaption>
                    </figure>
                </div>
                <div id="logo1">
                    <figure>
                        <img src="https://cdn.icon-icons.com/icons2/3179/PNG/512/file_archive_icon_193973.png" width="150" height="120"></img>
                        <figcaption>Arhive</figcaption>
                    </figure>
                </div>
                <div id="logo2">
                    <figure>
                        <img src="https://cdn-icons-png.flaticon.com/512/1454/1454788.png" width="150" height="120"></img>
                        <figcaption>Account</figcaption>
                    </figure>
                </div>
            </div>
            <div id = "child2">
                <span>&copy; Marin Grabovac</span>
            </div>
        </div>
    );
}

export default Footer;