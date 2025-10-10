import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useHandleFavList = create(
    persist(
        (set, get) => ({
            favList: [],
            addToFavList(product) {
                const existProduct = get().favList.find((item) => item.id == product.id);
                if (existProduct) {
                    const filteredFavList = get().favList.filter((item) => item.id != product.id);
                    set({
                        favList: filteredFavList,
                    });
                } else {
                    set({
                        favList: [...get().favList, product],
                    });
                }
            },
            removeItem: (id) => {
                set({
                    favList: get().favList.filter((item) => item.id != id),
                });
            },
            updateQuantity: (id, newQuantity) => {
                set({
                    favList: get().favList.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)),
                });
            },
            inFavList: (id) => get().favList.some((item) => item.id == id),
        }),

        {
            name: "favList",
        },
    ),
);
