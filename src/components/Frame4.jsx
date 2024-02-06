import "../components-css/frame4.css"
import toast, { Toaster } from 'react-hot-toast';

const Frame4 = () => {
    function ApplyNow(){
        toast.success('Applied successfully!')
    }

  return (
    <div className="frame4">
        <div className="div1">
            <img src="/public/frame4/mobile.png" alt="" />
        </div>
        <div className="div2">
            <div className="lighting">
                <img src="/public/frame4/Star.png" alt="" />
                <p className="pp">Lightning Fast Process</p>
            </div>
            <div className="line">
                <img src="/public/frame4/line.png" alt="" />
            </div>
            <div>
                <p>Customer Share Basic Details</p>
            </div>
            <button onClick={ApplyNow} className="btnnow">Apply Now</button>
            <Toaster/>
        </div>
    </div>
  )
}

export default Frame4