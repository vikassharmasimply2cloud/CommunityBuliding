import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Search } from "lucide-react";

interface SearchFiltersProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  categoryFilter: string;
  onCategoryChange: (value: string) => void;
  locationFilter: string;
  onLocationChange: (value: string) => void;
}

export default function SearchFilters({
  searchQuery,
  onSearchChange,
  categoryFilter,
  onCategoryChange,
  locationFilter,
  onLocationChange,
}: SearchFiltersProps) {
  return (
    <section className="bg-white dark:bg-gray-800 border-b border-slate-200 dark:border-gray-700 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-4 items-center">
          {/* Search Bar */}
          <div className="flex-1 w-full lg:w-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Search communities by name or description..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="pl-10 py-3 w-full"
              />
            </div>
          </div>
          
          {/* Filters */}
          <div className="flex flex-wrap gap-3">
            {/* Category Filter */}
            <Select value={categoryFilter} onValueChange={onCategoryChange}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="sports">Sports & Recreation</SelectItem>
                <SelectItem value="hobbies">Hobbies & Interests</SelectItem>
                <SelectItem value="professional">Professional</SelectItem>
                <SelectItem value="volunteer">Volunteer</SelectItem>
                <SelectItem value="arts">Arts & Culture</SelectItem>
                <SelectItem value="social">Social</SelectItem>
              </SelectContent>
            </Select>
            
            {/* Location Filter */}
            <Select value={locationFilter} onValueChange={onLocationChange}>
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="All Locations" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Locations</SelectItem>
                <SelectItem value="downtown">Downtown</SelectItem>
                <SelectItem value="northside">Northside</SelectItem>
                <SelectItem value="southside">Southside</SelectItem>
                <SelectItem value="eastside">Eastside</SelectItem>
                <SelectItem value="westside">Westside</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </section>
  );
}