import "./appointment.css";
import traingle from "../assets/trangle-orange.png";
import waveblue from "../assets/wave-blue.png";
import waveorange from "../assets/wave-orange.png";
import circledot from "../assets/circle-orange.png";
import mobile from "../assets/mobile.png";
import map from "../assets/map-pin.png";
import setting from "../assets/setting.png";
import check from "../assets/check.png";
import chat from "../assets/chat.png";
import women from "../assets/women.png";

function Appointment(){
return(
<section>
    <div className="container-fluid">
        <div className="appontment-innner">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-5 col-md-6 col-lg-6">
                    <div className="appointment-form">
                        <h3 className="title">Book Appointment</h3>
                        <form action="#">
                            <div className="form-group">
                                <div className="drop-down ">
                                    <select name="" id="" className="form-select">
                                        <option select="">Select Department</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="drop-down bootstrap-select">
                                    <select name="" id="" className="form-select">
                                        <option select="">Select Doctor</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>

                                </div>
                            </div>
                            <div className="form-group">
									<input type="text" className="form-control" placeholder="Your Name"/>
							</div>
							<div className="form-group">
									<input type="number" className="form-control" placeholder="Phone Numbers"/>
							</div>
							<div className="form-group">
									<input type="date" className="form-control"/>
							</div>
							<button type="submit" className="btn-submit ">Appointment Now</button>
                        </form>
                    </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-7">
                        <div className="appointment-thumb">
                            <img src={mobile} alt="" />
                            <div className="images-group">
                            <img src={women} alt=""  className="img1"/>
                            <img src={map} alt="" className="img2" />
                            <img src={setting} alt="" className="img3" />
                            <img src={check} alt=""  className="img4"/>
                            <img src={chat} alt="" className="img5" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img src={traingle} alt="" className="traingle" />
            <img src={waveorange} alt="" className="waveorange" />
            <img src={waveblue} alt=""  className="waveblue"/>
            <img src={circledot} alt="" className="circledot" />
        </div>
    </div>
</section>
)
}
export default Appointment;