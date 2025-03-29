import '../App.css';

const Project1 = () => { 
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-12 col-lg-10">
                    <div className="d-flex flex-column flex-lg-row align-items-center">
                        {/* Project Image */}
                        <div className="mb-4 mb-lg-0">
                            <img 
                                className="border border-dark shadow" 
                                style={{
                                    width: '650px',
                                    height: '350px',
                                    maxWidth: '100%'
                                }}
                                src={`${process.env.PUBLIC_URL}/ResumeGif.gif`} 
                                alt="Resume Analyzer Project" 
                            />
                        </div>
                        
                        {/* Project Description */}
                        <div className="ps-0 ps-lg-5">
                            <h2 className="mb-2">Resume Analyzer Using AI</h2>
                            <p className="mb-3"><strong>Technologies Used:</strong> React, Python, FastAPI, MySQL, Tailwind CSS, Docker</p>
                            <ul className="list-unstyled">
                                <li className="mb-2">• Designed and developed a responsive SaaS application using React and Tailwind CSS, implementing RESTful APIs using OpenAI API for seamless frontend-backend integration.</li>
                                <li className="mb-2">• Implemented robust SQL database architecture for user authentication and data persistence.</li>
                                <li className="mb-2">• Applied data modeling principles to design optimized schemas for storing user data and resume analysis results.</li>
                                <li className="mb-2">• Created automated testing suites achieving more than 90% code coverage using Jest and maintaining CI/CD pipelines.</li>
                                <li className="mb-2">• Collaborated with cross-functional teams using Agile methodologies to integrate AI models and deliver actionable insights.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project1;