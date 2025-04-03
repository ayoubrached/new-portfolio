import '../App.css';

const Project3 = () => { 
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-12 col-lg-10">
                    <div className="d-flex flex-column flex-lg-row align-items-center">
                        <div className="col-lg-7 mb-4 mb-lg-0 pe-lg-5">
                            <video 
                                className="border border-dark shadow img-fluid" 
                                autoPlay
                                loop
                                muted
                                playsInline
                                src={`${process.env.PUBLIC_URL}/phone_visual.mp4`}
                            >
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        
                        <div className="col-lg-5">
                            <h2 className="mb-2">Phone Company Visualization</h2>
                            <p className="mb-3"><strong>Technologies Used:</strong> D3.js, JavaScript, HTML5, CSS3, SVG</p>
                            <p className="mb-3">
                                An interactive data visualization project that analyzes and displays smartphone market trends using D3.js. 
                                We created comprehensive visualizations of various smartphone statistics including:
                            </p>
                            <ul className="mb-4">
                                <li>Number of phones produced by brand</li>
                                <li>Average price by phone manufacturer</li>
                                <li>Correlation between average total pixels and average price</li>
                                <li>Distribution of foldable phones versus non-foldable phones</li>
                            </ul>
                            <p className="mb-3">
                                This project significantly enhanced my data visualization skills and deepened my understanding of D3.js. 
                                I developed expertise in transforming complex datasets into intuitive visual representations, 
                                implementing interactive elements for user exploration, and creating responsive designs that 
                                adapt to different screen sizes. The experience strengthened my analytical thinking and ability 
                                to communicate insights through effective data storytelling.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project3;