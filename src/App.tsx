function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 items-center h-16">
            {/* Logo */}
            <div className="flex items-center justify-start">
              <img 
                src="/images/linkedlogo11.png" 
                alt="LinkED to home" 
                className="h-20 object-fill"
              />
            </div>
            {/* Navigation Links with Button */}
            <div className="hidden md:flex space-x-[60px] items-center justify-end">
              <a href="#home" className="text-[#003049] text-base font-normal transition-colors" style={{ fontFamily: 'Poppins, sans-serif' }}>Home</a>
              <a href="#for-school" className="text-[#003049] text-base font-normal transition-colors" style={{ fontFamily: 'Poppins, sans-serif' }}>For school</a>
              <a href="#for-parents" className="text-[#003049] text-base font-normal transition-colors" style={{ fontFamily: 'Poppins, sans-serif' }}>For parents</a>
              <a href="#about-us" className="text-[#003049] text-base font-normal transition-colors" style={{ fontFamily: 'Poppins, sans-serif' }}>About Us</a>
              <button className="bg-[#003049] text-white px-4 sm:px-6 lg:px-10 py-1.5 sm:py-2 text-xs sm:text-sm rounded-md hover:bg-blue-800 transition-colors"  style={{ fontFamily: 'Poppins'}}>
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-white py-2 sm:py-3 lg:py-4 relative">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left Section - Text Content */}
          <div className="w-full lg:w-1/2 px-4 sm:px-6 lg:pl-8 xl:pl-16 lg:pr-12">
            <div className="max-w-2xl space-y-2">
              {/* Top Tags */}
              <div className="flex items-center space-x-2 font-semibold text-sm text-[#08A0AF]">
                <span>For Schools</span>
                <span className="">|</span>
                <span>For Parents</span>
                <span className="">|</span>
                <span>For Pupils</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-[#003049] font-semibold leading-tight" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '54px', fontWeight: 600, letterSpacing: '1.08px' }}>
                Turning what schools teach into{' '}
                <span className="relative inline-block">
                  <img src="/images/consistent.jpg" alt="consistent" className="relative z-10 mb-1 inline-block h-[1.4em] align-middle" />
                </span>{' '}
                <span className="relative inline-block">
                  <span className="relative z-10">practical support at home</span>
                </span>
              </h1>

              {/* Descriptive Paragraph */}
              <p className="text-[#827E7E] font-normal leading-relaxed max-w-xl" style={{ fontFamily: 'Lato, sans-serif', fontSize: '18px', fontWeight: 400 }}>
                LinkEDtohome is a school-aligned parent support platform that helps schools reinforce safeguarding, wellbeing, and personal development beyond the classroom without increasing staff workload.
              </p>

              {/* Get Started Button */}
              <div className="pt-1">
                <button className="bg-[#003049] text-white px-12 py-3 rounded-md hover:bg-blue-800 transition-colors font-medium">
                  Get Started
                </button>
              </div>
            </div>
          </div>

          {/* Right Section - Image (Full Width) */}
          <div className="w-full lg:w-1/2 relative">
            <img 
              src="/images/linked1.png" 
              alt="Family reading together" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Reality Section */}
      <section className="relative max-w-7xl mx-auto min-h-[400px] mt-14 flex items-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center rounded-lg"
          style={{ backgroundImage: 'url(/images/linked2.png)' }}
        >
          
        </div>

        {/* Text Content Overlay */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl space-y-6">
            {/* Main Heading */}
            <h2 className="leading-tight" style={{ color: 'var(--deep-blue, #003049)', fontFamily: 'Poppins, sans-serif', fontSize: '32px', fontStyle: 'normal', fontWeight: 700 }}>
              The reality in schools today
            </h2>

            {/* Descriptive Paragraph */}
            <p className="leading-relaxed" style={{ color: 'var(--deep-blue, #003049)', fontFamily: 'Poppins, sans-serif', fontSize: '17px', fontStyle: 'normal', fontWeight: 500 }}>
              Schools teach vital topics. Parents want to support them. Pupils need consistent messages from the adults around them. Yet too often, the link between school and home is missing. Schools deliver high-quality PHSE and safeguarding education. Parents are expected to reinforce it often without clarity or confidence. Pupil voice is heard in school, but rarely connected to support at home. Everyone wants the same outcome. They just aren't supported to get there together.
            </p>
          </div>
        </div>
      </section>

      {/* New Section with linked3.png */}
      <section className="bg-white py-8 lg:py-6">
        <div className="max-w-7xl mx-auto">
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
      <section className="bg-white py-8 lg:py-12">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            {/* Main Title with Image */}
            <div className="flex justify-center">
              <img 
                src="/images/linked4.png" 
                alt="What is LinkEDtohome?" 
                className="h-[80px]"
              />
            </div>

            {/* Descriptive Paragraph */}
            <p className="max-w-4xl mx-auto" style={{ color: 'var(--Sub-text, #827E7E)', textAlign: 'center', fontFamily: 'Poppins, sans-serif', fontSize: '21px', fontStyle: 'normal', fontWeight: 500 }}>
              LinkEDtohome turns what schools teach into practical support at home. It ensures key messages around safeguarding, wellbeing, relationships, and growing up don't stop at the school gate
            </p>

            {/* Three-Column Feature Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-14 mt-16">
              {/* Schools Column */}
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 flex items-center justify-center">
                  <img 
                    src="/images/schoolicon.png" 
                    alt="Schools icon" 
                    className="w-16 h-16 object-contain"
                  />
                </div>
                <h3 style={{ color: 'var(--Black, #12141D)', textAlign: 'center', fontFamily: 'Poppins, sans-serif', fontSize: '21px', fontStyle: 'normal', fontWeight: 700 }}>Schools</h3>
                <p className="text-gray-600">Schools set priorities</p>
              </div>

              {/* Parents Column */}
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 flex items-center justify-center">
                  <img 
                    src="/images/parenticon.png" 
                    alt="Parents icon" 
                    className="w-16 h-16 object-contain"
                  />
                </div>
                <h3 style={{ color: 'var(--Black, #12141D)', textAlign: 'center', fontFamily: 'Poppins, sans-serif', fontSize: '21px', fontStyle: 'normal', fontWeight: 700 }}>Parents</h3>
                <p className="text-gray-600">Parents receive guidance that aligns</p>
              </div>

              {/* Pupils Column */}
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 flex items-center justify-center">
                  <img 
                    src="/images/pupilicon.png" 
                    alt="Pupils icon" 
                    className="w-16 h-16 object-contain"
                  />
                </div>
                <h3 style={{ color: 'var(--Black, #12141D)', textAlign: 'center', fontFamily: 'Poppins, sans-serif', fontSize: '21px', fontStyle: 'normal', fontWeight: 700 }}>Pupils</h3>
                <p className="text-gray-600">Pupils experience consistency</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Parents See Section */}
      <section className="bg-white pt-2 lg:pt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <img 
              src="/images/whatparents.png" 
              alt="What parents see" 
              className="w-full max-w-3xl h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* Explain It to Me Section */}
      <section className="bg-white py-6 lg:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Section - Smartphone Image */}
            <div className="w-full lg:w-4/7 flex justify-center ml-10 lg:justify-start">
              <img 
                src="/images/linked5.png" 
                alt="Explain It to Me app interface" 
                className="w-full max-w-md h-auto object-contain"
              />
            </div>

            {/* Right Section - Content */}
            <div className="w-full lg:w-3/7 space-y-6">
              {/* Icon */}
              <div className="flex items-start">
                <div className="w-12 h-12 bg-[#003049] rounded-full flex items-center justify-center flex-shrink-0">
                  <img 
                    src="/images/tvicon.png" 
                    alt="Presentation icon" 
                    className="w-10 h-10 object-contain"
                  />
                </div>
              </div>

              {/* Title with Sparkle Icon */}
              <div className="flex items-center gap-3">
                <h2 style={{ color: 'var(--deep-blue, #003049)', fontFamily: 'Poppins, sans-serif', fontSize: '32px', fontStyle: 'normal', fontWeight: 600 }}>
                  Explain It to Me
                </h2>
                
              </div>

              {/* Tagline */}
              <div className="flex items-center gap-3">
                <img 
                  src="/images/staricon.png" 
                  alt="Sparkle icon" 
                  className="w-6 h-6 flex-shrink-0"
                />
                <p className="leading-relaxed max-w-xl" style={{ color: 'var(--deep-blue, #003049)', fontFamily: 'Poppins, sans-serif', fontSize: '18px', fontStyle: 'normal', fontWeight: 400 }}>
                  Plain-English answers to the questions parents actually ask aligned to school learning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Development in 60 Section */}
      <section className="bg-white py-6 lg:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Section - Content */}
            <div className="w-full lg:w-1/2 space-y-6">
              {/* Icon */}
              <div className="flex items-start">
                <div className="w-16 h-16 rounded-lg flex items-center justify-center flex-shrink-0">
                  <img 
                    src="/images/galleryicon.png" 
                    alt="Gallery icon" 
                    className="w-12 h-12 object-contain"
                  />
                </div>
              </div>

              {/* Title */}
              <h2 style={{ color: 'var(--deep-blue, #003049)', fontFamily: 'Poppins, sans-serif', fontSize: '32px', fontStyle: 'normal', fontWeight: 600 }}>
                Personal Development in 60
              </h2>

            
              {/* Second Paragraph with Sparkle Icon */}
              <div className="flex items-start gap-3">
                <img 
                  src="/images/staricon.png" 
                  alt="Sparkle icon" 
                  className="w-6 h-6 flex-shrink-0 mt-1"
                />
                <p className="leading-relaxed" style={{ color: 'var(--deep-blue, #003049)', fontFamily: 'Poppins, sans-serif', fontSize: '18px', fontStyle: 'normal', fontWeight: 400 }}>
                Clear, school-aligned guidance in just 60 seconds.    <br/>    Turning personal development themes taught in school (such as relationships, wellbeing, online safety and <br/> growing up) into calm, practical support at home.
                </p>
              </div>
            </div>

            {/* Right Section - Smartphone Image */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
              <img 
                src="/images/linked6.png" 
                alt="Personal Development in 60 app interface" 
                className="w-full max-w-md h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Parent Toolkit Section */}
      <section className="bg-white py-6 lg:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Section - Smartphone Image */}
            <div className="w-full lg:w-4/7 flex justify-center lg:justify-start">
              <img 
                src="/images/linked7.png" 
                alt="Parent Toolkit app interface" 
                className="w-full max-w-md h-auto object-contain"
              />
            </div>

            {/* Right Section - Content */}
            <div className="w-full lg:w-3/7 space-y-6">
              {/* Icon */}
              <div className="flex items-start">
                <div className="w-12 h-12 bg-[#003049] rounded-full flex items-center justify-center flex-shrink-0">
                  <img 
                    src="/images/bagicon.png" 
                    alt="Briefcase icon" 
                    className="w-10 h-10 object-contain"
                  />
                </div>
              </div>

              {/* Title */}
              <h2 style={{ color: 'var(--deep-blue, #003049)', fontFamily: 'Poppins, sans-serif', fontSize: '32px', fontStyle: 'normal', fontWeight: 600 }}>
                Parent toolkit
              </h2>

              {/* Paragraph with Sparkle Icon */}
              <div className="flex items-start gap-3">
                <img 
                  src="/images/staricon.png" 
                  alt="Sparkle icon" 
                  className="w-6 h-6 flex-shrink-0 mt-1"
                />
                <p className="leading-relaxed" style={{ color: 'var(--deep-blue, #003049)', fontFamily: 'Poppins, sans-serif', fontSize: '18px', fontStyle: 'normal', fontWeight: 400 }}>
                  Conversation starters, reassurance, and practical next <br/> steps without judgement. Parents don't disengage <br/> because they don't care. They disengage because they feel unsure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contextual Safeguarding Alerts Section */}
      <section className="bg-white py-8 lg:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Section - Content */}
            <div className="w-full lg:w-1/2 space-y-6">
              {/* Icon */}
              <div className="flex items-start">
                <div className="w-12 h-12 bg-[#003049] rounded-full flex items-center justify-center flex-shrink-0">
                  <img 
                    src="/images/ringicon.png.png" 
                    alt="Ring/Bell icon" 
                    className="w-10 h-10 object-contain"
                  />
                </div>
              </div>

              {/* Title */}
              <h2 style={{ color: 'var(--deep-blue, #003049)', fontFamily: 'Poppins, sans-serif', fontSize: '32px', fontStyle: 'normal', fontWeight: 600 }}>
                Contextual safeguarding alerts
              </h2>

              {/* Paragraph with Sparkle Icon */}
              <div className="flex items-start gap-3">
                <img 
                  src="/images/staricon.png" 
                  alt="Sparkle icon" 
                  className="w-6 h-6 flex-shrink-0 mt-1"
                />
                <p className="leading-relaxed" style={{ color: 'var(--deep-blue, #003049)', fontFamily: 'Poppins, sans-serif', fontSize: '18px', fontStyle: 'normal', fontWeight: 400 }}>
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

      {/* Grounded in Real Pupil Voice Section */}
      <section className="bg-white py-4 lg:py-8">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {/* Title/Subtitle Section */}
            <div className="flex justify-center">
              <img 
                src="/images/grounded.png" 
                alt="Grounded in real pupil voice" 
                className="w-full max-w-xl h-auto object-contain"
              />
            </div>
               <p className="text-center" style={{ color: 'var(--Sub-text, #827E7E)', fontFamily: 'Poppins, sans-serif', fontSize: '20px', fontStyle: 'normal', fontWeight: 500 }}>LinkEDtohome works in partnership with VotesforSchools</p>
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
      <section className="bg-white pt-4 lg:pt-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="space-y-4">
            {/* Title Section */}
            <div className="flex justify-center">
              <img 
                src="/images/schoolgains.png" 
                alt="What schools gain?" 
                className="w-[400px] h-auto object-contain"
              />
            </div>

            {/* Subtitle Paragraph */}
            <p
              className="text-center"
              style={{
                color: 'var(--Sub-text, #827E7E)',
                fontFamily: 'Poppins, sans-serif',
                fontSize: '20px',
                fontStyle: 'normal',
                fontWeight: 500,
              }}
            >
              This is capacity-building, not extra work.
            </p>

            {/* Six Images Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12">
              <img 
                src="/images/li.png" 
                alt="Card 1" 
                className="w-full h-auto object-contain"
              />
              <img 
                src="/images/li1.png" 
                alt="Card 2" 
                className="w-full h-auto object-contain"
              />
              <img 
                src="/images/li2.png" 
                alt="Card 3" 
                className="w-full h-auto object-contain"
              />
              <img 
                src="/images/li3.png" 
                alt="Card 4" 
                className="w-full h-auto object-contain"
              />
              <img 
                src="/images/li4.png" 
                alt="Card 5" 
                className="w-full h-auto object-contain"
              />
              <img 
                src="/images/li5.png" 
                alt="Card 6" 
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="bg-white">
        <div className="max-w-xl mx-auto">
          <div className="flex justify-center">
            <img 
              src="/images/whyimage.png" 
              alt="Why section" 
              className="w-[200px] h-[200px] object-contain"
            />
          </div>
        </div>
      </section>

      {/* Concerns Section */}
      <section className="bg-white py-10 lg:py-4">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            {/* Left Section - Images */}
            <div className="w-full flex justify-center lg:justify-center">
              <img 
                src="/images/gimages.png" 
                alt="Family images" 
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Right Section - Content */}
            <div className="w-full space-y-[70px] ml-32">
              {/* Bulleted List */}
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <img src="/images/tick-circle.png" alt="Checkmark" className="w-6 h-6 flex-shrink-0 mt-1 object-contain" />
                  <span
                    style={{
                      color: '#606060',
                      fontFamily: 'Open Sans, sans-serif',
                      fontSize: '22px',
                      fontStyle: 'normal',
                      fontWeight: 600
                    }}
                  >
                    Safeguarding concerns are increasing.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <img src="/images/tick-circle.png" alt="Checkmark" className="w-6 h-6 flex-shrink-0 mt-1 object-contain" />
                  <span
                    style={{
                      color: '#606060',
                      fontFamily: 'Open Sans, sans-serif',
                      fontSize: '22px',
                      fontStyle: 'normal',
                      fontWeight: 600,
                    }}
                  >
                    Parents are more anxious than ever.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <img src="/images/tick-circle.png" alt="Checkmark" className="w-6 h-6 flex-shrink-0 mt-1 object-contain" />
                  <span
                    style={{
                      color: '#606060',
                      fontFamily: 'Open Sans, sans-serif',
                      fontSize: '22px',
                      fontStyle: 'normal',
                      fontWeight: 600,
                    }}
                  >
                    Schools are under pressure to evidence impact beyond lessons.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <img src="/images/tick-circle.png" alt="Checkmark" className="w-6 h-6 flex-shrink-0 mt-1 object-contain" />
                  <span
                    style={{
                      color: '#606060',
                      fontFamily: 'Open Sans, sans-serif',
                      fontSize: '22px',
                      fontStyle: 'normal',
                      fontWeight: 600,
                    }}
                  >
                    AI is already in homes just not safely aligned to <br /> schools
                  </span>
                </li>
              </ul>

              {/* Get Started Button */}
              <div className="pt-4">
                <button className="bg-[#003049] text-white px-12 py-3 rounded-md hover:bg-blue-800 transition-colors font-medium">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join LinkEDtohome Section */}
      <section className="bg-white pt-20 lg:pt-28">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Section - Image */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-center">
              <img 
                src="/images/Visuals.png" 
                alt="LinkEDtohome platform visual" 
                className="w-full max-w-md h-auto object-contain"
              />
            </div>

            {/* Right Section - Content */}
            <div className="w-full lg:w-1/2 space-y-6">
              {/* Main Headline */}
              <h2 style={{ color: 'var(--deep-blue, #003049)', fontFamily: 'Poppins, sans-serif', fontSize: '40px', fontStyle: 'normal', fontWeight: 700 }}>
                Join LinkEDtohome platform today!
              </h2>

              {/* Description */}
              <p className="leading-relaxed" style={{ color: 'var(--Sub-text, #827E7E)', fontFamily: 'Poppins, sans-serif', fontSize: '17px', fontStyle: 'normal', fontWeight: 400 }}>
                LinkEDtohome turns school expertise into everyday parent confidence so pupils hear the same message, wherever they are.
              </p>

              {/* Get Started Button */}
              <div className="pt-4">
                <button className="bg-[#003049] text-white px-12 py-3 rounded-md hover:bg-blue-800 transition-colors font-medium">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Section */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            {/* Logo */}
            <div className="mb-4 md:mb-0">
              <img 
                src="/images/linkedlogo11.png" 
                alt="LinkED to Home" 
                className="h-16 object-contain"
              />
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center gap-4">
              <a href="#" className="rounded-full flex items-center justify-center transition-colors">
                <img src="/images/Linkedin.png" alt="LinkedIn" className="w-8 h-8 object-contain" />
              </a>
              <a href="#" className="rounded-full flex items-center justify-center transition-colors">
                <img src="/images/twitter12.png" alt="Twitter" className="w-8 h-8 object-contain" />
              </a>
              <a href="#" className="rounded-full flex items-center justify-center hover:bg-[#06a0af] transition-colors">
                <img src="/images/fb12.png" alt="Facebook" className="w-8 h-8 object-contain" />
              </a>
              <a href="#" className="rounded-full flex items-center justify-center hover:bg-[#06a0af] transition-colors">
                <img src="/images/insta.png" alt="Instagram" className="w-8 h-8 object-contain" />
              </a>
            </div>
          </div>

          {/* Divider Line */}
          <div className="border-t border-[#003049] my-8"></div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright */}
            <div className="mb-4 md:mb-0">
              <p style={{ color: 'var(--deep-blue, #003049)', fontFamily: 'Poppins, sans-serif', fontSize: '14px', fontStyle: 'normal', fontWeight: 400 }}>
                © 2025 LinkED to Home. All rights reserved.
              </p>
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-[#003049] transition-colors" style={{ color: 'var(--deep-blue, #003049)', fontFamily: 'Poppins, sans-serif', fontSize: '14px', fontStyle: 'normal', fontWeight: 400 }}>
                Privacy Policy
              </a>
              <a href="#" className="hover:text-[#003049] transition-colors" style={{ color: 'var(--deep-blue, #003049)', fontFamily: 'Poppins, sans-serif', fontSize: '14px', fontStyle: 'normal', fontWeight: 400 }}>
                Terms of Service
              </a>
              <a href="#" className="hover:text-[#003049] transition-colors" style={{ color: 'var(--deep-blue, #003049)', fontFamily: 'Poppins, sans-serif', fontSize: '14px', fontStyle: 'normal', fontWeight: 400 }}>
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
