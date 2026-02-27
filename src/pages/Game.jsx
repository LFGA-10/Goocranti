import React from 'react';
import '../App.css';

const GamePage = () => {
    return (
        <div className="fade-in-up" style={{ padding: '150px 2rem 100px', minHeight: '100vh', color: '#fff', position: 'relative', overflow: 'hidden' }}>

            {/* Background Word */}
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: -1, pointerEvents: 'none', whiteSpace: 'nowrap' }}>
                <h1 className="giant-logo" style={{ fontSize: '20vw', opacity: 0.5, margin: 0 }}>STRATEGY</h1>
            </div>

            <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '6rem' }}>

                {/* Hero Section */}
                <section style={{ textAlign: 'center' }}>
                    <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontFamily: 'var(--font-heading)', marginBottom: '1rem', lineHeight: 1.1 }}>
                        This Is How We Play.<br />
                        The Goocranti Method.<br />
                        <span className="highlight-text">Observe. Analyze. Build. Scale.</span>
                    </h1>
                </section>

                {/* Process Section */}
                <section>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem' }}>

                        {/* Phase 1 */}
                        <div style={{ position: 'relative', paddingLeft: '1rem' }}>
                            <div style={{ fontSize: '6rem', fontFamily: 'var(--font-impact)', color: 'rgba(255,255,255,0.03)', position: 'absolute', top: '-40px', left: '-20px', zIndex: -1 }}>01</div>
                            <h3 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-heading)', color: '#fff', marginBottom: '1rem' }}><span style={{ color: 'var(--primary-teal)' }}>—</span> Observe</h3>
                            <p style={{ color: '#a0aec0', fontSize: '1.2rem' }}>We study before we build.</p>
                        </div>

                        {/* Phase 2 */}
                        <div style={{ position: 'relative', paddingLeft: '1rem' }}>
                            <div style={{ fontSize: '6rem', fontFamily: 'var(--font-impact)', color: 'rgba(255,255,255,0.03)', position: 'absolute', top: '-40px', left: '-20px', zIndex: -1 }}>02</div>
                            <h3 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-heading)', color: '#fff', marginBottom: '1rem' }}><span style={{ color: 'var(--primary-teal)' }}>—</span> Analyze</h3>
                            <p style={{ color: '#a0aec0', fontSize: '1.2rem' }}>We identify leverage points.</p>
                        </div>

                        {/* Phase 3 */}
                        <div style={{ position: 'relative', paddingLeft: '1rem' }}>
                            <div style={{ fontSize: '6rem', fontFamily: 'var(--font-impact)', color: 'rgba(255,255,255,0.03)', position: 'absolute', top: '-40px', left: '-20px', zIndex: -1 }}>03</div>
                            <h3 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-heading)', color: '#fff', marginBottom: '1rem' }}><span style={{ color: 'var(--primary-teal)' }}>—</span> Engineer</h3>
                            <p style={{ color: '#a0aec0', fontSize: '1.2rem' }}>We build with precision.</p>
                        </div>

                        {/* Phase 4 */}
                        <div style={{ position: 'relative', paddingLeft: '1rem' }}>
                            <div style={{ fontSize: '6rem', fontFamily: 'var(--font-impact)', color: 'rgba(255,255,255,0.03)', position: 'absolute', top: '-40px', left: '-20px', zIndex: -1 }}>04</div>
                            <h3 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-heading)', color: '#fff', marginBottom: '1rem' }}><span style={{ color: 'var(--primary-teal)' }}>—</span> Refine</h3>
                            <p style={{ color: '#a0aec0', fontSize: '1.2rem' }}>We test, optimize, scale.</p>
                        </div>

                    </div>
                </section>

                <section style={{ marginTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '4rem', display: 'flex', flexWrap: 'wrap', gap: '4rem', justifyContent: 'center' }}>
                    <div className="glass-card" style={{ flex: 1, minWidth: '300px' }}>
                        <h4 style={{ color: '#84a29f', letterSpacing: '2px', marginBottom: '1.5rem', fontSize: '1.2rem', fontFamily: 'var(--font-heading)' }}>THE RULES OF THE GAME</h4>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}><span style={{ color: 'var(--primary-teal)', fontWeight: 'bold' }}>✗</span> No blind execution</li>
                            <li style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}><span style={{ color: 'var(--primary-teal)', fontWeight: 'bold' }}>✗</span> No trend-chasing</li>
                            <li style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}><span style={{ color: 'var(--primary-teal)', fontWeight: 'bold' }}>✗</span> No bloated systems</li>
                            <li style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}><span style={{ color: 'var(--primary-teal)', fontWeight: 'bold' }}>✗</span> No wasted motion</li>
                        </ul>
                    </div>
                    <div className="glass-card" style={{ flex: 1, minWidth: '300px' }}>
                        <h4 style={{ color: '#84a29f', letterSpacing: '2px', marginBottom: '1.5rem', fontSize: '1.2rem', fontFamily: 'var(--font-heading)' }}>OUR ADVANTAGE</h4>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}><span style={{ color: 'var(--primary-teal)', fontWeight: 'bold' }}>✓</span> Clarity first</li>
                            <li style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}><span style={{ color: 'var(--primary-teal)', fontWeight: 'bold' }}>✓</span> Strategy always</li>
                            <li style={{ color: '#fff', fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}><span style={{ color: 'var(--primary-teal)', fontWeight: 'bold' }}>✓</span> Measurable results</li>
                        </ul>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default GamePage;
