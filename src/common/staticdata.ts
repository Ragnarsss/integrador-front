import { Roles } from "./constants";

export const exampleAdmin = {
  id: 1,
  name: "Admin",
  email: "admin@gmail",
  roles: [Roles.ADMIN],
};
export const exampleUsers = [
  {
    id: 1,
    name: "User 1",
    email: "example@gmail",
    roles: [Roles.USER, Roles.VENDOR],
  },
  {
    id: 2,
    name: "User 2",
    email: "example2@gmail",
    roles: [Roles.USER, Roles.VENDOR],
  },
  {
    id: 3,
    name: "User 3",
    email: "example3@gmail",
    roles: [Roles.USER, Roles.VENDOR],
  },
  {
    id: 4,
    name: "User 4",
    email: "example4@gmail",
    roles: [Roles.USER],
  },
  {
    id: 5,
    name: "User 5",
    email: "example5@gmail",
    roles: [Roles.USER],
  },
];
export const exampleServices = [
  {
    id: 1,
    name: "Service 1",
    description: "Description of service 1",
    price: 100,
    averageRating: 4.5,
    totalSolicitations: 10,
    totalReviews: 5,
    totalRatings: 5,
    totalComments: 5,
  },
  {
    id: 2,
    name: "Service 2",
    description: "Description of service 2",
    price: 200,
    averageRating: 4.5,
    totalSolicitations: 10,
    totalReviews: 5,
    totalRatings: 5,
    totalComments: 5,
  },
  {
    id: 3,
    name: "Service 3",
    description: "Description of service 3",
    price: 300,
    averageRating: 4.5,
    totalSolicitations: 10,
    totalReviews: 5,
    totalRatings: 5,
    totalComments: 5,
  },
  {
    id: 4,
    name: "Service 4",
    description: "Description of service 4",
    price: 400,
    averageRating: 4.5,
    totalSolicitations: 10,
    totalReviews: 5,
    totalRatings: 5,
    totalComments: 5,
  },
  {
    id: 5,
    name: "Service 5",
    description: "Description of service 5",
    price: 500,
    averageRating: 4.5,
    totalSolicitations: 10,
    totalReviews: 5,
    totalRatings: 5,
    totalComments: 5,
  },
];

export const ServiceReviews = [
  {
    id: 1,
    rating: 5,
    comment: "Good service",
    userId: exampleUsers[0].id,
    serviceId: exampleServices[0].id,
  },
];
