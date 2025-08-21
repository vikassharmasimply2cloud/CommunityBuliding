import { useQuery } from "@tanstack/react-query";
import { useRoute } from "wouter";
import { type Community } from "@shared/schema";
import Header from "../components/header";
import Footer from "../components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Users, MapPin, Calendar, Mail, Phone, Globe, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function CommunityDetail() {
  const [match, params] = useRoute("/community/:id");
  const communityId = params?.id;

  const { data: community, isLoading, error } = useQuery<Community>({
    queryKey: ['/api/communities', communityId],
    enabled: !!communityId,
  });

  if (error) {
    return (
      <div className="min-h-screen bg-slate-50">
        <Header />
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <h1 className="text-2xl font-bold text-slate-800 mb-2">Community Not Found</h1>
                <p className="text-slate-600 mb-4">The community you're looking for doesn't exist.</p>
                <Link href="/">
                  <Button>
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Communities
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link href="/">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Communities
          </Button>
        </Link>

        {isLoading ? (
          <div className="space-y-6">
            <Skeleton className="h-64 w-full rounded-xl" />
            <Skeleton className="h-8 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-2/3" />
          </div>
        ) : community ? (
          <div className="space-y-6">
            {/* Hero Image */}
            {community.imageUrl && (
              <div className="relative h-64 rounded-xl overflow-hidden">
                <img 
                  src={community.imageUrl} 
                  alt={community.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20" />
              </div>
            )}

            {/* Community Info */}
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-3xl font-bold text-slate-800 mb-2">
                      {community.name}
                    </CardTitle>
                    <Badge variant="secondary" className="mb-4">
                      {community.category.charAt(0).toUpperCase() + community.category.slice(1)}
                    </Badge>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center text-slate-600 mb-1">
                      <Users className="h-4 w-4 mr-1" />
                      <span className="font-medium">{community.memberCount} members</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 text-lg leading-relaxed mb-6">
                  {community.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Meeting Info */}
                  <div className="space-y-4">
                    <h4 className="font-semibold text-slate-800">Meeting Details</h4>
                    <div className="space-y-3">
                      <div className="flex items-center text-slate-600">
                        <MapPin className="h-4 w-4 mr-3 text-slate-400" />
                        <span>{community.location.charAt(0).toUpperCase() + community.location.slice(1)} Area</span>
                      </div>
                      <div className="flex items-center text-slate-600">
                        <Calendar className="h-4 w-4 mr-3 text-slate-400" />
                        <span>{community.meetingTime}</span>
                      </div>
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="space-y-4">
                    <h4 className="font-semibold text-slate-800">Contact Information</h4>
                    <div className="space-y-3">
                      {community.contactEmail && (
                        <div className="flex items-center text-slate-600">
                          <Mail className="h-4 w-4 mr-3 text-slate-400" />
                          <a href={`mailto:${community.contactEmail}`} className="hover:text-primary transition-colors">
                            {community.contactEmail}
                          </a>
                        </div>
                      )}
                      {community.contactPhone && (
                        <div className="flex items-center text-slate-600">
                          <Phone className="h-4 w-4 mr-3 text-slate-400" />
                          <a href={`tel:${community.contactPhone}`} className="hover:text-primary transition-colors">
                            {community.contactPhone}
                          </a>
                        </div>
                      )}
                      {community.website && (
                        <div className="flex items-center text-slate-600">
                          <Globe className="h-4 w-4 mr-3 text-slate-400" />
                          <a 
                            href={community.website} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hover:text-primary transition-colors"
                          >
                            Visit Website
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-200">
                  <div className="flex gap-4">
                    <Button size="lg" className="flex-1">
                      Join Community
                    </Button>
                    <Button variant="outline" size="lg">
                      Contact Organizer
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        ) : null}
      </main>

      <Footer />
    </div>
  );
}
