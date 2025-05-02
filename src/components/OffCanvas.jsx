import offCanvasImg from "@/assets/img/offcanvas-img.jpg"
import { Link } from 'react-router-dom';

export default function OffCanvas() {
    return (
        <div className="extra-info">
            <div className="close-icon menu-close">
            <button aria-label="Close menu">
                    <i className="las la-times"></i>
                </button>
            </div>
            <div className="logo-side mb-30">
                <div className="logo">
                    <Link to="/home-2" className="logo">RS alls.</Link>
                </div>
            </div>
            <div className="side-info">
                <div className="contact-list mb-40">
                    {/*<h4>About</h4>*/}
                    <p>Bienvenido a RS Walls, un estudio de arquitectura que ofrece un servicio integral, incorporando además soluciones constructivas innovadoras con el sistema XPanel.
              </p>
                    <img src={offCanvasImg} alt="" style={{ height: 'auto'}}/>

                    <div className="mt-30 mb-30">
                        <Link to="/contact" className="white-btn">Contáctanos</Link>
                    </div>
                </div>
                <div className="social-area-wrap">
                    <a href="#"><i className="lab la-facebook-f"></i></a>
                    <a href="#"><i className="lab la-instagram"></i></a>
                    <a href="#"><i className="lab la-linkedin-in"></i></a>
                    <a href="#"><i className="lab la-skype"></i></a>
                </div>
            </div>
        </div>
    )
}