import React from 'react';
import { useNavigate } from 'react-router-dom';

const AppHome = () => {
    const navigate = useNavigate();

    return (
        <div className="dashboard-container fade-in-up">
            {/* Dashboard Header */}
            <header className="dashboard-header">
                <div>
                    <h1 className="dashboard-title">STRATEGIC OVERVIEW</h1>
                    <p className="dashboard-subtitle">A comprehensive data pulse on your intellectual property landscape.</p>
                </div>
                <div className="header-actions">
                    <button className="btn-glow-small" onClick={() => navigate('/app/questions')}>
                        <span style={{ fontSize: '1.2rem', marginRight: '0.5rem' }}>↗</span> ACCESS VAULT
                    </button>
                </div>
            </header>

            {/* Dashboard Grid */}
            <div className="dashboard-grid">

                {/* KPI Metrics Row */}
                <div className="glass-widget stat-widget">
                    <h5 className="stat-title">TOTAL MANAGED ASSETS</h5>
                    <div className="stat-value">14</div>
                    <div className="stat-change text-teal">↗ +2 this quarter</div>
                </div>
                <div className="glass-widget stat-widget">
                    <h5 className="stat-title">PENDING FILINGS</h5>
                    <div className="stat-value">3</div>
                    <div className="stat-change text-orange">Action Required</div>
                </div>
                <div className="glass-widget stat-widget">
                    <h5 className="stat-title">ESTIMATED VALUATION</h5>
                    <div className="stat-value">$1.2M</div>
                    <div className="stat-change text-teal">↗ +15% trajectory</div>
                </div>
                <div className="glass-widget stat-widget">
                    <h5 className="stat-title">EXPOSURE RISK</h5>
                    <div className="stat-value">LOW</div>
                    <div className="stat-change text-teal">All assets secured</div>
                </div>

                {/* Widget 1: Focus Area (Large clean glass card) */}
                <div className="glass-widget focus-widget">
                    <div className="widget-header">
                        <h3 className="widget-title">CURRENT STRATEGIC FOCUS</h3>
                        <span className="badge badge-teal">Idea & Incubation</span>
                    </div>
                    <div className="focus-content">
                        <p className="focus-text">
                            You possess extraordinary creative capability but require rigid structural alignment. Our immediate objective is to translate your vision into a legally sound, viable entity before moving to broader market deployment.
                        </p>
                    </div>
                    <div className="metric-row">
                        <div className="metric">
                            <span className="metric-value">Foundation</span>
                            <span className="metric-label">Current Phase</span>
                        </div>
                        <div className="metric">
                            <span className="metric-value text-teal">High</span>
                            <span className="metric-label">Market Defense Capability</span>
                        </div>
                    </div>
                </div>

                {/* Widget 2: Asset Distribution */}
                <div className="glass-widget distribution-widget">
                    <h3 className="widget-title">ASSET DISTRIBUTION</h3>
                    <div className="dist-bars">
                        <div className="dist-item">
                            <div className="dist-info">
                                <span>Trademarks</span>
                                <span>45%</span>
                            </div>
                            <div className="bar-bg"><div className="bar-fill" style={{ width: '45%' }}></div></div>
                        </div>
                        <div className="dist-item">
                            <div className="dist-info">
                                <span>Copyrights</span>
                                <span>30%</span>
                            </div>
                            <div className="bar-bg"><div className="bar-fill" style={{ width: '30%' }}></div></div>
                        </div>
                        <div className="dist-item">
                            <div className="dist-info">
                                <span>Trade Secrets</span>
                                <span>15%</span>
                            </div>
                            <div className="bar-bg"><div className="bar-fill" style={{ width: '15%' }}></div></div>
                        </div>
                        <div className="dist-item">
                            <div className="dist-info">
                                <span>Patents</span>
                                <span>10%</span>
                            </div>
                            <div className="bar-bg"><div className="bar-fill" style={{ width: '10%' }}></div></div>
                        </div>
                    </div>
                </div>

                {/* Widget 3: The Path Forward */}
                <div className="glass-widget path-widget">
                    <h3 className="widget-title">EXECUTION ROADMAP</h3>
                    <ul className="path-list">
                        <li className="path-item completed">
                            <div className="circle-node"></div>
                            <div className="path-info">
                                <h4>Onboarding & Audit</h4>
                                <span>Initial capability mapping completed. All structural flaws indexed.</span>
                            </div>
                        </li>
                        <li className="path-item active">
                            <div className="circle-node pulse"></div>
                            <div className="path-info">
                                <h4>Brand Defensibility</h4>
                                <span>Lock down core protectable assets across domains and social channels.</span>
                            </div>
                        </li>
                        <li className="path-item">
                            <div className="circle-node"></div>
                            <div className="path-info">
                                <h4>MVP Architecture Draft</h4>
                                <span>Draft minimal viable scope to avoid feature leak and overcapitalization.</span>
                            </div>
                        </li>
                    </ul>
                </div>

                {/* Widget 4: Recent Activity Log */}
                <div className="glass-widget activity-widget">
                    <h3 className="widget-title">AUDIT LOG</h3>
                    <div className="activity-feed">
                        <div className="activity-item">
                            <span className="activity-icon text-teal">✓</span>
                            <div className="activity-text">
                                <p><strong>NDA Template Generated</strong> for contractor negotiations.</p>
                                <span className="activity-time">2 hours ago</span>
                            </div>
                        </div>
                        <div className="activity-item">
                            <span className="activity-icon text-orange">!</span>
                            <div className="activity-text">
                                <p><strong>Domain Expiring:</strong> creativevision.io renews in 14 days.</p>
                                <span className="activity-time">Yesterday at 14:00</span>
                            </div>
                        </div>
                        <div className="activity-item">
                            <span className="activity-icon">📄</span>
                            <div className="activity-text">
                                <p><strong>Vault Upload:</strong> Market Competitor Analysis Q3 added.</p>
                                <span className="activity-time">Oct 24, 2025</span>
                            </div>
                        </div>
                        <div className="activity-item">
                            <span className="activity-icon">🛡️</span>
                            <div className="activity-text">
                                <p><strong>Simulation Completed:</strong> Trademark Defense Scenario (Score: 94%).</p>
                                <span className="activity-time">Oct 20, 2025</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Widget 5: Resources */}
                <div className="glass-widget access-widget">
                    <h3 className="widget-title">COMMAND RESOURCES</h3>
                    <div className="access-cards">
                        <div className="access-card" onClick={() => navigate('/app/game')}>
                            <div className="card-bg game-bg"></div>
                            <div className="card-content">
                                <h4>Strategic Simulation</h4>
                                <span>Strengthen your defenses</span>
                            </div>
                        </div>
                        <div className="access-card" onClick={() => navigate('/app/questions')}>
                            <div className="card-bg vault-bg"></div>
                            <div className="card-content">
                                <h4>Encrypted Vault</h4>
                                <span>Review intelligence docs</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <style>{`
                .dashboard-container {
                    padding: 4rem 2rem;
                    max-width: 1400px; /* Made slightly wider to fit new data */
                    margin: 0 auto;
                    color: #fff;
                    min-height: calc(100vh - 80px);
                }

                .dashboard-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-end;
                    margin-bottom: 3.5rem;
                    flex-wrap: wrap;
                    gap: 1.5rem;
                }

                .dashboard-title {
                    font-size: 3.2rem;
                    font-family: var(--font-heading);
                    color: #fff;
                    margin-bottom: 0.5rem;
                    letter-spacing: 2px;
                    font-weight: 300;
                    text-transform: uppercase;
                }

                .dashboard-subtitle {
                    color: rgba(255, 255, 255, 0.6);
                    font-size: 1.2rem;
                    margin: 0;
                    font-weight: 300;
                    letter-spacing: 1px;
                }

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

                .dashboard-grid {
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
                    transition: transform 0.5s cubic-bezier(0.165, 0.84, 0.44, 1), background 0.5s ease;
                    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1);
                }

                .glass-widget:hover {
                    background: rgba(255, 255, 255, 0.05);
                    transform: translateY(-5px);
                }

                .widget-title {
                    font-family: var(--font-heading);
                    font-size: 1.1rem;
                    color: rgba(255, 255, 255, 0.5);
                    margin-bottom: 2rem;
                    letter-spacing: 3px;
                    font-weight: 400;
                }
                
                .widget-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 2rem;
                }
                
                .widget-header .widget-title { margin-bottom: 0; }

                .badge {
                    padding: 0.4rem 1rem;
                    border-radius: 50px;
                    font-size: 0.75rem;
                    font-weight: 400;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    font-family: var(--font-heading);
                }
                
                .badge-teal { background: rgba(255, 255, 255, 0.1); color: #fff; border: 1px solid rgba(255, 255, 255, 0.2); }
                .text-teal { color: #14b8a6; }
                .text-orange { color: #f59e0b; }

                /* Stat Widgets row */
                .stat-widget { grid-column: span 3; padding: 2rem; justify-content: center; }
                .stat-title { color: rgba(255,255,255,0.4); font-size: 0.8rem; letter-spacing: 2px; margin-bottom: 1rem; font-family: var(--font-heading); }
                .stat-value { font-size: 3rem; font-weight: 300; font-family: var(--font-heading); margin-bottom: 0.5rem; line-height: 1; }
                .stat-change { font-size: 0.85rem; font-weight: 300; letter-spacing: 1px; }

                /* Focus Widget */
                .focus-widget { grid-column: span 8; }
                .focus-content { margin-bottom: 3rem; }
                .focus-text { 
                    color: rgba(255, 255, 255, 0.9); 
                    line-height: 1.8; 
                    font-size: 1.4rem; 
                    font-weight: 300;
                }
                
                .metric-row {
                    display: flex;
                    gap: 4rem;
                    margin-top: auto;
                    padding-top: 2rem;
                    border-top: 1px solid rgba(255,255,255,0.05);
                }
                .metric { display: flex; flex-direction: column; }
                .metric-value { font-family: var(--font-heading); font-size: 2.2rem; color: #fff; line-height: 1; margin-bottom: 0.5rem; font-weight: 300; }
                .metric-label { font-size: 0.8rem; color: rgba(255, 255, 255, 0.4); text-transform: uppercase; letter-spacing: 2px; }

                /* Distribution Widget */
                .distribution-widget { grid-column: span 4; }
                .dist-bars { display: flex; flex-direction: column; gap: 1.5rem; }
                .dist-item { display: flex; flex-direction: column; gap: 0.5rem; }
                .dist-info { display: flex; justify-content: space-between; font-size: 0.9rem; color: rgba(255,255,255,0.8); font-weight: 300; letter-spacing: 1px;}
                .bar-bg { width: 100%; height: 6px; background: rgba(255,255,255,0.1); border-radius: 4px; overflow: hidden; }
                .bar-fill { height: 100%; background: #fff; border-radius: 4px; }

                /* Path Widget */
                .path-widget { grid-column: span 6; }
                .path-list { display: flex; flex-direction: column; gap: 0; position: relative; margin-top: 1rem; }
                .path-list::before {
                    content: '';
                    position: absolute;
                    left: 9px;
                    top: 10px;
                    bottom: 20px;
                    width: 1px;
                    background: rgba(255, 255, 255, 0.1);
                }

                .path-item {
                    display: flex;
                    align-items: flex-start;
                    gap: 1.5rem;
                    padding-bottom: 2.5rem;
                    position: relative;
                }
                .path-item:last-child { padding-bottom: 0; }
                
                .circle-node {
                    width: 19px;
                    height: 19px;
                    border-radius: 50%;
                    background: #000;
                    border: 2px solid rgba(255, 255, 255, 0.2);
                    position: relative;
                    z-index: 2;
                    margin-top: 4px;
                }

                .path-item.completed .circle-node { background: #fff; border-color: #fff; }
                .path-item.active .circle-node { border-color: #fff; background: transparent; }
                .path-item.active .circle-node::after {
                    content: ''; position: absolute; top: 3px; left: 3px; right: 3px; bottom: 3px;
                    background: #fff; border-radius: 50%;
                }
                .path-item.active .pulse {
                    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.4);
                    animation: circlePulse 2s infinite;
                }

                @keyframes circlePulse {
                    0% { box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.4); }
                    70% { box-shadow: 0 0 0 15px rgba(255, 255, 255, 0); }
                    100% { box-shadow: 0 0 0 0 rgba(255, 255, 255, 0); }
                }

                .path-info h4 { margin: 0 0 0.5rem 0; font-family: var(--font-heading); color: #fff; font-size: 1.2rem; font-weight: 300; letter-spacing: 1px; }
                .path-info span { color: rgba(255, 255, 255, 0.5); font-size: 0.95rem; line-height: 1.5; display: block; font-weight: 300; }
                .path-item.completed .path-info h4 { color: rgba(255, 255, 255, 0.5); }

                /* Activity Widget */
                .activity-widget { grid-column: span 6; }
                .activity-feed { display: flex; flex-direction: column; gap: 1.5rem; }
                .activity-item { display: flex; gap: 1rem; align-items: flex-start; }
                .activity-icon { 
                    width: 32px; height: 32px; 
                    background: rgba(255,255,255,0.05); 
                    border: 1px solid rgba(255,255,255,0.1);
                    border-radius: 50%; 
                    display: flex; align-items: center; justify-content: center;
                    font-size: 0.9rem;
                    flex-shrink: 0;
                }
                .activity-text p { margin: 0 0 0.3rem 0; color: rgba(255,255,255,0.8); font-size: 0.95rem; line-height: 1.5; font-weight: 300;}
                .activity-text p strong { color: #fff; font-weight: 400; }
                .activity-time { font-size: 0.8rem; color: rgba(255,255,255,0.4); letter-spacing: 1px; }

                /* Access Widget */
                .access-widget { grid-column: span 12; padding: 2rem 3rem; }
                .access-widget .widget-title { margin-bottom: 1.5rem; }
                .access-cards { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; }
                
                .access-card {
                    position: relative; padding: 3rem 2rem; border-radius: 16px; cursor: pointer; overflow: hidden;
                    border: 1px solid rgba(255, 255, 255, 0.1); transition: all 0.5s ease;
                }

                .card-bg {
                    position: absolute; top: 0; left: 0; right: 0; bottom: 0;
                    background-size: cover; background-position: center; opacity: 0.2; transition: all 0.5s ease; z-index: 0;
                }

                .game-bg { background-image: url('/images/Screenshot 2026-02-25 095411.png'); filter: grayscale(100%); }
                .vault-bg { background-image: url('/images/Screenshot 2026-02-25 095424.png'); filter: grayscale(100%); }

                .access-card:hover { border-color: rgba(255, 255, 255, 0.4); }
                .access-card:hover .card-bg { opacity: 0.4; transform: scale(1.05); filter: grayscale(0%); }

                .card-content { position: relative; z-index: 10; }
                .card-content h4 { margin: 0 0 0.5rem 0; font-family: var(--font-heading); font-size: 1.6rem; font-weight: 300; letter-spacing: 1px; }
                .card-content span { color: rgba(255, 255, 255, 0.7); font-weight: 300; letter-spacing: 1px; }

                @media (max-width: 1024px) {
                    .stat-widget { grid-column: span 6; }
                    .focus-widget { grid-column: span 12; }
                    .distribution-widget { grid-column: span 12; }
                    .path-widget { grid-column: span 12; }
                    .activity-widget { grid-column: span 12; }
                }

                @media (max-width: 600px) {
                    .stat-widget { grid-column: span 12; }
                    .metric-row { flex-direction: column; gap: 2rem; }
                }
            `}</style>
        </div>
    );
};

export default AppHome;
