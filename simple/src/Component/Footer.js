// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import FooterMenu from "./FooterMenu"
import Copyright from "./Copyright"

function Footer(props){
    return(
        <div className="container">
            <footer className="py-3 my-4">
                <FooterMenu />
                <Copyright  copyright= {props.copyright}/>
            </footer>
</div>
    );
};

export default Footer;