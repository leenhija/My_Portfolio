import { useState } from "react";
export default function Skill({ image, text }) {
  const [isHover, setIsHover] = useState(false);
  function handlehoverTrue(){
    setIsHover(true);
  }
  function handlehoverFalse(){
    setIsHover(false);
  }
 let  styling='col rounded-3 d-flex flex-column align-items-center justify-content-center';
 let imgStyling='p-1';
 if(isHover){
    styling+=' bg-primary';
    imgStyling='p-0'
 }else{
    styling+=' bg-secondary';
 }
  return (
    <div
      className={`${styling} animateitem`}
      style={{ boxShadow: "7px 7px rgb(0,0,0,25%)" }}
      onMouseEnter={handlehoverTrue}
      onMouseLeave={handlehoverFalse}
    >
      <img
        src={image}
        alt="my skills"
        className={imgStyling}
        style={{ maxWidth: "60px", maxHeight: "60px", marginBottom:'15px' }}
      />
      <p>{text}</p>
    </div>
  );
}
