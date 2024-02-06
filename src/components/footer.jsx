import "../components-css/footer.css"
import tatalogo from "../assets/tataneu.png"
import facebook from "../assets/social.png"
import insta from "../assets/socialInsta.png"
import youtube from "../assets/youtube.png"
import linkedin from "../assets/linki.png"


const Footer = () => {
  return (
    <div className="footer-main">
        <div className="inner-main">
            <div className="first-box">
                <img src={tatalogo} alt="tataneu-logo" />
                <div className="social">
                   <img src={facebook} alt="facebook" />
                   <img src={insta} alt="instagram" />
                   <img src={youtube} alt="youtube" />
                   <img src={linkedin} alt="linkedin" />
                </div>
            </div>

            <div className="second-box">
                <div className="property">
                    <span>Help&amp;Support</span>
                    <p>Terms & Service</p>
                    <p>Privacy Policy</p>
                    <p>FAQ</p>
                </div>
                <div className="contact">
                    <span>Customer Care</span>
                    <p>2972 Westheimer Rd. Santa Ana, Illinois 85486</p>
                    <p>987654321</p>
                    <p>Tataneu Email ID</p>
                </div>
            </div>

        </div>
    
    </div>
  )
}

export default Footer