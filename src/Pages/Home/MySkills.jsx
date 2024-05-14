import data from "../../data/index.json";
import { FaJsSquare, FaReact, FaNodeJs, FaPython, FaSwift } from 'react-icons/fa';

export default function MySkills() {
  const mySkills = [
    { 
      title: "JavaScript", 
      description: "Expert in leveraging JavaScript for complex front-end and server-side applications.", 
      icon: <FaJsSquare />,
      skills: [
        "Building dynamic SPAs (Single Page Applications)",
        "RESTful API development and integration",
        "Asynchronous programming with Promises and Async/Await",
        "ES6+ syntax and modern JavaScript frameworks"
      ]
    },
    { 
      title: "React.js", 
      description: "Skilled in React.js for creating highly responsive and dynamic user interfaces.",
      icon: <FaReact />,
      skills: [
        "Component-based architecture using JSX",
        "State management with Redux and Context API",
        "Hooks for functional components",
        "Performance optimization techniques"
      ]
    },
    { 
      title: "Node.js", 
      description: "Proficient in using Node.js to develop scalable and efficient server-side solutions.", 
      icon: <FaNodeJs />,
      skills: [
        "Express.js for server setup",
        "Handling databases with MongoDB and Mongoose",
        "Creating RESTful services",
        "Implementing security with JWT and OAuth"
      ]
    },
    { 
      title: "Python", 
      description: "Advanced skills in Python for sophisticated data analysis and backend development.", 
      icon: <FaPython />,
      skills: [
        "Data analysis with Pandas and NumPy",
        "Web scraping with Beautiful Soup and Scrapy",
        "Developing web applications with Django and Flask",
        "Automating tasks and scripting"
      ]
    },
    { 
      title: "Swift", 
      description: "Experienced in Swift for innovative iOS application development.", 
      icon: <FaSwift />,
      skills: [
        "Building user-friendly interfaces with UIKit",
        "Integrating APIs and cloud services",
        "Core Data for local data storage",
        "Utilizing Swift's concurrency features"
      ]
    }
  ];

  return (
    <section className="skills--section" id="mySkills">
      <div className="portfolio--container">
        <p className="section--title">Professional Skills</p>
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



