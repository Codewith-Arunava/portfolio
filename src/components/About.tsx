import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          3rd Year B.Tech CSE (AI &amp; ML) student with experience in machine learning and backend development. Skilled in building ML models, developing REST APIs, and creating AI-powered web applications.
        </p>
        <h3 className="title" style={{ marginTop: "3rem" }}>Certifications</h3>
        <ul className="para" style={{ listStyleType: "circle", paddingLeft: "1.5rem", marginTop: "1rem" }}>
          <li>Oracle Generative AI Professional Certificate</li>
          <li>Mastering Generative AI &amp; ChatGPT</li>
          <li>AWS Certified Machine Learning</li>
          <li>Artificial Intelligence with Python</li>
          <li>Introduction to Cloud Computing</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
