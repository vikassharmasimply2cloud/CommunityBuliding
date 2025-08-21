import { useState, useMemo, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import SearchFilters from './components/SearchFilters';
import CommunityCard from './components/CommunityCard';
import CommunityModal from './components/CommunityModal';
import { type Community } from './types';
import { mockCommunities } from './data/communities';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [locationFilter, setLocationFilter] = useState("all");
  const [selectedCommunity, setSelectedCommunity] = useState<Community | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Initialize dark mode from localStorage or system preference
  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldUseDarkMode = savedDarkMode ? JSON.parse(savedDarkMode) : systemPrefersDark;
    
    setDarkMode(shouldUseDarkMode);
  }, []);

  // Update document class and localStorage when dark mode changes
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Filter communities based on search and filters
  const filteredCommunities = useMemo(() => {
    return mockCommunities.filter(community => {
      const matchesSearch = searchQuery === "" || 
        community.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        community.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = categoryFilter === "all" || community.category === categoryFilter;
      const matchesLocation = locationFilter === "all" || community.location === locationFilter;
      
      return matchesSearch && matchesCategory && matchesLocation;
    });
  }, [searchQuery, categoryFilter, locationFilter]);

  const handleViewDetails = (community: Community) => {
    setSelectedCommunity(community);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCommunity(null);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-gray-900 transition-colors duration-200">
      <Header darkMode={darkMode} onToggleDarkMode={toggleDarkMode} />
      <HeroSection />
      <SearchFilters
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        categoryFilter={categoryFilter}
        onCategoryChange={setCategoryFilter}
        locationFilter={locationFilter}
        onLocationChange={setLocationFilter}
      />
      
      <main id="communities" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Results Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h3 className="text-2xl font-semibold text-slate-800 dark:text-white">
              {filteredCommunities.length} Communities Found
            </h3>
            <p className="text-slate-600 dark:text-gray-400 mt-1">
              Showing results for your area
            </p>
          </div>
        </div>

        {/* Empty State */}
        {filteredCommunities.length === 0 && (
          <div className="text-center py-12">
            <div className="text-slate-400 dark:text-gray-500 mb-4">
              <svg className="mx-auto h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 48 48">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 13l6 6m0-6l-6 6" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-slate-800 dark:text-white mb-1">
              No communities found
            </h3>
            <p className="text-slate-600 dark:text-gray-400">
              Try adjusting your search terms or filters to find more results.
            </p>
          </div>
        )}

        {/* Communities Grid */}
        {filteredCommunities.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCommunities.map((community) => (
              <CommunityCard
                key={community.id}
                community={community}
                onViewDetails={handleViewDetails}
              />
            ))}
          </div>
        )}
      </main>

      {/* Community Detail Modal */}
      <CommunityModal
        community={selectedCommunity}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 border-t border-slate-200 dark:border-gray-700 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">
              CommunityHub
            </h3>
            <p className="text-slate-600 dark:text-gray-400 mb-4">
              Connecting communities, one group at a time.
            </p>
            <p className="text-sm text-slate-500 dark:text-gray-500">
              © 2025 CommunityHub. Built with React and TypeScript.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;