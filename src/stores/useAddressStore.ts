import {create} from "zustand";

interface   AddressState {
    inputValue: string,
    setInputValue: (value: string) => void;
}

export const useAddressStore = create<AddressState>((set) => ({
    inputValue: "",
    setInputValue: (value: string) =>{
        localStorage.setItem("address", value);
        set({inputValue: value})
    }
}))