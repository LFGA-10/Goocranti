import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AppVault = () => {
    const [activeTab, setActiveTab] = useState('all');
    const navigate = useNavigate();

    return (
        <div className="vault-container fade-in-up">
            <header className="page-header">
                <div>
                    <h1 className="page-title">STRATEGIC VAULT</h1>
                    <p className="page-subtitle">Encrypted documents, legal frameworks, and execution blueprints.</p>
                </div>
            </header>

            <div className="dashboard-grid">

                {/* Vault Stats Row */}
                <div className="glass-widget stat-widget">
                    <h5 className="stat-title">SECURE FILES</h5>
                    <div className="stat-value">24</div>
                    <div className="stat-change text-orange">2 require review</div>
                </div>
                <div className="glass-widget stat-widget">
                    <h5 className="stat-title">VAULT CLEARANCE</h5>
                    <div className="stat-value">LEVEL 3</div>
                    <div className="stat-change text-teal">Founder Access</div>
                </div>
                <div className="glass-widget stat-widget">
                    <h5 className="stat-title">NEXT AUDIT</h5>
                    <div className="stat-value">14 DAYS</div>
                    <div className="stat-change text-teal">Scheduled automatically</div>
                </div>
                <div className="glass-widget stat-widget">
                    <h5 className="stat-title">SYSTEM STATUS</h5>
                    <div className="stat-value text-teal">SECURE</div>
                    <div className="stat-change">End-to-end encrypted</div>
                </div>

                {/* Main Repository List */}
                <div className="glass-widget repo-widget">
                    <div className="widget-header">
                        <h3 className="widget-title">DOCUMENT REPOSITORY</h3>
                        <div className="vault-tabs">
                            <span className={`v-tab ${activeTab === 'all' ? 'active' : ''}`} onClick={() => setActiveTab('all')}>ALL</span>
                            <span className={`v-tab ${activeTab === 'legal' ? 'active' : ''}`} onClick={() => setActiveTab('legal')}>LEGAL</span>
                            <span className={`v-tab ${activeTab === 'brand' ? 'active' : ''}`} onClick={() => setActiveTab('brand')}>BRANDING</span>
                        </div>
                    </div>

                    <div className="repo-table">
                        <div className="repo-header">
                            <div className="col-name">DOCUMENT NAME</div>
                            <div className="col-type">CATEGORY</div>
                            <div className="col-date">LAST MODIFIED</div>
                            <div className="col-status">STATUS</div>
                            <div className="col-action"></div>
                        </div>

                        <div className="repo-row">
                            <div className="col-name">
                                <span className="doc-icon">📄</span>
                                <div>
                                    <h4>Brand Identity Masterclass.pdf</h4>
                                    <span>Visual/Verbal guidelines</span>
                                </div>
                            </div>
                            <div className="col-type">BRANDING</div>
                            <div className="col-date">2 hours ago</div>
                            <div className="col-status"><span className="badge badge-teal">VERIFIED</span></div>
                            <div className="col-action"><button className="btn-glow-small">OPEN</button></div>
                        </div>

                        <div className="repo-row">
                            <div className="col-name">
                                <span className="doc-icon">⚖️</span>
                                <div>
                                    <h4>Standard Independent Contractor NDA.docx</h4>
                                    <span>Blank template for hires</span>
                                </div>
                            </div>
                            <div className="col-type">LEGAL</div>
                            <div className="col-date">Yesterday 14:00</div>
                            <div className="col-status"><span className="badge badge-teal">VERIFIED</span></div>
                            <div className="col-action"><button className="btn-glow-small">OPEN</button></div>
                        </div>

                        <div className="repo-row locked">
                            <div className="col-name">
                                <span className="doc-icon">🔒</span>
                                <div>
                                    <h4>Market Positioning Strategy.pdf</h4>
                                    <span>Detailed competitor matrix</span>
                                </div>
                            </div>
                            <div className="col-type">STRATEGY</div>
                            <div className="col-date">--</div>
                            <div className="col-status"><span className="badge badge-locked">LOCKED</span></div>
                            <div className="col-action"><button className="btn-glow-small" disabled>LOCKED</button></div>
                        </div>

                        <div className="repo-row locked">
                            <div className="col-name">
                                <span className="doc-icon">🔒</span>
                                <div>
                                    <h4>Defensive Moats & IP Law Guide.pdf</h4>
                                    <span>Advanced protection tactics</span>
                                </div>
                            </div>
                            <div className="col-type">LEGAL</div>
                            <div className="col-date">--</div>
                            <div className="col-status"><span className="badge badge-locked">LOCKED</span></div>
                            <div className="col-action"><button className="btn-glow-small" disabled>LOCKED</button></div>
                        </div>
                    </div>
                </div>

                {/* Blueprints Grid */}
                <div className="glass-widget blueprints-widget">
                    <h3 className="widget-title">VISUAL BLUEPRINTS</h3>
                    <div className="blueprint-cards">
                        <div className="blueprint-card">
                            <div className="blueprint-visual bg-1"></div>
                            <div className="blueprint-content">
                                <h4>MVP Architecture Draft</h4>
                                <p>Interactive mapping of your initial prototype scope.</p>
                                <button className="btn-glow-small">REVIEW MAP</button>
                            </div>
                        </div>
                        <div className="blueprint-card">
                            <div className="blueprint-visual bg-2"></div>
                            <div className="blueprint-content">
                                <h4>Target Audience Matrix</h4>
                                <p>Visual separation of primary and secondary markets.</p>
                                <button className="btn-glow-small" onClick={() => navigate('/app/matrix')}>REVIEW MATRIX</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                .vault-container {
                    padding: 4rem 2rem;
                    max-width: 1400px;
                    margin: 0 auto;
                    color: #fff;
                    min-height: calc(100vh - 80px);
                }

                .page-header {
                    margin-bottom: 3.5rem;
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

                .widget-title {
                    font-family: var(--font-heading);
                    font-size: 1.1rem;
                    color: rgba(255, 255, 255, 0.5);
                    margin-bottom: 2rem;
                    letter-spacing: 3px;
                    font-weight: 400;
                    text-transform: uppercase;
                }
                
                .widget-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 2rem;
                }
                
                .widget-header .widget-title { margin-bottom: 0; }

                /* STAT WIDGETS */
                .stat-widget { grid-column: span 3; padding: 2rem; justify-content: center; }
                .stat-title { color: rgba(255,255,255,0.4); font-size: 0.8rem; letter-spacing: 2px; margin-bottom: 1rem; font-family: var(--font-heading); }
                .stat-value { font-size: 3rem; font-weight: 300; font-family: var(--font-heading); margin-bottom: 0.5rem; line-height: 1; }
                .stat-change { font-size: 0.85rem; font-weight: 300; letter-spacing: 1px; }

                .text-teal { color: #14b8a6; }
                .text-orange { color: #f59e0b; }

                /* TABS */
                .vault-tabs { display: flex; gap: 1rem; }
                .v-tab {
                    font-size: 0.85rem;
                    font-family: var(--font-heading);
                    letter-spacing: 2px;
                    color: rgba(255,255,255,0.4);
                    padding-bottom: 0.3rem;
                    cursor: pointer;
                    transition: all 0.3s;
                    border-bottom: 2px solid transparent;
                }
                .v-tab:hover { color: #fff; }
                .v-tab.active { color: #fff; border-bottom-color: #fff; }

                /* REPO LIST */
                .repo-widget { grid-column: span 12; padding: 3rem; }
                .repo-table { display: flex; flex-direction: column; width: 100%; }
                
                .repo-header {
                    display: flex;
                    padding-bottom: 1rem;
                    border-bottom: 1px solid rgba(255,255,255,0.1);
                    margin-bottom: 1rem;
                    font-size: 0.8rem;
                    font-family: var(--font-heading);
                    letter-spacing: 2px;
                    color: rgba(255,255,255,0.4);
                }

                .repo-row {
                    display: flex;
                    align-items: center;
                    padding: 1.5rem 0;
                    border-bottom: 1px solid rgba(255,255,255,0.05);
                    transition: background 0.3s;
                }

                .repo-row:hover:not(.locked) { background: rgba(255,255,255,0.02); }
                
                .repo-row.locked { opacity: 0.5; }

                .col-name { flex: 2; display: flex; gap: 1.5rem; align-items: center; }
                .col-type { flex: 1; font-weight: 300; font-size: 0.95rem; color: rgba(255,255,255,0.7); }
                .col-date { flex: 1; font-weight: 300; font-size: 0.95rem; color: rgba(255,255,255,0.7); }
                .col-status { flex: 1; }
                .col-action { flex: 0.5; display: flex; justify-content: flex-end; }

                .doc-icon {
                    width: 48px;
                    height: 48px;
                    background: rgba(255, 255, 255, 0.05);
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1.5rem;
                    border: 1px solid rgba(255, 255, 255, 0.1);
                }

                .col-name h4 { margin: 0 0 0.3rem 0; font-size: 1.1rem; font-weight: 400; letter-spacing: 0.5px; }
                .col-name span { color: rgba(255,255,255,0.5); font-size: 0.9rem; font-weight: 300; }

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
                .badge-locked { background: rgba(0,0,0,0.5); color: rgba(255,255,255,0.4); border: 1px solid rgba(255,255,255,0.1); }

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

                .btn-glow-small:hover:not(:disabled) {
                    background: rgba(255, 255, 255, 0.1);
                    border-color: #fff;
                }

                .btn-glow-small:disabled {
                    border-color: rgba(255,255,255,0.1);
                    color: rgba(255,255,255,0.3);
                    cursor: not-allowed;
                }

                /* BLUEPRINTS ROW */
                .blueprints-widget { grid-column: span 12; padding: 3rem; }
                .blueprint-cards { display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 2rem; }
                
                .blueprint-card {
                    display: flex;
                    flex-direction: column;
                    border-radius: 16px;
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    overflow: hidden;
                    background: rgba(0,0,0,0.2);
                    transition: all 0.4s ease;
                }

                .blueprint-card:hover {
                    border-color: rgba(255, 255, 255, 0.3);
                }

                .blueprint-visual {
                    height: 200px;
                    width: 100%;
                    background-size: cover;
                    background-position: center;
                    filter: grayscale(100%);
                    transition: filter 0.4s ease;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                }

                .blueprint-card:hover .blueprint-visual { filter: grayscale(0%); }

                .bg-1 { background-image: url('/images/Screenshot 2026-02-25 095424.png'); }
                .bg-2 { background-image: url('/images/Screenshot 2026-02-25 095459.png'); }

                .blueprint-content {
                    padding: 2.5rem;
                }

                .blueprint-content h4 { margin: 0 0 1rem 0; font-family: var(--font-heading); font-size: 1.6rem; font-weight: 300; letter-spacing: 1px; }
                .blueprint-content p { margin: 0 0 2rem 0; color: rgba(255, 255, 255, 0.6); font-weight: 300; line-height: 1.6; }

                @media (max-width: 1024px) {
                    .stat-widget { grid-column: span 6; }
                    .repo-header { display: none; }
                    .col-type, .col-date, .col-status { display: none; }
                    .repo-row { flex-wrap: wrap; gap: 1rem; justify-content: space-between; }
                    .col-name { flex: 1 1 100%; }
                }
            `}</style>
        </div>
    );
};

export default AppVault;
