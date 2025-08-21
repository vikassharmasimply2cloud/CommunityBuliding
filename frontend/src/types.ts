export interface Community {
  id: string;
  name: string;
  description: string;
  category: string;
  location: string;
  meetingTime: string;
  memberCount: number;
  contactEmail: string | null;
  contactPhone: string | null;
  website: string | null;
  imageUrl: string | null;
}