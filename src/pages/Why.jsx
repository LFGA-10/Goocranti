import React from 'react';
import '../App.css';

const WhyPage = () => {
    return (
        <div className="why-container fade-in-up">

            {/* Dark Natural Extravagant Background */}
            <div className="app-wallpaper"></div>
            <div className="app-overlay-dark"></div>

            {/* Background Word */}
            <div className="giant-bg-word">BELIEF</div>

            <div className="content-wrapper">
                {/* Hero Section */}
                <section className="why-hero text-center">
                    <h1 className="epic-heading">
                        WE BUILD WHAT OTHERS DON'T SEE.<br />
                        TECHNOLOGY SHOULD MEAN SOMETHING.<br />
                        INNOVATION WITHOUT PURPOSE IS NOISE.<br />
                        <span className="text-teal">WE DON'T JUST SHIP CODE. WE SHAPE FUTURES.</span>
                    </h1>
                    <p className="hero-description">
                        Goocranti was created because too many ideas die in confusion. <br />
                        Too many startups move without direction. <br />
                        Too much technology is built without clarity. <br /><br />
                        We exist to bring <strong style={{ color: '#fff', fontWeight: 400 }}>vision, precision, and intelligence</strong> into every build.
                    </p>
                </section>

                {/* Core Beliefs Section */}
                <section className="beliefs-section">
                    <div className="glass-grid">
                        <div className="premium-glass-card">
                            <div className="card-number">01</div>
                            <h3 className="card-title text-teal">Clarity Over Noise</h3>
                            <p className="card-text">We aggressively simplify complexity to its core absolute.</p>
                        </div>
                        <div className="premium-glass-card">
                            <div className="card-number">02</div>
                            <h3 className="card-title text-teal">Precision Over Hype</h3>
                            <p className="card-text">We build what systematically works, not what momentarily trends.</p>
                        </div>
                        <div className="premium-glass-card">
                            <div className="card-number">03</div>
                            <h3 className="card-title text-teal">Strategy Before Speed</h3>
                            <p className="card-text">We violently strategize before we execute the first line of code.</p>
                        </div>
                        <div className="premium-glass-card">
                            <div className="card-number">04</div>
                            <h3 className="card-title text-teal">Impact Over Attention</h3>
                            <p className="card-text">Results matter profoundly more than industry applause.</p>
                        </div>
                    </div>
                </section>
            </div>

            <style>{`
                .why-container {
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
                    background: linear-gradient(135deg, rgba(2, 17, 16, 0.85) 0%, rgba(0,0,0,0.7) 100%);
                    backdrop-filter: blur(15px); -webkit-backdrop-filter: blur(15px);
                    z-index: 1;
                }

                .giant-bg-word {
                    position: absolute;
                    top: 50%; left: 50%;
                    transform: translate(-50%, -50%);
                    font-size: clamp(8rem, 20vw, 25rem);
                    font-family: var(--font-impact);
                    color: rgba(255, 255, 255, 0.05); /* Very subtle */
                    text-align: center; white-space: nowrap; line-height: 0.8; letter-spacing: -6px;
                    z-index: 2; pointer-events: none;
                }

                .content-wrapper {
                    position: relative;
                    z-index: 10;
                    max-width: 1400px;
                    margin: 0 auto;
                    width: 100%;
                }

                .epic-heading {
                    font-size: clamp(1.8rem, 4vw, 3.5rem);
                    font-family: var(--font-heading);
                    color: #fff; line-height: 1.3; text-shadow: 0 10px 30px rgba(0,0,0,0.8);
                    text-transform: uppercase;
                    font-weight: 300;
                    letter-spacing: 2px;
                    margin-bottom: 2rem;
                }

                .hero-description {
                    font-size: 1.25rem;
                    color: rgba(255, 255, 255, 0.7);
                    line-height: 1.8;
                    font-weight: 300;
                    max-width: 900px;
                    margin: 0 auto 5rem;
                    text-shadow: 0 5px 15px rgba(0,0,0,0.5);
                }

                .text-teal { color: #14b8a6; text-shadow: 0 0 20px rgba(20, 184, 166, 0.4); }

                .glass-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    gap: 2rem;
                }

                .premium-glass-card {
                    background: rgba(255, 255, 255, 0.02); 
                    backdrop-filter: blur(40px) saturate(150%);
                    -webkit-backdrop-filter: blur(40px) saturate(150%);
                    border: 1px solid rgba(255, 255, 255, 0.05);
                    border-radius: 20px;
                    padding: 3rem 2.5rem;
                    transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
                    position: relative;
                    overflow: hidden;
                    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1);
                }

                .card-number {
                    font-family: var(--font-impact);
                    font-size: 4rem;
                    color: rgba(255, 255, 255, 0.05); /* Extremely faint number behind text */
                    position: absolute;
                    top: -10px;
                    right: 20px;
                    line-height: 1;
                }

                .premium-glass-card:hover {
                    background: rgba(255, 255, 255, 0.05); transform: translateY(-10px);
                    border-color: rgba(255, 255, 255, 0.2);
                }

                .premium-glass-card:hover .card-number {
                    color: rgba(20, 184, 166, 0.1); /* Glows teal softly */
                }

                .card-title {
                    font-size: 1.4rem; margin-bottom: 1rem; color: #fff; font-family: var(--font-heading); letter-spacing: 1px; font-weight: 400; text-transform: uppercase;position:relative;z-index:2;
                }

                .card-text { color: rgba(255,255,255,0.6); font-size: 1.05rem; line-height: 1.6; font-weight: 300; position:relative;z-index:2;}
                .text-center { text-align: center; }
            `}</style>
        </div>
    );
};

export default WhyPage;
