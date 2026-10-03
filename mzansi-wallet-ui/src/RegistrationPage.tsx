import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function RegistrationPage() {
    const navigate = useNavigate();
    return(
     <main className="page-wrapper">
       <div className="main-card">
         <div className="mb-5 text-center">
            <div className="logo-text d-inline-block">Logo</div>
            <h1 className="hero-title form-header-title mt-4">E-WALLET</h1>
            <p className="registration-subtitle">Create your account to start managing your financial ecosystem in real-time</p>
         </div> 
         <form className="registration-container">
           <div className="mb-2">
             <label className="form-label input-label-spec">Full Name</label>
             <input type="text" className="form-control custom-form-input" placeholder="Enter full name." required></input>
           </div>
           <div className="mb-2">
             <label className="form-label input-label-spec">Email Address</label>
             <input type="email" className="form-control custom-form-input" placeholder="Enter your valid email" required></input>
           </div> 
           <div className="mb-2">
            <label className="form-label input-label-spec">password</label>
            <input type="password" className="form-control custom-form-input" placeholder="Enter password." required></input>
           </div>
           <div className="mb-3">
            <label className="form-label input-label-spec">Confirm Password</label>
            <input type="password" className="form-control custom-form-input" placeholder="Confirm password" required></input>
           </div>
           <button type="submit" className="hero-cta-btn w-100">Sign Up</button>
           <div className="text-center mt-3">
             <p className="mb-0 small text-muted">
               Already have an account?{' '}
               <button
                 type="button"
                 className="text-link-btn"
                 onClick={() => navigate('/login')}
               >
                Log in
               </button>
             </p>
</div>

         </form>
       </div>
     </main> 
    );
}