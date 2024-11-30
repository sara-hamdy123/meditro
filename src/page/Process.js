import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faChevronRight  } from '@fortawesome/free-solid-svg-icons';
import circleorange from "../assets/circle-orange.png";
import plusorange from "../assets/plus-orange.png";
import circledot from "../assets/circle-dots.png";
import "./Process.css";
function Proces(){
return(
<section>
    <div className="container">
        <h6>Working Process</h6>
        <h2> How We Works?</h2>
        <div className="row">
        <div className="col-md-4 col-sm-6 col-lg-4 mb-30">
            <div className="work-box">
                <div className="work-num">01</div>
                <div className="work-content">
                    <h5 className="title mb-10">Make Appointmnet</h5>   
                    <p>It is a long established fact that a reader will be distracted by the readable content of.</p>
                </div>
                <a href="/" className="btn">View More <FontAwesomeIcon icon={faChevronRight}/></a>
            </div>
        </div>
        <div className="col-md-4 col-sm-6 col-lg-4 mb-30">
            <div className="work-box active">
                <div className="work-num">02</div>
                <div className="work-content">
                    <h5 className="title mb-10">Take Treatment</h5>   
                    <p>It is a long established fact that a reader will be distracted by the readable content of.</p>
                </div>
                <a href="/" className="btn ">View More <FontAwesomeIcon icon={faChevronRight}/></a>
            </div>
        </div>
        <div className="col-md-4 col-sm-6 col-lg-4 mb-30">
            <div className="work-box">
                <div className="work-num">03</div>
                <div className="work-content">
                    <h5 className="title mb-10"> Registeration</h5>   
                    <p>It is a long established fact that a reader will be distracted by the readable content of.</p>
                </div>
                <a href="/" className="btn">View More <FontAwesomeIcon icon={faChevronRight}/></a>
            </div>
        </div>
        </div>
        <img src={circleorange} alt="" className='circleorange' />
        <img src={circledot} alt="" className='circledot' />
        <img src={plusorange} alt="" className='plusorange' />
    </div>
</section>
)
}
export default Proces;