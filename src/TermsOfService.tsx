import { useState } from 'react';

function TermsOfService() {
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
            const response = await fetch('/api/submit-form', {

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
                            <a href="/">
                                <img
                                    src="/images/linkedlogo11.png"
                                    alt="LinkED to home"
                                    className="h-12 sm:h-16 lg:h-20 object-fill"
                                />
                            </a>
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

            {/* Terms of Service Content */}
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
                    Terms of Service
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
                            These Terms of Service ("Terms") govern your use of the LinkEDtohome website. By accessing or using our website, you agree to these Terms. If you do not agree, please do not use the site.
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
                            LinkEDtohome is a school-aligned parent support initiative focused on helping schools and families stay connected around safeguarding, wellbeing, and personal development.
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
                            Contact us at: <a href="mailto:support@linkedtohome.com" className="text-[#08A0AF] hover:underline">support@linkedtohome.com</a>
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
                            2. Purpose of the website
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
                            The LinkEDtohome website is provided for:
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
                                General information about LinkEDtohome
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
                                Sharing updates about our work and upcoming launch
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
                                Allowing users to register interest or contact us
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
                            The website does not currently provide:
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
                                Access to a live platform
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
                                Parent or pupil accounts
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
                                School services or subscriptions
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
                            3. No professional advice
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
                            Content on this website is for general information only.
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
                            It does not constitute:
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
                                Safeguarding advice
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
                                Legal advice
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
                                Medical or mental health advice
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
                            You should not rely on information from this website as a substitute for professional advice or statutory guidance.
                        </p>
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
                            4. Acceptable use
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
                            You agree not to:
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
                                Use the website in any unlawful or harmful way
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
                                Attempt to gain unauthorised access to the site or its systems
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
                                Copy, reproduce, or reuse content without permission
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
                                Use the site in a way that could damage, disable, or impair it
                            </li>
                        </ul>
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
                            5. Intellectual property
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
                            All content on this website, including text, branding, logos, and design, is owned by or licensed to LinkEDtohome.
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
                            You may:
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
                                View and read content for personal, non-commercial use
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
                            You may not:
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
                                Copy, reproduce, distribute, or adapt content without written permission
                            </li>
                        </ul>
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
                            6. Availability and changes
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
                            We may:
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
                                Update or change the website at any time
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
                                Suspend or withdraw content without notice
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
                            We do not guarantee that the website will always be available or error-free.
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
                            7. Limitation of liability
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
                            To the fullest extent permitted by law:
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
                                We are not liable for any loss or damage arising from use of, or reliance on, this website
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
                                We are not responsible for any indirect or consequential loss
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
                                Nothing in these Terms limits liability where it cannot legally be limited
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
                            8. Links to other websites
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
                            This website may contain links to third-party websites. We are not responsible for their content, availability, or privacy practices.
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
                            9. Privacy
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
                            Use of this website is also governed by our Privacy Policy, which explains how we handle personal data.
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
                            10. Changes to these Terms
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
                            We may update these Terms from time to time. Any changes will be posted on this page. Continued use of the website means you accept the updated Terms.
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
                            11. Governing law
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
                            These Terms are governed by the laws of England and Wales. Any disputes will be subject to the exclusive jurisdiction of the English courts.
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
                            12. Contact us
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
                            If you have any questions about these Terms, contact: <a href="mailto:support@linkedtohome.com" className="text-[#08A0AF] hover:underline">support@linkedtohome.com</a>
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
                            <a href="/privacy" className="hover:text-[#003049] transition-colors text-center whitespace-nowrap" style={{ color: 'var(--deep-blue, #003049)', fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(11px, 1.5vw, 14px)', fontStyle: 'normal', fontWeight: 400 }}>
                                Privacy Policy
                            </a>
                            <a href="/terms" className="hover:text-[#003049] transition-colors text-center whitespace-nowrap" style={{ color: 'var(--deep-blue, #003049)', fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(11px, 1.5vw, 14px)', fontStyle: 'normal', fontWeight: 400 }}>
                                Terms of Service
                            </a>
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

export default TermsOfService;
