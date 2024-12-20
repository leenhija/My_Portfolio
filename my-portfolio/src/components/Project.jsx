import { useState } from "react";
import Button from "react-bootstrap/Button";
import GitHub from "../assets/github.svg";
export default function Project({ image, title, date, children ,github }) {
  const [isHovering, setIsHovering] = useState(false);
  function handleIsHoveringTrue() {
    setIsHovering(true);
  }
  function handleIsHoveringFalse() {
    setIsHovering(false);
  }
  return (
    <section
      className=" column-gap-1 rounded-3 mb-4 mt-3 ps-0 pe-0"
      style={{
        boxShadow: "7px 7px rgb(0,0,0,25%)",
        maxWidth: "300px",
        maxHeight:'620px',
        backgroundColor: "#D9D9D9",
        fontFamily: '"Roboto", sans-serif',
      }}
    >
      {!isHovering && (
        <img
          src={image}
          alt="project photo"
          className="mb-4"
          onMouseEnter={handleIsHoveringTrue}
          onMouseLeave={handleIsHoveringFalse}
          style={{
            maxWidth: "100%",
            maxHeight: "200px",
           objectFit:'cover',
            borderRadius: "inherit",
           
          }}
        />
      )}
      {isHovering && (
        <div
          className="d-flex flex-row align-items-center justify-content-center rounded-3 mb-2"
          style={{
            maxWidth: "100%",
            objectFit: "cover",
            height: "200px",
            background: "#424369",
          }}
          onMouseLeave={handleIsHoveringFalse}
        >
          <Button
            variant="light"
            className=" ps-2 pe-2 rounded-4"
            style={{ boxShadow: "7px 7px rgb(0,0,0,25%)", fontWeight: "500" }}
          >
           <a href={github} target="_blank" style={{textDecoration:'none' , color:'black',fontFamily:'"Rubik" , serif'}}> <img src={GitHub} style={{ maxWidth: "20px", maxHeight: "20px" }} />{" "}
            GitHub code</a>
          </Button>
        </div>
      )}
      <div className="d-flex flex-row justify-content-between fw-bold">
        <p className="ps-3 pe-3">{title}</p>
        <p className="ps-3 pe-3">{date}</p>
      </div>
      <div className="d-flex flex-column column-gap-1 text-start ">
        {children}
      </div>
    </section>
  );
}
