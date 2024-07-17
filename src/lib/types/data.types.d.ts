export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
}

export interface Service {
  id: string;
  title: string;
  brief_details: string;
  long_details: string;
  price: number;
  averageRating: number;
  totalSolicitations: number;
  totalReviews: number;
  totalRatings: number;
  totalComments: number;
}
