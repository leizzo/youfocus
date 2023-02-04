import { create } from 'zustand';

export const useRouter = create((set) => ({
  route: document.location,
  updateRoute: (location) => set(() => ({ route: location })),
}));
