import React from 'react';
import './Companies.css';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import company1 from '../../assets/company1.jpg';
import company2 from '../../assets/company2.png';
import company3 from '../../assets/company3.png';
import Contact from '../../assets/email.png';
import user from '../../assets/user.png';

const Companies = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        
        <aside className="sidebar">
          <h3>Industry</h3>
          <div className="checkbox-grid">
            <label><input type="checkbox" /> Technology</label>
            <label><input type="checkbox" /> Finance</label>
            <label><input type="checkbox" /> Healthcare</label>
            <label><input type="checkbox" /> Manufacturing</label>
          </div>

          <h3>Company Size</h3>
          <div className="checkbox-grid">
            <label><input type="checkbox" /> 1-10 employees</label>
            <label><input type="checkbox" /> 11-50 employees</label>
            <label><input type="checkbox" /> 51-200 employees</label>
            <label><input type="checkbox" /> 201-500 employees</label>
          </div>

          <h3>Region</h3>
          <div className="checkbox-grid">
            <label><input type="checkbox" /> North America</label>
            <label><input type="checkbox" /> Europe</label>
            <label><input type="checkbox" /> Asia Pacific</label>
            <label><input type="checkbox" /> Latin America</label>
          </div>
        </aside>

        <main className="main-content">
          <section className="featured">
            <h2>Featured Companies</h2>
            <div className="card-container">
              <div className="card">
                <img className="companyimg" id='techcorpcolutions' src={company1} alt="TechCorp Solutions" />
                <h3>TechCorp Solutions</h3>
                <p>Leading provider of enterprise software solutions</p>
                <span className="tag tech">Technology</span>
                <div className="btn-group">
                  <div className="contact">
                    <img className='contactimg' src={Contact} alt="Contact" />
                    <label htmlFor="contact">Contact</label>
                  </div>
                  <button className="view">View Profile</button>
                </div>
              </div>
              <div className="card">
                <img className="companyimg" src={company2} alt="Global Finance" />
                <h3>Global Finance Group</h3>
                <p>International financial services and consulting</p>
                <span className="tag finance">Finance</span>
                <div className="btn-group">
                  <div className="contact">
                    <img className='contactimg' src={Contact} alt="Contact" />
                    <label htmlFor="contact">Contact</label>
                  </div>
                  <button className="view">View Profile</button>
                </div>
              </div>
              <div className="card">
                <img className="companyimg" src={company3} alt="Helatcare Innovations" />
                <h3>HealthCare Innovations</h3>
                <p>Innovative healthcare technology solutions</p>
                <span className="tag health">Healthcare</span>
                <div className="btn-group">
                  <div className="contact">
                    <img className='contactimg' src={Contact} alt="Contact" />
                    <label htmlFor="contact">Contact</label>
                  </div>
                  <button className="view">View Profile</button>
                </div>
              </div>
            </div>
          </section>

          <section className="testimonials">
            <h2>Client Testimonials</h2>
            <div className="testimonial-card">
              <div className="img_user_rating">
                <img className='userimg' src={user} alt="user" />
                <div className="name_rating">
                  <strong>Sarah Johnson</strong><br />
                  <span>★★★★★ TechCorp Inc.</span>
                </div>
              </div>
              <p>Working with TechCorp Solutions has transformed our business operations. Their enterprise software solutions are innovative and reliable.</p>
            </div>
          </section>

          <section className="services">
            <h2>Services Overview</h2>
            <div className="services-container">
              <div className="service-box">
                <h3>Software Development</h3>
                <p>Custom software solutions for enterprise needs</p>
              </div>
              <div className="service-box">
                <h3>Financial Consulting</h3>
                <p>Expert financial guidance and strategy</p>
              </div>
              <div className="service-box">
                <h3>Healthcare Technology</h3>
                <p>Innovative healthcare solutions</p>
              </div>
            </div>
          </section>
        </main>
        
      </div>
      <Footer />
    </div>
  );
};

export default Companies;