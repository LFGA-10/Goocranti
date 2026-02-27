import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const questions = [
    {
        id: 1,
        question: "DEFINE YOUR CURRENT OBJECTIVE.",
        options: [
            "Initiating an enterprise",
            "Architecting a brand",
            "Deploying a digital interface",
            "Launching a core product/service",
            "Expanding market footprint",
            "Analyzing a conceptual model"
        ]
    },
    {
        id: 2,
        question: "IDENTIFY YOUR DEVELOPMENT PHASE.",
        options: [
            "Concept Incubation",
            "Strategic Planning",
            "Active Development",
            "Market Deployment",
            "Aggressive Scaling"
        ]
    },
    {
        id: 3,
        question: "SPECIFY YOUR PRIMARY DEFICIT.",
        options: [
            "Calculated Brand Identity",
            "Digital Architecture (Web)",
            "Strategic Direction & Moats",
            "Product Prototyping",
            "Growth Assets & Marketing",
            "Comprehensive Foundry Package"
        ]
    },
    {
        id: 4,
        question: "LOCATE YOUR CRITICAL FRICTION POINT.",
        options: [
            "Paralysis: Unsure of inception point",
            "Creative Deficit: No aesthetic mapping",
            "Technical Deficit: Require engineering",
            "Clarity Deficit: Idea requires distillation",
            "Traction Deficit: Need market velocity"
        ]
    },
    {
        id: 5,
        question: "IS YOUR INTELLECTUAL IDENTITY SECURED?",
        options: [
            "Negative, absolute zero",
            "Nominal: Secured a title only",
            "Partial: Possess a visual mark",
            "Comprehensive: Identity mapped",
            "Deteriorated: Require absolute rebrand"
        ]
    },
    {
        id: 6,
        question: "DEFINE YOUR OPERATIONAL SQUAD.",
        options: [
            "Solo Operator",
            "Strike Team (2–5 units)",
            "Scaling Force (5+ units)",
            "Passive Observer"
        ]
    },
    {
        id: 7,
        question: "TARGET YOUR PRIMARY ACQUISITION GOAL.",
        options: [
            "Establish absolute authority",
            "Acquire early adopters",
            "Secure venture capital",
            "Validate product-market fit",
            "Multiply revenue streams",
            "Dominate digital presence"
        ]
    },
    {
        id: 8,
        question: "CURRENT STACK DIAGNOSTICS:",
        options: [
            "Canva Ecosystem",
            "Figma Architecture",
            "Webflow Environment",
            "WordPress Legacy System",
            "Agentic AI Frameworks",
            "Zero tooling deployed"
        ]
    },
    {
        id: 9,
        question: "ESTABLISH YOUR DEPLOYMENT WINDOW.",
        options: [
            "Immediate Red-line",
            "T+30 Days",
            "T+90 Days",
            "Unrestricted Timeline"
        ]
    },
    {
        id: 10,
        question: "CLASSIFY YOUR PROFILE SECTOR.",
        options: [
            "Collegiate Founder",
            "Genesis Entrepreneur",
            "Visual/Creative Architect",
            "Systems/Code Engineer",
            "Commercial Operator",
            "Venture Backed Founder"
        ]
    }
];

