import React from 'react';
import {useNavigate } from 'react-router-dom';

export default function LoginPage() {
   const navigate = useNavigate(); 

   return (
    <main className="page-wrapper">
      <div className="main-card form-card-width">
        <div className="mb-5 text-center">
            <div className="logo-text d-inline-block">Logo</div>
            <h1 className="hero-title form-header-title mt-4">E-WALLET</h1>
            <p className="registration-subtitle">Log in to safely manage and track your financial ecosystem in real-time</p>
        </div>
        
        <form className="registration-container" onSubmit={(e) => e.preventDefault()}>
            <div className="mb-2">
              <label className="form-label input-label-spec">Email Address</label>
              <input type="email" className="form-control custom-form-input" placeholder="Enter your valid email" required />
            </div>

            <div className="mb-3">
              <label className="form-label input-label-spec">Password</label>
              <input type="password" className="form-control custom-form-input" placeholder="Enter password." required />
            </div>

            <button type="submit" className="hero-cta-btn w-100">Log In</button>

            <div className="text-center mt-3">
                <p className="mb-0 small text-muted">
                   Don't have an account?{' '}
                   <button
                      type="button"
                      className="text-link-btn"
                      onClick={() => navigate('/register')}
                    >
                        Sign Up
                    </button>

                </p>
            </div>
        </form>
      </div>
    </main>

   );

}
