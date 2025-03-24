import "./ContactMe.css";

const ContactMe = () => {
  const styles = {
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)" /* Two equal columns */,
      gap: "10px",
    },
  };
  return (
    <div className="gridly">
      <h2 className="description"> Contact Information</h2>
      <div className="blank">
        <div className="email-container">
          <div className="icon-wrapper">
            <i className="fas fa-envelope"></i>
          </div>
          <div className="email-info">
            <span className="email-label">Email</span>
            <span className="email-address">kennetharaga@gmail.com</span>
          </div>
        </div>
        <div className="email-container">
          <div className="icon-wrapper">
            <i className="fa fa-phone"></i>
          </div>
          <div className="email-info">
            <span className="email-label">Phone</span>
            <span className="email-address">(+63) 917 889 3375</span>
          </div>
        </div>
        <div className="email-container">
          <div className="icon-wrapper">
            <i className="fa fa-map-marker"></i>
          </div>
          <div className="email-info">
            <span className="email-label">Location</span>
            <span className="email-address">Quezon City, Metro Manila</span>
          </div>
        </div>
        <h3 className="connect-label">Connect with me</h3>
        <div className="social-grid">
          <div className="icon-brand">
            <a href="https://www.linkedin.com/in/kenneth-araga-81a4261b2/">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
          <div className="icon-brand">
            <a href="https://github.com/kevrom0215">
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
        </div>

        {/* <div>LinkedIn: </div>
        <div>
          <a href="https://www.linkedin.com/in/kenneth-araga-81a4261b2/">
            Kenneth Araga
          </a>
        </div>
        <div>Github:</div>
        <div>
          <a href="https://github.com/kevrom0215">kevrom0215</a>
        </div> */}
      </div>
    </div>
  );
};

export default ContactMe;
