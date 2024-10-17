const ContactMe = () => {
  const styles = {
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)" /* Two equal columns */,
      gap: "10px",
    },
  };
  return (
    <div className="wrapper">
      <div style={styles.grid}>
        <div>Email:</div>
        <div>kennetharaga@gmail.com</div>
        <div>LinkedIn: </div>
        <div><a href="https://www.linkedin.com/in/kenneth-araga-81a4261b2/">Kenneth Araga</a></div>
        <div>
            Github: 
        </div>
        <div>
            <a href="https://github.com/kevrom0215">kevrom0215</a>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
