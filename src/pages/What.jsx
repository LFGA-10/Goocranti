import React from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
    const navigate = useNavigate();

    return (
        <section className="hero-epic" id="home">
            {/* The giant text sitting in the background */}
            <div className="giant-bg-word">GOOCRANTI</div>

            {/* The foreground action content */}
            <div className="hero-foreground">
                <div className="hero-tagline-container">
                    <span className="hero-subline">INTELLECTUAL PROPERTY & STRATEGY</span>
                    <h2 className="hero-tagline">SHIELD YOUR CREATIVE CAPABILITY</h2>
                </div>
                <div className="hero-actions">
                    <button className="btn-iconic" onClick={() => navigate('/signup')}>
                        <span className="btn-icon">✦</span>
                        BEGIN THE JOURNEY
                        <span className="btn-glow"></span>
                    </button>
                    <button className="btn-iconic-outline" onClick={() => navigate('/signin')}>
                        MEMBER LOGIN
                        <span className="btn-glow-outline"></span>
                    </button>
                </div>
            </div>

            <style>{`
                .hero-epic {
                    position: relative;
                    height: 100vh;
                    width: 100%;
                    background: #000;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: flex-end;
                    overflow: hidden;
                    padding-bottom: 8rem;
                }

                .giant-bg-word {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    font-size: clamp(10rem, 25vw, 35rem);
                    font-family: var(--font-impact);
                    color: rgba(255, 255, 255, 0.2); /* Dimmed so lighten works well */
                    text-align: center;
                    white-space: nowrap;
                    line-height: 0.8;
                    letter-spacing: -8px;
                    z-index: 1;
                    user-select: none;
                    background: linear-gradient(to bottom, #111827 0%, #000 100%);
                    -webkit-background-clip: text;
                    background-clip: text;
                    -webkit-text-fill-color: transparent;
                }

                .character-overlay {
                    position: absolute;
                    bottom: 0;
                    left: 50%;
                    transform: translateX(-50%);
                    height: 95vh;
                    z-index: 2;
                    mix-blend-mode: lighten; /* Drops the black background, overlays bright colors over dark text */
                    pointer-events: none;
                }

                .hero-char-img {
                    height: 100%;
                    width: auto;
                    object-fit: contain;
                    mask-image: linear-gradient(to top, transparent 0%, black 15%);
                    -webkit-mask-image: linear-gradient(to top, transparent 0%, black 15%);
                }

                .hero-foreground {
                    position: relative;
                    z-index: 10;
                    text-align: center;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 2rem;
                    width: 100%;
                    max-width: 800px;
                    padding: 0 2rem;
                }

                .hero-subline {
                    display: block;
                    font-family: var(--font-heading);
                    color: var(--primary-teal);
                    font-size: 1.2rem;
                    letter-spacing: 4px;
                    margin-bottom: 0.5rem;
                }

                .hero-tagline {
                    font-size: clamp(2rem, 5vw, 4rem);
                    line-height: 1.1;
                    font-family: var(--font-heading);
                    color: #fff;
                    margin: 0;
                    text-transform: uppercase;
                    text-shadow: 0 10px 30px rgba(0,0,0,0.8);
                }

                .hero-actions {
                    display: flex;
                    gap: 2rem;
                    flex-wrap: wrap;
                    justify-content: center;
                    margin-top: 1rem;
                }

                .btn-iconic {
                    position: relative;
                    background: linear-gradient(135deg, #fff 0%, #e0e0e0 100%);
                    color: #000;
                    border: none;
                    padding: 1.2rem 3.5rem;
                    border-radius: 5px; /* Sharp, precise corners for a premium feel */
                    font-family: var(--font-heading);
                    font-size: 1.1rem;
                    font-weight: 800;
                    letter-spacing: 3px;
                    cursor: pointer;
                    transition: all 0.4s cubic-bezier(0.19, 1, 0.22, 1);
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    box-shadow: 0 10px 30px rgba(255, 255, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 1);
                    overflow: hidden;
                    text-transform: uppercase;
                }

                .btn-iconic .btn-icon {
                    color: var(--primary-teal);
                    font-size: 1.5rem;
                    animation: pulseOp 2s infinite;
                }

                .btn-iconic .btn-glow {
                    position: absolute;
                    top: 0; left: -100%; width: 50%; height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent);
                    transform: skewX(-20deg);
                    transition: all 0.7s ease;
                }

                .btn-iconic:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 20px 40px rgba(20, 184, 166, 0.4), 0 0 20px rgba(255, 255, 255, 0.2);
                    background: linear-gradient(135deg, #fff 0%, var(--primary-teal) 150%);
                }

                .btn-iconic:hover .btn-glow {
                    left: 150%;
                }

                .btn-iconic-outline {
                    position: relative;
                    background: rgba(0, 0, 0, 0.2);
                    backdrop-filter: blur(15px);
                    color: rgba(255, 255, 255, 0.8);
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    padding: 1.2rem 3.5rem;
                    border-radius: 5px;
                    font-family: var(--font-heading);
                    font-size: 1.1rem;
                    font-weight: 700;
                    letter-spacing: 3px;
                    cursor: pointer;
                    transition: all 0.4s cubic-bezier(0.19, 1, 0.22, 1);
                    overflow: hidden;
                    text-transform: uppercase;
                }

                .btn-iconic-outline .btn-glow-outline {
                    position: absolute;
                    bottom: 0; left: 50%; width: 0%; height: 2px;
                    background: var(--primary-teal);
                    transform: translateX(-50%);
                    transition: width 0.4s ease;
                }

                .btn-iconic-outline:hover {
                    background: rgba(255, 255, 255, 0.05);
                    border-color: rgba(255, 255, 255, 0.5);
                    color: #fff;
                    transform: translateY(-5px);
                    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.5);
                }

                .btn-iconic-outline:hover .btn-glow-outline {
                    width: 100%;
                }

                @media (max-width: 768px) {
                    .hero-epic { padding-bottom: 4rem; }
                    .character-overlay { height: 75vh; }
                }
            `}</style>
        </section>
    );
};

