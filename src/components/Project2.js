import '../App.css';

const Project2 = () => { 
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-12 col-lg-10">
                    <div className="d-flex flex-column flex-lg-row align-items-center justify-content-end" style={{ gap: '0', paddingRight: '7%' }}>
                        <div className="col-lg-5 mb-4 mb-lg-0">
                            <div className="d-inline-block" style={{ 
                                borderRadius: '40px',
                                border: '2px solid #000',
                                padding: '0',
                                overflow: 'hidden',
                                marginRight: '20px'
                            }}>
                                <video 
                                    className="img-fluid"
                                    style={{ 
                                        maxHeight: '550px', 
                                        objectFit: 'contain',
                                        display: 'block'
                                    }}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    src={`${process.env.PUBLIC_URL}/divno.mp4`}
                                />
                            </div>
                        </div>
                        
                        <div className="col-lg-5">
                            <h2 className="mb-2">Divno (Very early design)</h2>
                            <p className="mb-3"><strong>Technologies Used:</strong> React Native, Firebase, Node.js, Express</p>
                            <p className="mb-3">
                                A mobile platform designed to empower users by combining the features of social media, 
                                service marketplaces, and delivery functionalities. Our goal is to provide users with 
                                a seamless experience to connect, create, and offer services all in one place.
                            </p>
                            <ul className="mb-4">
                                <li>Social Media: Create posts, share stories, and engage with others</li>
                                <li>Service Marketplace: Browse, advertise, and book services</li>
                                <li>Delivery Management: Efficient routing and timely service</li>
                                <li>Integrated payment solutions for seamless transactions</li>
                            </ul>
                            <p className="mb-3">
                                The application features a clean, intuitive interface with dark mode support
                                and offline functionality. Built with React Native for cross-platform compatibility,
                                Divno delivers a comprehensive platform that connects service providers, consumers, 
                                and delivery personnel in one unified ecosystem.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project2;