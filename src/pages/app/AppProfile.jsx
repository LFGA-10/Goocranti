import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const AppProfile = () => {
    const navigate = useNavigate();
    const fileInputRef = useRef(null);
    const [avatarUrl, setAvatarUrl] = useState(null);
    const [activeTab, setActiveTab] = useState('account');

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setAvatarUrl(imageUrl);
        }
    };

    return (
        <div className="profile-container fade-in-up">
            <header className="page-header">
                <div>
                    <h1 className="page-title">FOUNDER DOSSIER</h1>
                    <p className="page-subtitle">Your identity, security clearance, and system parameters.</p>
                </div>
                <div className="header-actions">
                    <button className="btn-glow-small danger" onClick={() => navigate('/signin')}>
                        <span style={{ fontSize: '1.2rem', marginRight: '0.5rem' }}>⏻</span> TERMINATE SESSION
                    </button>
                </div>
            </header>

            <div className="dashboard-grid">

                {/* ID Card / Avatar Widget */}
                <div className="glass-widget id-widget">
                    <div className="avatar-section">
                        <div className="avatar-wrapper" onClick={() => fileInputRef.current.click()}>
                            {avatarUrl ? (
                                <img src={avatarUrl} alt="User Avatar" className="avatar-img" />
                            ) : (
                                <div className="avatar-placeholder">ID</div>
                            )}
                            <div className="upload-badge">+</div>
                            <input
                                type="file"
                                ref={fileInputRef}
                                onChange={handleImageUpload}
                                accept="image/*"
                                style={{ display: 'none' }}
                            />
                        </div>
                        <h2 className="profile-name">ALEX PROTOTYPE</h2>
                        <span className="profile-role">Lead Visionary</span>
                    </div>

                    <div className="id-stats">
                        <div className="id-stat">
                            <span className="id-label">Clearance</span>
                            <span className="id-value text-teal">LEVEL 3</span>
                        </div>
                        <div className="id-stat">
                            <span className="id-label">System Access</span>
                            <span className="id-value">GRANTED</span>
                        </div>
                        <div className="id-stat">
                            <span className="id-label">Member Since</span>
                            <span className="id-value">OCT 2025</span>
                        </div>
                    </div>
                </div>

                {/* Main Settings Widget */}
                <div className="glass-widget settings-widget">
                    <div className="vault-tabs">
                        <span className={`v-tab ${activeTab === 'account' ? 'active' : ''}`} onClick={() => setActiveTab('account')}>ACCOUNT</span>
                        <span className={`v-tab ${activeTab === 'strategy' ? 'active' : ''}`} onClick={() => setActiveTab('strategy')}>STRATEGY</span>
                        <span className={`v-tab ${activeTab === 'system' ? 'active' : ''}`} onClick={() => setActiveTab('system')}>SYSTEM</span>
                    </div>

                    <div className="tab-content">
                        {activeTab === 'account' && (
                            <div className="form-grid fade-in">
                                <h3 className="widget-title">CREDENTIALS</h3>
                                <div className="form-group">
                                    <label>FULL LEGAL NAME</label>
                                    <input type="text" className="elegant-input" defaultValue="Alex Prototype" />
                                </div>
                                <div className="form-group">
                                    <label>SECURE EMAIL</label>
                                    <input type="email" className="elegant-input" defaultValue="founder@creative.io" />
                                </div>
                                <div className="form-group">
                                    <label>ORGANIZATION</label>
                                    <input type="text" className="elegant-input" defaultValue="Stealth Mode LLC" />
                                </div>
                                <div className="form-group">
                                    <label>ENCRYPTION PASSWORD</label>
                                    <input type="password" className="elegant-input" defaultValue="********" />
                                </div>
                                <div className="form-actions">
                                    <button className="btn-glow-small">UPDATE CREDENTIALS</button>
                                </div>
                            </div>
                        )}

                        {activeTab === 'strategy' && (
                            <div className="form-grid fade-in">
                                <h3 className="widget-title">STRATEGIC PREFERENCES</h3>
                                <div className="form-group full-width">
                                    <label>PRIMARY INDUSTRY VERTICAL</label>
                                    <select className="elegant-input">
                                        <option>Technology & Software</option>
                                        <option>Media & Entertainment</option>
                                        <option>Consumer Goods</option>
                                    </select>
                                </div>
                                <div className="form-group full-width">
                                    <label>CURRENT BURN RATE METRIC</label>
                                    <input type="text" className="elegant-input" defaultValue="Low (Bootstrapped)" disabled />
                                </div>
                                <div className="setting-toggle">
                                    <div className="toggle-info">
                                        <h4>Strategic Alerts</h4>
                                        <p>Receive notifications for IP vulnerabilities.</p>
                                    </div>
                                    <label className="switch">
                                        <input type="checkbox" defaultChecked />
                                        <span className="slider round"></span>
                                    </label>
                                </div>
                            </div>
                        )}

                        {activeTab === 'system' && (
                            <div className="form-grid fade-in">
                                <h3 className="widget-title">ENVIRONMENT PREFERENCES</h3>
                                <div className="setting-toggle">
                                    <div className="toggle-info">
                                        <h4>Biometric Authentication</h4>
                                        <p>Require FaceID / TouchID for Vault access.</p>
                                    </div>
                                    <label className="switch">
                                        <input type="checkbox" defaultChecked />
                                        <span className="slider round"></span>
                                    </label>
                                </div>
                                <div className="setting-toggle">
                                    <div className="toggle-info">
                                        <h4>Data Analytics Sharing</h4>
                                        <p>Allow anonymous data usage for global IP trends.</p>
                                    </div>
                                    <label className="switch">
                                        <input type="checkbox" />
                                        <span className="slider round"></span>
                                    </label>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

            </div>

            <style>{`
                .profile-container {
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
                    padding: 3rem;
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

                .text-teal { color: #14b8a6; }

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

                .btn-glow-small.danger:hover {
                    background: rgba(239, 68, 68, 0.2);
                    border-color: #ef4444;
                    color: #ef4444;
                }

                /* ID WIDGET */
                .id-widget {
                    grid-column: span 4;
                    align-items: center;
                    text-align: center;
                }

                .avatar-section { margin-bottom: 3rem; position: relative; }
                
                .avatar-wrapper {
                    position: relative;
                    width: 140px; height: 140px;
                    margin: 0 auto 1.5rem auto;
                    border-radius: 50%;
                    border: 2px solid rgba(255, 255, 255, 0.2);
                    cursor: pointer;
                    transition: all 0.3s ease;
                }
                .avatar-wrapper:hover { border-color: #fff; }

                .avatar-placeholder {
                    width: 100%; height: 100%;
                    background: rgba(255,255,255,0.05);
                    border-radius: 50%;
                    display: flex; align-items: center; justify-content: center;
                    font-family: var(--font-heading); font-size: 2.5rem; color: rgba(255,255,255,0.4);
                }

                .avatar-img {
                    width: 100%; height: 100%; border-radius: 50%; object-fit: cover;
                }

                .upload-badge {
                    position: absolute; bottom: 0; right: 0;
                    background: #14b8a6; color: #000;
                    width: 36px; height: 36px; border-radius: 50%;
                    display: flex; align-items: center; justify-content: center;
                    font-size: 1.5rem; font-weight: bold; border: 4px solid #000;
                }

                .profile-name { margin: 0 0 0.5rem 0; font-family: var(--font-heading); font-size: 1.8rem; font-weight: 300; letter-spacing: 2px; }
                .profile-role { color: rgba(255,255,255,0.5); font-size: 1rem; letter-spacing: 1px; text-transform: uppercase;}

                .id-stats { width: 100%; display: flex; flex-direction: column; gap: 1rem; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 2rem;}
                .id-stat { display: flex; justify-content: space-between; font-size: 0.95rem; }
                .id-label { color: rgba(255,255,255,0.5); font-weight: 300; letter-spacing: 1px; }
                .id-value { font-weight: 300; letter-spacing: 1px;}
                
                /* SETTINGS WIDGET */
                .settings-widget { grid-column: span 8; padding: 3rem; }

                .vault-tabs { display: flex; gap: 1rem; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 1rem; margin-bottom: 2rem;}
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

                .form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; width: 100%; }
                .form-grid .widget-title { grid-column: span 2; margin-bottom: 1rem; margin-top: 1rem; }
                .form-group { display: flex; flex-direction: column; gap: 0.8rem; }
                .form-group.full-width { grid-column: span 2; }
                
                .form-group label {
                    font-family: var(--font-heading);
                    font-size: 0.75rem;
                    color: rgba(255,255,255,0.5);
                    letter-spacing: 2px;
                }

                .elegant-input {
                    background: rgba(0,0,0,0.2);
                    border: 1px solid rgba(255,255,255,0.1);
                    padding: 1rem 1.5rem;
                    border-radius: 12px;
                    color: #fff;
                    font-size: 1rem;
                    outline: none;
                    transition: all 0.3s;
                    font-family: var(--font-body);
                }

                .elegant-input:focus {
                    border-color: rgba(255,255,255,0.5);
                    background: rgba(0,0,0,0.4);
                }
                    
                .elegant-input:disabled {
                    opacity: 0.5; cursor: not-allowed;
                }

                .form-actions { grid-column: span 2; display: flex; justify-content: flex-end; margin-top: 1rem; }

                /* TOGGLES */
                .setting-toggle {
                    grid-column: span 2;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 1.5rem;
                    background: rgba(255,255,255,0.02);
                    border: 1px solid rgba(255,255,255,0.05);
                    border-radius: 12px;
                }

                .toggle-info h4 { margin: 0 0 0.5rem 0; font-family: var(--font-heading); font-size: 1.1rem; font-weight: 300; letter-spacing: 1px;}
                .toggle-info p { margin: 0; color: rgba(255,255,255,0.5); font-weight: 300; font-size: 0.9rem;}

                /* The switch - the box around the slider */
                .switch {
                    position: relative;
                    display: inline-block;
                    width: 50px;
                    height: 26px;
                    flex-shrink: 0;
                }

                /* Hide default HTML checkbox */
                .switch input {
                    opacity: 0;
                    width: 0;
                    height: 0;
                }

                /* The slider */
                .slider {
                    position: absolute;
                    cursor: pointer;
                    top: 0; left: 0; right: 0; bottom: 0;
                    background-color: rgba(255, 255, 255, 0.1);
                    transition: .4s;
                    border: 1px solid rgba(255, 255, 255, 0.2);
                }

                .slider:before {
                    position: absolute;
                    content: "";
                    height: 18px;
                    width: 18px;
                    left: 3px;
                    bottom: 3px;
                    background-color: white;
                    transition: .4s;
                }

                input:checked + .slider {
                    background-color: var(--primary-teal);
                    border-color: var(--primary-teal);
                }

                input:checked + .slider:before {
                    transform: translateX(24px);
                    background-color: #000;
                }

                /* Rounded sliders */
                .slider.round {
                    border-radius: 34px;
                }

                .slider.round:before {
                    border-radius: 50%;
                }

                @media (max-width: 1024px) {
                    .id-widget { grid-column: span 12; }
                    .settings-widget { grid-column: span 12; }
                }

                @media (max-width: 600px) {
                    .form-grid { grid-template-columns: 1fr; }
                    .form-grid .widget-title, .form-group.full-width, .form-actions { grid-column: span 1; }
                    .setting-toggle { grid-column: span 1; flex-direction: column; gap: 1rem; align-items: flex-start; }
                }
            `}</style>
        </div>
    );
};

export default AppProfile;
