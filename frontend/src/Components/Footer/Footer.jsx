import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
       <footer class="footer">
    <div class="footer-top">
      <div class="footer-column logo-column">
        <h2 class="logo">HireOnyx</h2>
        <p>Find your dream job and take the next step in your career.</p>
      </div>
      <div class="footer-column">
        <h4>For Job Seekers</h4>
        <ul>
          <li>Browse Jobs</li>
          <li>Companies</li>
          <li>Salary Guide</li>
        </ul>
      </div>
      <div class="footer-column">
        <h4>For Employers</h4>
        <ul>
          <li>Post a Job</li>
          <li>Pricing</li>
          <li>Resources</li>
        </ul>
      </div>
      <div class="footer-column">
        <h4>Company</h4>
        <ul>
          <li>About Us</li>
          <li>Contact</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
    </div>

    <hr />

    <div class="footer-bottom">
      <p>© 2025 HireOnyx. All rights reserved.</p>
      <div class="social-icons">
        <span>🐦</span>
        <span>🔗</span>
        <span>📘</span>
      </div>
    </div>
  </footer>
    
  )
}

export default Footer