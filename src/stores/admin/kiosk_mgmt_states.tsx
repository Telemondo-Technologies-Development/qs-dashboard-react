import { create } from "zustand";


type KioskManagementStore = {
    isEdit: boolean
    toggleEdit: () => void
    isPreviewKiosk: boolean
    togglePreviewKiosk: () => void
}


export const useKioskManagementStore = create<KioskManagementStore>()((set) => ({
    isEdit: false,
    toggleEdit: () => set((state) => ({isEdit: !state.isEdit})),
    isPreviewKiosk: false,
    togglePreviewKiosk: () => set((state) => ({isPreviewKiosk: !state.isPreviewKiosk}))
}))