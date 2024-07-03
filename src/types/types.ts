export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
}

export interface AuthContextType {
  userId: number;
  userEmail: string;
  setUserId: (id: number) => void;
  setUserEmail: (email: string) => void;
  setUser: (user: User) => void;
  authenticationToken: string;
  login: (token: string) => void;
  logout: () => void;
  setAuthenticationToken: (token: string) => void;
}

export interface SearchingContextType {
  ratingFilter: number;
  serviceNameFilter: string;
  serviceValueStartFilter: number;
  serviceValueEndFilter: number;
  setRatingFilter: (rating: number) => void;
  setServiceNameFilter: (name: string) => void;
  setServiceValueStartFilter: (value: number) => void;
  setServiceValueEndFilter: (value: number) => void;
}
