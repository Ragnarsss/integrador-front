export interface AdministrationContextType {}

export interface AuthContextType {
  isLoggedIn: boolean;
  isLoading: boolean;
  userId: number;
  userEmail: string;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
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
