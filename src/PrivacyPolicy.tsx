import { useState } from 'react';
import { Link } from 'react-router-dom';

function PrivacyPolicy() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        schoolName: '',
        email: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);

        try {
            const response = await fetch('https://linked-to-home-api.applore.in/api/admin/pilot-program/submit-form', {

                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert('Thank you for your interest! We will get in touch soon.');
                setShowPopup(false);
                setFormData({ fullName: '', schoolName: '', email: '' });
            } else {
                const errorData = await response.json();
                alert(`Failed to submit: ${errorData.message || 'Unknown error'}`);
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('There was an error submitting the form. Please try again later.');
        }
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Navigation */}
            <nav className="bg-white">
                <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 items-center h-12 sm:h-16">
                        {/* Logo */}
                        <div className="flex items-center justify-start">
                            <Link to="/">
                                <img
                                    src="/images/linkedlogo11.png"
                                    alt="LinkED to home"
                                    className="h-12 sm:h-16 lg:h-20 object-fill"
                                />
                            </Link>
                        </div>
                        {/* Desktop Navigation Links with Button */}
                        <div className="hidden md:flex space-x-3 md:space-x-4 lg:space-x-[60px] items-center justify-end">
                            <a href="/#home" className="text-[#003049] text-xs md:text-sm lg:text-base font-normal transition-colors whitespace-nowrap" style={{ fontFamily: 'Poppins, sans-serif' }}>Home</a>
                            <a href="/#for-school" className="text-[#003049] text-xs md:text-sm lg:text-base font-normal transition-colors whitespace-nowrap" style={{ fontFamily: 'Poppins, sans-serif' }}>For school</a>
                            <a href="/#for-parents" className="text-[#003049] text-xs md:text-sm lg:text-base font-normal transition-colors whitespace-nowrap" style={{ fontFamily: 'Poppins, sans-serif' }}>For parents</a>
                            <a href="/#about-us" className="text-[#003049] text-xs md:text-sm lg:text-base font-normal transition-colors whitespace-nowrap" style={{ fontFamily: 'Poppins, sans-serif' }}>About Us</a>
                            <button onClick={() => setShowPopup(true)} className="bg-[#003049] text-white px-4 sm:px-6 lg:px-10 py-1.5 sm:py-2 text-xs sm:text-sm rounded-md hover:bg-blue-800 transition-colors whitespace-nowrap" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                Get Started
                            </button>
                        </div>
                        {/* Mobile Menu Button */}
                        <div className="flex md:hidden items-center justify-end">
                            <button
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className="text-[#003049] p-2"
                                aria-label="Toggle menu"
                            >
                                {mobileMenuOpen ? (
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                ) : (
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                    {/* Mobile Menu */}
                    {mobileMenuOpen && (
                        <div className="md:hidden border-t border-gray-200 py-4">
                            <div className="flex flex-col space-y-4">
                                <a href="/#home" className="text-[#003049] text-base font-normal transition-colors px-4" style={{ fontFamily: 'Poppins, sans-serif' }} onClick={() => setMobileMenuOpen(false)}>Home</a>
                                <a href="/#for-school" className="text-[#003049] text-base font-normal transition-colors px-4" style={{ fontFamily: 'Poppins, sans-serif' }} onClick={() => setMobileMenuOpen(false)}>For school</a>
                                <a href="/#for-parents" className="text-[#003049] text-base font-normal transition-colors px-4" style={{ fontFamily: 'Poppins, sans-serif' }} onClick={() => setMobileMenuOpen(false)}>For parents</a>
                                <a href="/#about-us" className="text-[#003049] text-base font-normal transition-colors px-4" style={{ fontFamily: 'Poppins, sans-serif' }} onClick={() => setMobileMenuOpen(false)}>About Us</a>
                                <div className="px-4 pt-2">
                                    <button className="bg-[#003049] text-white w-full px-6 py-2.5 rounded-md hover:bg-blue-800 transition-colors text-sm font-medium" style={{ fontFamily: 'Poppins, sans-serif' }} onClick={() => { setMobileMenuOpen(false); setShowPopup(true); }}>
                                        Get Started
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </nav>

            {/* Privacy Policy Content */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
                {/* Title */}
                <h1
                    className="mb-2"
                    style={{
                        color: 'var(--deep-blue, #003049)',
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: 'clamp(28px, 4vw, 42px)',
                        fontWeight: 700,
                        lineHeight: '1.2'
                    }}
                >
                    Privacy Policy
                </h1>

                <h2
                    className="mb-8"
                    style={{
                        color: 'var(--deep-blue, #003049)',
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: 'clamp(16px, 2.5vw, 24px)',
                        fontWeight: 600,
                        lineHeight: '1.3'
                    }}
                >
                    LinkEDtohome
                </h2>

                <p
                    className="mb-8"
                    style={{
                        color: 'var(--Sub-text, #827E7E)',
                        fontFamily: 'Lato, sans-serif',
                        fontSize: 'clamp(14px, 2vw, 16px)',
                        fontWeight: 400,
                        lineHeight: '1.6'
                    }}
                >
                    <strong style={{ color: 'var(--deep-blue, #003049)', fontWeight: 600 }}>Last updated:</strong> January 2026
                </p>

                <div className="space-y-8">
                    {/* Introduction */}
                    <div>
                        <p
                            style={{
                                color: 'var(--Sub-text, #827E7E)',
                                fontFamily: 'Lato, sans-serif',
                                fontSize: 'clamp(14px, 2vw, 16px)',
                                fontWeight: 400,
                                lineHeight: '1.6'
                            }}
                        >
                            LinkEDtohome ("we", "us", "our") is committed to protecting and respecting your privacy. This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website or share your details with us.
                        </p>
                    </div>

                    <div>
                        <p
                            style={{
                                color: 'var(--Sub-text, #827E7E)',
                                fontFamily: 'Lato, sans-serif',
                                fontSize: 'clamp(14px, 2vw, 16px)',
                                fontWeight: 400,
                                lineHeight: '1.6'
                            }}
                        >
                            This policy applies to the LinkEDtohome website only. At this stage, it does not cover any future platform features or school-based services.
                        </p>
                    </div>

                    {/* Section 1 */}
                    <div>
                        <h3
                            className="mb-3"
                            style={{
                                color: 'var(--deep-blue, #003049)',
                                fontFamily: 'Poppins, sans-serif',
                                fontSize: 'clamp(18px, 2.5vw, 22px)',
                                fontWeight: 600,
                                lineHeight: '1.3'
                            }}
                        >
                            1. Who we are
                        </h3>
                        <p
                            className="mb-3"
                            style={{
                                color: 'var(--Sub-text, #827E7E)',
                                fontFamily: 'Lato, sans-serif',
                                fontSize: 'clamp(14px, 2vw, 16px)',
                                fontWeight: 400,
                                lineHeight: '1.6'
                            }}
                        >
                            LinkEDtohome is a school-aligned parent support platform designed to help schools turn what they teach into consistent, practical support at home.
                        </p>
                        <p
                            style={{
                                color: 'var(--Sub-text, #827E7E)',
                                fontFamily: 'Lato, sans-serif',
                                fontSize: 'clamp(14px, 2vw, 16px)',
                                fontWeight: 400,
                                lineHeight: '1.6'
                            }}
                        >
                            For any questions about this policy or how we use your data, contact: <a href="mailto:support@linkedtohome.com" className="text-[#08A0AF] hover:underline">support@linkedtohome.com</a>
                        </p>
                    </div>

                    {/* Section 2 */}
                    <div>
                        <h3
                            className="mb-3"
                            style={{
                                color: 'var(--deep-blue, #003049)',
                                fontFamily: 'Poppins, sans-serif',
                                fontSize: 'clamp(18px, 2.5vw, 22px)',
                                fontWeight: 600,
                                lineHeight: '1.3'
                            }}
                        >
                            2. What information we collect
                        </h3>
                        <p
                            className="mb-3"
                            style={{
                                color: 'var(--Sub-text, #827E7E)',
                                fontFamily: 'Lato, sans-serif',
                                fontSize: 'clamp(14px, 2vw, 16px)',
                                fontWeight: 400,
                                lineHeight: '1.6'
                            }}
                        >
                            At this stage, we collect limited personal information only.
                        </p>
                        <p
                            className="mb-2"
                            style={{
                                color: 'var(--Sub-text, #827E7E)',
                                fontFamily: 'Lato, sans-serif',
                                fontSize: 'clamp(14px, 2vw, 16px)',
                                fontWeight: 400,
                                lineHeight: '1.6'
                            }}
                        >
                            This may include:
                        </p>
                        <ul className="list-disc pl-6 mb-3 space-y-1">
                            <li
                                style={{
                                    color: 'var(--Sub-text, #827E7E)',
                                    fontFamily: 'Lato, sans-serif',
                                    fontSize: 'clamp(14px, 2vw, 16px)',
                                    fontWeight: 400,
                                    lineHeight: '1.6'
                                }}
                            >
                                Your email address
                            </li>
                            <li
                                style={{
                                    color: 'var(--Sub-text, #827E7E)',
                                    fontFamily: 'Lato, sans-serif',
                                    fontSize: 'clamp(14px, 2vw, 16px)',
                                    fontWeight: 400,
                                    lineHeight: '1.6'
                                }}
                            >
                                Your name (if provided via a form)
                            </li>
                        </ul>
                        <p
                            className="mb-2"
                            style={{
                                color: 'var(--Sub-text, #827E7E)',
                                fontFamily: 'Lato, sans-serif',
                                fontSize: 'clamp(14px, 2vw, 16px)',
                                fontWeight: 400,
                                lineHeight: '1.6'
                            }}
                        >
                            We do not collect:
                        </p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li
                                style={{
                                    color: 'var(--Sub-text, #827E7E)',
                                    fontFamily: 'Lato, sans-serif',
                                    fontSize: 'clamp(14px, 2vw, 16px)',
                                    fontWeight: 400,
                                    lineHeight: '1.6'
                                }}
                            >
                                Pupil or child data
                            </li>
                            <li
                                style={{
                                    color: 'var(--Sub-text, #827E7E)',
                                    fontFamily: 'Lato, sans-serif',
                                    fontSize: 'clamp(14px, 2vw, 16px)',
                                    fontWeight: 400,
                                    lineHeight: '1.6'
                                }}
                            >
                                Parent account data
                            </li>
                            <li
                                style={{
                                    color: 'var(--Sub-text, #827E7E)',
                                    fontFamily: 'Lato, sans-serif',
                                    fontSize: 'clamp(14px, 2vw, 16px)',
                                    fontWeight: 400,
                                    lineHeight: '1.6'
                                }}
                            >
                                Sensitive personal data
                            </li>
                        </ul>
                    </div>

                    {/* Section 3 */}
                    <div>
                        <h3
                            className="mb-3"
                            style={{
                                color: 'var(--deep-blue, #003049)',
                                fontFamily: 'Poppins, sans-serif',
                                fontSize: 'clamp(18px, 2.5vw, 22px)',
                                fontWeight: 600,
                                lineHeight: '1.3'
                            }}
                        >
                            3. How we collect information
                        </h3>
                        <p
                            className="mb-2"
                            style={{
                                color: 'var(--Sub-text, #827E7E)',
                                fontFamily: 'Lato, sans-serif',
                                fontSize: 'clamp(14px, 2vw, 16px)',
                                fontWeight: 400,
                                lineHeight: '1.6'
                            }}
                        >
                            We collect information when you:
                        </p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li
                                style={{
                                    color: 'var(--Sub-text, #827E7E)',
                                    fontFamily: 'Lato, sans-serif',
                                    fontSize: 'clamp(14px, 2vw, 16px)',
                                    fontWeight: 400,
                                    lineHeight: '1.6'
                                }}
                            >
                                Sign up for updates or early access
                            </li>
                            <li
                                style={{
                                    color: 'var(--Sub-text, #827E7E)',
                                    fontFamily: 'Lato, sans-serif',
                                    fontSize: 'clamp(14px, 2vw, 16px)',
                                    fontWeight: 400,
                                    lineHeight: '1.6'
                                }}
                            >
                                Contact us via a form or email
                            </li>
                            <li
                                style={{
                                    color: 'var(--Sub-text, #827E7E)',
                                    fontFamily: 'Lato, sans-serif',
                                    fontSize: 'clamp(14px, 2vw, 16px)',
                                    fontWeight: 400,
                                    lineHeight: '1.6'
                                }}
                            >
                                Interact with our website (basic usage data via cookies)
                            </li>
                        </ul>
                    </div>

                    {/* Section 4 */}
                    <div>
                        <h3
                            className="mb-3"
                            style={{
                                color: 'var(--deep-blue, #003049)',
                                fontFamily: 'Poppins, sans-serif',
                                fontSize: 'clamp(18px, 2.5vw, 22px)',
                                fontWeight: 600,
                                lineHeight: '1.3'
                            }}
                        >
                            4. How we use your information
                        </h3>
                        <p
                            className="mb-2"
                            style={{
                                color: 'var(--Sub-text, #827E7E)',
                                fontFamily: 'Lato, sans-serif',
                                fontSize: 'clamp(14px, 2vw, 16px)',
                                fontWeight: 400,
                                lineHeight: '1.6'
                            }}
                        >
                            We use your information to:
                        </p>
                        <ul className="list-disc pl-6 mb-3 space-y-1">
                            <li
                                style={{
                                    color: 'var(--Sub-text, #827E7E)',
                                    fontFamily: 'Lato, sans-serif',
                                    fontSize: 'clamp(14px, 2vw, 16px)',
                                    fontWeight: 400,
                                    lineHeight: '1.6'
                                }}
                            >
                                Respond to enquiries
                            </li>
                            <li
                                style={{
                                    color: 'var(--Sub-text, #827E7E)',
                                    fontFamily: 'Lato, sans-serif',
                                    fontSize: 'clamp(14px, 2vw, 16px)',
                                    fontWeight: 400,
                                    lineHeight: '1.6'
                                }}
                            >
                                Share updates about LinkEDtohome
                            </li>
                            <li
                                style={{
                                    color: 'var(--Sub-text, #827E7E)',
                                    fontFamily: 'Lato, sans-serif',
                                    fontSize: 'clamp(14px, 2vw, 16px)',
                                    fontWeight: 400,
                                    lineHeight: '1.6'
                                }}
                            >
                                Notify you about launch activity, pilots, or relevant developments
                            </li>
                            <li
                                style={{
                                    color: 'var(--Sub-text, #827E7E)',
                                    fontFamily: 'Lato, sans-serif',
                                    fontSize: 'clamp(14px, 2vw, 16px)',
                                    fontWeight: 400,
                                    lineHeight: '1.6'
                                }}
                            >
                                Improve our website and communications
                            </li>
                        </ul>
                        <p
                            style={{
                                color: 'var(--Sub-text, #827E7E)',
                                fontFamily: 'Lato, sans-serif',
                                fontSize: 'clamp(14px, 2vw, 16px)',
                                fontWeight: 400,
                                lineHeight: '1.6'
                            }}
                        >
                            We only use your data for the purposes it was collected.
                        </p>
                    </div>

                    {/* Section 5 */}
                    <div>
                        <h3
                            className="mb-3"
                            style={{
                                color: 'var(--deep-blue, #003049)',
                                fontFamily: 'Poppins, sans-serif',
                                fontSize: 'clamp(18px, 2.5vw, 22px)',
                                fontWeight: 600,
                                lineHeight: '1.3'
                            }}
                        >
                            5. Legal basis for processing
                        </h3>
                        <p
                            className="mb-2"
                            style={{
                                color: 'var(--Sub-text, #827E7E)',
                                fontFamily: 'Lato, sans-serif',
                                fontSize: 'clamp(14px, 2vw, 16px)',
                                fontWeight: 400,
                                lineHeight: '1.6'
                            }}
                        >
                            Under UK GDPR, our legal bases are:
                        </p>
                        <ul className="list-disc pl-6 mb-3 space-y-1">
                            <li
                                style={{
                                    color: 'var(--Sub-text, #827E7E)',
                                    fontFamily: 'Lato, sans-serif',
                                    fontSize: 'clamp(14px, 2vw, 16px)',
                                    fontWeight: 400,
                                    lineHeight: '1.6'
                                }}
                            >
                                <strong style={{ color: 'var(--deep-blue, #003049)', fontWeight: 600 }}>Consent</strong> – where you have opted in to receive updates or communications
                            </li>
                            <li
                                style={{
                                    color: 'var(--Sub-text, #827E7E)',
                                    fontFamily: 'Lato, sans-serif',
                                    fontSize: 'clamp(14px, 2vw, 16px)',
                                    fontWeight: 400,
                                    lineHeight: '1.6'
                                }}
                            >
                                <strong style={{ color: 'var(--deep-blue, #003049)', fontWeight: 600 }}>Legitimate interest</strong> – to respond to enquiries and operate our website effectively
                            </li>
                        </ul>
                        <p
                            style={{
                                color: 'var(--Sub-text, #827E7E)',
                                fontFamily: 'Lato, sans-serif',
                                fontSize: 'clamp(14px, 2vw, 16px)',
                                fontWeight: 400,
                                lineHeight: '1.6'
                            }}
                        >
                            You can withdraw consent at any time.
                        </p>
                    </div>

                    {/* Section 6 */}
                    <div>
                        <h3
                            className="mb-3"
                            style={{
                                color: 'var(--deep-blue, #003049)',
                                fontFamily: 'Poppins, sans-serif',
                                fontSize: 'clamp(18px, 2.5vw, 22px)',
                                fontWeight: 600,
                                lineHeight: '1.3'
                            }}
                        >
                            6. Marketing communications
                        </h3>
                        <p
                            className="mb-3"
                            style={{
                                color: 'var(--Sub-text, #827E7E)',
                                fontFamily: 'Lato, sans-serif',
                                fontSize: 'clamp(14px, 2vw, 16px)',
                                fontWeight: 400,
                                lineHeight: '1.6'
                            }}
                        >
                            If you opt in, we may send you occasional updates about LinkEDtohome.
                        </p>
                        <p
                            className="mb-2"
                            style={{
                                color: 'var(--Sub-text, #827E7E)',
                                fontFamily: 'Lato, sans-serif',
                                fontSize: 'clamp(14px, 2vw, 16px)',
                                fontWeight: 400,
                                lineHeight: '1.6'
                            }}
                        >
                            You can:
                        </p>
                        <ul className="list-disc pl-6 mb-3 space-y-1">
                            <li
                                style={{
                                    color: 'var(--Sub-text, #827E7E)',
                                    fontFamily: 'Lato, sans-serif',
                                    fontSize: 'clamp(14px, 2vw, 16px)',
                                    fontWeight: 400,
                                    lineHeight: '1.6'
                                }}
                            >
                                Unsubscribe at any time using the link in our emails
                            </li>
                            <li
                                style={{
                                    color: 'var(--Sub-text, #827E7E)',
                                    fontFamily: 'Lato, sans-serif',
                                    fontSize: 'clamp(14px, 2vw, 16px)',
                                    fontWeight: 400,
                                    lineHeight: '1.6'
                                }}
                            >
                                Contact us directly to be removed from our mailing list
                            </li>
                        </ul>
                        <p
                            style={{
                                color: 'var(--Sub-text, #827E7E)',
                                fontFamily: 'Lato, sans-serif',
                                fontSize: 'clamp(14px, 2vw, 16px)',
                                fontWeight: 400,
                                lineHeight: '1.6'
                            }}
                        >
                            We do not sell or share your data for third-party marketing.
                        </p>
                    </div>

                    {/* Section 7 */}
                    <div>
                        <h3
                            className="mb-3"
                            style={{
                                color: 'var(--deep-blue, #003049)',
                                fontFamily: 'Poppins, sans-serif',
                                fontSize: 'clamp(18px, 2.5vw, 22px)',
                                fontWeight: 600,
                                lineHeight: '1.3'
                            }}
                        >
                            7. Data storage and security
                        </h3>
                        <p
                            className="mb-2"
                            style={{
                                color: 'var(--Sub-text, #827E7E)',
                                fontFamily: 'Lato, sans-serif',
                                fontSize: 'clamp(14px, 2vw, 16px)',
                                fontWeight: 400,
                                lineHeight: '1.6'
                            }}
                        >
                            We take appropriate technical and organisational measures to protect your data.
                        </p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li
                                style={{
                                    color: 'var(--Sub-text, #827E7E)',
                                    fontFamily: 'Lato, sans-serif',
                                    fontSize: 'clamp(14px, 2vw, 16px)',
                                    fontWeight: 400,
                                    lineHeight: '1.6'
                                }}
                            >
                                Data is stored securely
                            </li>
                            <li
                                style={{
                                    color: 'var(--Sub-text, #827E7E)',
                                    fontFamily: 'Lato, sans-serif',
                                    fontSize: 'clamp(14px, 2vw, 16px)',
                                    fontWeight: 400,
                                    lineHeight: '1.6'
                                }}
                            >
                                Access is limited to those who need it
                            </li>
                            <li
                                style={{
                                    color: 'var(--Sub-text, #827E7E)',
                                    fontFamily: 'Lato, sans-serif',
                                    fontSize: 'clamp(14px, 2vw, 16px)',
                                    fontWeight: 400,
                                    lineHeight: '1.6'
                                }}
                            >
                                We only retain data for as long as necessary for its purpose
                            </li>
                        </ul>
                    </div>

                    {/* Section 8 */}
                    <div>
                        <h3
                            className="mb-3"
                            style={{
                                color: 'var(--deep-blue, #003049)',
                                fontFamily: 'Poppins, sans-serif',
                                fontSize: 'clamp(18px, 2.5vw, 22px)',
                                fontWeight: 600,
                                lineHeight: '1.3'
                            }}
                        >
                            8. Sharing your information
                        </h3>
                        <p
                            className="mb-3"
                            style={{
                                color: 'var(--Sub-text, #827E7E)',
                                fontFamily: 'Lato, sans-serif',
                                fontSize: 'clamp(14px, 2vw, 16px)',
                                fontWeight: 400,
                                lineHeight: '1.6'
                            }}
                        >
                            We do not sell your personal data.
                        </p>
                        <p
                            style={{
                                color: 'var(--Sub-text, #827E7E)',
                                fontFamily: 'Lato, sans-serif',
                                fontSize: 'clamp(14px, 2vw, 16px)',
                                fontWeight: 400,
                                lineHeight: '1.6'
                            }}
                        >
                            We may use trusted service providers (for example, email or website hosting tools) to help us operate our website. These providers only process data on our instructions and in line with data protection law.
                        </p>
                    </div>

                    {/* Section 9 */}
                    <div>
                        <h3
                            className="mb-3"
                            style={{
                                color: 'var(--deep-blue, #003049)',
                                fontFamily: 'Poppins, sans-serif',
                                fontSize: 'clamp(18px, 2.5vw, 22px)',
                                fontWeight: 600,
                                lineHeight: '1.3'
                            }}
                        >
                            9. Cookies
                        </h3>
                        <p
                            className="mb-3"
                            style={{
                                color: 'var(--Sub-text, #827E7E)',
                                fontFamily: 'Lato, sans-serif',
                                fontSize: 'clamp(14px, 2vw, 16px)',
                                fontWeight: 400,
                                lineHeight: '1.6'
                            }}
                        >
                            Our website uses cookies to understand how visitors use the site and to improve performance.
                        </p>
                        <p
                            style={{
                                color: 'var(--Sub-text, #827E7E)',
                                fontFamily: 'Lato, sans-serif',
                                fontSize: 'clamp(14px, 2vw, 16px)',
                                fontWeight: 400,
                                lineHeight: '1.6'
                            }}
                        >
                            Where required, non-essential cookies are only used with your consent. You can manage or withdraw cookie preferences through your browser settings.
                        </p>
                    </div>

                    {/* Section 10 */}
                    <div>
                        <h3
                            className="mb-3"
                            style={{
                                color: 'var(--deep-blue, #003049)',
                                fontFamily: 'Poppins, sans-serif',
                                fontSize: 'clamp(18px, 2.5vw, 22px)',
                                fontWeight: 600,
                                lineHeight: '1.3'
                            }}
                        >
                            10. Your rights
                        </h3>
                        <p
                            className="mb-2"
                            style={{
                                color: 'var(--Sub-text, #827E7E)',
                                fontFamily: 'Lato, sans-serif',
                                fontSize: 'clamp(14px, 2vw, 16px)',
                                fontWeight: 400,
                                lineHeight: '1.6'
                            }}
                        >
                            Under UK GDPR, you have the right to:
                        </p>
                        <ul className="list-disc pl-6 mb-3 space-y-1">
                            <li
                                style={{
                                    color: 'var(--Sub-text, #827E7E)',
                                    fontFamily: 'Lato, sans-serif',
                                    fontSize: 'clamp(14px, 2vw, 16px)',
                                    fontWeight: 400,
                                    lineHeight: '1.6'
                                }}
                            >
                                Access your personal data
                            </li>
                            <li
                                style={{
                                    color: 'var(--Sub-text, #827E7E)',
                                    fontFamily: 'Lato, sans-serif',
                                    fontSize: 'clamp(14px, 2vw, 16px)',
                                    fontWeight: 400,
                                    lineHeight: '1.6'
                                }}
                            >
                                Request correction or deletion
                            </li>
                            <li
                                style={{
                                    color: 'var(--Sub-text, #827E7E)',
                                    fontFamily: 'Lato, sans-serif',
                                    fontSize: 'clamp(14px, 2vw, 16px)',
                                    fontWeight: 400,
                                    lineHeight: '1.6'
                                }}
                            >
                                Withdraw consent
                            </li>
                            <li
                                style={{
                                    color: 'var(--Sub-text, #827E7E)',
                                    fontFamily: 'Lato, sans-serif',
                                    fontSize: 'clamp(14px, 2vw, 16px)',
                                    fontWeight: 400,
                                    lineHeight: '1.6'
                                }}
                            >
                                Object to certain processing
                            </li>
                            <li
                                style={{
                                    color: 'var(--Sub-text, #827E7E)',
                                    fontFamily: 'Lato, sans-serif',
                                    fontSize: 'clamp(14px, 2vw, 16px)',
                                    fontWeight: 400,
                                    lineHeight: '1.6'
                                }}
                            >
                                Request restriction of processing
                            </li>
                        </ul>
                        <p
                            style={{
                                color: 'var(--Sub-text, #827E7E)',
                                fontFamily: 'Lato, sans-serif',
                                fontSize: 'clamp(14px, 2vw, 16px)',
                                fontWeight: 400,
                                lineHeight: '1.6'
                            }}
                        >
                            To exercise your rights, contact: <a href="mailto:support@linkedtohome.com" className="text-[#08A0AF] hover:underline">support@linkedtohome.com</a>
                        </p>
                    </div>

                    {/* Section 11 */}
                    <div>
                        <h3
                            className="mb-3"
                            style={{
                                color: 'var(--deep-blue, #003049)',
                                fontFamily: 'Poppins, sans-serif',
                                fontSize: 'clamp(18px, 2.5vw, 22px)',
                                fontWeight: 600,
                                lineHeight: '1.3'
                            }}
                        >
                            11. Links to other websites
                        </h3>
                        <p
                            style={{
                                color: 'var(--Sub-text, #827E7E)',
                                fontFamily: 'Lato, sans-serif',
                                fontSize: 'clamp(14px, 2vw, 16px)',
                                fontWeight: 400,
                                lineHeight: '1.6'
                            }}
                        >
                            Our website may contain links to third-party sites. This policy applies only to LinkEDtohome. We are not responsible for the privacy practices of other websites.
                        </p>
                    </div>

                    {/* Section 12 */}
                    <div>
                        <h3
                            className="mb-3"
                            style={{
                                color: 'var(--deep-blue, #003049)',
                                fontFamily: 'Poppins, sans-serif',
                                fontSize: 'clamp(18px, 2.5vw, 22px)',
                                fontWeight: 600,
                                lineHeight: '1.3'
                            }}
                        >
                            12. Changes to this policy
                        </h3>
                        <p
                            style={{
                                color: 'var(--Sub-text, #827E7E)',
                                fontFamily: 'Lato, sans-serif',
                                fontSize: 'clamp(14px, 2vw, 16px)',
                                fontWeight: 400,
                                lineHeight: '1.6'
                            }}
                        >
                            We may update this Privacy Policy from time to time. Any changes will be posted on this page.
                        </p>
                    </div>

                    {/* Section 13 */}
                    <div>
                        <h3
                            className="mb-3"
                            style={{
                                color: 'var(--deep-blue, #003049)',
                                fontFamily: 'Poppins, sans-serif',
                                fontSize: 'clamp(18px, 2.5vw, 22px)',
                                fontWeight: 600,
                                lineHeight: '1.3'
                            }}
                        >
                            13. Contact us
                        </h3>
                        <p
                            className="mb-3"
                            style={{
                                color: 'var(--Sub-text, #827E7E)',
                                fontFamily: 'Lato, sans-serif',
                                fontSize: 'clamp(14px, 2vw, 16px)',
                                fontWeight: 400,
                                lineHeight: '1.6'
                            }}
                        >
                            If you have any questions, concerns, or complaints about how we handle your data, please contact:
                        </p>
                        <div
                            className="mb-3"
                            style={{
                                color: 'var(--Sub-text, #827E7E)',
                                fontFamily: 'Lato, sans-serif',
                                fontSize: 'clamp(14px, 2vw, 16px)',
                                fontWeight: 400,
                                lineHeight: '1.6'
                            }}
                        >
                            <p><strong style={{ color: 'var(--deep-blue, #003049)', fontWeight: 600 }}>LinkEDtohome</strong></p>
                            <p>Email: <a href="mailto:support@linkedtohome.com" className="text-[#08A0AF] hover:underline">support@linkedtohome.com</a></p>
                        </div>
                        <p
                            style={{
                                color: 'var(--Sub-text, #827E7E)',
                                fontFamily: 'Lato, sans-serif',
                                fontSize: 'clamp(14px, 2vw, 16px)',
                                fontWeight: 400,
                                lineHeight: '1.6'
                            }}
                        >
                            If you are not satisfied, you have the right to raise a concern with the UK Information Commissioner's Office (ICO).
                        </p>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-white py-6 sm:py-8 lg:py-12">
                <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Top Section */}
                    <div className="flex flex-col md:flex-row justify-between items-center mb-6 sm:mb-8 gap-4">
                        {/* Logo */}
                        <div className="flex-shrink-0">
                            <img
                                src="/images/linkedlogo11.png"
                                alt="LinkED to Home"
                                className="h-10 sm:h-12 lg:h-16 object-contain"
                            />
                        </div>

                        {/* Social Media Icons */}
                        <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0">
                            <a href="https://www.linkedin.com/in/linked-tohome-95a93938b/" className="rounded-full flex items-center justify-center transition-colors">
                                <img src="/images/Linkedin.png" alt="LinkedIn" className="w-6 h-6 sm:w-8 sm:h-8 object-contain" />
                            </a>
                            {/* <a href="#" className="rounded-full flex items-center justify-center transition-colors">
                <img src="/images/twitter12.png" alt="Twitter" className="w-6 h-6 sm:w-8 sm:h-8 object-contain" />
              </a>
              <a href="#" className="rounded-full flex items-center justify-center hover:bg-[#06a0af] transition-colors">
                <img src="/images/fb12.png" alt="Facebook" className="w-6 h-6 sm:w-8 sm:h-8 object-contain" />
              </a> */}
                            <a href="https://www.instagram.com/linkedtohome/" className="rounded-full flex items-center justify-center hover:bg-[#06a0af] transition-colors">
                                <img src="/images/insta.png" alt="Instagram" className="w-6 h-6 sm:w-8 sm:h-8 object-contain" />
                            </a>
                        </div>
                    </div>

                    {/* Divider Line */}
                    <div className="border-t border-[#003049] my-4 sm:my-6 lg:my-8"></div>

                    {/* Bottom Section */}
                    <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
                        {/* Copyright */}
                        <div className="text-center md:text-left order-2 md:order-1">
                            <p style={{ color: 'var(--deep-blue, #003049)', fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(11px, 1.5vw, 14px)', fontStyle: 'normal', fontWeight: 400 }}>
                                © 2026 LinkED to Home. All rights reserved.
                            </p>
                        </div>

                        {/* Legal Links */}
                        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 lg:gap-6 order-1 md:order-2">
                            <Link to="/privacy" className="hover:text-[#003049] transition-colors text-center whitespace-nowrap" style={{ color: 'var(--deep-blue, #003049)', fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(11px, 1.5vw, 14px)', fontStyle: 'normal', fontWeight: 400 }}>
                                Privacy Policy
                            </Link>
                            <Link to="/terms" className="hover:text-[#003049] transition-colors text-center whitespace-nowrap" style={{ color: 'var(--deep-blue, #003049)', fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(11px, 1.5vw, 14px)', fontStyle: 'normal', fontWeight: 400 }}>
                                Terms of Service
                            </Link>
                            {/* <a href="#" className="hover:text-[#003049] transition-colors text-center whitespace-nowrap" style={{ color: 'var(--deep-blue, #003049)', fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(11px, 1.5vw, 14px)', fontStyle: 'normal', fontWeight: 400 }}>
                Cookie Policy
              </a> */}
                        </div>
                    </div>
                </div>
            </footer>

            {/* Popup Modal */}
            {showPopup && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        onClick={() => setShowPopup(false)}
                    />

                    {/* Modal Content */}
                    <div
                        className="relative w-full max-w-6xl overflow-hidden p-2 sm:p-4 md:p-6 lg:p-8"
                        style={{
                            backgroundImage: 'url(/images/popup.png)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setShowPopup(false)}
                            className="absolute top-2 right-2 sm:top-4 sm:right-4 lg:top-6 lg:right-6 z-10 w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full bg-white/30 hover:bg-white/50 transition-colors"
                        >
                            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Grid Content Wrapper with White Background */}
                        <div className="bg-white rounded-lg max-w-5xl mx-auto overflow-auto max-h-[95vh]">
                            <div className="grid grid-cols-1 md:grid-cols-2 p-2 sm:p-3 md:p-5 overflow-hidden rounded-lg">
                                {/* Left Side - Image */}
                                <div className="hidden md:block">
                                    <img
                                        src="/images/parentss.png"
                                        alt="Family"
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Right Side - Form */}
                                <div className="flex flex-col px-3 sm:px-6 md:px-8 lg:px-2 ml-2 bg-white py-2 sm:py-0">
                                    {/* Form Header */}
                                    <h2
                                        className="mb-1 sm:mb-2"
                                        style={{
                                            color: '#003049',
                                            fontFamily: 'Poppins, sans-serif',
                                            fontSize: 'clamp(18px, 3vw, 24px)',
                                            fontWeight: 700,
                                            lineHeight: '1.3'
                                        }}
                                    >
                                        Be part of LinkEdtohome's Pilot Programme
                                    </h2>
                                    <p
                                        className="mb-3 sm:mb-4"
                                        style={{
                                            color: '#827E7E',
                                            fontFamily: 'Poppins, sans-serif',
                                            fontSize: 'clamp(12px, 2vw, 15px)',
                                            fontWeight: 400,
                                            lineHeight: '1.5'
                                        }}
                                    >
                                        LinkEdtohome is officially launching in September 2026. Register your interest below to get early access and help shape the platform.
                                    </p>

                                    {/* Form */}
                                    <form onSubmit={handleSubmit} className="space-y-2 sm:space-y-3 p-2 sm:p-4 md:p-5 bg-[#fffdf9] rounded-lg">
                                        {/* Full Name */}
                                        <div>
                                            <label
                                                htmlFor="fullName"
                                                className="block mb-1.5"
                                                style={{
                                                    color: '#003049',
                                                    fontFamily: 'Poppins, sans-serif',
                                                    fontSize: 'clamp(12px, 2vw, 14px)',
                                                    fontWeight: 500
                                                }}
                                            >
                                                Full Name
                                            </label>
                                            <input
                                                type="text"
                                                id="fullName"
                                                name="fullName"
                                                value={formData.fullName}
                                                onChange={handleInputChange}
                                                placeholder="Enter your full name"
                                                required
                                                className="w-full px-3 sm:px-4 py-2 sm:py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003049] focus:border-transparent transition-all text-sm sm:text-base"
                                                style={{
                                                    fontFamily: 'Poppins, sans-serif',
                                                    fontSize: 'clamp(13px, 2vw, 14px)'
                                                }}
                                            />
                                        </div>

                                        {/* School / Institution Name */}
                                        <div>
                                            <label
                                                htmlFor="schoolName"
                                                className="block mb-1.5"
                                                style={{
                                                    color: '#003049',
                                                    fontFamily: 'Poppins, sans-serif',
                                                    fontSize: 'clamp(12px, 2vw, 14px)',
                                                    fontWeight: 500
                                                }}
                                            >
                                                School / Institution Name
                                            </label>
                                            <input
                                                type="text"
                                                id="schoolName"
                                                name="schoolName"
                                                value={formData.schoolName}
                                                onChange={handleInputChange}
                                                placeholder="Enter your school name"
                                                required
                                                className="w-full px-3 sm:px-4 py-2 sm:py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003049] focus:border-transparent transition-all text-sm sm:text-base"
                                                style={{
                                                    fontFamily: 'Poppins, sans-serif',
                                                    fontSize: 'clamp(13px, 2vw, 14px)'
                                                }}
                                            />
                                        </div>

                                        {/* Email Address */}
                                        <div>
                                            <label
                                                htmlFor="email"
                                                className="block mb-1.5"
                                                style={{
                                                    color: '#003049',
                                                    fontFamily: 'Poppins, sans-serif',
                                                    fontSize: 'clamp(12px, 2vw, 14px)',
                                                    fontWeight: 500
                                                }}
                                            >
                                                Email Address
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                placeholder="Enter your email address"
                                                required
                                                className="w-full px-3 sm:px-4 py-2 sm:py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003049] focus:border-transparent transition-all text-sm sm:text-base"
                                                style={{
                                                    fontFamily: 'Poppins, sans-serif',
                                                    fontSize: 'clamp(13px, 2vw, 14px)'
                                                }}
                                            />
                                        </div>

                                        {/* Submit Button */}
                                        <button
                                            type="submit"
                                            className="w-full mt-2 sm:mt-3 bg-[#173570] text-white py-2 sm:py-2.5 rounded-lg hover:bg-[#00456a] transition-colors font-medium"
                                            style={{
                                                fontFamily: 'Poppins, sans-serif',
                                                fontSize: 'clamp(14px, 2vw, 16px)'
                                            }}
                                        >
                                            Submit
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default PrivacyPolicy;
