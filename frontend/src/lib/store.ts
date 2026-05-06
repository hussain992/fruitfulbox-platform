import { Product } from '@/types'
import { create, StateCreator } from 'zustand'

export interface OrderItem extends Product {
  quantity: number
}

export interface IsearchSlice {
  search: string
  setSearch: (search: string) => void
}

export interface IproductSlice {
  product: Product | null
  setProduct: (product: Product | null) => void
}

export interface IorderSlice {
  orderItems: OrderItem[]
  addOrderItem: (item: OrderItem) => void
  clearOrderItems: () => void
}

const createSearchSlice: StateCreator<IsearchSlice> = (set) => ({
  search: 'hello',
  setSearch: (search: string) => set((state: IsearchSlice) => ({ ...state, search }))
})

const createProductSlice: StateCreator<IproductSlice> = (set) => ({
  product: null,
  setProduct: (product: Product | null) => set((state: IproductSlice) => ({ ...state, product }))
})

const createOrderSlice: StateCreator<IorderSlice> = (set) => ({
  orderItems: [],
  addOrderItem: (item: OrderItem) =>
    set((state: IorderSlice) => {
      const existing = state.orderItems.find((orderItem) => orderItem.slug === item.slug)
      if (existing) {
        return {
          orderItems: state.orderItems.map((orderItem) =>
            orderItem.slug === item.slug
              ? { ...orderItem, quantity: orderItem.quantity + item.quantity }
              : orderItem,
          ),
        }
      }

      return {
        orderItems: [...state.orderItems, item],
      }
    }),
  clearOrderItems: () => set(() => ({ orderItems: [] })),
})

const useStore = create<IproductSlice & IsearchSlice & IorderSlice>((...a) => ({
  ...createSearchSlice(...a),
  ...createProductSlice(...a),
  ...createOrderSlice(...a),
}))

export default useStore;