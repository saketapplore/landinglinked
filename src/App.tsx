function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 items-center h-16">
            {/* Logo */}
            <div className="flex items-center justify-start">
              <img 
                src="/images/linkedlogo11.png" 
                alt="LinkED to home" 
                className="h-14 object-fill"
              />
            </div>
            {/* Navigation Links - Centered */}
            <div className="hidden md:flex space-x-8 items-center justify-center">
              <a href="#home" className="text-gray-700 hover:text-gray-900 transition-colors">Home</a>
              <a href="#for-school" className="text-gray-700 hover:text-gray-900 transition-colors">For school</a>
              <a href="#for-parents" className="text-gray-700 hover:text-gray-900 transition-colors">For parents</a>
              <a href="#about-us" className="text-gray-700 hover:text-gray-900 transition-colors">About Us</a>
            </div>
            {/* Get Started Button */}
            <div className="flex items-center justify-end">
              <button className="bg-[#003049] text-white px-6 py-2 rounded-md hover:bg-blue-800 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-white py-16 lg:py-24 relative">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left Section - Text Content */}
          <div className="w-full lg:w-1/2 px-4 sm:px-6 lg:pl-8 xl:pl-16 lg:pr-12">
            <div className="max-w-2xl space-y-6">
              {/* Top Tags */}
              <div className="flex items-center space-x-2 text-sm text-[#08A0AF]">
                <span>For Schools</span>
                <span className="text-gray-300">|</span>
                <span>For Parents</span>
                <span className="text-gray-300">|</span>
                <span>For Pupils</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#003049] leading-tight">
                Turning what schools teach into{' '}
                <span className="relative inline-block">
                  <span className="relative z-10">consistent,</span>
                  <span className="absolute bottom-2 left-0 right-0 h-3 bg-[#FFE5D9] -z-0"></span>
                </span>{' '}
                <span className="relative inline-block">
                  <span className="relative z-10">practical support at home</span>
                </span>
              </h1>

              {/* Descriptive Paragraph */}
              <p className="text-lg text-[#827E7E] leading-relaxed max-w-xl">
                LinkEDtohome is a school-aligned parent support platform that helps schools reinforce safeguarding, wellbeing, and personal development beyond the classroom without increasing staff workload.
              </p>

              {/* Get Started Button */}
              <div className="pt-4">
                <button className="bg-[#003049] text-white px-8 py-3 rounded-md hover:bg-blue-800 transition-colors font-medium">
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
      <section className="relative max-w-7xl mx-auto min-h-[400px] flex items-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/linked2.png)' }}
        >
          
        </div>

        {/* Text Content Overlay */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl space-y-6">
            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-[#003049] leading-tight">
              The reality in schools today
            </h2>

            {/* Descriptive Paragraph */}
            <p className="text-lg text-[#003049] leading-relaxed">
              Schools teach vital topics. Parents want to support them. Pupils need consistent messages from the adults around them. Yet too often, the link between school and home is missing. Schools deliver high-quality PHSE and safeguarding education. Parents are expected to reinforce it often without clarity or confidence. Pupil voice is heard in school, but rarely connected to support at home. Everyone wants the same outcome. They just aren't supported to get there together.
            </p>
          </div>
        </div>
      </section>

      {/* New Section with linked3.png */}
      <section className="bg-white py-16 lg:py-24">
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
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <p className="text-lg text-[#827E7E] max-w-2xl mx-auto leading-relaxed">
              LinkEDtohome turns what schools teach into practical support at home. It ensures key messages around safeguarding, wellbeing, relationships, and growing up don't stop at the school gate
            </p>

            {/* Three-Column Feature Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
              {/* Schools Column */}
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-24 h-24 flex items-center justify-center">
                  <img 
                    src="/images/schoolicon.png" 
                    alt="Schools icon" 
                    className="w-16 h-16 object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Schools</h3>
                <p className="text-gray-600">Schools set priorities</p>
              </div>

              {/* Parents Column */}
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-24 h-24 flex items-center justify-center">
                  <img 
                    src="/images/parenticon.png" 
                    alt="Parents icon" 
                    className="w-16 h-16 object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Parents</h3>
                <p className="text-gray-600">Parents receive guidance that aligns</p>
              </div>

              {/* Pupils Column */}
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-24 h-24 flex items-center justify-center">
                  <img 
                    src="/images/pupilicon.png" 
                    alt="Pupils icon" 
                    className="w-16 h-16 object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Pupils</h3>
                <p className="text-gray-600">Pupils experience consistency</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explain It to Me Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Section - Smartphone Image */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
              <img 
                src="/images/linked5.png" 
                alt="Explain It to Me app interface" 
                className="w-full max-w-md h-auto object-contain"
              />
            </div>

            {/* Right Section - Content */}
            <div className="w-full lg:w-1/2 space-y-6">
              {/* Icon */}
              <div className="flex items-start">
                <div className="w-16 h-16 bg-[#003049] rounded-full flex items-center justify-center flex-shrink-0">
                  <img 
                    src="/images/tvicon.png" 
                    alt="Presentation icon" 
                    className="w-10 h-10 object-contain"
                  />
                </div>
              </div>

              {/* Title with Sparkle Icon */}
              <div className="flex items-center gap-3">
                <h2 className="text-4xl md:text-5xl font-bold text-[#003049]">
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
                <p className="text-lg text-[#827E7E] leading-relaxed max-w-xl">
                  Plain-English answers to the questions parents actually ask aligned to school learning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Development in 60 Section */}
      <section className="bg-white py-16 lg:py-24">
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
              <h2 className="text-4xl md:text-3xl font-bold text-[#003049]">
                Personal Development in 60
              </h2>

            
              {/* Second Paragraph with Sparkle Icon */}
              <div className="flex items-start gap-3">
                <img 
                  src="/images/staricon.png" 
                  alt="Sparkle icon" 
                  className="w-6 h-6 flex-shrink-0 mt-1"
                />
                <p className="text-lg text-[#827E7E] leading-relaxed">
                Clear, school-aligned guidance in just 60 seconds. Turning personal development themes taught in school (such as relationships, wellbeing, online safety and growing up) into calm, practical support at home.
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
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Section - Smartphone Image */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
              <img 
                src="/images/linked7.png" 
                alt="Parent Toolkit app interface" 
                className="w-full max-w-md h-auto object-contain"
              />
            </div>

            {/* Right Section - Content */}
            <div className="w-full lg:w-1/2 space-y-6">
              {/* Icon */}
              <div className="flex items-start">
                <div className="w-16 h-16 bg-[#003049] rounded-full flex items-center justify-center flex-shrink-0">
                  <img 
                    src="/images/bagicon.png" 
                    alt="Briefcase icon" 
                    className="w-10 h-10 object-contain"
                  />
                </div>
              </div>

              {/* Title */}
              <h2 className="text-4xl md:text-5xl font-bold text-[#003049]">
                Parent toolkit
              </h2>

              {/* Paragraph with Sparkle Icon */}
              <div className="flex items-start gap-3">
                <img 
                  src="/images/staricon.png" 
                  alt="Sparkle icon" 
                  className="w-6 h-6 flex-shrink-0 mt-1"
                />
                <p className="text-lg text-[#827E7E] leading-relaxed">
                  Conversation starters, reassurance, and practical next steps without judgement. Parents don't disengage because they don't care. They disengage because they feel unsure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contextual Safeguarding Alerts Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Section - Content */}
            <div className="w-full lg:w-1/2 space-y-6">
              {/* Icon */}
              <div className="flex items-start">
                <div className="w-16 h-16 bg-[#003049] rounded-full flex items-center justify-center flex-shrink-0">
                  <img 
                    src="/images/ringicon.png.png" 
                    alt="Ring/Bell icon" 
                    className="w-10 h-10 object-contain"
                  />
                </div>
              </div>

              {/* Title */}
              <h2 className="text-4xl md:text-5xl font-bold text-[#003049]">
                Contextual safeguarding alerts
              </h2>

              {/* Paragraph with Sparkle Icon */}
              <div className="flex items-start gap-3">
                <img 
                  src="/images/staricon.png" 
                  alt="Sparkle icon" 
                  className="w-6 h-6 flex-shrink-0 mt-1"
                />
                <p className="text-lg text-[#827E7E] leading-relaxed">
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
      <section className="bg-white py-16 lg:py-24">
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
               <p className="text-center text-[22px] text-[#827E7E]">LinkEDtohome works in partnership with VotesforSchools</p>
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
      <section className="bg-white py-16 lg:py-12">
        <div className="max-w-8xl mx-auto">
          <div className="space-y-8">
            {/* Title Section */}
            <div className="flex justify-center">
              <img 
                src="/images/schoolgains.png" 
                alt="What schools gain?" 
                className="w-full max-w-xl h-auto object-contain"
              />
            </div>

            {/* Subtitle Paragraph */}
            <p className="text-center text-lg text-[#827E7E]">
              This is capacity-building, not extra work.
            </p>

            {/* Six Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {/* Card 1 */}
              <div 
                className="relative p-10 rounded-lg bg-cover bg-center bg-no-repeat min-h-[200px] flex items-center"
                style={{ backgroundImage: 'url(/images/cart.png)' }}
              >
                <p className="text-gray-900 font-medium mt-16 text-lg relative z-10">
                  Stronger home-school alignment
                </p>
              </div>

              {/* Card 2 */}
              <div 
                className="relative p-10 rounded-lg bg-cover bg-center bg-no-repeat min-h-[200px] flex items-center"
                style={{ backgroundImage: 'url(/images/cart.png)' }}
              >
                <p className="text-gray-900 font-medium mt-12 text-lg relative z-10">
                  Earlier intervention and support
                </p>
              </div>

              {/* Card 3 */}
              <div 
                className="relative p-10 rounded-lg bg-cover bg-center bg-no-repeat min-h-[150px] flex items-center"
                style={{ backgroundImage: 'url(/images/cart.png)' }}
              >
                <p className="text-gray-900 font-medium mt-12 text-lg relative z-10">
                  Reduced pressure on staff
                </p>
              </div>

              {/* Card 4 */}
              <div 
                className="relative p-10 rounded-lg bg-cover bg-center bg-no-repeat min-h-[200px] flex items-center"
                style={{ backgroundImage: 'url(/images/cart.png)' }}
              >
                <p className="text-gray-900 font-medium mt-12 text-lg relative z-10">
                  Clear evidence of parent engagement
                </p>
              </div>

              {/* Card 5 */}
              <div 
                className="relative p-10 rounded-lg bg-cover bg-center bg-no-repeat min-h-[200px] flex items-center"
                style={{ backgroundImage: 'url(/images/cart.png)' }}
              >
                <p className="text-gray-900 font-medium mt-12 text-lg relative z-10">
                  Consistent safeguarding and wellbeing messages
                </p>
              </div>

              {/* Card 6 */}
              <div 
                className="relative p-10 rounded-lg bg-cover bg-center bg-no-repeat min-h-[200px] flex items-center"
                style={{ backgroundImage: 'url(/images/cart.png)' }}
              >
                <p className="text-gray-900 font-medium mt-12 text-lg relative z-10">
                  Confidence at inspection and review
                </p>
              </div>
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
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Section - Images */}
            <div className="w-full flex justify-center lg:justify-start">
              <img 
                src="/images/gimages.png" 
                alt="Family images" 
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Right Section - Content */}
            <div className="w-full space-y-[200px] ml-20">
              {/* Bulleted List */}
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-lg text-gray-700">Safeguarding concerns are increasing.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-lg text-gray-700">Parents are more anxious than ever.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-lg text-gray-700">Schools are under pressure to evidence impact beyond lessons.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-lg text-gray-700">AI is already in homes just not safely aligned to <br /> schools</span>
                </li>
              </ul>

              {/* Get Started Button */}
              <div className="pt-4">
                <button className="bg-[#003049] text-white px-8 py-3 rounded-md hover:bg-blue-800 transition-colors font-medium">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join LinkEDtohome Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Section - Image */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
              <img 
                src="/images/Visuals.png" 
                alt="LinkEDtohome platform visual" 
                className="w-full max-w-md h-auto object-contain"
              />
            </div>

            {/* Right Section - Content */}
            <div className="w-full lg:w-1/2 mr-40 space-y-6">
              {/* Main Headline */}
              <h2 className="text-4xl md:text-4xl font-bold text-[#003049]">
                Join LinkEDtohome platform today!
              </h2>

              {/* Description */}
              <p className="text-lg text-[#827E7E] leading-relaxed">
                LinkEDtohome turns school expertise into everyday parent confidence so pupils hear the same message, wherever they are.
              </p>

              {/* Get Started Button */}
              <div className="pt-4">
                <button className="bg-[#003049] text-white px-8 py-3 rounded-md hover:bg-blue-800 transition-colors font-medium">
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
          <div className="border-t border-[#08A0AF] my-8"></div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright */}
            <div className="mb-4 md:mb-0">
              <p className="text-gray-700 text-sm">
                © 2025 LinkED to Home. All rights reserved.
              </p>
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-6">
              <a href="#" className="text-gray-700 text-sm hover:text-[#003049] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-700 text-sm hover:text-[#003049] transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-700 text-sm hover:text-[#003049] transition-colors">
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
