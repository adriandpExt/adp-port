import { create } from "zustand";

interface Store {
  count: number;
  increase: () => void;
  decrease: () => void;
  setCount: (value: number) => void;
}

// Creating the Zustand store with state and actions
const useCounter = create<Store>((set) => ({
  count: 0,
  increase: () => set((state) => ({ count: state.count + 1 })),
  decrease: () => set((state) => ({ count: state.count - 1 })),
  setCount: (value: number) => set({ count: value }),
}));

export default useCounter;
