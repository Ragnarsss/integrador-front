import { Categories, Roles } from "./constants";

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
    title: "Service 1",
    professionalId: exampleUsers[0].id,
    brief_details: "Limpieza del hogar, limpiamos todo",
    long_details:
      "Limpieza del hogar fina y buena limpiamos todo lo que sea necesario",
    price: 100,
    category: Categories.HOUSEKEEPING,
    averageRating: 4.5,
    totalSolicitations: 10,
    totalReviews: 5,
    totalRatings: 5,
    totalComments: 5,
  },
  {
    id: 2,
    title: "Service 2",
    professionalId: exampleUsers[1].id,
    brief_details: "paseamos mascotas",
    long_details: "paseamos mascotas por todo el vecindario",
    price: 50,
    category: Categories.PETS,
    averageRating: 4.5,
    totalSolicitations: 10,
    totalReviews: 5,
    totalRatings: 5,
    totalComments: 5,
  },
  {
    id: 3,
    title: "Service 3",
    professionalId: exampleUsers[2].id,
    brief_details: "paseamos mascotas",
    long_details: "paseamos mascotas por todo el vecindario",
    price: 50,
    category: Categories.PETS,
    averageRating: 4.5,
    totalSolicitations: 10,
    totalReviews: 5,
    totalRatings: 5,
    totalComments: 5,
  },
  {
    id: 4,
    title: "Service 4",
    professionalId: exampleUsers[3].id,
    brief_details: "paseamos mascotas",
    long_details: "paseamos mascotas por todo el vecindario",
    price: 50,
    category: Categories.PETS,
    averageRating: 4.5,
    totalSolicitations: 10,
    totalReviews: 5,
    totalRatings: 5,
    totalComments: 5,
  },
  {
    id: 5,
    title: "Service 5",
    professionalId: exampleUsers[4].id,
    brief_details: "paseamos mascotas",
    long_details: "paseamos mascotas por todo el vecindario",
    price: 50,
    category: Categories.PETS,
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
