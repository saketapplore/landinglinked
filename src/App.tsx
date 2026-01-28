import { useState } from 'react';
import { Link } from 'react-router-dom';

function App() {
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

  const items = [
    <>
      Many parents want to support their children but feel unsure about new <br />
      challenges like online life, mental health, relationships, and social pressures.
    </>,
    "Children do best when school and home share consistent messages.",

    <>LinkEDtohome helps schools and parents work in partnership, not under <br /> pressure.</>,
    <>Schools bring expertise and structure; parents bring daily connection and <br /> insight.</>,
    <>Together, we create a joined-up support system so children feel understood, <br /> safe, supported, and prepared.</>
  ];


  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 items-center h-12 sm:h-16">
            {/* Logo */}
            <div className="flex items-center justify-start">
              <img
                src="/images/linkedlogo11.png"
                alt="LinkED to home"
                className="h-12 sm:h-16 lg:h-20 object-fill"
              />
            </div>
            {/* Desktop Navigation Links with Button */}
            <div className="hidden md:flex space-x-3 md:space-x-4 lg:space-x-[60px] items-center justify-end">
              <a href="#home" className="text-[#003049] text-xs md:text-sm lg:text-base font-normal transition-colors whitespace-nowrap" style={{ fontFamily: 'Poppins, sans-serif' }}>Home</a>
              <a href="#for-school" className="text-[#003049] text-xs md:text-sm lg:text-base font-normal transition-colors whitespace-nowrap" style={{ fontFamily: 'Poppins, sans-serif' }}>For school</a>
              <a href="#for-parents" className="text-[#003049] text-xs md:text-sm lg:text-base font-normal transition-colors whitespace-nowrap" style={{ fontFamily: 'Poppins, sans-serif' }}>For parents</a>
              <a href="#about-us" className="text-[#003049] text-xs md:text-sm lg:text-base font-normal transition-colors whitespace-nowrap" style={{ fontFamily: 'Poppins, sans-serif' }}>About Us</a>
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
                <a href="#home" className="text-[#003049] text-base font-normal transition-colors px-4" style={{ fontFamily: 'Poppins, sans-serif' }} onClick={() => setMobileMenuOpen(false)}>Home</a>
                <a href="#for-school" className="text-[#003049] text-base font-normal transition-colors px-4" style={{ fontFamily: 'Poppins, sans-serif' }} onClick={() => setMobileMenuOpen(false)}>For school</a>
                <a href="#for-parents" className="text-[#003049] text-base font-normal transition-colors px-4" style={{ fontFamily: 'Poppins, sans-serif' }} onClick={() => setMobileMenuOpen(false)}>For parents</a>
                <a href="#about-us" className="text-[#003049] text-base font-normal transition-colors px-4" style={{ fontFamily: 'Poppins, sans-serif' }} onClick={() => setMobileMenuOpen(false)}>About Us</a>
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

      {/* Hero Section */}
      <section id="home" className="bg-white py-4 sm:py-6 lg:py-8 relative">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left Section - Text Content */}
          <div className="w-full lg:w-1/2 px-4 sm:px-6 lg:pl-8 xl:pl-16 lg:pr-12">
            <div className="max-w-2xl space-y-3 sm:space-y-4">
              {/* Top Tags */}
              <div className="flex items-center space-x-2 font-semibold text-xs sm:text-sm text-[#08A0AF]">
                <span>For Schools</span>
                <span className="">|</span>
                <span>For Parents</span>
                <span className="">|</span>
                <span>For Pupils</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-[#003049] font-semibold leading-tight" style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(28px, 5vw, 54px)', fontWeight: 600, letterSpacing: '1.08px' }}>
                Turning what schools teach into{' '}
                <span className="relative inline-block">
                  <img src="/images/consistent.jpg" alt="consistent" className="relative z-10 mb-1 sm:mb-2 inline-block h-[1.4em] align-middle" />
                </span>{' '}
                <span className="relative inline-block">
                  <span className="relative z-10">practical support at home</span>
                </span>
              </h1>

              {/* Descriptive Paragraph */}
              <p className="text-[#827E7E] font-normal leading-relaxed max-w-xl" style={{ fontFamily: 'Lato, sans-serif', fontSize: 'clamp(14px, 2.5vw, 18px)', fontWeight: 400 }}>
                LinkEDtohome is a school-aligned parent support platform that helps schools reinforce safeguarding, wellbeing, and personal development beyond the classroom without increasing staff workload.
              </p>

              {/* Get Started Button */}
              <div className="pt-2 sm:pt-4">
                <button onClick={() => setShowPopup(true)} className="bg-[#003049] text-white px-6 sm:px-10 lg:px-12 py-2 sm:py-3 text-sm sm:text-base rounded-md hover:bg-blue-800 transition-colors font-medium">
                  Get Started
                </button>
              </div>
            </div>
          </div>

          {/* Right Section - Image (Full Width) */}
          <div className="w-full lg:w-1/2 relative mt-6 lg:mt-0">
            <img
              src="/images/linked1.png"
              alt="Family reading together"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Reality Section */}
      <section className="relative max-w-7xl mx-auto mt-8 sm:mt-12 lg:mt-14">
        {/* Mobile: Show only links.png image */}
        <div className="md:hidden px-4">
          <img
            src="/images/realities.png"
            alt="Reality section"
            className="w-full h-auto object-contain rounded-lg"
          />
        </div>

        {/* Desktop: Show background with text overlay */}
        <div className="hidden md:flex items-center min-h-[300px] lg:min-h-[400px] px-4 sm:px-6">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-no-repeat bg-center rounded-lg mx-4 sm:mx-6 lg:mx-0"
            style={{ backgroundImage: 'url(/images/linked2.png)', backgroundSize: '100% 100%' }}
          >

          </div>

          {/* Text Content Overlay */}
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
            <div className="max-w-2xl space-y-4 sm:space-y-6">
              {/* Main Heading */}
              <h2 className="leading-tight" style={{ color: 'var(--deep-blue, #003049)', fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(20px, 4vw, 32px)', fontStyle: 'normal', fontWeight: 700 }}>
                The reality in schools today
              </h2>

              {/* Descriptive Paragraph */}
              <div className="space-y-4">
                <p className="leading-relaxed" style={{ color: 'var(--deep-blue, #003049)', fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(14px, 2vw, 17px)', fontStyle: 'normal', fontWeight: 600 }}>
                  Schools deliver vital PSHE, safeguarding, and wellbeing education in a fast-changing world.
                </p>
                {/* <ul className="space-y-3">
                  {[
                    "Many parents want to support their children but feel unsure about new challenges like online life, mental health, relationships, and social pressures.",
                    "Children do best when school and home share consistent messages.",
                    "LinkEDtohome helps schools and parents work in partnership, not under pressure.",
                    "Schools bring expertise and structure; parents bring daily connection and insight.",
                    "Together, we create a joined-up support system so children feel understood, safe, supported, and prepared."
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <img src="/images/icoon.png" alt="Arrow icon" className="w-4 h-4 mt-1 object-contain flex-shrink-0" />
                      <span className="leading-relaxed " style={{ color: 'var(--deep-blue, #003049)', fontFamily: 'Poppins, sans-serif', fontSize: '14px', fontStyle: 'normal', fontWeight: 400 }}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul> */}

                {items.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <img
                      src="/images/icoon.png"
                      alt="Arrow icon"
                      className="w-4 h-4 mt-1 object-contain flex-shrink-0"
                    />
                    <span
                      className="leading-relaxed"
                      style={{
                        color: 'var(--deep-blue, #003049)',
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: '14px',
                        fontWeight: 400,
                      }}
                    >
                      {item}
                    </span>
                  </li>
                ))}


              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Section with linked3.png */}
      <section className="bg-white py-8 lg:py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
          <div className="relative">
            <img
              src="/images/linked3.png"
              alt="Content section"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* What is LinkEDtohome Section */}
      <section id="about-us" className="bg-white py-8 sm:py-10 lg:py-12">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 sm:space-y-8">
            {/* Main Title with Image */}
            <div className="flex justify-center">
              <img
                src="/images/home2.png"
                alt="What is LinkEDtohome?"
                className="h-20 md:hidden"
              />
              <img
                src="/images/home1.png"
                alt="What is LinkEDtohome?"
                className="hidden md:block lg:h-[80px] md:h-16"
              />
            </div>

            {/* Descriptive Paragraph */}
            <p className="max-w-4xl mx-auto px-4" style={{ color: 'var(--Sub-text, #827E7E)', textAlign: 'center', fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(16px, 2.5vw, 21px)', fontStyle: 'normal', fontWeight: 500 }}>
              LinkEDtohome turns what schools teach into practical support at home. It ensures key messages around safeguarding, wellbeing, relationships, and growing up don't stop at the school gate
            </p>

            {/* Three-Column Feature Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 lg:gap-14 mt-8 sm:mt-12 lg:mt-16">
              {/* Schools Column */}
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 flex items-center justify-center">
                  <img
                    src="/images/schoolicon.png"
                    alt="Schools icon"
                    className="w-16 h-16 object-contain"
                  />
                </div>
                <h3 style={{ color: 'var(--Black, #12141D)', textAlign: 'center', fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(18px, 2.5vw, 21px)', fontStyle: 'normal', fontWeight: 700 }}>Schools</h3>
                <p className="text-gray-600 text-sm sm:text-base">Schools set priorities</p>
              </div>

              {/* Parents Column */}
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center">
                  <img
                    src="/images/parenticon.png"
                    alt="Parents icon"
                    className="w-14 h-14 sm:w-16 sm:h-16 object-contain"
                  />
                </div>
                <h3 style={{ color: 'var(--Black, #12141D)', textAlign: 'center', fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(18px, 2.5vw, 21px)', fontStyle: 'normal', fontWeight: 700 }}>Parents</h3>
                <p className="text-gray-600 text-sm sm:text-base">Parents receive guidance that aligns</p>
              </div>

              {/* Pupils Column */}
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center">
                  <img
                    src="/images/pupilicon.png"
                    alt="Pupils icon"
                    className="w-14 h-14 sm:w-16 sm:h-16 object-contain"
                  />
                </div>
                <h3 style={{ color: 'var(--Black, #12141D)', textAlign: 'center', fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(18px, 2.5vw, 21px)', fontStyle: 'normal', fontWeight: 700 }}>Pupils</h3>
                <p className="text-gray-600 text-sm sm:text-base">Pupils experience consistency</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Parents See Section */}
      <section id="for-parents" className="bg-white pt-6 sm:pt-8 lg:pt-8 pb-6 sm:pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <img
              src="/images/framess.png"
              alt="What parents see"
              className="w-full max-w-3xl h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* Explain It to Me Section */}
      <section className="bg-white py-8 sm:py-10 lg:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12">
            {/* Left Section - Smartphone Image */}
            <div className="w-full lg:w-4/7 flex justify-center lg:justify-start">
              <img
                src="/images/linked5.png"
                alt="Explain It to Me app interface"
                className="w-full max-w-md h-auto object-contain"
              />
            </div>

            {/* Right Section - Content */}
            <div className="w-full lg:w-3/7 space-y-4 sm:space-y-6">
              {/* Icon */}
              <div className="flex items-start">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#003049] rounded-full flex items-center justify-center flex-shrink-0">
                  <img
                    src="/images/tvicon.png"
                    alt="Presentation icon"
                    className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                  />
                </div>
              </div>

              {/* Title with Sparkle Icon */}
              <div className="flex items-center gap-3">
                <h2 style={{ color: 'var(--deep-blue, #003049)', fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(24px, 3vw, 32px)', fontStyle: 'normal', fontWeight: 600 }}>
                  Explain It to Me
                </h2>

              </div>

              {/* Tagline */}
              <div className="flex items-start gap-3">
                <img
                  src="/images/staricon.png"
                  alt="Sparkle icon"
                  className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 mt-1"
                />
                <p className="leading-relaxed max-w-xl" style={{ color: 'var(--deep-blue, #003049)', fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(14px, 2vw, 18px)', fontStyle: 'normal', fontWeight: 400 }}>
                  Answers to the questions parents actually ask aligned to school learning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Development in 60 Section */}
      <section className="bg-white py-8 sm:py-10 lg:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12">
            {/* Left Section - Content */}
            <div className="w-full lg:w-1/2 space-y-4 sm:space-y-6">
              {/* Icon */}
              <div className="flex items-start">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg flex items-center justify-center flex-shrink-0">
                  <img
                    src="/images/galleryicon.png"
                    alt="Gallery icon"
                    className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                  />
                </div>
              </div>

              {/* Title */}
              <h2 style={{ color: 'var(--deep-blue, #003049)', fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(24px, 3vw, 32px)', fontStyle: 'normal', fontWeight: 600 }}>
                Personal Development in 60
              </h2>


              {/* Second Paragraph with Sparkle Icon */}
              <div className="flex items-start gap-3">
                <img
                  src="/images/staricon.png"
                  alt="Sparkle icon"
                  className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 mt-1"
                />
                <p className="leading-relaxed" style={{ color: 'var(--deep-blue, #003049)', fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(14px, 2vw, 18px)', fontStyle: 'normal', fontWeight: 400 }}>
                  Clear, school-aligned guidance in just 60 seconds. Turning personal development themes taught in school (such as relationships, wellbeing, online safety and growing up) into calm, practical support at home.
                </p>
              </div>
            </div>

            {/* Right Section - Smartphone Image */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
              <img
                src="/images/pd.png"
                alt="Personal Development in 60 app interface"
                className="w-full max-w-md h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Parent Toolkit Section */}
      <section className="bg-white py-8 sm:py-10 lg:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12">
            {/* Left Section - Smartphone Image */}
            <div className="w-full lg:w-4/7 flex justify-center lg:justify-start">
              <img
                src="/images/linked7.png"
                alt="Parent Toolkit app interface"
                className="w-full max-w-md h-auto object-contain"
              />
            </div>

            {/* Right Section - Content */}
            <div className="w-full lg:w-3/7 space-y-4 sm:space-y-6">
              {/* Icon */}
              <div className="flex items-start">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#003049] rounded-full flex items-center justify-center flex-shrink-0">
                  <img
                    src="/images/bagicon.png"
                    alt="Briefcase icon"
                    className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                  />
                </div>
              </div>

              {/* Title */}
              <h2 style={{ color: 'var(--deep-blue, #003049)', fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(24px, 3vw, 32px)', fontStyle: 'normal', fontWeight: 600 }}>
                Parent toolkit
              </h2>

              {/* Paragraph with Sparkle Icon */}
              <div className="flex items-start gap-3">
                <img
                  src="/images/staricon.png"
                  alt="Sparkle icon"
                  className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 mt-1"
                />
                <p className="leading-relaxed" style={{ color: 'var(--deep-blue, #003049)', fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(14px, 2vw, 18px)', fontStyle: 'normal', fontWeight: 400 }}>
                  Conversation starters, reassurance, and practical next steps without judgement. Parents don't disengage because they don't care. They disengage because they feel unsure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contextual Safeguarding Alerts Section */}
      <section className="bg-white py-8 sm:py-10 lg:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12">
            {/* Left Section - Content */}
            <div className="w-full lg:w-1/2 space-y-4 sm:space-y-6">
              {/* Icon */}
              <div className="flex items-start">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#003049] rounded-full flex items-center justify-center flex-shrink-0">
                  <img
                    src="/images/ringicon.png.png"
                    alt="Ring/Bell icon"
                    className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                  />
                </div>
              </div>

              {/* Title */}
              <h2 style={{ color: 'var(--deep-blue, #003049)', fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(24px, 3vw, 32px)', fontStyle: 'normal', fontWeight: 600 }}>
                Contextual safeguarding alerts
              </h2>

              {/* Paragraph with Sparkle Icon */}
              <div className="flex items-start gap-3">
                <img
                  src="/images/staricon.png"
                  alt="Sparkle icon"
                  className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 mt-1"
                />
                <p className="leading-relaxed" style={{ color: 'var(--deep-blue, #003049)', fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(14px, 2vw, 18px)', fontStyle: 'normal', fontWeight: 400 }}>
                  Timely prompts linked to school priorities and National safeguarding concerns.
                </p>
              </div>
            </div>

            {/* Right Section - Smartphone Image */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
              <img
                src="/images/linked8.png"
                alt="Contextual safeguarding alerts app interface"
                className="w-full max-w-md h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Meet Link Section */}
      <section
        className="py-10 sm:py-12 lg:py-16 bg-[#fff7f4] "
        style={{}}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center">
            {/* Left Section - Content */}
            <div className="w-full lg:w-2/3">
              <div className="max-w-full space-y-5 sm:space-y-6">
                <div className="flex items-start">
                  <img
                    src="/images/meet.png"
                    alt="Meet Link"
                    className="h-10 sm:h-12 lg:h-14 w-auto object-contain"
                  />
                </div>

                <p
                  className="leading-relaxed"
                  style={{
                    color: 'var(--Black, #12141D)',
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '16px',
                    fontStyle: 'normal',
                    fontWeight: 400,
                  }}
                >
                  Link is an AI-powered parent support guide trained on UK PSHE and safeguarding <br /> content.
                </p>

                <p
                  className="leading-relaxed"
                  style={{
                    color: 'var(--Black, #12141D)',
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '16px',
                    fontStyle: 'normal',
                    fontWeight: 400,
                  }}
                >
                  Parents can ask real questions, in real language, and receive:
                </p>

                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <img
                      src="/images/tick.png"
                      alt="Tick"
                      className="w-3 h-3 sm:w-6 sm:h-6 flex-shrink-0"
                    />
                    <span
                      style={{
                        color: 'var(--deep-blue, #003049)',
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: '16px',
                        fontStyle: 'normal',
                        fontWeight: 600,
                      }}
                    >
                      Age-appropriate explanations aligned to what schools teach
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <img
                      src="/images/tick.png"
                      alt="Tick"
                      className="w-3 h-3 sm:w-6 sm:h-6 flex-shrink-0"
                    />
                    <span
                      style={{
                        color: 'var(--deep-blue, #003049)',
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: '16px',
                        fontStyle: 'normal',
                        fontWeight: 600,
                      }}
                    >
                      Safeguarding-aware responses with clear next steps
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <img
                      src="/images/tick.png"
                      alt="Tick"
                      className="w-3 h-3 sm:w-6 sm:h-6 flex-shrink-0"
                    />
                    <span
                      style={{
                        color: 'var(--deep-blue, #003049)',
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: '16px',
                        fontStyle: 'normal',
                        fontWeight: 600,
                      }}
                    >
                      Calm, practical guidance — without judgement
                    </span>
                  </li>
                </ul>

                <p
                  className="leading-relaxed"
                  style={{
                    color: 'var(--Black, #12141D)',
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '16px',
                    fontStyle: 'normal',
                    fontWeight: 400,
                  }}
                >
                  Link scales school expertise without replacing professional judgement.
                </p>

                <p
                  style={{
                    color: 'var(--deep-blue, #003049)',
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '16px',
                    fontStyle: 'normal',
                    fontWeight: 600,
                  }}
                >
                  Schools stay in control. Safeguarding stays safe.
                </p>
              </div>
            </div>

            {/* Right Section - Image */}
            <div className="w-full lg:w-1/3 flex h-[600px] justify-start lg:justify-start">
              <img
                src="/images/aibots.png"
                alt="Meet Link feature"
                className="w-full max-w-md sm:max-w-lg lg:max-w-xl h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Grounded in Real Pupil Voice Section */}
      <section className="bg-white py-6 sm:py-8 lg:py-10">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4 sm:space-y-6">
            {/* Title/Subtitle Section */}
            <div className="flex justify-center">
              <img
                src="/images/grounded.png"
                alt="Grounded in real pupil voice"
                className="w-full max-w-xl h-auto object-contain"
              />
            </div>
            <p className="text-center px-4" style={{ color: 'var(--Sub-text, #827E7E)', fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(16px, 2.5vw, 20px)', fontStyle: 'normal', fontWeight: 500 }}>LinkEDtohome works in partnership with VotesforSchools</p>
            {/* This Week's Question Card Section */}
            <div className="flex justify-center">
              <img
                src="/images/thisweek.png"
                alt="This Week's Question poll card"
                className="w-full max-w-8xl h-auto object-fill"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What Schools Gain Section */}
      <section id="for-school" className="bg-white pt-6 sm:pt-8 md:pb-1 lg:pt-10 pb-1 sm:pb-8">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="space-y-4 sm:space-y-6">
            {/* Title Section */}
            <div className="flex justify-center">
              <img
                src="/images/schoolgains.png"
                alt="What schools gain?"
                className="w-full max-w-[300px] sm:max-w-[350px] lg:w-[400px] h-auto object-contain"
              />
            </div>

            {/* Subtitle Paragraph */}
            <p
              className="text-center px-4"
              style={{
                color: 'var(--Sub-text, #827E7E)',
                fontFamily: 'Poppins, sans-serif',
                fontSize: 'clamp(16px, 2.5vw, 20px)',
                fontStyle: 'normal',
                fontWeight: 500,
              }}
            >
              This is capacity-building, not extra work.
            </p>

            {/* Six Images Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-6 sm:mt-8 lg:mt-12">
              <img
                src="/images/li.png"
                alt="Card 1"
                className="w-full h-auto object-contain transition-all duration-300 hover:scale-105 cursor-pointer"
              />
              <img
                src="/images/li1.png"
                alt="Card 2"
                className="w-full h-auto object-contain transition-all duration-300 hover:scale-105 cursor-pointer"
              />
              <img
                src="/images/li2.png"
                alt="Card 3"
                className="w-full h-auto object-contain transition-all duration-300 hover:scale-105 cursor-pointer"
              />
              <img
                src="/images/li3.png"
                alt="Card 4"
                className="w-full h-auto object-contain transition-all duration-300 hover:scale-105 cursor-pointer"
              />
              <img
                src="/images/li4.png"
                alt="Card 5"
                className="w-full h-auto object-contain transition-all duration-300 hover:scale-105 cursor-pointer"
              />
              <img
                src="/images/li5.png"
                alt="Card 6"
                className="w-full h-auto object-contain transition-all duration-300 hover:scale-105 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="bg-white py-1 sm:py-8">
        <div className="max-w-xl mx-auto px-4">
          <div className="flex justify-center">
            <img
              src="/images/whyimage.png"
              alt="Why section"
              className="w-[150px] h-[150px] sm:w-[180px] sm:h-[180px] lg:w-[200px] lg:h-[200px] object-contain"
            />
          </div>
        </div>
      </section>

      {/* Concerns Section */}
      <section className="bg-white py-8 sm:py-10 lg:py-1">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-10">
            {/* Left Section - Images */}
            <div className="w-full flex justify-center lg:justify-center">
              <img
                src="/images/safe.png"
                alt="Family images"
                className="w-full max-w-md lg:max-w-none h-auto object-contain"
              />
            </div>

            {/* Right Section - Content */}
            <div className="w-full space-y-6 sm:space-y-8 lg:space-y-[10px] lg:ml-8 xl:ml-32">
              {/* Bulleted List */}
              <ul className="space-y-3 sm:space-y-4">
                <li className="flex items-start gap-3">
                  <img src="/images/tick-circle.png" alt="Checkmark" className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 mt-1 object-contain" />
                  <span
                    style={{
                      color: '#606060',
                      fontFamily: 'Open Sans, sans-serif',
                      fontSize: 'clamp(16px, 2.5vw, 22px)',
                      fontStyle: 'normal',
                      fontWeight: 600
                    }}
                  >
                    Safeguarding concerns are increasing.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <img src="/images/tick-circle.png" alt="Checkmark" className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 mt-1 object-contain" />
                  <span
                    style={{
                      color: '#606060',
                      fontFamily: 'Open Sans, sans-serif',
                      fontSize: 'clamp(16px, 2.5vw, 22px)',
                      fontStyle: 'normal',
                      fontWeight: 600,
                    }}
                  >
                    Parents are more anxious than ever.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <img src="/images/tick-circle.png" alt="Checkmark" className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 mt-1 object-contain" />
                  <span
                    style={{
                      color: '#606060',
                      fontFamily: 'Open Sans, sans-serif',
                      fontSize: 'clamp(16px, 2.5vw, 22px)',
                      fontStyle: 'normal',
                      fontWeight: 600,
                    }}
                  >
                    Schools are under pressure to evidence impact beyond lessons.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <img src="/images/tick-circle.png" alt="Checkmark" className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 mt-1 object-contain" />
                  <span
                    style={{
                      color: '#606060',
                      fontFamily: 'Open Sans, sans-serif',
                      fontSize: 'clamp(16px, 2.5vw, 22px)',
                      fontStyle: 'normal',
                      fontWeight: 600,
                    }}
                  >
                    AI is already in homes just not safely aligned to <br className="hidden sm:block" /> schools
                  </span>
                </li>
              </ul>

              {/* Get Started Button */}
              <div className="pt-2 sm:pt-4">
                <button onClick={() => setShowPopup(true)} className="bg-[#003049] text-white px-8 sm:px-10 lg:px-12 py-2.5 sm:py-3 text-sm sm:text-base rounded-md hover:bg-blue-800 transition-colors font-medium">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join LinkEDtohome Section */}
      <section className="bg-white pt-12 sm:pt-16 lg:pt-28 pb-8 sm:pb-12">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12">
            {/* Left Section - Image */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-center">
              <img
                src="/images/Visuals.png"
                alt="LinkEDtohome platform visual"
                className="w-full max-w-md h-auto object-contain"
              />
            </div>

            {/* Right Section - Content */}
            <div className="w-full lg:w-1/2 space-y-4 sm:space-y-6">
              {/* Main Headline */}
              <h2 style={{ color: 'var(--deep-blue, #003049)', fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(28px, 4vw, 40px)', fontStyle: 'normal', fontWeight: 700 }}>
                Join LinkEDtohome platform today!
              </h2>

              {/* Description */}
              <p className="leading-relaxed" style={{ color: 'var(--Sub-text, #827E7E)', fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(14px, 2vw, 17px)', fontStyle: 'normal', fontWeight: 400 }}>
                LinkEDtohome turns school expertise into everyday parent confidence so pupils hear the same message, wherever they are.
              </p>

              {/* Get Started Button */}
              <div className="pt-2 sm:pt-4">
                <button onClick={() => setShowPopup(true)} className="bg-[#003049] text-white px-8 sm:px-10 lg:px-12 py-2.5 sm:py-3 text-sm sm:text-base rounded-md hover:bg-blue-800 transition-colors font-medium">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

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

export default App;

