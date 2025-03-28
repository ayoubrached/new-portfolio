import '../App.css';

const Project1 = () => { 
    return (
        <div className='project'>
            <div>
                <img className='project-gif' src={`${process.env.PUBLIC_URL}/ResumeGif.gif`} alt='Project 1' />
            </div>
            <div className='description'>
            Resume Analyzer Using AI <br />
            <strong>Technologies Used:</strong> React, Python, FastAPI, MySQL, Tailwind CSS, Docker<br/>
            • Designed and developed a responsive SaaS application using React and Tailwind CSS, implementing RESTful APIs using OpenAI API for seamless frontend-backend integration.<br/>
            • Implemented robust SQL database architecture for user authentication and data persistence.<br/>
            • Applied data modeling principles to design optimized schemas for storing user data and resume analysis results.<br/>
            • Created automated testing suites achieving more than 90% code coverage using Jest and maintaining CI/CD pipelines.<br/>
            • Collaborated with cross-functional teams using Agile methodologies to integrate AI models and deliver actionable insights.
            </div>
        </div>
    );
}

export default Project1;