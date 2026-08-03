import React from 'react';
import './App.css';
import registrationPage from './RegistrationPage';

export default function App(){
        return(
          <div className="page-wrapper">
                <div className="main-card">
                   <header className="header-row">
                       <div className="logo-text">Logo</div>
                       <div className="header-right-group">
                         <nav className="navs-links">
                           <a href="#home">Home</a>
                           <a href="#about">About Us</a>
                           <a href="#services">Services</a>
                           <a href="#contact">Contact Us</a>
                         </nav>
                         <button className="header-btn">Get Started</button>
                       </div>
                   </header>
                   <main className="hero-grid">
                     <div className="left-text-column">
                       <h1 className="hero-title">E-WALLET</h1>
                       <p className="hero-desc">Experience a seamless financial ecosystem built for speed. Send money instantly, settle merchant invoices, and securely track your balances in real-time right from your tablet or mobile device.</p>
                       <button className="hero-cta-btn">GET STARTED</button>
                     </div>
                     <div className="illustration-canvas">
                       <div className="avatar avatar-left"></div>
                       <div className="isometric-phone">
                         <div className="phone-speaker-notch"></div>
                         <div className="phone-balance-card">
                           <p className="phone-balance-label">Balance</p>
                           <p className="phone-balance-amount">5000.00 R</p>
                         </div>
                         <div className="phone-status-badge">Available</div>
                         <div className="phone-home-bar"></div>
                       </div>
                       <div className="floating-credit-card">
                        <div className="credit-card-chip"></div>
                        <div className="credit-card-details">
                          <p className="credit-card-number">•••• •••• •••• 4321</p>
                          <p className="credit-card-expiry">12/29</p>
                        </div>
                       </div>
                       <div className="avatar avatar-right">👨‍💼</div>
                       <div className="floating-coin coin-1">R</div>
                       <div className="floating-coin coin-2">R</div>
                       <div className="floating-coin coin-3">R</div>
                     </div>

                   </main>
                </div>

          </div>
        );
}