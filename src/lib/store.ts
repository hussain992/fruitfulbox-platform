import { create, StateCreator } from 'zustand'


export interface IsearchSlice {
  search: string
  setSearch: (search: string) => void
}

// type IStore = IsearchSlice


const createSearchSlice: StateCreator<IsearchSlice> = (set) => ({
  search: 'hello',
  setSearch: (search: string) => set((state: IsearchSlice) => ({ ...state, search }))
})   
// interface IStore extends IAuthSlice, IPreferencesSlice {}

const useStore = create<IsearchSlice>((...a) => ({
  ...createSearchSlice(...a),
}))

export default useStore;