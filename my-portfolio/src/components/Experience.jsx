

export default function Experience({ image, title, children }) {
  return (
    <div
      className="container d-flex flex-row flex-md-row flex-column gap-2 ps-0 pe-0 rounded-3"
      style={{
        backgroundColor: "#D9D9D9",
        maxWidth: "1000px",
        border: "3px #d4d4d8 solid",
        boxShadow: "7px 7px rgb(0,0,0,25%)",
      }}
    >
      <div
        className="col d-flex flex-row justify-content-start "
        style={{
          marginLeft: "0px",
          padding: "0px",
          maxWidth:'350px',
          minWidth:'150px',
          overflow: "hidden", // Prevent overflow
        }}
      >
        <img
          src={image}
          className="rounded-3"
          style={{
            width: "100%", // Fully responsive width
            height: "auto", // Maintain aspect ratio
            objectFit: "cover", // Adjust image to fill container
            maxWidth: "350px", // Optional: limit max width
          }}
          alt="Experience"
        />
      </div>
      <div className="col text-start lh-sm d-flex flex-column align-items-start p-2">
        <h6
          className="fw-bold text-start mt-2"
          style={{ fontFamily: '"Roboto", sans-serif' }}
        >
          {title}
        </h6>
        {children}
      </div>
    </div>
  );
}
