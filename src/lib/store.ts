import { create } from "zustand";

interface HasDataState {
	hasData: boolean | "searching";
	changeHasData: (newHasData: boolean | "searching") => void;
}
export const useHasData = create<HasDataState>()((set) => ({
	hasData: false,
	changeHasData: (data: boolean | "searching") =>
		set(() => ({ hasData: data })),
}));