const Questionnaire = () => {
    const navigate = useNavigate();
    const [currentStep, setCurrentStep] = useState(0);
    const [answers, setAnswers] = useState({});
    const [additionalInfo, setAdditionalInfo] = useState("");

    const handleOptionSelect = (option) => {
        setAnswers({ ...answers, [currentStep]: option });
        // Automatically proceed to next step after slight delay for visual feedback
        setTimeout(() => {
            setCurrentStep(prev => prev + 1);
        }, 300);
    };

    const handleBack = () => {
        if (currentStep > 0) {
            setCurrentStep(prev => prev - 1);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Onboarding complete", { answers, additionalInfo });
        // Transition to 5 second loading screen
        navigate('/loading');
    };

    // Calculate progress based on +1 for final text step
    const totalSteps = questions.length + 1;
    const progressPercentage = (currentStep / totalSteps) * 100;

    return (
        <div className="q-container fade-in-up">

            {/* Dark Natural Extravagant Background */}
            <div className="app-wallpaper"></div>
            <div className="app-overlay-dark"></div>

            {/* Top Navigation */}
            <div className="q-header">
                {currentStep > 0 ? (
                    <button onClick={handleBack} className="q-back-btn hover-white">
                        <span>←</span> ABORT MATRIX
                    </button>
                ) : (
                    <div></div> // Empty div for flex spacing
                )}

                <div className="system-status">
                    <span className="status-dot"></span>
                    <span>INITIALIZING AUDIT</span>
                </div>
            </div>

            {/* Content Core */}
            <div className="q-content-core">

                {/* Secure Progress Bar */}
                <div className="q-progress-wrapper">
                    <div className="q-progress-header">
                        <span className="q-step-label">DATA BLOCK {currentStep < questions.length ? currentStep + 1 : 'FINAL'} OF {totalSteps}</span>
                        <span className="q-percent-label">{Math.round(progressPercentage)}%</span>
                    </div>
                    <div className="q-progress-track">
                        <div className="q-progress-fill" style={{ width: `${progressPercentage}%` }}></div>
                        <div className="q-progress-glow" style={{ width: `${progressPercentage}%` }}></div>
                    </div>
                </div>

                <div className="q-glass-panel">
                    {/* Question Screens */}
                    {currentStep < questions.length ? (
                        <div className="fade-in" key={currentStep}>
                            <h1 className="q-heading">
                                {questions[currentStep].question}
                            </h1>

                            <div className="q-options-grid">
                                {questions[currentStep].options.map((option, idx) => {
                                    const isSelected = answers[currentStep] === option;
                                    return (
                                        <button
                                            key={idx}
                                            onClick={() => handleOptionSelect(option)}
                                            className={`q-option-card ${isSelected ? 'selected' : ''}`}
                                        >
                                            <span className="q-option-text">{option}</span>
                                            <div className={`q-radio ${isSelected ? 'checked' : ''}`}>
                                                {isSelected && <span className="q-check"></span>}
                                            </div>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    ) : (
                        /* Final Textarea Screen */
                        <div className="fade-in">
                            <h1 className="q-heading text-center">
                                IS THERE ADDITIONAL INTELLIGENCE?
                            </h1>
                            <p className="q-subheading">
                                Transmit any extra structural details, specific friction points, or secure links you demand we review prior to strategy formation.
                            </p>

                            <form onSubmit={handleSubmit} className="q-final-form">
                                <textarea
                                    value={additionalInfo}
                                    onChange={(e) => setAdditionalInfo(e.target.value)}
                                    placeholder="Execute text entry..."
                                    className="q-textarea"
                                />
                                <button type="submit" className="btn-iconic q-submit-btn">
                                    FINALIZE DOSSIER →
                                </button>
                            </form>
                        </div>
                    )}
                </div>
            </div>

            <style>{`
                .q-container {
                    position: relative;
                    min-height: 100vh;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding-bottom: 6rem;
                    background: #000;
                    overflow: hidden;
                }

                .app-wallpaper {
                    position: absolute; top: 0; left: 0; right: 0; bottom: 0;
                    background-image: url('/images/app_bg.png');
                    background-size: cover; background-position: center; background-repeat: no-repeat;
                    z-index: 0;
                }

                .app-overlay-dark {
                    position: absolute; top: 0; left: 0; right: 0; bottom: 0;
                    background: linear-gradient(135deg, rgba(2, 17, 16, 0.95) 0%, rgba(0,0,0,0.8) 100%);
                    backdrop-filter: blur(35px); -webkit-backdrop-filter: blur(35px);
                    z-index: 1;
                }

                .q-header {
                    position: relative; z-index: 10;
                    width: 100%; padding: 2rem 4rem;
                    display: flex; justify-content: space-between; align-items: center;
                }

                .q-back-btn {
                    background: transparent; border: none;
                    color: rgba(255,255,255,0.4);
                    font-family: var(--font-heading); letter-spacing: 2px;
                    display: flex; align-items: center; gap: 0.5rem;
                    cursor: pointer; transition: color 0.3s ease;
                }
                .q-back-btn span { font-size: 1.2rem; margin-top: -2px; }
                .hover-white:hover { color: #fff; }

                .system-status {
                    display: flex; align-items: center; gap: 0.8rem;
                    font-family: var(--font-heading); color: var(--primary-teal);
                    font-size: 0.8rem; letter-spacing: 3px;
                }
                .status-dot {
                    width: 8px; height: 8px; border-radius: 50%;
                    background: var(--primary-teal); box-shadow: 0 0 10px var(--primary-teal);
                    animation: pulseOp 2s infinite ease-in-out;
                }

                @keyframes pulseOp { 0%, 100% { opacity: 0.4; } 50% { opacity: 1; }}

                .q-content-core {
                    position: relative; z-index: 10;
                    width: 100%; max-width: 900px;
                    display: flex; flex-direction: column; gap: 3rem;
                    padding: 0 2rem; margin-top: 2rem;
                }

                .q-progress-wrapper { width: 100%; }
                
                .q-progress-header {
                    display: flex; justify-content: space-between; margin-bottom: 0.5rem;
                    font-family: var(--font-heading); color: rgba(255,255,255,0.6);
                    font-size: 0.8rem; letter-spacing: 2px; font-weight: 300;
                }
                
                .q-progress-track {
                    width: 100%; height: 4px; border-radius: 10px;
                    background: rgba(255,255,255,0.05); position: relative; overflow: visible;
                }

                .q-progress-fill {
                    position: absolute; top: 0; left: 0; height: 100%;
                    background: var(--primary-teal); border-radius: 10px;
                    transition: width 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
                }
                
                .q-progress-glow {
                    position: absolute; top: -50%; left: 0; height: 200%;
                    background: var(--primary-teal); opacity: 0.5; filter: blur(5px);
                    transition: width 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
                }

                .q-glass-panel {
                    background: transparent;
                    border: none;
                    padding: 4rem 3rem;
                    box-shadow: none;
                }

                .q-heading {
                    font-size: clamp(1.8rem, 4vw, 2.5rem);
                    font-family: var(--font-heading);
                    color: #fff; line-height: 1.3;
                    text-transform: uppercase; font-weight: 300; letter-spacing: 3px;
                    margin-bottom: 3rem;
                }
                .text-center { text-align: center; }

                .q-subheading {
                    text-align: center; color: rgba(255,255,255,0.6); font-size: 1.2rem; font-weight: 300;
                    margin-bottom: 3rem; padding: 0 1rem; line-height: 1.6;
                }

                .q-options-grid {
                    display: flex; flex-direction: column; gap: 1rem;
                }

                .q-option-card {
                    padding: 1.5rem 2rem;
                    text-align: left;
                    font-size: 1.15rem; font-weight: 300;
                    cursor: pointer;
                    border: 1px solid rgba(255,255,255,0.08);
                    background: rgba(255, 255, 255, 0.015);
                    transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
                    display: flex; align-items: center; justify-content: space-between;
                    border-radius: 12px; color: rgba(255,255,255,0.7);
                    font-family: var(--font-body);
                }

                .q-option-card:hover { border-color: rgba(20, 184, 166, 0.5); color: #fff; background: rgba(20, 184, 166, 0.05); }

                .q-option-card.selected {
                    border-color: var(--primary-teal);
                    background: rgba(20, 184, 166, 0.1);
                    color: #fff;
                    box-shadow: 0 0 20px rgba(20, 184, 166, 0.15);
                }

                .q-radio {
                    width: 22px; height: 22px; border-radius: 50%;
                    border: 1px solid rgba(255, 255, 255, 0.3);
                    display: flex; align-items: center; justify-content: center;
                    transition: border-color 0.3s ease;
                }

                .q-option-card:hover .q-radio { border-color: rgba(20, 184, 166, 0.5); }

                .q-radio.checked {
                    border-color: var(--primary-teal);
                }

                .q-check {
                    width: 12px; height: 12px; background: var(--primary-teal); border-radius: 50%;
                    box-shadow: 0 0 10px var(--primary-teal);
                }

                .q-final-form { display: flex; flex-direction: column; gap: 2.5rem; }

                .q-textarea {
                    width: 100%; min-height: 180px;
                    background: rgba(0, 0, 0, 0.3); border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 12px; padding: 1.5rem; color: #fff; font-size: 1.1rem;
                    font-family: inherit; resize: vertical; outline: none; font-weight: 300;
                    transition: border-color 0.3s ease;
                }

                .q-textarea:focus { border-color: rgba(20, 184, 166, 0.5); background: rgba(0, 0, 0, 0.5); }

                .btn-iconic {
                    background: #fff; color: #000; border: none; padding: 1.2rem 3rem; border-radius: 50px;
                    font-family: var(--font-heading); font-size: 1rem; font-weight: 700; letter-spacing: 2px;
                    cursor: pointer; transition: all 0.3s; box-shadow: 0 10px 30px rgba(255,255,255,0.2);
                    display: inline-block;
                }

                .btn-iconic:hover {
                    transform: translateY(-3px); background: var(--primary-teal);
                    box-shadow: 0 15px 40px rgba(20,184,166,0.4);
                }

                .q-submit-btn { align-self: center; }

                @media (max-width: 600px) {
                    .q-header { padding: 1.5rem 1.5rem; }
                    .q-glass-panel { padding: 2.5rem 1.5rem; }
                    .q-option-card { padding: 1.2rem; }
                    .q-heading { font-size: 1.6rem; margin-bottom: 2rem; }
                }
            `}</style>
        </div>
    );
};

export default Questionnaire;
