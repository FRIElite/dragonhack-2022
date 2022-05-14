import React from 'react';
import create from 'zustand';

const demoUser: User = {
  id: "123",
  email: "banana@gmail.com"
}


type User = {
  id?: string;
  email?: string;
};

type State = {
  user?: User;
};

export const useAppStore = create<State>((set: any) => ({
  user: demoUser,
  setUser: (user: User) => set({ user })
}));
