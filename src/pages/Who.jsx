import React from 'react';
import '../App.css';

const WhoPage = () => {
    return (
        <div className="who-container fade-in-up">

            {/* Dark Natural Extravagant Background */}
            <div className="app-wallpaper"></div>
            <div className="app-overlay-dark"></div>

            {/* Background Word */}
            <div className="giant-bg-word">BUILT FOR</div>

            <div className="content-wrapper">
                {/* Hero Section */}
                <section className="who-hero text-center">
                    <h1 className="epic-heading">
                        BUILT FOR BUILDERS.<br />
                        FOR THE VISION-DRIVEN.<br />
                        FOR FOUNDERS WHO THINK LONG-TERM.<br />
                        <span className="text-teal">FOR THOSE WHO REFUSE AVERAGE.</span>
                    </h1>
                </section>

                {/* Categories Section */}
                <section className="categories-section">
                    <h2 className="section-label">WE WORK WITH:</h2>
                    <div className="glass-grid">
                        <div className="premium-glass-card">
                            <h3 className="card-title">Founders</h3>
                            <p className="card-text">Who have bold ideas but need structural alignment.</p>
                        </div>
                        <div className="premium-glass-card">
                            <h3 className="card-title">Startups</h3>
                            <p className="card-text">Ready to scale aggressively without internal chaos.</p>
                        </div>
                        <div className="premium-glass-card">
                            <h3 className="card-title">Organizations</h3>
                            <p className="card-text">Looking for permanent systems, not temporary fixes.</p>
                        </div>
                        <div className="premium-glass-card">
                            <h3 className="card-title">Creators</h3>
                            <p className="card-text">Who demand technology that violently amplifies their vision.</p>
                        </div>
                    </div>
                </section>
            </div>

            <style>{`
                .who-container {
                    position: relative;
                    min-height: 100vh;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    padding: 8rem 2rem 4rem;
                    overflow: hidden;
                    background: #000;
                }

                .app-wallpaper {
                    position: absolute; top: 0; left: 0; right: 0; bottom: 0;
                    background-image: url('/images/app_bg.png');
                    background-size: cover; background-position: center; background-repeat: no-repeat;
                    z-index: 0;
                }

                .app-overlay-dark {
                    position: absolute; top: 0; left: 0; right: 0; bottom: 0;
                    background: linear-gradient(135deg, rgba(2, 32, 27, 0.9) 0%, rgba(1, 17, 14, 0.95) 100%);
                    backdrop-filter: blur(15px); -webkit-backdrop-filter: blur(15px);
                    z-index: 1;
                }

                .giant-bg-word {
                    position: absolute;
                    top: 50%; left: 50%;
                    transform: translate(-50%, -50%);
                    font-size: clamp(8rem, 20vw, 25rem);
                    font-family: var(--font-impact);
                    color: rgba(20, 184, 166, 0.1);
                    text-align: center; white-space: nowrap; line-height: 0.8; letter-spacing: -6px;
                    z-index: 2; pointer-events: none;
                    text-transform: uppercase;
                    background: linear-gradient(to bottom, rgba(20, 184, 166, 0.3), transparent);
                    -webkit-background-clip: text;
                    background-clip: text;
                    -webkit-text-fill-color: transparent;
                }

                .content-wrapper {
                    position: relative;
                    z-index: 10;
                    max-width: 1400px;
                    margin: 0 auto;
                    width: 100%;
                }

                .epic-heading {
                    font-size: clamp(2rem, 5vw, 4rem);
                    font-family: var(--font-heading);
                    color: #fff; line-height: 1.2; text-shadow: 0 10px 30px rgba(0,0,0,0.8);
                    margin-bottom: 5rem;
                    text-transform: uppercase;
                    font-weight: 300;
                    letter-spacing: 2px;
                }

                .text-teal { color: #14b8a6; text-shadow: 0 0 20px rgba(20, 184, 166, 0.4); }

                .section-label {
                    text-align: center; font-size: 1.2rem; margin-bottom: 3rem; color: rgba(255,255,255,0.4);
                    font-family: var(--font-heading); letter-spacing: 4px;
                }

                .glass-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    gap: 2rem;
                }

                .premium-glass-card {
                    background: rgba(255, 255, 255, 0.03); 
                    backdrop-filter: blur(40px) saturate(150%);
                    -webkit-backdrop-filter: blur(40px) saturate(150%);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    border-radius: 20px;
                    padding: 3rem 2rem;
                    transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
                    text-align: center;
                    position: relative;
                    overflow: hidden;
                    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1);
                }

                .premium-glass-card::before {
                    content: ''; position: absolute; top: 0; left: 50%; transform: translateX(-50%);
                    width: 50%; height: 2px; background: linear-gradient(90deg, transparent, rgba(20, 184, 166, 0.8), transparent);
                    opacity: 0; transition: opacity 0.5s ease;
                }

                .premium-glass-card:hover {
                    background: rgba(255, 255, 255, 0.06); transform: translateY(-10px);
                    border-color: rgba(255, 255, 255, 0.2);
                }

                .premium-glass-card:hover::before { opacity: 1; }

                .card-title {
                    font-size: 1.8rem; margin-bottom: 1rem; color: #fff; font-family: var(--font-heading); letter-spacing: 1px; font-weight: 300;
                }

                .card-text { color: rgba(255,255,255,0.6); font-size: 1.1rem; line-height: 1.6; font-weight: 300; }
                .text-center { text-align: center; }
            `}</style>
        </div>
    );
};

export default WhoPage;
