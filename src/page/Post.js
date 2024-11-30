import React, { useState } from 'react'
const Post = () => {
  const [currentslide,setcurrentslide]=useState(1);
  const slidenumber=6;
  const gotonext=()=>{
    setcurrentslide(currentslide=>currentslide+1)
    console.log("s");
    }
    const gotoprev=()=>{
    setcurrentslide(currentslide=>(currentslide>1 ?currentslide-1:1))
    console.log("f");
    }
  return (
    <div>
      {/* <div className="page"> */}
      <div className="vertical">
      <div className='stron'>{currentslide}/{slidenumber}</div>
      <button onClick={gotonext} disabled={currentslide===slidenumber}>next</button>
      <button onClick={gotoprev} disabled={currentslide===1}>previous</button>
      </div>
      {/* </div> */}
    </div>
  )
}

export default Post
