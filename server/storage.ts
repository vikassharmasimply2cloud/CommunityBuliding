import { type User, type InsertUser, type Community, type InsertCommunity } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  getCommunities(): Promise<Community[]>;
  getCommunity(id: string): Promise<Community | undefined>;
  searchCommunities(query: string, category?: string, location?: string): Promise<Community[]>;
  createCommunity(community: InsertCommunity): Promise<Community>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private communities: Map<string, Community>;

  constructor() {
    this.users = new Map();
    this.communities = new Map();
    this.initializeCommunities();
  }

  private initializeCommunities() {
    const mockCommunities: InsertCommunity[] = [
      {
        name: "Downtown Photography Club",
        description: "Join fellow photography enthusiasts for weekly photo walks, workshops, and gallery showings. All skill levels welcome!",
        category: "arts",
        location: "downtown",
        meetingTime: "Saturdays 10:00 AM",
        memberCount: 245,
        contactEmail: "info@photoclub.com",
        contactPhone: "(555) 123-4567",
        website: "https://photoclub.com",
        imageUrl: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=800&h=300&fit=crop"
      },
      {
        name: "Morning Runners Club",
        description: "Start your day right with our friendly running group. We meet every weekday morning for runs through beautiful city parks.",
        category: "sports",
        location: "downtown",
        meetingTime: "Weekdays 6:30 AM",
        memberCount: 128,
        contactEmail: "contact@morningrunners.org",
        contactPhone: "(555) 234-5678",
        website: "https://morningrunners.org",
        imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=300&fit=crop"
      },
      {
        name: "Tech Professionals Network",
        description: "Connect with fellow tech professionals, share knowledge, and advance your career through monthly meetups and workshops.",
        category: "professional",
        location: "downtown",
        meetingTime: "First Thursday 6:00 PM",
        memberCount: 387,
        contactEmail: "hello@technetwork.com",
        contactPhone: "(555) 345-6789",
        website: "https://technetwork.com",
        imageUrl: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&h=300&fit=crop"
      },
      {
        name: "Community Kitchen Volunteers",
        description: "Make a difference in your community by helping prepare and serve meals to those in need. Flexible volunteer opportunities available.",
        category: "volunteer",
        location: "southside",
        meetingTime: "Weekends Various",
        memberCount: 92,
        contactEmail: "volunteers@communitykitchen.org",
        contactPhone: "(555) 456-7890",
        website: "https://communitykitchen.org",
        imageUrl: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=300&fit=crop"
      },
      {
        name: "Board Game Enthusiasts",
        description: "Love strategy games, party games, or classic board games? Join us for weekly game nights filled with fun, friendship, and friendly competition.",
        category: "hobbies",
        location: "eastside",
        meetingTime: "Fridays 7:00 PM",
        memberCount: 156,
        contactEmail: "games@boardgameclub.net",
        contactPhone: "(555) 567-8901",
        website: "https://boardgameclub.net",
        imageUrl: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=800&h=300&fit=crop"
      },
      {
        name: "Urban Gardening Society",
        description: "Learn sustainable gardening practices, share harvests, and cultivate community connections in our shared garden spaces.",
        category: "hobbies",
        location: "westside",
        meetingTime: "Sundays 9:00 AM",
        memberCount: 74,
        contactEmail: "info@urbangarden.org",
        contactPhone: "(555) 678-9012",
        website: "https://urbangarden.org",
        imageUrl: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=300&fit=crop"
      },
      {
        name: "Local Book Club",
        description: "Dive deep into literature with our monthly book discussions. We explore various genres and host author meet-and-greets.",
        category: "hobbies",
        location: "northside",
        meetingTime: "Second Sunday 2:00 PM",
        memberCount: 89,
        contactEmail: "reading@bookclub.com",
        contactPhone: "(555) 789-0123",
        website: "https://localbookclub.com",
        imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=300&fit=crop"
      },
      {
        name: "Startup Entrepreneurs Group",
        description: "Network with fellow entrepreneurs, share experiences, and learn from successful business leaders in our area.",
        category: "professional",
        location: "downtown",
        meetingTime: "Third Wednesday 7:00 PM",
        memberCount: 203,
        contactEmail: "network@entrepreneurs.org",
        contactPhone: "(555) 890-1234",
        website: "https://entrepreneursgroup.org",
        imageUrl: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&h=300&fit=crop"
      },
      {
        name: "Youth Soccer League",
        description: "Fun and competitive soccer for kids ages 6-16. Focus on skill development, teamwork, and sportsmanship.",
        category: "sports",
        location: "northside",
        meetingTime: "Saturdays 9:00 AM",
        memberCount: 312,
        contactEmail: "coach@youthsoccer.org",
        contactPhone: "(555) 901-2345",
        website: "https://youthsoccer.org",
        imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=300&fit=crop"
      },
      {
        name: "Senior Social Circle",
        description: "Active social group for seniors featuring game days, outings, educational seminars, and community service projects.",
        category: "social",
        location: "eastside",
        meetingTime: "Tuesdays 1:00 PM",
        memberCount: 167,
        contactEmail: "activities@seniorcircle.org",
        contactPhone: "(555) 012-3456",
        website: "https://seniorcircle.org",
        imageUrl: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=300&fit=crop"
      },
      {
        name: "Environmental Action Coalition",
        description: "Join us in protecting our local environment through cleanup events, advocacy, and sustainability education.",
        category: "volunteer",
        location: "westside",
        meetingTime: "Monthly Saturday 10:00 AM",
        memberCount: 145,
        contactEmail: "action@envirocoalition.org",
        contactPhone: "(555) 123-0456",
        website: "https://envirocoalition.org",
        imageUrl: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=300&fit=crop"
      },
      {
        name: "Local Musicians Collective",
        description: "Collaborate with fellow musicians, attend jam sessions, and perform at local venues. All genres and skill levels welcome.",
        category: "arts",
        location: "southside",
        meetingTime: "Thursday Evenings 7:30 PM",
        memberCount: 178,
        contactEmail: "music@musicianscollective.com",
        contactPhone: "(555) 234-0567",
        website: "https://musicianscollective.com",
        imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=300&fit=crop"
      }
    ];

    mockCommunities.forEach(community => {
      const id = randomUUID();
      const fullCommunity: Community = { 
        ...community, 
        id,
        memberCount: community.memberCount || 0,
        contactEmail: community.contactEmail || null,
        contactPhone: community.contactPhone || null, 
        website: community.website || null,
        imageUrl: community.imageUrl || null
      };
      this.communities.set(id, fullCommunity);
    });
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getCommunities(): Promise<Community[]> {
    return Array.from(this.communities.values());
  }

  async getCommunity(id: string): Promise<Community | undefined> {
    return this.communities.get(id);
  }

  async searchCommunities(query: string, category?: string, location?: string): Promise<Community[]> {
    let communities = Array.from(this.communities.values());

    if (query) {
      const lowerQuery = query.toLowerCase();
      communities = communities.filter(community =>
        community.name.toLowerCase().includes(lowerQuery) ||
        community.description.toLowerCase().includes(lowerQuery)
      );
    }

    if (category) {
      communities = communities.filter(community => community.category === category);
    }

    if (location) {
      communities = communities.filter(community => community.location === location);
    }

    return communities;
  }

  async createCommunity(insertCommunity: InsertCommunity): Promise<Community> {
    const id = randomUUID();
    const community: Community = { 
      ...insertCommunity, 
      id,
      memberCount: insertCommunity.memberCount || 0,
      contactEmail: insertCommunity.contactEmail || null,
      contactPhone: insertCommunity.contactPhone || null,
      website: insertCommunity.website || null,
      imageUrl: insertCommunity.imageUrl || null
    };
    this.communities.set(id, community);
    return community;
  }
}

export const storage = new MemStorage();
