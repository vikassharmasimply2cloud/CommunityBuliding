import { type Community } from "../types";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { X, Users, MapPin, Calendar, Phone, Mail, Globe } from "lucide-react";

interface CommunityModalProps {
  community: Community | null;
  isOpen: boolean;
  onClose: () => void;
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

export default function CommunityModal({ community, isOpen, onClose }: CommunityModalProps) {
  if (!isOpen || !community) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-gray-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-200 dark:border-gray-700">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
              {community.name}
            </h2>
            <Badge className={`text-xs font-medium ${getCategoryColor(community.category)}`}>
              {getCategoryLabel(community.category)}
            </Badge>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="h-8 w-8"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* Content */}
        <div className="p-6">
          {community.imageUrl && (
            <img 
              src={community.imageUrl} 
              alt={community.name}
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-3">About</h3>
              <p className="text-slate-600 dark:text-gray-300 leading-relaxed">
                {community.description}
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-3">Details</h3>
              
              <div className="space-y-3">
                <div className="flex items-center text-slate-600 dark:text-gray-400">
                  <MapPin className="h-5 w-5 mr-3 flex-shrink-0" />
                  <span>{getLocationLabel(community.location)}</span>
                </div>
                
                <div className="flex items-center text-slate-600 dark:text-gray-400">
                  <Calendar className="h-5 w-5 mr-3 flex-shrink-0" />
                  <span>{community.meetingTime}</span>
                </div>
                
                <div className="flex items-center text-slate-600 dark:text-gray-400">
                  <Users className="h-5 w-5 mr-3 flex-shrink-0" />
                  <span>{community.memberCount} members</span>
                </div>

                {community.contactEmail && (
                  <div className="flex items-center text-slate-600 dark:text-gray-400">
                    <Mail className="h-5 w-5 mr-3 flex-shrink-0" />
                    <a href={`mailto:${community.contactEmail}`} className="hover:text-blue-600">
                      {community.contactEmail}
                    </a>
                  </div>
                )}

                {community.contactPhone && (
                  <div className="flex items-center text-slate-600 dark:text-gray-400">
                    <Phone className="h-5 w-5 mr-3 flex-shrink-0" />
                    <a href={`tel:${community.contactPhone}`} className="hover:text-blue-600">
                      {community.contactPhone}
                    </a>
                  </div>
                )}

                {community.website && (
                  <div className="flex items-center text-slate-600 dark:text-gray-400">
                    <Globe className="h-5 w-5 mr-3 flex-shrink-0" />
                    <a 
                      href={community.website} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="hover:text-blue-600"
                    >
                      Visit Website
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="flex gap-3 pt-4 border-t border-slate-200 dark:border-gray-700">
            {community.contactEmail && (
              <Button asChild>
                <a href={`mailto:${community.contactEmail}?subject=Interest in ${community.name}`}>
                  Get In Touch
                </a>
              </Button>
            )}
            {community.website && (
              <Button variant="outline" asChild>
                <a href={community.website} target="_blank" rel="noopener noreferrer">
                  Learn More
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}