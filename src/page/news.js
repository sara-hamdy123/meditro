import "./news.css";
import pic1 from "../assets/pic1.jpg"
import pic11 from "../assets/pic1 (1).jpg";
import pic2 from "../assets/pic2.jpg";
import pic21 from "../assets/pic2 (1).jpg";
import pic3 from "../assets/pic3.jpg";
import pic31 from "../assets/pic3 (1).jpg";
import trangle from "../assets/trangle-orange.png";
import dotsorange from "../assets/square-dots-orange.png";
import linecircleblue from "../assets/line-circle-blue.png";
import waveblue from "../assets/wave-blue.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from "@fortawesome/free-solid-svg-icons/faCalendar";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
function News(){
return(
<section className="news-wraper">
    <div className="container">
        <div className="heading-box text-center">
            <h6 className="title-ex">Latest News</h6>
            <h2 className="title">Our Latest News</h2>
        </div>
        <div className="row">
        <div className="col-lg-4">
        <div className="swiper-wraper">
            <div className="blog">
                <div className="media">
                    <a href="/"><img src={pic1} alt=""/></a>
                </div>
                <div className="post-info">
									<ul className="post-meta">
										<li className="author"><a href="/"><img src={pic11} alt=""/> John deo</a></li>
										<li className="date"><FontAwesomeIcon icon={faCalendar}/>  21 July 2021</li>
									</ul>
									<h5 className="post-title"><a href="/">In this hospital there are special surgeon</a></h5>		
									<a href="/" className="btn-info">Read More <FontAwesomeIcon icon={faChevronRight} className="icon-info"/>  </a>		
				</div>
            </div>
        </div>
        </div>
        <div className="col-lg-4">
        <div className="swiper-wraper">
            <div className="blog">
                <div className="media">
                    <a href="/"><img src={pic2} alt=""/></a>
                </div>
                <div className="post-info">
									<ul className="post-meta">
										<li className="author"><a href="/"><img src={pic21} alt=""/> Peter Packer</a></li>
										<li className="date"><FontAwesomeIcon icon={faCalendar}/>  20 July 2021</li>
									</ul>
                                    <h5 className="post-title"><a href="/">Can you get a diflucan prescription online?</a>	</h5>
                                    <a href="/" className="btn-info">Read More <FontAwesomeIcon icon={faChevronRight} className="icon-info"/>  </a>		
				</div>
            </div>
        </div>
        </div>
        <div className="col-lg-4">
        <div className="swiper-wraper">
            <div className="blog">
                <div className="media">
                    <a href="/"><img src={pic3} alt=""/></a>
                </div>
                <div className="post-info">
									<ul className="post-meta">
										<li className="author"><a href="/"><img src={pic31} alt=""/>  Sonar Moyna</a></li>
										<li className="date"><FontAwesomeIcon icon={faCalendar}/>  19 July 2021</li>
									</ul>
                                    <h5 className="post-title"><a href="/">Why Is Skin Surgeon Considered Underrated</a></h5>
                                    <a href="/" className="btn-info">Read More <FontAwesomeIcon icon={faChevronRight} className="icon-info"/>  </a>		
				</div>
            </div>
        </div>
        </div>
    </div>
    </div>
    <img src={trangle} alt="" className="trangle" />
    <img src={dotsorange} alt="" className="dotsorange" />
    <img src={linecircleblue} alt="" className="linecircleblue" />
    <img src={waveblue} alt="" className="waveblue" />
</section>
)
}
export default News;