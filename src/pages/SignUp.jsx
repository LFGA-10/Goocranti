import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import '../App.css';

const SignUp = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/intro');
    };

    return (
        <div className="fade-in-up auth-layout" style={{ minHeight: '100vh', display: 'flex', flexWrap: 'wrap', position: 'relative', overflow: 'hidden', background: '#000' }}>

            {/* Dark Natural Extravagant Background */}
            <div className="app-wallpaper"></div>
            <div className="app-overlay-dark"></div>

            {/* Back to Home fixed button */}
            <NavLink to="/" style={{ position: 'absolute', top: '2rem', left: '2rem', color: '#84a29f', textDecoration: 'none', fontFamily: 'var(--font-heading)', letterSpacing: '2px', display: 'flex', alignItems: 'center', gap: '0.5rem', transition: 'color 0.3s ease', zIndex: 10 }} className="hover-white">
                <span style={{ fontSize: '1.2rem', marginTop: '-2px' }}>←</span> ABORT
            </NavLink>

            {/* Left Side: Brand Context */}
            <div className="auth-brand-side">
                <div className="brand-content">
                    <span className="auth-emblem">✦</span>
                    <h1 className="epic-heading">GOOCRANTI</h1>
                    <p className="auth-desc">
                        Bridging the gap between creative capability and absolute market reality. We don't just ship code; we violently protect your ideas, align your strategy, and shape your ultimate vector.
                    </p>
                </div>
            </div>

            {/* Right Side: Form */}
            <div className="auth-form-side">
                <div className="auth-form-container premium-glass-card">
                    <h2 className="auth-title">WELCOME TO GOOCRANTI</h2>
                    <p className="auth-subtitle">Provide your details to get started.</p>

                    <form onSubmit={handleSubmit} className="auth-form">
                        <div className="form-group">
                            <label>FULL NAME</label>
                            <input type="text" placeholder="John Doe" required className="elegant-input" />
                        </div>
                        <div className="form-group">
                            <label>EMAIL ADDRESS</label>
                            <input type="email" placeholder="founder@organization.io" required className="elegant-input" />
                        </div>
                        <div className="form-group">
                            <label>PASSWORD</label>
                            <input type="password" placeholder="••••••••" required className="elegant-input" />
                        </div>

                        <button type="submit" className="btn-iconic" style={{ width: '100%', marginTop: '1rem' }}>GET STARTED  →</button>
                    </form>

                    <div className="auth-footer">
                        <span>Already hold have an account? </span>
                        <NavLink to="/signin" className="auth-link">Sign In</NavLink>
                    </div>
                </div>
            </div>

            <style>{`
                .app-wallpaper {
                    position: absolute; top: 0; left: 0; right: 0; bottom: 0;
                    background-image: url('/images/app_bg.png');
                    background-size: cover; background-position: center; background-repeat: no-repeat;
                    z-index: 0;
                }

                .app-overlay-dark {
                    position: absolute; top: 0; left: 0; right: 0; bottom: 0;
                    background: linear-gradient(135deg, rgba(2, 17, 16, 0.95) 0%, rgba(0,0,0,0.85) 100%);
                    backdrop-filter: blur(25px); -webkit-backdrop-filter: blur(25px);
                    z-index: 1;
                }

                .auth-brand-side {
                    flex: 1 1 500px; display: flex; flex-direction: column; justify-content: center;
                    padding: 8rem 4rem 4rem; z-index: 2; position: relative;
                }

                .auth-brand-side::after {
                    content: ''; position: absolute; top: 0; right: 0; bottom: 0; width: 1px;
                    background: linear-gradient(to bottom, transparent, rgba(20, 184, 166, 0.3), transparent);
                }

                .brand-content { max-width: 600px; margin: 0 auto; }

                .auth-emblem {
                    color: var(--primary-teal); font-size: 3rem; display: block; margin-bottom: 2rem;
                    line-height: 1; filter: drop-shadow(0 0 10px rgba(20, 184, 166, 0.5));
                }

                .epic-heading {
                    font-size: clamp(4rem, 8vw, 6rem); font-family: var(--font-impact);
                    color: #fff; margin-bottom: 2rem; line-height: 1; letter-spacing: 4px;
                }

                .auth-desc {
                    font-size: 1.25rem; color: rgba(255,255,255,0.7); line-height: 1.8; font-weight: 300;
                }

                .auth-form-side {
                    flex: 1 1 500px; display: flex; align-items: center; justify-content: center;
                    padding: 4rem 2rem; z-index: 2; position: relative;
                }

                .premium-glass-card {
                    background: rgba(255, 255, 255, 0.02); 
                    backdrop-filter: blur(40px) saturate(150%); -webkit-backdrop-filter: blur(40px) saturate(150%);
                    border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 20px;
                    padding: 4rem 3rem; box-shadow: 0 30px 60px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.1);
                    width: 100%; max-width: 500px;
                }

                .auth-title {
                    font-size: 2rem; font-family: var(--font-heading); color: #fff;
                    margin-bottom: 0.5rem; letter-spacing: 2px; font-weight: 300;
                }

                .auth-subtitle { color: rgba(255,255,255,0.5); margin-bottom: 3rem; font-size: 1.1rem; font-weight: 300;}

                .auth-form { display: flex; flex-direction: column; gap: 1.5rem; }

                .form-group { display: flex; flex-direction: column; gap: 0.8rem; }
                .form-group label {
                    font-family: var(--font-heading); font-size: 0.75rem; color: rgba(255,255,255,0.5); letter-spacing: 2px;
                }

                .elegant-input {
                    background: rgba(0,0,0,0.4); border: 1px solid rgba(255,255,255,0.1);
                    padding: 1rem 1.5rem; border-radius: 12px; color: #fff; font-size: 1rem;
                    outline: none; transition: all 0.3s; font-family: var(--font-body);
                }

                .elegant-input:focus { border-color: rgba(20, 184, 166, 0.5); background: rgba(0,0,0,0.6); box-shadow: 0 0 15px rgba(20, 184, 166, 0.15);}

                .btn-iconic {
                    background: #fff; color: #000; border: none; padding: 1.2rem 3rem; border-radius: 50px;
                    font-family: var(--font-heading); font-size: 1rem; font-weight: 700; letter-spacing: 2px;
                    cursor: pointer; transition: all 0.3s; box-shadow: 0 10px 30px rgba(255,255,255,0.2);
                }

                .btn-iconic:hover {
                    transform: translateY(-3px); background: var(--primary-teal);
                    box-shadow: 0 15px 40px rgba(20,184,166,0.4);
                }

                .auth-footer { margin-top: 3rem; text-align: center; }
                .auth-footer span { color: rgba(255,255,255,0.5); font-weight: 300;}
                .auth-link { color: var(--primary-teal); text-decoration: none; font-weight: bold; letter-spacing: 1px; transition: color 0.3s;}
                .auth-link:hover { color: #fff; }
                .hover-white:hover { color: #fff !important; }

                @media (max-width: 900px) {
                    .auth-brand-side::after { display: none; }
                    .auth-brand-side { padding: 6rem 2rem 2rem; border-bottom: 1px solid rgba(255,255,255,0.1); }
                    .premium-glass-card { padding: 3rem 2rem; }
                }
            `}</style>
        </div>
    );
};

export default SignUp;
