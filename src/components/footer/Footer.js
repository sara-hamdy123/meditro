import footerlogo from "../../assets/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faPhone} from '@fortawesome/free-solid-svg-icons';
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import insta from "../../assets/instagram.png";
import linkedin from "../../assets/linkedin.png";
import footerline from "../../assets/footer-line.png";
import waveblue from "../../assets/wave-blue.png";
import sircledot from "../../assets/circle-dots.png";
import plusblue from "../../assets/plus-blue.png";
import footercerve from "../../assets/footer-shape.png"
import "./Footer.css";
function Footer(){
    return(
    <footer >
        <img src={footercerve} alt="" />
        <div className="container">
            <div className="row">
                <div className="col-md-3 col-sm-6">
                    <img src={footerlogo} alt="" className="footerlogo" />
                    <p>Lorem ipsum is dolor sit amet, csectetur adipiscing elit, dolore smod tempor incididunt ut labore et.</p>
                    <div className="footer-contact">
                        <div className="footer-icon">
                        <FontAwesomeIcon icon={faPhone} className="phone"/>
                        </div>
                        <div className="footer-text">
                            <h6> Contact Us</h6>
                            <h4> + 01 123 456 7890</h4>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6">
                <h2> Quick Links</h2>
                <img src={footerline} alt="" className="footerline"/>
                <ul>
                <li><a href="#/">About Us</a></li>
                <li><a href="/">Services</a></li>
                <li><a href="/">Booking</a></li>
                <li><a href="/">Faq's</a></li>
                <li><a href="/">Blogs</a></li>
                <li><a href="/">Our Team</a></li>
                </ul>
                </div>
                <div className="col-md-3 col-sm-6">
                <h2>Our Service</h2>
                <img src={footerline} alt="" className="footerline"/>
                <ul>
                <li><a href="/">Dental Care</a></li>
                <li><a href="/">Cardiac Clinic</a></li>
                <li><a href="/">Message Therapy</a></li>
                <li><a href="/">Cardiology</a></li>
                <li><a href="/">Precise Diagnosis</a></li>
                <li><a href="/">Ambulance Services</a></li>
                </ul>
                </div>
                <div className="col-md-3 col-sm-6">
                <h2>Subscribe</h2>
                <img src={footerline} alt="" className="footerline"/>
                <input className="email-address" placeholder="Email Adddress"/>
                <button className="sub" type="submit">Subscribe Now</button>
                <div className="social-links">
                <img src={facebook} alt="" />
                <img src={twitter} alt="" />
                <img src={insta} alt="" />
                <img src={linkedin} alt="" />
                </div>
                <img src={plusblue} alt=""  className="plusblue"/>
                </div>
            </div>
            <img src={sircledot} className="sircledot" alt="" />
            <img src={waveblue} className="waveblue"  alt=""/>
            <img src={waveblue} alt="" className="waveone"/>
        </div>
        <div className="footer-bottom">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <span> Copyright 2024  &copy; Made and developed By  <a className="sara" href="/"> Sara</a></span>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    )
}
export default Footer;