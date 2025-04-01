import '../App.css';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [formStatus, setFormStatus] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        const serviceId = 'service_oz26ybt';
        const templateId = 'template_td2733d';
        const publicKey = 'UCRRwh9u5Wt2qTpM3';
        
        emailjs.sendForm(serviceId, templateId, form.current, publicKey)
            .then((result) => {
                console.log('Email sent successfully:', result.text);
                setFormStatus('success');
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setFormStatus(null), 5000);
            })
            .catch((error) => {
                console.error('Failed to send email:', error.text);
                setFormStatus('error');
                setTimeout(() => setFormStatus(null), 5000);
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    return (
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <h2 className="text-center mb-5">Contact Me</h2>
                    
                    <div className="row mb-5">
                        <div className="col-md-4 mb-4 mb-md-0">
                            <div className="card h-100 shadow-sm">
                                <div className="card-body text-center">
                                    <i className="bi bi-linkedin fs-1 text-primary mb-3"></i>
                                    <h5 className="card-title">LinkedIn</h5>
                                    <p className="card-text">Connect with me professionally</p>
                                    <a href="https://www.linkedin.com/in/ayoub-rached/" 
                                       className="btn btn-outline-primary"
                                       target="_blank"
                                       rel="noopener noreferrer">
                                        Visit Profile
                                    </a>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-md-4 mb-4 mb-md-0">
                            <div className="card h-100 shadow-sm">
                                <div className="card-body text-center">
                                    <i className="bi bi-github fs-1 text-dark mb-3"></i>
                                    <h5 className="card-title">GitHub</h5>
                                    <p className="card-text">Check out my code repositories</p>
                                    <a href="https://www.github.com/ayoubrached" 
                                       className="btn btn-outline-dark"
                                       target="_blank"
                                       rel="noopener noreferrer">
                                        View Projects
                                    </a>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-md-4">
                            <div className="card h-100 shadow-sm">
                                <div className="card-body text-center">
                                    <i className="bi bi-envelope fs-1 text-success mb-3"></i>
                                    <h5 className="card-title">Email</h5>
                                    <p className="card-text">Send me a direct message</p>
                                    <a href="mailto:ayoubrached10@gmail.com" 
                                       className="btn btn-outline-success">
                                        Email Me
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="card shadow-sm">
                        <div className="card-body p-4">
                            <h3 className="card-title mb-4">Get In Touch</h3>
                            
                            {formStatus === 'success' && (
                                <div className="alert alert-success">
                                    Thank you for your message! I'll get back to you soon.
                                </div>
                            )}
                            
                            {formStatus === 'error' && (
                                <div className="alert alert-danger">
                                    Sorry, something went wrong. Please try again later.
                                </div>
                            )}
                            
                            <form ref={form} onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                
                                <div className="mb-3">
                                    <label htmlFor="message" className="form-label">Message</label>
                                    <textarea
                                        className="form-control"
                                        id="message"
                                        name="message"
                                        rows="4"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                </div>
                                
                                <button 
                                    type="submit" 
                                    className="btn btn-primary px-4 py-2" 
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;