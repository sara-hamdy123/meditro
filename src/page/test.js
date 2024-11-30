import "./test.css";
import shape from "../assets/shape.png";
import pic1 from "../assets/pic1 (1).jpg";
import pic2 from "../assets/pic2 (1).jpg";
import pic3 from "../assets/pic3 (1).jpg";
import pic4 from "../assets/pic4 (1).jpg";
import pic5 from "../assets/pic5 (1).jpg";
import pic6 from "../assets/pic6.jpg";
import plusorange from "../assets/plus-orange.png";
import squareblue from "../assets/square-blue.png";
import circledot from "../assets/circle-dots.png";
import circleorange from "../assets/circle-orange-2.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons/faQuoteLeft";
import { faArrowLeft, faArrowRight, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import React,  {  useState } from "react";
const Test=()=> {
    const [currentslide,setcurrentslide]=useState(1);
    const slidenumber=6;  
    const gotonext=()=>{
        setcurrentslide(currentslide=>currentslide+1)
        console.log("next");
        };
        const gotoprev=()=>{
        setcurrentslide(currentslide=>(currentslide>1 ?currentslide-1:1))
        console.log("previous");
        };
return(
<section className="test-wrapper">
    <div className="container">
        <div className="heading-box">
            <h6 className="title-ex">Testimonial</h6>
            <h2 className="title ">See What Are The Patients <br/>Saying About us</h2>
        </div>
        <div className="row align-items-center">
            <div className="col-lg-6 text-center">
                <div className="thumb-warper">
                    <img src={shape} alt=""  className="shape"/>
                    <ul>
								<li data-member="1"><a href="/"><img src={pic1} alt=""/></a></li>
								<li data-member="2"><a href="/"><img src={pic2} alt=""/></a></li>
								<li data-member="3"><a href="/"><img src={pic3} alt=""/></a></li>
								<li data-member="4"><a href="/"><img src={pic4} alt=""/></a></li>
								<li data-member="5"><a href="/"><img src={pic5} alt=""/></a></li>
								<li data-member="6"><a href="/"><img src={pic6} alt=""/></a></li>
					</ul>
                </div>
            </div>
            <div className="col-lg-6 ">
                <div className="swiper-box ">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est tempora adipisci, maiores nam quod pariatur? Quae modi animi quam rerum recusandae, dolores neque obcaecati Est tempora adipisci, maiores nam quod pariatur? Quae modi dolores neque obcaecati Est</p>
                    <h4>John Doe</h4>
                    <h5>PATIENT</h5>
                    <div className="quote-icon">
                        <FontAwesomeIcon icon={faQuoteLeft}/>
                    </div>
                    <FontAwesomeIcon icon={faQuoteRight} className="quoteright"/>
                </div>
                <div className="vertical">
                        <button onClick={()=>console.log("d")} ><FontAwesomeIcon icon={faArrowLeft} className="arrownext"/></button>
                        <button onClick={gotoprev} disabled={currentslide===1}><FontAwesomeIcon icon={faArrowRight} className="arrowprev"/></button>
                        <div className='stron'>{currentslide} / {slidenumber}</div>
                    </div>
                </div>
        </div>
    </div>
    <img src={plusorange} alt=""  className="plusorange" />
    <img src={squareblue} alt="" className="squareblue" />
    <img src={circledot} alt=""  className="circledot"/>
    <img src={circleorange} alt="" className="circleorang" />
</section>
)
}
export default Test;