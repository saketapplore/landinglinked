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
    </div>
  );
}

export default App;
