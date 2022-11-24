import { useEffect, useState } from "react";
import './Back.scss'
function Back() {
    const [btn, setBtn] = useState(false);
    useEffect( () => {
      const handleScroll = () => {
        if ( window.scrollY >= 600 ) {
          setBtn(true)
        }
        else {
          setBtn(false)
        }
      }
      window.addEventListener('scroll',handleScroll)
    }, [] )
    const handleClick = () => {
       window.scrollTo({
         top: 0,
         behavior: "smooth",
       });
    }
  return (
    <div>
      {btn && (
        <button onClick={handleClick} className="btnBackTop">
          <i className="fa-solid fa-angle-up"></i>
        </button>
      )}
    </div>
  );
}

export default Back;
