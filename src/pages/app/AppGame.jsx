import React from 'react';

const AppGame = () => {

    return (
        <div className="game-container fade-in-up">
            <header className="page-header">
                <div>
                    <h1 className="page-title">STRATEGIC SIMULATION</h1>
                    <p className="page-subtitle">Test your defensive moats in a high-fidelity risk environment.</p>
                </div>
                <div className="header-actions">
                    <a href="http://iptycoon-game.seeles.ai/" target="_blank" rel="noopener noreferrer" className="btn-glow-small" style={{ textDecoration: 'none' }}>
                        <span style={{ fontSize: '1.2rem', marginRight: '0.5rem' }}>⤢</span> EXTERNAL WINDOW
                    </a>
                </div>
            </header>

            <div className="dashboard-grid">

                {/* Simulation Metrics Row */}
                <div className="glass-widget stat-widget">
                    <h5 className="stat-title">SIMULATION ENGINE</h5>
                    <div className="stat-value text-teal">ONLINE</div>
                    <div className="stat-change">Latency: 12ms</div>
                </div>
                <div className="glass-widget stat-widget">
                    <h5 className="stat-title">CURRENT SCENARIO</h5>
                    <div className="stat-value" style={{ fontSize: '2rem' }}>TRADEMARK DEFENSE</div>
                    <div className="stat-change text-orange">Difficulty: Moderate</div>
                </div>
                <div className="glass-widget stat-widget">
                    <h5 className="stat-title">SESSIONS COMPLETED</h5>
                    <div className="stat-value">3</div>
                    <div className="stat-change text-teal">Average Score: A-</div>
                </div>
                <div className="glass-widget stat-widget">
                    <h5 className="stat-title">GLOBAL RANK</h5>
                    <div className="stat-value">#402</div>
                    <div className="stat-change text-teal">Top 15%</div>
                </div>

                {/* Secure Game Iframe Terminal */}
                <div className="glass-widget terminal-widget">
                    <div className="terminal-header">
                        <div className="terminal-dots"><span></span><span></span><span></span></div>
                        <div className="terminal-title">GOOCRANTI // IP-TYCOON ENGINE V1.0.4</div>
                        <div className="terminal-status">SECURE CONNECTION</div>
                    </div>

                    <div className="frame-wrapper">
                        <iframe
                            src="http://iptycoon-game.seeles.ai/"
                            className="game-iframe"
                            title="IP Tycoon Game"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>

            </div>

            <style>{`
                .game-container {
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

                .dashboard-grid {
                    display: grid;
                    grid-template-columns: repeat(12, 1fr);
                    gap: 2rem;
                }

                /* GLASS WIDGET BASE */
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

                /* STAT WIDGETS */
                .stat-widget { grid-column: span 3; padding: 2rem; justify-content: center; }
                .stat-title { color: rgba(255,255,255,0.4); font-size: 0.8rem; letter-spacing: 2px; margin-bottom: 1rem; font-family: var(--font-heading); }
                .stat-value { font-size: 3rem; font-weight: 300; font-family: var(--font-heading); margin-bottom: 0.5rem; line-height: 1; white-space: nowrap}
                .stat-change { font-size: 0.85rem; font-weight: 300; letter-spacing: 1px; }

                .text-teal { color: #14b8a6; }
                .text-orange { color: #f59e0b; }

                /* BUTTON */
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

                /* TERMINAL WIDGET */
                .terminal-widget {
                    grid-column: span 12;
                    padding: 0; /* Remove padding for edge-to-edge frame */
                    overflow: hidden;
                    display: flex;
                    flex-direction: column;
                    border: 1px solid rgba(255, 255, 255, 0.2);
                }

                .terminal-widget:hover {
                    transform: none; /* Disable hover float for the large game frame */
                    background: rgba(255, 255, 255, 0.03);
                }

                .terminal-header {
                    background: rgba(0, 0, 0, 0.4);
                    padding: 1rem 2rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                }

                .terminal-dots {
                    display: flex;
                    gap: 8px;
                }
                .terminal-dots span {
                    width: 12px; height: 12px; border-radius: 50%;
                }
                .terminal-dots span:nth-child(1) { background: #ef4444; }
                .terminal-dots span:nth-child(2) { background: #f59e0b; }
                .terminal-dots span:nth-child(3) { background: #10b981; }

                .terminal-title {
                    font-family: var(--font-heading);
                    font-size: 1rem;
                    color: rgba(255, 255, 255, 0.5);
                    letter-spacing: 4px;
                }

                .terminal-status {
                    font-size: 0.75rem;
                    color: #10b981;
                    letter-spacing: 2px;
                    text-transform: uppercase;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }
                .terminal-status::before {
                    content: '';
                    display: block;
                    width: 6px; height: 6px;
                    background: #10b981;
                    border-radius: 50%;
                    box-shadow: 0 0 10px #10b981;
                }

                .frame-wrapper {
                    position: relative;
                    width: 100%;
                    padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
                    background: #000;
                }

                .game-iframe {
                    position: absolute;
                    top: 0; left: 0; width: 100%; height: 100%;
                    border: none;
                }

                @media (max-width: 1024px) {
                    .stat-widget { grid-column: span 6; }
                }

                @media (max-width: 600px) {
                    .stat-widget { grid-column: span 12; }
                    .terminal-title { display: none; }
                }
            `}</style>
        </div>
    );
};

export default AppGame;
