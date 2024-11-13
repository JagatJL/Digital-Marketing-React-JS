import React from 'react';
import './Home.css';
import image1 from './image1.png';
import image2 from './image2.png'; 
import image3 from './image3.png'; 
import { Link } from 'react-router-dom';
import { Navigate, useNavigate } from 'react-router-dom';


const HomePage = () => {
  const navigate=useNavigate();
  return (
    <div className="homepage">
      <nav className="navbar">
        <div className="navbar-logo">Digital Marketing</div>
        <ul className="navbar-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#explore">Explore</a></li>
          <li><a href="#reviews">Reviews</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <header className="hero-section" id="home">
        <h1>Grow Your Business with Our Digital Marketing Solutions</h1>
        <p>We offer personalized marketing strategies to boost your online presence.</p>
        <a href="#contact" className="cta-button">Get Started</a>
      </header>
      <section className="services-section" id="services">
        <h2 className='ser'>Our Services</h2>
        <div className="services-list">
          <div className="service-item">
            <img src={image1} alt="SEO Optimization" className="service-image"/>
            <h3>SEO Optimization</h3>
            <p>Improve your search engine rankings and drive organic traffic to your website.</p>
          </div>
          <div className="service-item">
            <img src={image2} alt="Social Media Marketing" className="service-image2"/>
            <h3>Social Media Marketing</h3>
            <p>Engage with your audience and build your brand on social media platforms.</p>
          </div>
          <div className="service-item">
            <img src={image3} alt="Pay-Per-Click Advertising" className="service-image3"/>
            <h3>Pay-Per-Click Advertising</h3>
            <p>Get immediate results with targeted ads on Google, Bing, and social media.</p>
          </div>
        </div>
     <div className="seo-details">
          <h3>Why SEO is Important</h3>
       <p>SEO is crucial for increasing the visibility of your website on search engines like Google. By optimizing your website's content and structure, you can attract more organic traffic, improve user experience, and increase conversion rates.</p>
        </div>
      </section>
      <section className="explore-section" id="explore">
        <h2>Explore Our Offerings</h2>
        <div className="explore-content">
          <p>We offer a wide range of digital marketing services tailored to meet your business needs. Whether you're looking to improve your website's SEO, run effective social media campaigns, or boost your online sales with PPC advertising, we've got you covered.</p><br></br>
          <a href="#services" className="explore-button" ><Link to="/products">Learn More</Link></a>
        </div>
      </section>
      <section className="reviews-section" id="reviews">
        <h2>Customer Reviews</h2>
        <div className="review-summary">
          <span className="review-stars">★★★★★</span>
          <p>Rated 5.0 on Google based on 150 reviews</p>
        </div>
        <div className="review-list">
          <div className="review-card">
            <h4>John Doe</h4>
            <p>"The team at Digital Marketing helped us increase our online sales by 50% within just three months. Their expertise in SEO and PPC is unmatched."</p>
          </div>
          <div className="review-card">
            <h4>Jane Smith</h4>
            <p>"Our social media presence has grown exponentially thanks to their strategic approach. Highly recommend!"</p>
          </div>
          <div className="review-card">
            <h4>Michael Lee</h4>
            <p>"Excellent service with fantastic results. We saw a significant increase in website traffic and conversions."</p>
          </div>
        </div>
        <br></br>
        <br></br>
        <a href="#contact" className="cta-button">Get Started</a>
      </section>
      <footer className="footer" id='contact'>
        <p></p>
        <p>&copy; 2024 Digital Marketing. All Rights Reserved.</p><br></br><br></br>
        <p>Contact us <br></br><br></br>
        &nbsp;&nbsp;Email : webwave@gmail.com&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Phone : 9487992224<br></br><br></br><br></br><br></br>
        Landmark<br></br><br></br>
        <br></br>

Harvee Designs<br></br>
21/1, Periasubbanna Gounder Street, K.K.Pudur,<br></br> Coimbatore,<br></br>
Tamil Nadu - 641 038.</p>
      </footer>
    </div>
  );
};

export default HomePage;
