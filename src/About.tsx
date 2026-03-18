import { useState } from 'react';
import { Link } from 'react-router-dom';

function About() {
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
                  className="h-10 sm:h-14 lg:h-20 w-auto object-contain"
                />
              </Link>
            </div>
            {/* Desktop Navigation Links with Button */}
            <div className="hidden md:flex space-x-3 md:space-x-4 lg:space-x-[60px] items-center justify-end">
              <Link to="/#home" className="text-[#003049] text-xs md:text-sm lg:text-base font-normal transition-colors whitespace-nowrap" style={{ fontFamily: 'Poppins, sans-serif' }}>Home</Link>
              <Link to="/#for-school" className="text-[#003049] text-xs md:text-sm lg:text-base font-normal transition-colors whitespace-nowrap" style={{ fontFamily: 'Poppins, sans-serif' }}>For school</Link>
              <Link to="/#for-parents" className="text-[#003049] text-xs md:text-sm lg:text-base font-normal transition-colors whitespace-nowrap" style={{ fontFamily: 'Poppins, sans-serif' }}>For parents</Link>
              <Link to="/about" className="text-[#003049] text-xs md:text-sm lg:text-base font-normal transition-colors whitespace-nowrap" style={{ fontFamily: 'Poppins, sans-serif' }}>About Us</Link>
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
                <Link to="/#home" className="text-[#003049] text-base font-normal transition-colors px-4" style={{ fontFamily: 'Poppins, sans-serif' }} onClick={() => setMobileMenuOpen(false)}>Home</Link>
                <Link to="/#for-school" className="text-[#003049] text-base font-normal transition-colors px-4" style={{ fontFamily: 'Poppins, sans-serif' }} onClick={() => setMobileMenuOpen(false)}>For school</Link>
                <Link to="/#for-parents" className="text-[#003049] text-base font-normal transition-colors px-4" style={{ fontFamily: 'Poppins, sans-serif' }} onClick={() => setMobileMenuOpen(false)}>For parents</Link>
                <Link to="/about" className="text-[#003049] text-base font-normal transition-colors px-4" style={{ fontFamily: 'Poppins, sans-serif' }} onClick={() => setMobileMenuOpen(false)}>About Us</Link>
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

      {/* About Us Hero Section */}
      <section className="py-12 sm:py-20 lg:py-4 overflow-hidden">
        <div className="max-w-full mx-auto">
          <div className="flex flex-col lg:flex-row items-center">
            {/* Left Content */}
            <div className="w-full lg:w-[45%] px-6 sm:px-12 lg:px-0 lg:ml-20 space-y-8 mb-20 lg:mb-32">
              <div className="space-y-4">
                <div className="w-6 rounded h-1 bg-[#08A0AF]"></div>
                <h1 className="text-[#003049] leading-tight font-normal font-semibold" style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(32px, 5vw, 60px)' }}>
                  About <br />
                  <img src="/images/linkframe.png" alt="LinkEDtohome" className="inline-block h-[1.2em] w-auto align-middle" />
                </h1>
              </div>

              <p className="text-[#827E7E] text-lg sm:text-xl leading-relaxed max-w-xl" style={{ fontFamily: 'Lato, sans-serif' }}>
                Schools see part of a child's world. Parents see <br className="hidden sm:block" /> another. LinkEDtohome connects those <br className="hidden sm:block" /> perspectives so concerns can be recognised <br className="hidden sm:block" /> earlier and children are better supported.
              </p>

              <div className="w-16 h-1 bg-[#FF9B9B]"></div>
            </div>

            {/* Right Image Section */}
            <div className="w-full lg:w-[55%] lg:pl-12">
              <img
                src="/images/abouts.png"
                alt="Father and son studying"
                className="w-full h-auto object-fill rounded-l-3xl lg:rounded-l-[100px]"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Our Values Title Section */}
      <section className="mb-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex flex-col items-center">
            <img 
              src="/images/values.png" 
              alt="Our values" 
              className="h-auto w-full max-w-[320px] sm:max-w-[450px] mb-6" 
            />
            <p className="text-[#827E7E] text-lg sm:text-xl font-normal max-w-2xl mx-auto" style={{ fontFamily: 'Poppins, sans-serif' }}>
              The principle that guide how we support schools, <br className="hidden sm:block" />
              families and young people.
            </p>
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <section className="py-6 sm:py-12 bg-[#FFFDF9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 lg:gap-y-24 gap-x-20">
            {[
              {
                title: "Working together",
                image: "/images/w1.png",
                text: "We believe the best outcomes for young people happen when schools and families work in partnership. By bringing together the perspectives of both home and school, we help create a more complete understanding of a child's needs."
              },
              {
                title: "Acting Early",
                image: "/images/w2.png",
                text: "Too often concerns only come together once they have escalated. We value early communication and proactive support to ensure children receive the help they need before challenges grow."
              },
              {
                title: "Supporting Every Child",
                image: "/images/w3.png",
                text: "Every child deserves to feel safe, supported and understood. Our work is built on years of experience supporting children, families and schools through challenges and safeguarding concerns."
              },
              {
                title: "Strengthening Relationships",
                image: "/images/w4.png",
                text: "Strong relationships around a child make a meaningful difference. We focus on strengthening the connection between parents, schools and support networks so that young people can thrive."
              }
            ].map((card, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-48 h-48 sm:w-56 sm:h-56 object-contain"
                  />
                  {/* <div className="absolute bottom-6 left-2 w-6 h-6 sm:w-7 sm:h-7 bg-[#08A0AF] rounded-full"></div> */}
                </div>
                <h3 className="text-[#003049] font-bold text-xl sm:text-2xl mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {card.title}
                </h3>
                <p className="text-[#827E7E] leading-relaxed max-w-sm text-sm sm:text-base font-normal" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>  
      
      
       {/* Meet the Team Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex flex-col items-center">
            <img 
              src="/images/makeTeam.png" 
              alt="Meet the Team" 
              className="h-auto w-full max-w-[320px] sm:max-w-[450px] mb-8" 
            />
            <p 
              className="text-[#827E7E] text-lg sm:text-xl font-normal leading-relaxed max-w-[1100px] mx-auto" 
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              LinkEDtohome was founded in 2025 by Susie Williams and Katie Norris, experienced school leaders in safeguarding, attendance, pastoral care and personal development. In the same year they partnered with Kate Harris, Founder and CEO of VotesforSchools, bringing together decades of experience across education, leadership and pupil voice.
            </p>
          </div>
        </div>
      </section>

      {/* Profile Section - Susie Williams */}
      <section className="py-12 sm:py-20 bg-white overflow-hidden">
        <div className="max-w-8xl mx-auto px-6 sm:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            {/* Left Content */}
            <div className="w-full lg:w-1/2 space-y-6 lg:ml-24 sm:space-y-8">
              <h2 className="text-[#003049] text-2xl sm:text-3xl lg:text-[26px] font-bold leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
                &ldquo;Susie understands what makes parents engage (and what makes them disengage).&rdquo;
              </h2>
              
              <div className="flex items-stretch gap-4 sm:gap-6 mr-1">
                {/* Custom Marker Bar */}
                <img src="/images/line.png" alt="line" className="w-[10px] sm:w-[8px] h-16 sm:h-20 shrink-0 object-fill" />
                <div className="space-y-1">
                  <p className="text-[#003049] text-base sm:text-lg lg:text-lg font-normal leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    25+ years School Leadership (pupil & parent relationship expert).
                  </p>
                  <p className="text-[#003049] text-base sm:text-lg lg:text-lg font-normal leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Community Building & Inclusive Change Management.
                  </p>
                  <p className="text-[#003049] text-base sm:text-lg lg:text-lg font-normal leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    User feedback loops & retention.
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <p className="text-[#003049] font-bold text-xl sm:text-2xl" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Susie Williams <span className="text-[#003049] font-normal text-sm sm:text-base ml-2 inline-block">Co - CEO & Founder</span>
                </p>
              </div>
            </div>

            {/* Right Image Section */}
            <div className="w-full lg:w-1/2 flex lg:mr-24 lg:justify-end">
              <div className="relative">
                <img 
                  src="/images/susi.png" 
                  alt="Susie Williams Portrait" 
                  className="w-full max-w-[500px] h-auto object-contain transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Profile Section - Katie Norris */}
      <section className="py-12 sm:py-20 bg-white overflow-hidden">
        <div className="max-w-8xl mx-auto px-6 sm:px-12">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
            {/* Left Image Section */}
            <div className="w-full lg:w-1/2 flex justify-center lg:ml-24 lg:justify-start">
              <div className="relative">
                <img 
                  src="/images/katiN.png" 
                  alt="Katie Norris Portrait" 
                  className="w-full max-w-[500px] h-auto object-contain transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="w-full lg:w-1/2 space-y-6 lg:mr-24 sm:space-y-8">
              <h2 className="text-[#003049] text-2xl sm:text-3xl lg:text-[26px] font-bold leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
                &ldquo;Katie knows every pain point schools face because she&rsquo;s lived them&rdquo;
              </h2>
              
              <div className="flex items-stretch gap-4 sm:gap-6">
                {/* Custom Marker Bar */}
                <img src="/images/line.png" alt="line" className="w-[8px] sm:w-[10px] h-20 sm:h-28 shrink-0 object-fill" />
                <div className="space-y-1">
                  <p className="text-[#003049] text-base sm:text-lg lg:text-lg font-normal leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    15+ years in Secondary Education (PSHE, pastoral care, safeguarding)
                  </p>  
                  <p className="text-[#003049] text-base sm:text-lg lg:text-lg font-normal leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Multi-Academy Trust relationship builder.
                  </p>
                  <p className="text-[#003049] text-base sm:text-lg lg:text-lg font-normal leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Strategic Account Management & Enterprise Sales.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <p className="text-[#003049] font-bold text-xl sm:text-2xl" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Katie Norris <span className="text-[#003049] font-normal text-sm sm:text-base ml-2 inline-block">Co - CEO & Founder</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Profile Section - Kate Harris */}
      <section className="py-12 sm:py-20 bg-white overflow-hidden">
        <div className="max-w-8xl mx-auto px-6 sm:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Left Content */}
            <div className="w-full lg:w-1/2 space-y-6 lg:ml-24 sm:space-y-8">
              <h2 className="text-[#003049] text-2xl sm:text-3xl lg:text-[26px] font-bold leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
                &ldquo;Kate is the partnership. Her network and sector authority is our unfair advantage.&rdquo;
              </h2>
              
              <div className="flex items-stretch gap-4 sm:gap-6">
                {/* Custom Marker Bar */}
                <img src="/images/line.png" alt="line" className="w-[8px] sm:w-[10px] h-20 sm:h-28 shrink-0 object-fill" />
                <div className="space-y-1">
                  <p className="text-[#003049] text-base sm:text-lg lg:text-lg font-normal leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Founder & CEO of VotesforSchools (2,000+ schools).
                  </p>
                  <p className="text-[#003049] text-base sm:text-lg lg:text-lg font-normal leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Left Senior School Leadership in 2014 to build award-winning EdTech.
                  </p>
                  <p className="text-[#003049] text-base sm:text-lg lg:text-lg font-normal leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    PSHE & Personal Development thought leader (Ofsted-cited).
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <p className="text-[#003049] font-bold text-xl sm:text-2xl" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Kate Harris <span className="text-[#003049] font-normal text-sm sm:text-base ml-2 inline-block">Director</span>
                </p>
              </div>
            </div>

            {/* Right Image Section */}
            <div className="w-full lg:w-1/2 flex justify-center lg:mr-24 lg:justify-end">
              <div className="relative">
                <img 
                  src="/images/kate.png" 
                  alt="Kate Harris Portrait" 
                  className="w-full max-w-[500px] h-auto object-contain transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Profile Section - (Applore) */}
      <section className="py-12 sm:py-20 bg-white overflow-hidden">
        <div className="max-w-8xl mx-auto px-6 sm:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Left Image Section */}
            <div className="w-full lg:w-1/2 flex justify-center lg:ml-24 lg:justify-start">
              <div className="relative">
                <img 
                  src="/images/appl.png" 
                  alt="Applore Portrait" 
                  className="w-full max-w-[500px] h-auto object-contain transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="w-full lg:w-1/2 space-y-6 lg:mr-24 sm:space-y-8">
              <h2 className="text-[#003049] text-2xl sm:text-3xl lg:text-[27px] font-bold leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
                &ldquo;Applore is our technology partner, providing the expertise to deliver and scale the platform effectively from day one.&rdquo;
              </h2>
              
              <div className="flex items-stretch gap-4 sm:gap-6">
                {/* Custom Marker Bar */}
                <img src="/images/line.png" alt="line" className="w-[8px] sm:w-[10px] h-20 sm:h-28 shrink-0 object-fill" />
                <div className="space-y-1">
                  <p className="text-[#003049] text-base sm:text-lg lg:text-lg font-normal leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Micro-sized technology services company offering mobile app development, web development, UI/UX design, tech consultancy, strategic consulting, and more.
                  </p>
                  <p className="text-[#003049] text-base sm:text-lg lg:text-lg font-normal leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    They have worked with notable clients such as JK Tyre, KOHLER, Nural, Book Your Test, and others.
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <p className="text-[#003049] font-bold text-xl sm:text-2xl" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Applore Technologies <span className="text-[#003049] font-normal text-sm sm:text-base ml-2 inline-block">Tech Partner</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

       {/* Team Portraits Section */}
      {/* <section className="pb-16 sm:pb-24 lg:pb-20 bg-white">
        <div className="max-w-8xl mx-auto px-6 sm:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
            {[1, 2, 3, 4].map((num) => (
              <div key={num} className="group overflow-hidden rounded-2xl shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                <img
                  src={`/images/team${num}.png`}
                  alt={`Team Member ${num}`}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12">
          <h2 
            className="text-center leading-relaxed antialiased" 
            style={{ 
              color: 'var(--deep-blue, #003049)',
              fontFamily: 'Poppins, sans-serif', 
              fontSize: 'clamp(20px, 3.5vw, 40px)',
              fontStyle: 'normal',
              fontWeight: 700 
            }}
          >
            "We've been school leaders, not tech outsiders. We've sat in the parent meetings, written the safeguarding policies, and felt the frustration of parents who want to help but don't know how. We're not guessing at the problem, we've lived it."
          </h2>
        </div>
      </section>


      {/* Join LinkEDtohome Section */}
      <section className="bg-white pt-8 sm:pt-16 lg:pt-28 pb-8 sm:pb-12">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-4">
          <div className="flex flex-col lg:flex-row items-center gap-2 sm:gap-6">
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
                LinkEDtohome was created to bridge that gap.
              </h2>

              {/* Description */}
              <p className="leading-relaxed" style={{ color: 'var(--Sub-text, #827E7E)', fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(14px, 2vw, 17px)', fontStyle: 'normal', fontWeight: 400 }}>
                The platform helps parents understand concerns about their child, access guidance aligned with what schools teach, and communicate more clearly with schools when support may be needed. By connecting parent insight with school support, LinkEDtohome strengthens the partnership between families and schools and helps children receive the support they need earlier.
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

      {/* Gap Bridge Section */}
      {/* <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#003049] rounded-xl overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] p-8 sm:p-12 lg:p-16 flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
           
            <div className="w-full lg:w-2/5 flex justify-center">
              <img
                src="/images/overlay.png"
                alt="Mobile app visualization"
                className="w-full max-w-sm h-auto object-contain"
              />
            </div>

            
            <div className="w-full lg:w-3/5 space-y-6">
              <h2 className="text-white font-bold text-3xl sm:text-4xl lg:text-[40px] leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
                LinkEDtohome was created to bridge that gap.
              </h2>
              <p className="text-white/80 text-sm sm:text-base lg:text-[17px] mt-4 leading-relaxed font-normal" style={{ fontFamily: 'Poppins, sans-serif' }}>
                The platform helps parents understand concerns about their child, access guidance aligned with what schools teach, and communicate more clearly with schools when support may be needed. By connecting parent insight with school support, LinkEDtohome strengthens the partnership between families and schools and helps children receive the support they need earlier.
              </p>
              <div className="pt-4">
                <button
                  onClick={() => setShowPopup(true)}
                  className="bg-[#08A0AF] text-white px-8 sm:px-10 py-3.5 rounded-xl font-bold hover:bg-[#068a96] hover:shadow-lg transition-all active:scale-[0.98] text-sm sm:text-base"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </section> */}

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
              <a href="https://www.youtube.com/@LinkEDtohome" className="rounded-full flex items-center justify-center transition-colors">
                <img src="/images/youtube1.png" alt="LinkedIn" className="w-6 h-6 sm:w-8 sm:h-8 object-contain" />
              </a>
              <a href="https://www.facebook.com/share/183VGVaiaM/?mibextid=wwXIfr" className="rounded-full flex items-center justify-center transition-colors">
                <img src="/images/fb1.png" alt="LinkedIn" className="w-6 h-6 sm:w-8 sm:h-8 object-contain" />
              </a>
              <a href="https://www.tiktok.com/@linkedtohome" className="rounded-full flex items-center justify-center transition-colors">
                <img src="/images/tiktok1.png" alt="LinkedIn" className="w-6 h-6 sm:w-8 sm:h-8 object-contain" />
              </a>
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
      {/* Get Started Popup */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setShowPopup(false)}
          />

          {/* Modal Content */}
          <div
            className="relative w-full max-w-6xl overflow-hidden p-2 sm:p-4 md:p-6 lg:p-8 shrink-0"
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

export default About;
