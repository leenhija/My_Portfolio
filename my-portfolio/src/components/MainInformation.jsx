import my_photo from "../assets/my_photo.png";
import Button from "react-bootstrap/Button";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import { useEffect } from "react";
export default function MainInformation() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (in milliseconds)
      offset: 100, // Offset (in pixels) from the original trigger point
    });
  }, []);

  return (
    <main
      id="home"
      className="container row gap-5 mb-5 p-5"
      data-aos="fade-down"
    >
      <section className="col d-flex-col ms-0 align-items-center justify-content-end text-start mt-5 pt-5   ">
        <p className="h6" style={{ fontFamily: '"Roboto", sans-serif' }}>
          Hi, my name is leen.
        </p>
        <p
          className="h1"
          style={{
            fontSize: "70px",
            fontFamily: '"Kadwa", serif',
            fontWeight: "bold",
          }}
        >
          I Craft logic for
        </p>
        <p
          className="h1"
          style={{
            fontSize: "70px",
            marginTop: "-15px",
            fontFamily: '"Kadwa", serif',
            fontWeight: "bold",
          }}
        >
          growth
        </p>
        <p className="h6 mt-3" style={{ fontFamily: '"Roboto", sans-serif' }}>
          Junior Front-End Web Developer with three-months internship experience
          in web development
        </p>
        <a
          href="#Contact"
          className="text-decoration-none"
          style={{ color: "black" }}
        >
          {" "}
          <Button
            className="mt-4 ps-4 pe-4 pt-2 pb-2 rounded-4"
            style={{
              boxShadow: "0px 4px 4px rgb(0,0,0,25%)",
              fontWeight: "500",
              backgroundColor: "#F8CF4B",
              fontFamily:'"Rubik" , serif',
              border: "none",

            }}
          >
            Contact Me
          </Button>
        </a>
      </section>
      <section className="col d-flex align-items-center justify-content-center">
        <img
          src={my_photo}
          alt="photo of me"
          className="p-3"
          style={{ maxWidth: "400px", maxHeight: "400px", marginTop: "80px" }}
        />
      </section>
    </main>
  );
}
