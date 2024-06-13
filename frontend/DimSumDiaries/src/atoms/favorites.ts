import { atom } from "recoil";

export const favoritesState = atom({
    key: 'favorites',
    default: [""]
});