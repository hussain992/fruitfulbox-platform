import { Product } from '@/types'
import { create, StateCreator } from 'zustand'


export interface IsearchSlice {
  search: string
  setSearch: (search: string) => void
}

export interface IproductSlice {
  product: Product | null
  setProduct: (product: Product | null) => void
}

// type IStore = IsearchSlice


const createSearchSlice: StateCreator<IsearchSlice> = (set) => ({
  search: 'hello',
  setSearch: (search: string) => set((state: IsearchSlice) => ({ ...state, search }))
})

const createProductSlice: StateCreator<IproductSlice> = (set) => ({
  product: null,
  setProduct: (product: Product | null) => set((state: IproductSlice) => ({ ...state, product }))
})
// interface IStore extends IAuthSlice, IPreferencesSlice {}

const useStore = create<IproductSlice & IsearchSlice>((...a) => ({
  ...createSearchSlice(...a),
  ...createProductSlice(...a),
}))

export default useStore;