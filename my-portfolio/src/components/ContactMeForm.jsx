import { useState } from "react";
import Button from "react-bootstrap/Button";
import check from '../assets/check.png'
import cross from '../assets/cross.png'
export default function ContactMeForm() {
  
  const formInitialDetails = {
    fullName: "",
    email: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});
  const onFormUpdate=(category , value)=>{
    setFormDetails({
        ...formDetails,
        [category]:value
    })
  }
  const handleSubmit=async(e)=>{
    e.preventDefault();
    console.log(formDetails);
    setButtonText('Sending...');
    let response= await fetch('http://localhost:3000/contact',{
        method:'POST',
        headers:{
            "Content-Type":"Application/json;charset=utf-8",
        },
        body:JSON.stringify(formDetails),
    });
    setButtonText('Send');
    let result=await response.json();
    setFormDetails(formInitialDetails);
    if(result.code===200){
         setStatus({success:true , message:'Message sent successfully',})
    } else{
        setStatus({success:false , message:'Somthing went wrong, please try agail later.'})
    }
  }
  return (
    <div
      className="grid col p-3 rounded-3"
    >
      <p className="text-start fw-bold" style={{ fontFamily: '"Montserrat", serif' }}>
        Feel free to reach out to me anytime!
      </p>
      <form onSubmit={handleSubmit} className="d-flex flex-column gap-1 text-start ">
        <input
          type="text"
          placeholder="Full Name"
          className="rounded-2 p-2 mb-2"
          style={{
            backgroundColor: "#FAF3EC",
            border: "none",
            color: "#393939",
            maxWidth: "300px",
            fontFamily: '"Roboto" , sans-serif',
          }}
          required
          value={formDetails.fullName}
          onChange={(e)=>{onFormUpdate('fullName',e.target.value)}}
        />
        <input
          type="email"
          placeholder="Email"
          className="rounded-2 p-2 mb-2"
          style={{
            backgroundColor: "#FAF3EC",
            border: "none",
            color: "#393939",
            maxWidth: "300px",
            fontFamily: '"Roboto" , sans-serif',
          }}
          required
          value={formDetails.email}
          onChange={(e)=>{onFormUpdate('email',e.target.value)}}
        />
        <textarea
         
          placeholder="Your Message"
          className="rounded-2 p-3"
          style={{
            backgroundColor: "#FAF3EC",
            border: "none",
            color: "#393939",
            maxWidth: "500px",
            height: "250px",
            fontFamily: '"Roboto" , sans-serif',
            resize: "none",
            fontSize: "12px",
          }}
          required
          value={formDetails.message}
          onChange={(e)=>{onFormUpdate('message',e.target.value)}}
        ></textarea>
        {status.message &&
        <p className="text-start" style={{fontFamily:'"Montserrat", serif', color:status.color}}>{status.message}
        {status
        .success ?
        <img className="ms-1" src={check}/>: <img className="ms-1"  src={cross}/>}</p>
        }
        <div
          className="d-flex flex-row justify-content-end align-items-start pt-0 mt-0"
          style={{ width: "100%" }}
        >
          <Button
            className="mt-4 pt-2 pb-2 ps-4 pe-4 rounded-4"
            type="submit"
            style={{
              boxShadow: "0px 4px 4px rgb(0,0,0,25%)",
              border: "none",
              fontWeight: "500",
              backgroundColor: "#60A7F9",
              fontFamily:'"Rubik" , serif'
            }}
          >
            {buttonText}
          </Button>
        </div>

      </form>
    </div>
  );
}
