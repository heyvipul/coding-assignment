import "../components-css/footer.css"

const Footer = () => {
  return (
    <div className="footer-main">
        <div className="inner-main">
            <div className="first-box">
                <img src="/public/tataneu.png" alt="tataneu-logo" />
                <div className="social">
                   <img src="/public/social.png" alt="" />
                   <img src="/public/socialInsta.png" alt="" />
                   <img src="/public/youtube.png" alt="" />
                   <img src="/public/linki.png" alt="" />
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