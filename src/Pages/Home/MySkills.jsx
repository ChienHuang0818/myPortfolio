import { FaJsSquare, FaReact, FaNodeJs, FaPython, FaSwift } from 'react-icons/fa';

export default function MySkills() {
  const mySkills = [
    { 
      title: "JavaScript", 
      description: "Proficient in JavaScript syntax and using the React library to build web pages.", 
      icon: <FaJsSquare />,
      skills: [
        "Building dynamic Single Page Applications (SPAs)",
        "RESTful API development and integration",
        "Asynchronous programming with Promises and Async/Await",
        "ES6+ syntax and modern JavaScript frameworks"
      ]
    },
    { 
      title: "React.js", 
      description: "Experienced with the React library for creating highly responsive and dynamic user interfaces.",
      icon: <FaReact />,
      skills: [
        "Component-based architecture using JSX",
        "State management with Redux and Context API",
        "Hooks for functional components",
        "Performance optimization techniques"
      ]
    },
    { 
      title: "Swift", 
      description: "Created a To-Do List project using Swift and understand how to utilize it.",
      icon: <FaSwift />,
      skills: [
        "Building user-friendly interfaces with UIKit",
        "Integrating APIs and cloud services",
        "Core Data for local data storage",
        "Utilizing Swift's concurrency features"
      ]
    },
    { 
      title: "Python", 
      description: "Developed web projects using Python and the Flask framework.",
      icon: <FaPython />,
      skills: [
        "Data analysis with Pandas and NumPy",
        "Developing web applications with Django and Flask",
      ]
    }
  ];

  return (
    <section className="skills--section" id="mySkills">
      <div className="portfolio--container">
        <h2 className="skills--section--heading">Technical Proficiencies</h2>
      </div>
      <div className="skills--section--container">
        {mySkills.map((item, index) => (
          <div key={index} className="skills--section--card">
            <div className="skills--section--card--content">
              <h3 className="skills--section--title">
                {item.icon}
                {item.title}
              </h3>
              <p className="skills--section--description">{item.description}</p>
              <ul className="skills--list">
                {item.skills.map(skill => <li key={skill}>{skill}</li>)}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
