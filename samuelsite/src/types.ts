/**
 * Types representing the Luxury Hairdresser Academy - Académie Coiffure L'Élite
 */

export interface LeadSubmission {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  selectedCourse: string;
  notes?: string;
  submittedAt: string;
  status: "pending" | "contacted" | "enrolled";
}

export interface Course {
  id: string;
  title: string;
  tagline: string;
  duration: string;
  intensity: string;
  price: string;
  imageUrl: string;
  features: string[];
  description: string;
  curriculum: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  rating: number;
  initials: string;
  achievement: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  price: string;
  period: string;
  features: string[];
  popular: boolean;
  ctaText: string;
}
