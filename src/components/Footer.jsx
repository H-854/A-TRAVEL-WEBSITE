import logo from "../assets/images/logo.svg";
export default function Footer(){
    return (
        <div className="foot container mt-5 ">
            <div className="f1">
                <img src={logo} alt="logo" />
                <p className="my-3">We always make our customer <br /> happy by providing as many <br /> choices as possible.</p>
                <div>
                    <i className="fa-brands fa-instagram icon"></i>
                    <i className="fa-brands fa-facebook icon"></i>
                    <i className="fa-brands fa-twitter icon"></i>
                </div>
            </div>
            <div className="f2">
                <h3>About</h3>
                <p>About Us</p>
                <p>Features</p>
                <p>News</p>
                <p>Menu</p>
            </div>
            <div className="f3">
                <h3>Company</h3>
                <p>Partner With Us</p>
                <p>FAQ</p>
                <p>Blog</p>
            </div>
            <div className="f4">
                <h3>Support</h3>
                <p>Account</p>
                <p>Support Center</p>
                <p>Feedback</p>
                <p>Contact Us</p>
                <p>Accessibility</p>
            </div>
            <div className="f5">
                <h3>Get in Touch</h3>
                <p>Question or feedback?<br /> We'd love to hear from you</p>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Enter a feedback"/>
                    <button class="btn btn-secondary" type="button">Send</button>
                </div>
            </div>
        </div>
    )
}