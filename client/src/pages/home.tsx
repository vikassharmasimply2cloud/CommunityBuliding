import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { type Community } from "@shared/schema";
import Header from "../components/header";
import HeroSection from "../components/hero-section";
import SearchFilters from "../components/search-filters";
import CommunityCard from "../components/community-card";
import Footer from "../components/footer";
import { Skeleton } from "@/components/ui/skeleton";
import { Search } from "lucide-react";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [locationFilter, setLocationFilter] = useState("all");

  const { data: communities = [], isLoading } = useQuery<Community[]>({
    queryKey: ['/api/communities/search', searchQuery, categoryFilter, locationFilter],
    queryFn: async () => {
      const params = new URLSearchParams();
      if (searchQuery) params.append('q', searchQuery);
      if (categoryFilter && categoryFilter !== 'all') params.append('category', categoryFilter);
      if (locationFilter && locationFilter !== 'all') params.append('location', locationFilter);
      
      const response = await fetch(`/api/communities/search?${params.toString()}`);
      if (!response.ok) throw new Error('Failed to fetch communities');
      return response.json();
    },
  });

  const clearFilters = () => {
    setSearchQuery("");
    setCategoryFilter("all");
    setLocationFilter("all");
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <HeroSection />
      <SearchFilters
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        categoryFilter={categoryFilter}
        onCategoryChange={setCategoryFilter}
        locationFilter={locationFilter}
        onLocationChange={setLocationFilter}
      />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Results Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h3 className="text-2xl font-semibold text-slate-800">
              {isLoading ? 'Loading...' : `${communities.length} Communities Found`}
            </h3>
            <p className="text-slate-600 mt-1">Showing results for your area</p>
          </div>
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                <Skeleton className="h-48 w-full mb-4" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-3 w-3/4 mb-4" />
                <Skeleton className="h-3 w-1/2" />
              </div>
            ))}
          </div>
        )}

        {/* Communities Grid */}
        {!isLoading && communities.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {communities.map((community) => (
              <CommunityCard key={community.id} community={community} />
            ))}
          </div>
        )}

        {/* Empty State */}
        {!isLoading && communities.length === 0 && (
          <div className="text-center py-12">
            <Search className="mx-auto h-12 w-12 text-slate-300 mb-4" />
            <h3 className="text-xl font-semibold text-slate-600 mb-2">No communities found</h3>
            <p className="text-slate-500 mb-6">Try adjusting your search or filters to find more communities.</p>
            <button 
              onClick={clearFilters}
              className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
