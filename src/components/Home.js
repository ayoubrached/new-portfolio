import '../App.css';
// DEVELOPER: Ayoub Rached, IS117-002, Spring 2025
const Home = () => {
    return (
        <div className="container py-5">
            <div className="row justify-content-center align-items-center gap-5 mb-5">
                <div className="col-md-4 col-lg-3 text-center text-md-end mb-4 mb-md-0">
                    <img 
                        className="img-fluid rounded-circle border border-dark shadow" 
                        style={{maxWidth: '300px'}}
                        src={`${process.env.PUBLIC_URL}/AyoubProfilePic.jpeg`} 
                        alt="Ayoub's Profile" 
                    />
                </div>
                <div className="col-md-6 col-lg-5">
                    <div className="card border-0">
                        <div className="card-body">
                            <h1 className="card-title mb-3">About Me</h1>
                            <p className="card-text">
                                Software Engineer and CS student at NJIT (graduating May 2025) with experience in 
                                building high-performance applications. Currently working at Divno developing mobile apps with 
                                React Native and TypeScript, where I've improved UI responsiveness by 30% and reduced rendering latency by 20%.
                            </p>
                            <p className="card-text">
                                AWS Certified with expertise in React, React Native, Python, Java, and C/C++. My projects include 
                                a Serverless Compute Platform and an AI-powered Resume Analyzer, demonstrating my ability to 
                                create scalable solutions using microservices architecture and CI/CD pipelines.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row justify-content-center align-items-center gap-5 mt-5">
                <div className="col-md-4 col-lg-3 text-center text-md-end mb-4 mb-md-0">
                    <img 
                        className="img-fluid border-0" 
                        style={{maxWidth: '300px', maxHeight: '220px'}}
                        src={`${process.env.PUBLIC_URL}/p_languages.png`} 
                        alt="Programming Skills" 
                    />
                </div>
                <div className="col-md-6 col-lg-5">
                    <div className="card border-0">
                        <div className="card-body">
                            <h1 className="card-title mb-3">Technical Expertise</h1>
                            <p className="card-text">
                                I'm proficient in many programming languages and frameworks, listed to the left (in order of decreasing
                                proficiency). I am always eager to learn new technologies and improve my skills.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="row justify-content-center align-items-center gap-5 mt-5 pt-4">
                <div className="col-md-4 col-lg-3 text-center text-md-center mb-4 mb-md-0">
                    <div className="d-flex align-items-center justify-content-center gap-2">
                        <img 
                            className="img-fluid" 
                            style={{maxWidth: '100px'}}
                            src={`${process.env.PUBLIC_URL}/clickme.png`} 
                            alt="Click Me" 
                        />
                        <a href="https://www.credly.com/badges/30d2d87c-7d1d-48d5-b5fa-a1996c330170/public_url">
                            <img 
                                className="img-fluid rounded" 
                                style={{maxWidth: '220px'}}
                                src={`${process.env.PUBLIC_URL}/aws-certified-cloud-practitioner.png`}
                                alt="AWS Certification Badge" 
                            />
                        </a>
                    </div>
                </div>
                <div className="col-md-6 col-lg-5">
                    <div className="card border-0">
                        <div className="card-body">
                            <h1 className="card-title mb-3">AWS Certified</h1>
                            <p className="card-text">
                                I am an AWS Certified Cloud Practitioner, demonstrating my foundational knowledge of AWS cloud services, 
                                security, architecture, pricing, and support. This certification validates my understanding of core AWS 
                                concepts, allowing me to make informed decisions about AWS services for business needs and effectively 
                                communicate about cloud solutions.
                            </p>
                            <p className="card-text text-muted">
                                <small>
                                    <strong>Issued:</strong> September 8, 2024 | <strong>Expires:</strong> September 8, 2027
                                </small>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;