const Chapter1 = () => (
    <section className="chapter chapter-1">
        <div className="chapter-visual">
            <img src="/images/Screenshot 2026-02-25 095424.png" style={{ maxWidth: '100%', height: 'auto', borderRadius: '12px' }} alt="Ideas In Motion Visual" />
        </div>
        <div className="chapter-content">
            <h5>CHAPTER 1</h5>
            <h2>IDEAS IN MOTION</h2>
            <p style={{ textTransform: 'uppercase', color: '#edf2f7', fontSize: '0.9rem', marginBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem' }}>COGNITIVE BEHAVIORAL/MOTIVATIONAL QUOTES. SOCIAL PROOFS.</p>
            <p>YOUR IDEAS ARE POWERFUL.<br />WE KEEP THEM MOVING FORWARD.</p>
            <p>Don't let your blueprints gather dust. We take them from first draft to final product.</p>
            <a href="#" className="link-arrow">MAKE YOUR IDEAS MATTER. &#x2192;</a>
        </div>
    </section>
);

const Chapter2 = () => (
    <section className="chapter chapter-2">
        <div className="chapter-content">
            <h5>CHAPTER 2</h5>
            <h2>THE CROSSROADS</h2>
            <p style={{ textTransform: 'uppercase', color: '#edf2f7', fontSize: '0.9rem', marginBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem' }}>YOUR DECISIONS DEFINE YOUR PATH. CHOOSE THE RIGHT PARTNER.</p>
            <ul>
                <li><span style={{ color: 'var(--primary-teal)' }}>&#10003;</span> INTELLECTUAL PROPERTY PROTECTION</li>
                <li><span style={{ color: 'var(--primary-teal)' }}>&#10003;</span> STRATEGIC PARTNERSHIP</li>
                <li><span style={{ color: 'var(--primary-teal)' }}>&#10003;</span> COLLABORATIVE DEVELOPMENT</li>
                <li><span style={{ color: 'var(--primary-teal)' }}>&#10003;</span> MARKET DEPLOYMENT</li>
            </ul>
            <p>WE HELP YOU MAKE THE RIGHT CHOICES AT EVERY TURN.</p>
            <a href="#" className="link-arrow">DISCOVER YOUR OPTIONS. &#x2192;</a>
        </div>
        <div className="chapter-visual">
            <img src="/images/Screenshot 2026-02-25 095411.png" style={{ maxWidth: '100%', height: 'auto', borderRadius: '12px' }} alt="Crossroads Visual" />
        </div>
    </section>
);

const Marquee = () => (
    <div className="marquee-container" style={{ padding: '4rem 0' }}>
        <div className="marquee">
            <span>GOOCRANTI GOOCRANTI GOOCRANTI GOOCRANTI GOOCRANTI GOOCRANTI GOOCRANTI GOOCRANTI</span>
        </div>
        <div className="marquee reverse-marquee" style={{ color: 'var(--primary-teal)' }}>
            <span>STRATEGY PROTECT EXECUTE DEPLOY STRATEGY PROTECT EXECUTE DEPLOY STRATEGY PROTECT</span>
        </div>
        <div className="marquee">
            <span>GOOCRANTI GOOCRANTI GOOCRANTI GOOCRANTI GOOCRANTI GOOCRANTI GOOCRANTI GOOCRANTI</span>
        </div>
        <div className="marquee reverse-marquee" style={{ color: 'var(--primary-teal)' }}>
            <span>STRATEGY PROTECT EXECUTE DEPLOY STRATEGY PROTECT EXECUTE DEPLOY STRATEGY PROTECT</span>
        </div>
        <div className="marquee">
            <span>GOOCRANTI GOOCRANTI GOOCRANTI GOOCRANTI GOOCRANTI GOOCRANTI GOOCRANTI GOOCRANTI</span>
        </div>
        <div className="marquee reverse-marquee" style={{ color: 'var(--primary-teal)' }}>
            <span>STRATEGY PROTECT EXECUTE DEPLOY STRATEGY PROTECT EXECUTE DEPLOY STRATEGY PROTECT</span>
        </div>
    </div>
);

const Chapter3 = () => (
    <section className="chapter chapter-3">
        <div className="chapter-visual">
            <img src="/images/Screenshot 2026-02-25 095355.png" style={{ maxWidth: '100%', height: 'auto', borderRadius: '12px' }} alt="Learn By Doing Visual" />
        </div>
        <div className="chapter-content">
            <h5>CHAPTER 3</h5>
            <h2>LEARN BY DOING</h2>
            <p style={{ textTransform: 'uppercase', color: '#edf2f7', fontSize: '0.9rem', marginBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem' }}>THROUGH HANDS-ON EXPERIENCE, WE BUILD CAPABILITY AND CONFIDENCE.</p>
            <p>Our programs are designed to take theoretical knowledge and apply it to real-world scenarios.</p>
            <ul>
                <li><span style={{ color: 'var(--primary-teal)' }}>&#8226;</span> Practical Applications</li>
                <li><span style={{ color: 'var(--primary-teal)' }}>&#8226;</span> Scenario-Based Learning</li>
                <li><span style={{ color: 'var(--primary-teal)' }}>&#8226;</span> Real-Time Feedback Loop</li>
            </ul>
            <a href="#" className="link-arrow">START LEARNING TODAY. &#x2192;</a>
        </div>
    </section>
);

const Chapter4 = () => (
    <section className="chapter chapter-4">
        <div className="chapter-content">
            <h5>CHAPTER 4</h5>
            <h2>STEP FORWARD</h2>
            <p style={{ textTransform: 'uppercase', color: '#edf2f7', fontSize: '0.9rem', marginBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem' }}>SUCCESS IS NOT A DESTINATION, IT'S A PROGRESSION.</p>
            <p>Every step forward brings you closer to realizing your true potential and seeing your ideas come to life.</p>
            <ul>
                <li><span style={{ color: 'var(--primary-teal)' }}>&#8226;</span> Plan with purpose</li>
                <li><span style={{ color: 'var(--primary-teal)' }}>&#8226;</span> Execute with precision</li>
                <li><span style={{ color: 'var(--primary-teal)' }}>&#8226;</span> Learn continuously</li>
            </ul>
            <a href="#" className="link-arrow">TAKE THE NEXT STEP. &#x2192;</a>
        </div>
        <div className="chapter-visual">
            <img src="/images/Screenshot 2026-02-25 095411.png" style={{ maxWidth: '100%', height: 'auto', borderRadius: '12px' }} alt="Step Forward Visual" />
        </div>
    </section>
);

const WhatPage = () => {
    return (
        <div style={{ background: '#000', color: '#fff' }}>
            <Hero />
            <div style={{ background: 'linear-gradient(to bottom, #000, #041b18)' }}>
                <Chapter1 />
                <Chapter2 />
                <Marquee />
                <Chapter3 />
                <Chapter4 />
            </div>

        </div>
    );
};

export default WhatPage;
