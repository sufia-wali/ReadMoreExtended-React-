import React, { useState } from "react";


const ReadMore = () =>{
  const[show, setShow] = useState(false);
  const showHandler =() =>{
    setShow(!show);
  }

return(
  <div>
    {show && <a onClick={showHandler}>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
       Tempore repellat consectetur accusamus ex eum ea amet soluta,
       minus perspiciatis? Saepe, in nulla temporibus repudiandae ullam
       vel! Perspiciatis optio quibusdam eaque?Lorem ipsum, dolor sit amet consectetur adipisicing elit.
       Tempore repellat consectetur accusamus ex eum ea amet soluta,
       minus perspiciatis? Saepe, in nulla temporibus repudiandae ullam
       vel! Perspiciatis optio quibusdam eaque?Lorem ipsum, dolor sit amet consectetur adipisicing elit.
       Tempore repellat consectetur accusamus ex eum ea amet soluta,
       minus perspiciatis? Saepe, in nulla temporibus repudiandae ullam
       vel! Perspiciatis optio quibusdam eaque?Lorem ipsum, dolor sit amet consectetur adipisicing elit.
       Tempore repellat consectetur accusamus ex eum ea amet soluta,
       minus perspiciatis? Saepe, in nulla temporibus repudiandae ullam
       vel! Perspiciatis optio quibusdam eaque?
    </p>
    </a>
    }
    {!show && <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit
      <a onClick={showHandler}>...</a>
    </p>}
  </div>
)

}

export default ReadMore;