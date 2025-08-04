import React from 'react'
import './Job.css'
import Navbar from '../Navbar/Navbar'
import { FaSearch, FaMapMarkerAlt } from 'react-icons/fa';
import Footer from '../Footer/Footer';
import technology from '../../Assets/icon1.png'
import healthcare from '../../Assets/icon2.png'
import finance from '../../Assets/icon3.png'
import marketing from '../../Assets/icon4.png'
import design from '../../Assets/icon5.png'
import business from '../../Assets/icon6.png'
const Job = () => {
  return (
    <div className='main'>
         <Navbar/>
      <div className="heading">
        <h1 id='heading1'> Find Your Dream Job</h1>
        <h1 id='heading2'>Start Your Journey Today</h1>
        <h3 id='heading3'>Search Through milions of jobs and find right fit for you</h3>
      </div>
      <div className="search-box">
      <div className="input-group">
        <FaSearch className="icon" />
        <input type="text" placeholder="Job title or keyword" />
      </div>
      <div className="input-group">
        <FaMapMarkerAlt className="icon" />
        <input type="text" placeholder="Location" />
      </div>
      <button className="search-btn">Search Job</button>
    </div>

<div className="main2">
<section class="categories">
    <h2>Popular Job Categories</h2>
    <div class="category-boxes">
      <div class="category"><img src={technology} alt='Technology' class="icons"></img> Technology<br/><span>8.5k+ jobs</span></div>
      <div class="category"><img src={healthcare} alt='Healthcare' class="icons"></img>Healthcare<br/><span>6.2k+ jobs</span></div>
      <div class="category"><img src={finance} alt='finance' class="icons"></img>Finance<br/><span>4.8k+ jobs</span></div>
      <div class="category"><img src={marketing} alt='marketing' class="icons"></img>Marketing<br/><span>3.9k+ jobs</span></div>
      <div class="category"><img src={design} alt='design' class="icons"></img>Design<br/><span>2.7k+ jobs</span></div>
      <div class="category"><img src={business} alt='business' class="icons"></img>Business<br/><span>5.1k+ jobs</span></div>
    </div>
  </section>

  <section class="featured-jobs">
    <h2>Featured Jobs</h2>
    <div class="jobs">
      <div class="job-card">
        <h3>Senior Software Engineer</h3>
        <p>TechCorp Solutions</p>
        <p>📍 San Francisco, CA (Remote)</p>
        <p>💰 $120,000 - $180,000</p>
        <button>Apply Now</button>
      </div>

      <div class="job-card">
        <h3>Product Designer</h3>
        <p>HealthTech Innovation</p>
        <p>📍 New York, NY</p>
        <p>💰 $90,000 - $130,000</p>
        <button>Apply Now</button>
      </div>
    </div>
  </section>

  <section class="quick-apply">
    <h2>Quick Apply</h2>
    <p>Upload your resume and let employers find you</p>
    <button class="upload-btn">⬇ Upload Resume</button>
    <div class="progress-bar">
      <span>Profile Completion</span>
      <div class="bar"><div class="fill"></div></div>
      <span>75%</span>
    </div>
  </section>

  <section class="featured-companies">
    <h2>Featured Companies</h2>
    <div class="company-list">
      <div class="company">TechCorp Solutions<br/><span>15 open positions</span></div>
      <div class="company">HealthTech Innovation<br/><span>8 open positions</span></div>
      <div class="company">TechCorp Solutions<br/><span>15 open positions</span></div>
      <div class="company">HealthTech Innovation<br/><span>8 open positions</span></div>
    </div>
  </section>

  <section class="job-tools">
    <h2>Job Seeker Tools</h2>
    <div class="tools">
      <div class="tool">📝 Resume Builder<br/><span>Create a professional resume</span></div>
      <div class="tool">📊 Salary Calculator<br/><span>Compare salaries across industries</span></div>
      <div class="tool">📊 Salary Calculator<br/><span>Compare salaries across industries</span></div>
      <div class="tool">📁 Career Resources<br/><span>Expert advice and guides</span></div>
    </div>
  </section>
</div>
<Footer/>
    </div>
  )
}

export default Job