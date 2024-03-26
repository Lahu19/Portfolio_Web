import Heading from "./Heading";
import Section from "./Section";
const Benefits = () => {
  return (
    <Section id="skills">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Skills and Certifications"
        />

        <div className="flex flex-wrap gap-10 mb-10" >
          <h1 class="h3">Programming Languages:
          <ul className="ml-10">
            <li >Proficient in Python, JavaScript, HTML, CSS</li>
            <li >Experienced in Java, C/C++</li>
            <li >Cirtificates of programming languages on Hacker Rank as well as on the Coding Ninjas</li>
          </ul>
          </h1>
          <h1 class="h3">Web Development Technologies:
          <ul className="ml-10">
            <li >Front-end: HTML, CSS, React.js, Bootstrap, Tailwaind CSS</li>
            <li>Back-end: Node.js, Express.js </li>
            <li>Databases: MySQL, MongoDB, Firebase</li>
          </ul>
          </h1>
          <h1 class="h3">Machine Learning & Data Science :
          <ul className="ml-10">
            <li>Basics of Python</li>
            <li>Libraries: PyTorch, Scikit-learn, Pandas, NumPy, Matplotlib</li>
            <li>Techniques: Supervised Learning, Unsupervised Learning</li>
          </ul>
          </h1>
          
          <h1 class="h3">Familiar Technologies and Topics:
          <ul className="ml-10">
            <li>Software Architecture Design</li>
            <li>Version Control: Git, GitHub</li>
            <li> Agile Methodologies</li>
            <li>Software Development Lifecycle (SDLC)</li>
            <li>Problem Solving & Algorithm Design</li>
          </ul>
          </h1>
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
