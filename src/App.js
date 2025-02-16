import React, { useState } from "react";
import "./App.css";
import './assets/fonts/mabook/fonts.css';

function App() {
  const misc = [
    { id: 1, title: "Resume | About Me", image: `${process.env.PUBLIC_URL}/images/resume.png`, skills: ["(See 'Skills')"], tools: ["(See 'Skills')"], description: "Born and raised in Buffalo New York, I've always had a passion for technology, games, and design. Graduating with a Bachelor of Science in New Media Interactive Development, I've developed a passion for improving one's day-to-day life through technology. I strive to create fresh experiences and innovative designs and interfaces for my users, and my goal is to be able to provide out of the box solutions for companies and users." }
  ];

  const work = [
    { id: 1, title: "QR Code Generator Website", image: `${process.env.PUBLIC_URL}/images/qrcodesite.png`, skills: ["Project Management", "Web Development", "UI/UX Design/Development", "Cloud Computing", "Azure Development", "Scrum Management"], tools: ["HTML", "CSS", "JavaScript", "Node.js", "Bulma CSS", "JSON", "Azure", "Figma", "Brandfolder", "Smartsheet"], description: "This QR Code Generator is an internal website that allows Moog employees around the company to create Moog branded QR codes. Teams are able to request QR Code presets that populate through Brandfolder's API (a data asset management platform) if they will have recurring use cases for their QR Codes. One time users are also able to insert their own images if their team doesn't require a preset. This website has language translation capability, limited customization (to maintain brand standards), and offers accessability options through the 'printing guidelines' button and the color selection. I am the sole developer on the project, and I am currently in the process of securing the site with Azure authentication and key vaults." },
    { id: 2, title: "Tracer AI, Brandfolder, and SharePoint API Integration", image: `${process.env.PUBLIC_URL}`, skills: ["API Integration", "Data Management", "Automation", "Software Development"], tools: ["JavaScript", "Node.js", "Brandfolder API", "Tracer AI API", "SharePoint API"], description: "This project entails utilizing the Brandfolder, Tracer AI, and SharePoint APIs in order to transfer images and metadata from Moog SharePoint lists to Brandfolder's asset management platform and then to Tracer AI to monitor for brand infringements across the internet." },
    { id: 3, title: "EHS Intranet Website", image: `${process.env.PUBLIC_URL}/images/ehspage.png`, skills: ["UI/UX Design", "SharePoint Development", "SharePoint Administrator", "PowerApps Development", "Graphic Design"], tools: ["SharePoint", "PowerApps", "PowerBI", "Adobe Photoshop", "Figma"], description: "For this project, Moog's Environmental Health and Safety team brought me on to revamp their SharePoint Intranet site. Over my 10 weeks with the team, I created over 70 intranet pages using SharePoint. Along with the pages, I created a PowerApp to display their team members, a PowerBI application to display audit analytics, and used Photoshop to design graphics for their homepage. During this process I was tasked with organizing meetings throughout our branch and various parts of the company as well as user testing with employees. My work on this site was received very well and went on to be used throughout other facets of the company, where various assets and templates of mine were used throughout Moog's intranet." },
    { id: 4, title: "OCM Infographic Design", image: `${process.env.PUBLIC_URL}/images/ocmdesign.png`, skills: ["UI/UX Design", "Graphic Design"], tools: ["SAP EnableNow", "Adobe Photoshop", "PowerPoint", "Figma", "Jira", "Power Automate"], description: "During my time working part time with the Organizational Change Management, I was tasked with developing a style guide for their eBooks, creative info graphs to display survey data, and develop a PowerAutomate flow to store and process OCM training attendance data. Above, is an example of one of my info graphs that I developed for one of the team's surveys. Unfortunately due to several restructures within the team, work was limited and projects had often gotten scrapped. However this was a great learning opportunity and taught me to be flexible and responsive in work environments." },
    { id: 5, title: "AI Developer Research", image: `${process.env.PUBLIC_URL}/images/airesearch.png`, skills: ["Software Development", "Project Management", "Scrum Management"], tools: ["Postman API", "Visual Studio Code", "OpenAI", "GPT", "Claude", "Titan", "Llama", "Azure DevOps"], description: "The goal of this project was to test different large language models on their ability to write code in different languages that were pertinent to Moog. I lead the JavaScript, and worked with 2 other interns to run hundreds of prompts through the Postman API. In the end, our efforts were pooled together to create an internal article on our findings. The graph of our findings are listed above." }
  ];

  const projects = [
    { id: 1, title: "Gravity Golf", image: `${process.env.PUBLIC_URL}/images/gravitygolf.png`, skills: ["UI/UX Design/Development", "Software Development"], tools: ["C#", "Unity", "AxureRP", "Adobe Photoshop", "Trello"], description: "For this project, I led the team in UI design and development. The project is currently in development as of 9/20/24 and is expected to wrap for publishing in June 2025, so there are several updates to come!" },
    // { id: 2, title: "Excelify", image: "", tools: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB", "Heruko", "Redis"], description: "This is project two description." },
    { id: 2, title: "Heads up Poker", image: `${process.env.PUBLIC_URL}/images/headsup.png`, skills: ["Mobile Development", "Software Development", "Game Development"], tools: ["Swift", "Xcode", "Figma"], description: "Using Swift, I developed a poker app for mobile that utilizes a customized series of algorithms to determine CPU action. These actions are based off of the strength of the CPU's hand, player actions, and a 'bluff' factor. The player is given various options to act on including bet sizing based on real poker standards. The most impressive part of the development was creating the algorithm for the CPU to play off of, and the CPU often makes fantastic decisions. The app heavily utilizes plist and sort functions to determine players hands to utilize within the algorithm." },
    { id: 3, title: "EZ Enroll", image: `${process.env.PUBLIC_URL}/images/ezenroll.png`, skills: ["Software Development", "Project Management"], tools: ["C#", "Windows Forms", "JSON"], description: "For this project I created a module using C# and Windows Forms which parsed a student’s information and classes using JSON and translated that to small containers and a calendar for display. Our team was made up of 3 group members to create an application from the ground up. Our application was created to replace our current school enrollment system. Our group worked through the pitch, design, review, development, and testing phases of the project over a 4-month long process." },
    { id: 4, title: "Light Speed", image: `${process.env.PUBLIC_URL}/images/lightspeed.png`, skills: ["Web Development", "Game Development"], tools: ["HTML", "CSS", "JavaScript"], description: "I designed and developed a semi-3D game using JavaScript, HTML, and CSS. Go through the rings to gain charge in order to jump to light speed (the next level). Avoid asteroids, which will cause you to lose health and charge. Be careful, because each level gets progressively faster and more asteroids will spawn! Follow this link to play (not mobile friendly): https://people.rit.edu/tja5919/235/project3/game.html" }
  ];

  const [selectedProject, setSelectedProject] = useState(projects[0]);

  return (
    <div className="container is-fluid">
      <div className="columns">
        {/* Left column: Navigation */}
        <div className="column is-one-quarter">
          <aside className="menu">
            <h1 id="name" className="is-size-1 has-text-weight-semibold">Tyler Amey</h1>
            <p className="menu-label has-text-weight-semibold">About</p>
            <ul className="menu-list">
              {misc.map((item) => (
                <li key={item.id}>
                  <a onClick={() => setSelectedProject(item)}>{item.title}</a>
                </li>
              ))}
            </ul>
            <p className="menu-label has-text-weight-semibold">Co-op Projects</p>
            <ul className="menu-list">
              {work.map((project) => (
                <li key={project.id}>
                  <a onClick={() => setSelectedProject(project)}>{project.title}</a>
                </li>
              ))}
            </ul>
            <p className="menu-label has-text-weight-semibold">RIT Projects</p>
            <ul className="menu-list">
              {projects.map((project) => (
                <li key={project.id}>
                  <a onClick={() => setSelectedProject(project)}>{project.title}</a>
                </li>
              ))}
            </ul>
          </aside>
        </div>
        <div className="column">
          <div className="box">
            <h1 className="title">{selectedProject.title}</h1>
            <h2 className="subtitle mt-5">Description</h2>
            <p>{selectedProject.description}</p>
            <div className="columns">
              <div className="column">
                <h2 className="subtitle mt-5">Skills & Roles</h2>
                <ul>
                  {selectedProject.skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </div>
              <div className="column">
              <h2 className="subtitle mt-5">Languages & Software</h2>
                <ul>
                  {selectedProject.tools.map((tool, index) => (
                    <li key={index}>{tool}</li>
                  ))}
                </ul>
              </div>
            </div>
            <img src={selectedProject.image} alt="Project Image"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
