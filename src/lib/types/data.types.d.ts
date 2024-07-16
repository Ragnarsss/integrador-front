export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  price: number;
  averageRating: number;
  totalSolicitations: number;
  totalReviews: number;
  totalRatings: number;
  totalComments: number;
}
