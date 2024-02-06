import "../components-css/frame1.css"

const Frame1 = () => {
  return (
    <div className="frame1">
        <div className="headline">
            Turn Dreams Into Reality With <span>Personal Loans</span>
        </div>
        <div className="avail-zero">
            <div>
                <img src="/public/assets/avail.png" alt="" />
                <div>
                    <p>Avail Zero</p>
                    <h6>Processing Fee</h6>
                </div>
                
            </div>
            <div>
                <img src="/public/assets/quick.png" alt="" />
                <div>
                    <p>Quick</p>
                    <h6>Personal Loan</h6>
                </div>
            </div>
        </div>

        <div className="avail-zero1">
            <div>
                <img src="/public/assets/hand.png" alt="" />
                <div>
                    <p>Lowest</p>
                    <h6>Intrest Rates</h6>
                </div>
                
            </div>
            <div>
                <img src="/public/assets/docu.png" alt="" />
                <div>
                    <p>Miniamal</p>
                    <h6>Documentation</h6>
                </div>
            </div>
        </div>

        <button className="btn">Apply Now</button>

        

        <div className="father-img">
            <img src="/public/assets/father.png" alt="" />
        </div>
    </div>
  )
}

export default Frame1