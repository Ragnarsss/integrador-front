export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
}

export interface AuthContextType {
  user: User;
  authenticationToken: string;
  login: (token: string) => void;
  logout: () => void;
}
