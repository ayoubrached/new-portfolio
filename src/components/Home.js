import '../App.css';

const Home = () => {
    return (
        <div className="container py-5">
            {/* About Me Section */}
            <div className="row justify-content-center align-items-center mb-5">
                <div className="col-md-4 col-lg-3 text-center text-md-end mb-4 mb-md-0">
                    <img 
                        className="img-fluid rounded-circle border border-dark shadow" 
                        style={{maxWidth: '300px'}}
                        src={`${process.env.PUBLIC_URL}/AyoubProfilePic.jpeg`} 
                        alt="Ayoub's Profile" 
                    />
                </div>
                <div className="col-md-6 col-lg-5">
                    <h1 className="mb-3">About Me</h1>
                    <p>
                        Software Engineer and CS student at NJIT (graduating May 2025) with experience in building high-performance applications. Currently working at Divno developing mobile apps with React Native and TypeScript, where I've improved UI responsiveness by 30% and reduced rendering latency by 20%.
                    </p>
                    <p>
                        AWS Certified with expertise in React, React Native, Python, Java, and C/C++. My projects include a Serverless Compute Platform and an AI-powered Resume Analyzer, demonstrating my ability to create scalable solutions using microservices architecture and CI/CD pipelines.
                    </p>
                </div>
            </div>

            {/* Technical Expertise Section */}
            <div className="row justify-content-center align-items-center mt-5">
                <div className="col-md-4 col-lg-3 text-center text-md-end mb-4 mb-md-0">
                    <img 
                        className="img-fluid border-0" 
                        style={{maxWidth: '300px', maxHeight: '220px'}}
                        src={`${process.env.PUBLIC_URL}/p_languages.png`} 
                        alt="Programming Skills" 
                    />
                </div>
                <div className="col-md-6 col-lg-5">
                    <h1 className="mb-3">Technical Expertise</h1>
                    <p>
                        I'm proficient in many programming languages and frameworks, listed to the left (in order of decreasing
                        proficiency). I am always eager to learn new technologies and improve my skills.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Home;