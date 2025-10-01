import { create } from "zustand";

interface IAuthStore {
  isLoggedIn: boolean;
  email: string;
  name: string;
  gender: string;
  login: (email: string) => void;
  logout: () => void;
}

export const useAuthStore = create<IAuthStore>((set) => ({
  // STATE
  isLoggedIn: false,
  email: "",
  name: "",
  gender: "",

  // ACTION
  login: (email: string) => {
    set(() => ({ isLoggedIn: true, email }));
  },
  logout: () => {
    set(() => ({ isLoggedIn: false, email: "" }));
  },
}));
