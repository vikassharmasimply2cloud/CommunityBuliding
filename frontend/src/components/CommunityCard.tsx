import { type Community } from "../types";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Users, MapPin, Calendar } from "lucide-react";

interface CommunityCardProps {
  community: Community;
  onViewDetails: (community: Community) => void;
}

const getCategoryColor = (category: string) => {
  switch (category) {
    case "arts":
      return "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300";
    case "sports":
      return "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300";
    case "professional":
      return "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300";
    case "volunteer":
      return "bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300";
    case "hobbies":
      return "bg-pink-100 text-pink-700 dark:bg-pink-900 dark:text-pink-300";
    case "social":
      return "bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300";
    default:
      return "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300";
  }
};

const getCategoryLabel = (category: string) => {
  switch (category) {
    case "arts":
      return "Arts & Culture";
    case "sports":
      return "Sports & Recreation";
    case "professional":
      return "Professional";
    case "volunteer":
      return "Volunteer";
    case "hobbies":
      return "Hobbies & Interests";
    case "social":
      return "Social";
    default:
      return category;
  }
};

const getLocationLabel = (location: string) => {
  return location.charAt(0).toUpperCase() + location.slice(1);
};

export default function CommunityCard({ community, onViewDetails }: CommunityCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-slate-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-200 overflow-hidden">
      {community.imageUrl && (
        <img 
          src={community.imageUrl} 
          alt={community.name}
          className="w-full h-48 object-cover"
        />
      )}
      
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h4 className="text-xl font-semibold text-slate-800 dark:text-white flex-1">
            {community.name}
          </h4>
          <Badge className={`ml-2 text-xs font-medium ${getCategoryColor(community.category)}`}>
            {getCategoryLabel(community.category)}
          </Badge>
        </div>
        
        <p className="text-slate-600 dark:text-gray-300 mb-4 line-clamp-3">
          {community.description}
        </p>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-slate-600 dark:text-gray-400">
            <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
            <span>{getLocationLabel(community.location)}</span>
          </div>
          
          <div className="flex items-center text-sm text-slate-600 dark:text-gray-400">
            <Calendar className="h-4 w-4 mr-2 flex-shrink-0" />
            <span>{community.meetingTime}</span>
          </div>
          
          <div className="flex items-center text-sm text-slate-600 dark:text-gray-400">
            <Users className="h-4 w-4 mr-2 flex-shrink-0" />
            <span>{community.memberCount} members</span>
          </div>
        </div>
        
        <div className="flex gap-2">
          <Button 
            onClick={() => onViewDetails(community)}
            className="flex-1"
          >
            View Details
          </Button>
        </div>
      </div>
    </div>
  );
}