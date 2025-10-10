import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAuthStore = create(
    persist(
        (set) => ({
            user: null,
            signIn: (userData) => set({ user: userData }),
            signOut: () => set({ user: null }),
        }),
        {
            name: "auth-store", // اسم المفتاح في localStorage
        },
    ),
);
