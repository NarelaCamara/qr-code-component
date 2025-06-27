import viteLogo from "../assets/image-qr-code.png";

export const QRcomponent = () => {
  console.log("Nare QR");
  return (
    <div className="container">
      <div className="card">
        <img src={viteLogo} className="image" alt="qr" />
        <div className="section">
          <h2>Improve your front-end skills by building projects</h2>
          <p className="text">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </div>
  );
};
