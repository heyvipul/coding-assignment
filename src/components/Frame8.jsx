import "../components-css/frame8.css"
import toast, { Toaster } from 'react-hot-toast';

const Frame8 = () => {
  function ApplyNow(){
    toast.success('Referl sent!')
}

  return (
    <div className="frame8">
        <div className="first">
            <h3>Refer & Earn Now</h3>
            <p>Get a ₹500 Big Basket gift card</p>
            <button onClick={ApplyNow}>REFER AND EARN</button><br />
            <Toaster/>
            <span>Terms and Conditions apply</span>
        </div>
        <div className="second">
            <img className="phone" src="/public/frame7/iphone.png" alt="" />
            <img className="two-man" src="/public/frame7/two-man.png" alt="" />
        </div>
    </div>
  )
}

export default Frame8