import { Link } from 'react-router-dom';

export default function FooterAreaSection() {
    return (
        <footer className="footer-area">
            <div className="container">
                <div className="footer-up">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <Link o="/" className="logo">RS Walls</Link>
                            <p>Design your dream house <br/>
                            </p>
                        </div>
                        <div className="col-lg-2 col-md-6">
                            <h5>Office</h5>
                            <p> 
                            C/ Crucero, 48
                            35660, Corralejo
                            </p>
                            <div className="company-email">
                                <a href="#">info@rswall.es</a>
                            </div>
                            <div className="phone-number">
                                <p>+34 617 504 393 <br/> +34 684 003 946</p>
                            </div>

                        </div>
                        <div className="col-lg-2 offset-lg-1 col-md-6 com-sm-12">
                            <h5>Links</h5>
                            <ul>
                                <li>
                                    <Link to="/about">About</Link>
                                    <Link to="/services">Services</Link>
                                    <Link to="/projects">Project</Link>
                                    <Link to="/price">Pricing</Link>
                                    <Link to="/faq"> FAQ</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <h5>Get in Touch</h5>
                            <ul>
                                <li>
                                    <div className="social-area">
                                        <a href="#"><i className="lab la-facebook-f"></i>Facebook</a>
                                        <a href="#"><i className="lab la-instagram"></i>Instagram</a>
                                        <a href="#"><i className="lab la-linkedin-in"></i>linkedin</a>
                                        <a href="#"><i className="la la-skype"></i>Skype</a>
                                    </div>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </footer>
    )
}