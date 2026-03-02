import React from 'react';
import { useNavigate } from 'react-router-dom';

const AppMatrix = () => {
    const navigate = useNavigate();

    return (
        <div className="matrix-container fade-in-up">
            <header className="page-header">
                <div>
                    <h1 className="page-title">TARGET AUDIENCE MATRIX</h1>
                    <p className="page-subtitle">Strategic mapping of primary and secondary consumer vectors based on your initial audit.</p>
                </div>
                <button className="btn-glow-small" onClick={() => navigate('/app/questions')}>
                    <span style={{ fontSize: '1.2rem', marginRight: '0.5rem' }}>←</span> RETURN TO VAULT
                </button>
            </header>

            <div className="matrix-grid">

                {/* Core Objective Card */}
                <div className="glass-widget core-widget">
                    <h3 className="widget-title">CURRENT DEPLOYMENT OBJECTIVES</h3>
                    <p className="core-text">
                        The objective is rapid acquisition from the primary core, heavily utilizing high-trust social proof and direct educational framing, while minimizing wasted spend on completely uneducated cold traffic.
                    </p>
                    <div className="core-metrics">
                        <div className="c-metric">
                            <span>TOTAL ADDRESSABLE CAP</span>
                            <strong>$4.2B</strong>
                        </div>
                        <div className="c-metric">
                            <span>ACQUISITION DIFFICULTY</span>
                            <strong className="text-orange">MEDIUM</strong>
                        </div>
                        <div className="c-metric">
                            <span>PRIMARY CHANNEL</span>
                            <strong className="text-teal">DIRECT B2B</strong>
                        </div>
                    </div>
                </div>

                {/* Primary Core Target */}
                <div className="glass-widget target-widget primary-target">
                    <div className="target-header">
                        <h3 className="widget-title"><span className="text-teal">PRIMARY CORE</span> / TIER 1</h3>
                        <span className="badge badge-teal">IMMEDIATE FOCUS</span>
                    </div>
                    <h2 className="target-name">The Scaling Founder</h2>

                    <div className="target-details">
                        <div className="detail-group">
                            <h4>PAIN POINTS</h4>
                            <ul>
                                <li>Lack of clear operational structure.</li>
                                <li>High anxiety about idea theft or unoptimized execution.</li>
                                <li>Overwhelmed by confusing, slow legal advice.</li>
                            </ul>
                        </div>
                        <div className="detail-group">
                            <h4>MESSAGING ANGLE</h4>
                            <ul>
                                <li>"Stop building blindly. Defend your execution right now."</li>
                                <li>Focus on speed, clarity, and uncompromising strategy.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="target-stats">
                        <div className="t-stat">
                            <span>CONVERSION LIKELIHOOD</span>
                            <div className="bar-bg"><div className="bar-fill" style={{ width: '85%' }}></div></div>
                        </div>
                        <div className="t-stat">
                            <span>AWARENESS LEVEL</span>
                            <div className="bar-bg"><div className="bar-fill" style={{ width: '60%' }}></div></div>
                        </div>
                    </div>
                </div>

                {/* Secondary Target */}
                <div className="glass-widget target-widget secondary-target">
                    <div className="target-header">
                        <h3 className="widget-title">SECONDARY / TIER 2</h3>
                        <span className="badge">POST-LAUNCH</span>
                    </div>
                    <h2 className="target-name">The Senior Creative</h2>

                    <div className="target-details">
                        <div className="detail-group">
                            <h4>PAIN POINTS</h4>
                            <ul>
                                <li>Excellent at design/vision, poor at business structuring.</li>
                                <li>Often underprices or fails to legally secure their visual assets.</li>
                            </ul>
                        </div>
                        <div className="detail-group">
                            <h4>MESSAGING ANGLE</h4>
                            <ul>
                                <li>"Your designs are intellectual property. Treat them like it."</li>
                                <li>Focus on turning scattered creativity into a robust asset class.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="target-stats">
                        <div className="t-stat">
                            <span>CONVERSION LIKELIHOOD</span>
                            <div className="bar-bg"><div className="bar-fill" style={{ width: '45%', background: '#f59e0b' }}></div></div>
                        </div>
                        <div className="t-stat">
                            <span>AWARENESS LEVEL</span>
                            <div className="bar-bg"><div className="bar-fill" style={{ width: '40%', background: '#f59e0b' }}></div></div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                .matrix-container {
                    padding: 4rem 2rem;
                    max-width: 1400px;
                    margin: 0 auto;
                    color: #fff;
                    min-height: calc(100vh - 80px);
                }

                .page-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-end;
                    margin-bottom: 3.5rem;
                    flex-wrap: wrap;
                    gap: 1.5rem;
                }

                .page-title {
                    font-size: 3.2rem;
                    font-family: var(--font-heading);
                    color: #fff;
                    margin-bottom: 0.5rem;
                    letter-spacing: 2px;
                    font-weight: 300;
                    text-transform: uppercase;
                }

                .page-subtitle {
                    color: rgba(255, 255, 255, 0.6);
                    font-size: 1.2rem;
                    margin: 0;
                    font-weight: 300;
                    letter-spacing: 1px;
                }

                .matrix-grid {
                    display: grid;
                    grid-template-columns: repeat(12, 1fr);
                    gap: 2rem;
                }

                .glass-widget {
                    background: rgba(255, 255, 255, 0.03); 
                    backdrop-filter: blur(40px) saturate(120%);
                    -webkit-backdrop-filter: blur(40px) saturate(120%);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    border-radius: 24px;
                    padding: 2.5rem;
                    display: flex;
                    flex-direction: column;
                    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1);
                }

                .widget-title {
                    font-family: var(--font-heading);
                    font-size: 1.1rem;
                    color: rgba(255, 255, 255, 0.5);
                    margin-bottom: 2rem;
                    letter-spacing: 3px;
                    font-weight: 400;
                    text-transform: uppercase;
                }

                .text-teal { color: #14b8a6; }
                .text-orange { color: #f59e0b; }

                /* CORE WIDGET */
                .core-widget { grid-column: span 12; }
                .core-text { 
                    font-size: 1.4rem; 
                    line-height: 1.8; 
                    color: rgba(255,255,255,0.9); 
                    font-weight: 300; 
                    max-width: 900px;
                    margin-bottom: 3rem;
                }

                .core-metrics { display: flex; gap: 4rem; flex-wrap: wrap; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 2rem; }
                .c-metric { display: flex; flex-direction: column; gap: 0.5rem; }
                .c-metric span { font-size: 0.8rem; color: rgba(255,255,255,0.4); letter-spacing: 2px; font-family: var(--font-heading); }
                .c-metric strong { font-size: 2rem; font-family: var(--font-heading); font-weight: 300; }

                /* TARGET WIDGETS */
                .target-widget { grid-column: span 6; display: flex; flex-direction: column; transition: transform 0.4s; }
                .target-widget:hover { transform: translateY(-5px); border-color: rgba(255,255,255,0.2); }
                .primary-target { background: rgba(20, 184, 166, 0.03); border-color: rgba(20, 184, 166, 0.2); }

                .target-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; }
                .target-header .widget-title { margin-bottom: 0; }
                
                .badge { padding: 0.4rem 1rem; border-radius: 50px; font-size: 0.75rem; font-weight: 400; letter-spacing: 2px; font-family: var(--font-heading); border: 1px solid rgba(255,255,255,0.1); color: rgba(255,255,255,0.6); }
                .badge-teal { background: rgba(20, 184, 166, 0.1); color: #14b8a6; border-color: rgba(20, 184, 166, 0.3); }

                .target-name { 
                    font-size: 2.8rem; 
                    font-family: var(--font-heading); 
                    font-weight: 300; 
                    margin-bottom: 3rem;
                    line-height: 1.1;
                    letter-spacing: 1px;
                }

                .target-details { display: flex; flex-direction: column; gap: 2rem; flex: 1; margin-bottom: 3rem; }
                
                .detail-group h4 { font-size: 0.85rem; color: rgba(255,255,255,0.4); letter-spacing: 2px; margin-bottom: 1rem; }
                .detail-group ul { padding-left: 1.5rem; display: flex; flex-direction: column; gap: 0.8rem; }
                .detail-group li { color: rgba(255,255,255,0.8); font-size: 1.05rem; line-height: 1.6; font-weight: 300; position: relative; list-style-type: none; }
                .detail-group li::before { content: '•'; position: absolute; left: -1.5rem; color: rgba(255,255,255,0.3); }
                .primary-target .detail-group li::before { color: #14b8a6; }

                .target-stats { border-top: 1px solid rgba(255,255,255,0.1); padding-top: 2rem; display: flex; flex-direction: column; gap: 1.5rem; }
                .t-stat { display: flex; flex-direction: column; gap: 0.8rem; }
                .t-stat span { font-size: 0.8rem; color: rgba(255,255,255,0.5); letter-spacing: 2px; font-family: var(--font-heading); }
                
                .bar-bg { width: 100%; height: 6px; background: rgba(255,255,255,0.1); border-radius: 4px; overflow: hidden; }
                .bar-fill { height: 100%; background: #14b8a6; border-radius: 4px; transition: width 1s cubic-bezier(0.165, 0.84, 0.44, 1); }

                .btn-glow-small {
                    background: transparent;
                    color: #fff;
                    border: 1px solid rgba(255, 255, 255, 0.3);
                    padding: 0.8rem 1.5rem;
                    border-radius: 50px;
                    font-weight: 300;
                    display: flex;
                    align-items: center;
                    cursor: pointer;
                    transition: all 0.4s ease;
                    font-family: var(--font-heading);
                    letter-spacing: 2px;
                    backdrop-filter: blur(10px);
                }

                .btn-glow-small:hover {
                    background: rgba(255, 255, 255, 0.1);
                    border-color: #fff;
                }

                @media (max-width: 1024px) {
                    .target-widget { grid-column: span 12; }
                }

                @media (max-width: 600px) {
                    .core-metrics { flex-direction: column; gap: 1.5rem; }
                }
            `}</style>
        </div>
    );
};

export default AppMatrix;
