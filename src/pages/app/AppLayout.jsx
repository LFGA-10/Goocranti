import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import '../../App.css';

// Elegant minimalist SVG Icons
const HomeIcon = () => (
    <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
);

const VaultIcon = () => (
    <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
);

const GameIcon = () => (
    <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
);

const ProfileIcon = () => (
    <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
);

const AppLayout = () => {
    return (
        <div className="app-layout-wrapper">
            {/* Natural Extravagant Background Layer */}
            <div className="app-wallpaper"></div>

            {/* Soft dark overlay for better reading */}
            <div className="app-overlay-dark"></div>

            {/* Main Content Area */}
            <div className="app-content-area" id="app-content-scroll">
                <Outlet />
            </div>

            {/* Elegant Glass Navbar */}
            <nav className="app-bottom-nav">
                {[
                    { path: '/app/home', icon: <HomeIcon />, label: 'OVERVIEW' },
                    { path: '/app/questions', icon: <VaultIcon />, label: 'VAULT' },
                    { path: '/app/game', icon: <GameIcon />, label: 'EXPERIENCE' },
                    { path: '/app/profile', icon: <ProfileIcon />, label: 'PROFILE' }
                ].map((navItem, idx) => (
                    <NavLink
                        key={idx}
                        to={navItem.path}
                        className={({ isActive }) => `app-nav-item ${isActive ? 'active' : ''}`}
                    >
                        <div className="nav-icon-wrapper">{navItem.icon}</div>
                        <span className="nav-label">{navItem.label}</span>
                    </NavLink>
                ))}
            </nav>

            <style>{`
            .app-layout-wrapper {
                min-height: 100vh;
                display: flex;
                flex-direction: column;
                position: relative;
                overflow: hidden;
            }

            .app-wallpaper {
                position: absolute;
                top: 0; left: 0; right: 0; bottom: 0;
                background-image: url('/images/app_bg.png');
                background-size: cover;
                background-position: center;
                background-repeat: no-repeat;
                z-index: 0;
            }

            .app-overlay-dark {
                position: absolute;
                top: 0; left: 0; right: 0; bottom: 0;
                background: linear-gradient(135deg, rgba(2, 17, 16, 0.7) 0%, rgba(0,0,0,0.4) 100%);
                backdrop-filter: blur(10px);
                -webkit-backdrop-filter: blur(10px);
                z-index: 1;
            }

            .app-content-area {
                flex: 1;
                padding-bottom: 120px;
                overflow-y: auto;
                position: relative;
                z-index: 10;
                scroll-behavior: smooth;
            }

            .app-bottom-nav {
                position: fixed;
                bottom: 2.5rem;
                left: 50%;
                transform: translateX(-50%);
                width: 90%;
                max-width: 500px;
                background: rgba(255, 255, 255, 0.05); /* Very glassy */
                backdrop-filter: blur(30px) saturate(150%);
                -webkit-backdrop-filter: blur(30px) saturate(150%);
                border: 1px solid rgba(255, 255, 255, 0.1);
                border-radius: 100px;
                padding: 0.8rem 2rem;
                display: flex;
                justify-content: space-between;
                box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5), inset 0 2px 2px rgba(255, 255, 255, 0.05);
                z-index: 1000;
            }

            .app-nav-item {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                gap: 0.4rem;
                color: rgba(255, 255, 255, 0.4);
                text-decoration: none;
                padding: 0.5rem;
                transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
                position: relative;
            }

            .nav-icon-wrapper {
                transition: transform 0.4s ease;
            }

            .nav-label {
                font-family: var(--font-body);
                font-size: 0.65rem;
                letter-spacing: 2px;
                text-transform: uppercase;
                opacity: 0;
                transform: translateY(5px);
                transition: all 0.4s ease;
                position: absolute;
                bottom: -8px;
                white-space: nowrap;
                font-weight: 300;
            }

            .app-nav-item:hover {
                color: rgba(255, 255, 255, 0.8);
            }

            .app-nav-item.active {
                color: #fff;
                padding-bottom: 1.2rem;
            }

            .app-nav-item.active .nav-icon-wrapper {
                transform: translateY(-8px);
                filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.3));
            }

            .app-nav-item.active .nav-label {
                opacity: 1;
                transform: translateY(0);
                bottom: 0px;
            }
            
            @media (max-width: 600px) {
                .app-bottom-nav {
                    bottom: 1.5rem;
                    padding: 0.8rem 1.5rem;
                    width: 95%;
                }
            }
        `}</style>
        </div>
    );
};

export default AppLayout;
