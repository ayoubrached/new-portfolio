import '../App.css';

const Project1 = () => { 
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-12 col-lg-10">
                    <div className="d-flex flex-column flex-lg-row align-items-center">
                        {/* Project Video - 60% width */}
                        <div className="col-lg-7 mb-4 mb-lg-0 pe-lg-4">
                            <video 
                                className="border border-dark shadow img-fluid" 
                                autoPlay
                                loop
                                muted
                                playsInline
                                src={`${process.env.PUBLIC_URL}/ResumeClip.mp4`}
                            >
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        
                        {/* Project Description - 40% width */}
                        <div className="col-lg-5">
                            <h2 className="mb-2">Resume Analyzer Using AI</h2>
                            <p className="mb-3"><strong>Technologies Used:</strong> React, Python, FastAPI, MySQL, Tailwind CSS, Docker</p>
                            <p className="mb-3">
                                A collaborative project that leverages AI to evaluate resume effectiveness against specific job descriptions. 
                                The application analyzes uploaded resumes against job requirements, providing personalized feedback on:
                            </p>
                            <ul className="mb-4">
                                <li>Candidate's fit for the position</li>
                                <li>Resume strengths and highlights</li>
                                <li>Targeted suggestions for improvement</li>
                                <li>Keyword optimization recommendations</li>
                            </ul>
                            <p className="mb-3">
                                Features include user account creation for saved analyses, customizable UI themes, 
                                and resume export functionality. Built with a modern tech stack and designed with 
                                accessibility in mind, this tool helps job seekers optimize their applications for 
                                better success rates.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project1;