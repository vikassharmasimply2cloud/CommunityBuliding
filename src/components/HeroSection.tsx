export default function HeroSection() {
  const scrollToCommunities = () => {
    const element = document.getElementById('communities');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 dark:text-white mb-6">
          Discover Your
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {" "}Community
          </span>
        </h1>
        
        <p className="text-xl text-slate-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
          Connect with like-minded people in your area. Find local groups, clubs, and organizations
          that share your interests and passions.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={scrollToCommunities}
            className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            Browse Communities
          </button>
          <a
            href="#about"
            className="px-8 py-3 border border-slate-300 dark:border-gray-600 text-slate-700 dark:text-gray-300 font-semibold rounded-lg hover:bg-slate-50 dark:hover:bg-gray-700 transition-colors duration-200"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}