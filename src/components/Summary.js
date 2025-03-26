import '../App.css';

const Summary = () => {
    return (
        <div className='summary-container'>
            <div className='summary'>
                <div className='summary-picture'>
                    <img className='profilepic' src='/AyoubProfilePic.jpeg' alt='Ayoubs Profile Picture' />
                </div>
                <div className='summary-header'>
                    <h1>About Me</h1>
                    <p>
                    Software Engineer and CS student at NJIT (graduating May 2025) with experience in building high-performance applications. Currently working at Divno developing mobile apps with React Native and TypeScript, where I've improved UI responsiveness by 30% and reduced rendering latency by 20%.
                    </p>
                    <p>
                    AWS Certified with expertise in React, React Native, Python, Java, and C/C++. My projects include a Serverless Compute Platform and an AI-powered Resume Analyzer, demonstrating my ability to create scalable solutions using microservices architecture and CI/CD pipelines.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Summary;