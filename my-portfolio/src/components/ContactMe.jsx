import contactme from "../assets/contactme.png";
import ContactMeForm from "./ContactMeForm";
import linkedin from '../assets/linkedin.svg'
import github from '../assets/githubLogo.svg'
import facebook from '../assets/facebook.svg'
export default function ContactMe() {
  return (
    <section id="Contact" className="container grid colpb-0 mb-0 mt-5">
      <div
        className="animateitem container grid row rounded-3 p-3"
        style={{ backgroundColor: "#9CC8FA" }}
      >
        <div className="col d-flex flex-column justify-content-center align-items-center my-column"
        
        >
          <img
            src={contactme}
            alt="contact me image"
            style={{ maxWidth: "400px", maxHeight: "300px" }}
          />
        </div>
        <div className="col ">
          <ContactMeForm />
        </div>
      </div>
      <div
        className="container grid row d-flex flex-row justify-content-between pt-5 ps-5 pe-5"
        style={{ maxWidth: "100%" }}
      >
        <p
          style={{ fontFamily: '"Montserrat", serif' }}
          className="col text-start"
        >
          © 2024 Leen, All rights reserved.
        </p>
        <ul className="col d-flex flex-row gap-3 justify-content-end text-decoration-none list-unstyled">
          <li>
            <a href="https://www.linkedin.com/in/leen-abo-alhija-a-24b0a3229/" target="_blank">
             <img src={linkedin}/>
            </a>
          </li>
          <li>
            <a href="https://github.com/leenhija" target="_blank">
                <img src={github}/>
            </a>
          </li>
          <li>
          <a href="https://www.facebook.com/leen.hija.3?mibextid=ZbWKwL" target="_blank">
                <img src={facebook}/>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
