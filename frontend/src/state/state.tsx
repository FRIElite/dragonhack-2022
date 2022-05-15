import create from 'zustand';

const demoUser: User = {
  id: "123",
  email: "banana@gmail.com"
}

type User = {
  id?: string;
  email?: string;
};

const user: string | null = localStorage.getItem("user") 

type State = {
  user?: User;
  setUser: (user: User) => void;
};

export const useAppStore = create<State>((set: any) => ({
  user: user ? JSON.parse(user) : undefined,
  setUser: (user: User) => {
    set({ user })
    localStorage.setItem("user", JSON.stringify(user))
  }
}));
