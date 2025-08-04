import React from 'react'
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar'
import Careerguide from '../../Assets/careerguide.jpg'
import Salary from '../../Assets/salary.jpg'
import Networking from "../../Assets/networking.png"
import Work from '../../Assets/work.jpg'
import './Resources.css'

const Resources = () => {
  return (
    <div>
        <Navbar/>
        <div id="resources-container">
   
    <input type="text" id="search-bar" placeholder="Search resources..."/>

  
    <div id="filter-section">
      <button id="career-guide" class="filter-tag active">Career Guide</button>
      <button id="resume-tips" class="filter-tag">Resume Tips</button>
      <button id="interview-prep" class="filter-tag">Interview Prep</button>
      <button id="skill-development" class="filter-tag">Skill Development</button>
    </div>

   
    <div id="top-resources">
      <div id="resource-1" class="resource-box">
        <div class="resource-icon">📘</div>
        <div class="resource-content">
          <h3>Job Search Guide</h3>
          <p>Master your job search strategy</p>
          <small>15 mins read</small>
          
        </div>
      </div>

      <div id="resource-2" class="resource-box">
        <div class="resource-icon">📄</div>
        <div class="resource-content">
          <h3>Resume Building</h3>
          <p>Create an impressive resume</p>
          <small>Reference Guide</small>
       
        </div>
      </div>

      <div id="resource-3" class="resource-box">
        <div class="resource-icon">🎤</div>
        <div class="resource-content">
          <h3>Interview Tips</h3>
          <p>Tips for job interviews</p>
          <small>12 videos</small>
          
        </div>
      </div>
    </div>

    <h2 id="popular-heading">Popular Resources</h2>
    <div id="popular-grid">
      <div id="popular-1" class="popular-card">
        <img src={Careerguide} alt="Career Guide" />
        <div class="popular-info">
          <h4>Career Transition Guide</h4>
          <div class="popular-meta">
            <span class="tags">Updated</span>
            <span>5 days ago</span>
          </div>
        </div>
      </div>

      <div id="popular-2" class="popular-card">
        <img src={Salary} alt="Salary" />
        <div class="popular-info">
          <h4>Salary Negotiation</h4>
          <div class="popular-meta">
            <span class="tags">Popular</span>
            <span>1.2k views</span>
          </div>
        </div>
      </div>

      <div id="popular-3" class="popular-card">
        <img src={Work} alt="Remote Work" />
        <div class="popular-info">
          <h4>Remote Work Guide</h4>
          <div class="popular-meta">
            <span class="tags">Beginner</span>
            <span>20 min read</span>
          </div>
        </div>
      </div>

      <div id="popular-4" class="popular-card">
        <img src={Networking} alt="Networking" />
        <div class="popular-info">
          <h4>Networking Tips</h4>
          <div class="popular-meta">
            <span class="tags">24/7 Support</span>
            <span>Build Network</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer/>
    </div>
  )
}

export default Resources