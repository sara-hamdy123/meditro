import headerimg from "../assets/doctor.png";
import squareblue from "../assets/square-blue.png";
import sircleblue from "../assets/chicle-blue-2.png";
import traingleorange from "../assets/trangle-orange.png";
import waveorange from "../assets/wave-orange.png";
import plusorange from "../assets/plus-orange.png";
import "./Home.css";
function Home(){
return(
<header>
<div className="container">
    <div className="row">
        <div className="col-md-6 col-lg-6">
        <div className="header-right">
            <img src={sircleblue} alt="" className="sircleblue" />
            <h5>We Provide All Health Care Solution</h5>
            <h2>Protect Your Health And Take Care To Of Your Health</h2>
            <button><a href="/#">Read More</a></button>
            <img src={traingleorange} alt=""  className="traingleorange"/>
            <img src={plusorange} alt="" className="plusorange" />
            </div>
        </div>
        <div className="col-md-6 col-lg-6">
        <div className="header-box">
            <img src={headerimg} alt="img" className="headerimg" />
            <img src={waveorange} alt="" className="waveorange" />
            <img src={squareblue} alt="img" className="squareBlue"/>
            </div>
        </div>
    </div>
</div>
</header>
)
}
export default Home;