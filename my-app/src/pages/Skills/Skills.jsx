const Skills = () => {
    // Array of skills with their corresponding image URLs
    const skills = [
      {
        name: "Angular",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2560px-Angular_full_color_logo.svg.png",
      },
      {
        name: "AWS",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
      },
      {
        name: "Java",
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg",
      },
      {
        name: "NodeJs",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png",
      },
      {
        name: "Python",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/2560px-Python-logo-notext.svg.png",
      },
      {
        name: "React",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2560px-React-icon.svg.png",
      },
    ];
  
    // Sort skills alphabetically by name
    skills.sort((a, b) => a.name.localeCompare(b.name));
  
    const styles = {
      grid: {
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)", // Two equal columns
        gap: "10%",
        alignItems: "center",
      },
      skillContainer: {
        display: "flex",
        alignItems: "center", // Align items vertically centered
      },
      image: {
        width: "100px", // Adjusted width for better fit
        height: "100px",
        objectFit: "contain",
        marginLeft: "10px", 
        alignItems: "center",
        justifyContent: "center"// Add space between text and image
      },
    };
  
    return (
      <div className="wrapper">
        <div style={styles.grid}>
          {skills.map((skill) => (
            <div key={skill.name} style={styles.skillContainer}>
              <div>{skill.name}</div>
              <div>
                <img
                src={skill.imageUrl}
                alt={`${skill.name} logo`}
                style={styles.image}
              />
              </div>
            </div>
            
          ))}
        </div>
      </div>
    );
  };
  
  export default Skills;
  