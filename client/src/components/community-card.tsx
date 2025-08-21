import { type Community } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, MapPin, Calendar, Bookmark } from "lucide-react";
import { Link } from "wouter";

interface CommunityCardProps {
  community: Community;
}

const getCategoryColor = (category: string) => {
  switch (category) {
    case "arts":
      return "bg-purple-100 text-purple-700";
    case "sports":
      return "bg-green-100 text-green-700";
    case "professional":
      return "bg-blue-100 text-blue-700";
    case "volunteer":
      return "bg-amber-100 text-amber-700";
    case "hobbies":
      return "bg-pink-100 text-pink-700";
    case "social":
      return "bg-indigo-100 text-indigo-700";
    default:
      return "bg-gray-100 text-gray-700";
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

export default function CommunityCard({ community }: CommunityCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 hover:shadow-lg transition-shadow duration-200 overflow-hidden">
      {community.imageUrl && (
        <img 
          src={community.imageUrl} 
          alt={community.name}
          className="w-full h-48 object-cover"
        />
      )}
      
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h4 className="text-xl font-semibold text-slate-800 flex-1">
            {community.name}
          </h4>
          <Badge className={`ml-2 text-xs font-medium ${getCategoryColor(community.category)}`}>
            {getCategoryLabel(community.category)}
          </Badge>
        </div>
        
        <p className="text-slate-600 mb-4 line-clamp-3">
          {community.description}
        </p>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-slate-600">
            <Users className="h-4 w-4 mr-2 text-slate-400" />
            <span>{community.memberCount} members</span>
          </div>
          <div className="flex items-center text-sm text-slate-600">
            <MapPin className="h-4 w-4 mr-2 text-slate-400" />
            <span>{community.location.charAt(0).toUpperCase() + community.location.slice(1)} Area</span>
          </div>
          <div className="flex items-center text-sm text-slate-600">
            <Calendar className="h-4 w-4 mr-2 text-slate-400" />
            <span>{community.meetingTime}</span>
          </div>
        </div>
        
        <div className="flex gap-2">
          <Link href={`/community/${community.id}`}>
            <Button className="flex-1 bg-primary text-white hover:bg-blue-700 text-sm font-medium">
              View Details
            </Button>
          </Link>
          <Button variant="outline" size="icon">
            <Bookmark className="h-4 w-4 text-slate-400" />
          </Button>
        </div>
      </div>
    </div>
  );
}
