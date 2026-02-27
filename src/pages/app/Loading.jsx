import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../App.css';

const Loading = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/app/home');
        }, 5000); // 5 seconds loading

        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#000', position: 'relative', overflow: 'hidden' }}>

            {/* Dark Natural Extravagant Background */}
            <div className="app-wallpaper"></div>
            <div className="app-overlay-dark"></div>

            <div className="loader-container fade-in-up" style={{ textAlign: 'center', zIndex: 10, position: 'relative' }}>

                {/* Entertaining Orbital Chase Animation */}
                <div className="orbital-chase-container">
                    <div className="orbit-track"></div>
                    <div className="chaser chaser-1"></div>
                    <div className="chaser chaser-2"></div>
                    <div className="chaser chaser-3"></div>
                    <div className="center-core">
                    </div>
                </div>

                <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', letterSpacing: '4px', margin: '2rem 0 0 0', color: '#fff' }} className="pulse-text">
                    ANALYZING DATA
                </h1>
                <p style={{ color: 'rgba(255,255,255,0.5)', marginTop: '0.5rem', fontSize: '1.1rem', letterSpacing: '2px', textTransform: 'uppercase' }}>Structuring your strategy...</p>
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

                .orbital-chase-container {
                    position: relative;
                    width: 160px;
                    height: 160px;
                    margin: 0 auto;
                }

                .orbit-track {
                    position: absolute; top: 0; left: 0; right: 0; bottom: 0;
                    border: 2px dashed rgba(255,255,255,0.1);
                    border-radius: 50%;
                    animation: spin 20s linear infinite;
                }

                .chaser {
                    position: absolute; top: 0; left: 0; right: 0; bottom: 0;
                    border-radius: 50%;
                    animation: spin cubic-bezier(0.5, 0.1, 0.4, 0.9) infinite;
                }

                .chaser::before {
                    content: '';
                    position: absolute;
                    top: -6px; left: 50%; width: 12px; height: 12px;
                    background: var(--primary-teal);
                    border-radius: 50%;
                    transform: translateX(-50%);
                    box-shadow: 0 0 20px var(--primary-teal), 0 0 40px var(--primary-teal);
                }

                .chaser-1 { animation-duration: 2s; }
                .chaser-2 { animation-duration: 2.5s; opacity: 0.6; }
                .chaser-2::before { width: 8px; height: 8px; top: -4px; }
                .chaser-3 { animation-duration: 3s; opacity: 0.3; }
                .chaser-3::before { width: 5px; height: 5px; top: -2.5px; }

                .center-core {
                    position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
                    width: 60px; height: 60px;
                    background: rgba(255, 255, 255, 0.05);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 50%;
                    display: flex; align-items: center; justify-content: center;
                    backdrop-filter: blur(10px);
                    box-shadow: inset 0 0 20px rgba(255,255,255,0.05);
                    animation: pulseOp 2s infinite ease-in-out;
                }

                .core-emblem {
                    color: var(--primary-teal); font-size: 1.5rem;
                }

                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }

                @keyframes pulseOp {
                    0%, 100% { box-shadow: inset 0 0 20px rgba(255,255,255,0.05), 0 0 0 rgba(20, 184, 166, 0); }
                    50% { box-shadow: inset 0 0 30px rgba(20,184,166,0.2), 0 0 30px rgba(20, 184, 166, 0.4); }
                }

                .pulse-text {
                    animation: pulseText 2s infinite;
                }

                @keyframes pulseText {
                    0% { opacity: 0.6; }
                    50% { opacity: 1; text-shadow: 0 0 20px rgba(255, 255, 255, 0.4); }
                    100% { opacity: 0.6; }
                }
            `}</style>
        </div>
    );
};

export default Loading;
