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

export interface DeliveryDetails {
  selectedDate: string
  flatNo: string
  wing: string
  society: string
  area: string
}

export interface IDeliveryDetailsSlice {
  deliveryDetails: DeliveryDetails
  setDeliveryDetails: (details: DeliveryDetails) => void
  clearDeliveryDetails: () => void
}

const getSavedDeliveryDetails = (): DeliveryDetails => {
  if (typeof window === "undefined") {
    return {
      selectedDate: "",
      flatNo: "",
      wing: "",
      society: "",
      area: "",
    }
  }

  try {
    const saved = window.localStorage.getItem("fruitfulbox.deliveryDetails")
    if (!saved) {
      return {
        selectedDate: "",
        flatNo: "",
        wing: "",
        society: "",
        area: "",
      }
    }

    return JSON.parse(saved) as DeliveryDetails
  } catch (e) {
    console.error("Error parsing delivery details from localStorage", e)
    return {
      selectedDate: "",
      flatNo: "",
      wing: "",
      society: "",
      area: "",
    }
  }
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

const createDeliveryDetailsSlice: StateCreator<IDeliveryDetailsSlice> = (set) => ({
  deliveryDetails: getSavedDeliveryDetails(),
  setDeliveryDetails: (details: DeliveryDetails) => {
    set(() => ({ deliveryDetails: details }))
    if (typeof window !== "undefined") {
      window.localStorage.setItem("fruitfulbox.deliveryDetails", JSON.stringify(details))
    }
  },
  clearDeliveryDetails: () => {
    const emptyDetails: DeliveryDetails = {
      selectedDate: "",
      flatNo: "",
      wing: "",
      society: "",
      area: "",
    }
    set(() => ({ deliveryDetails: emptyDetails }))
    if (typeof window !== "undefined") {
      window.localStorage.removeItem("fruitfulbox.deliveryDetails")
    }
  },
})

const useStore = create<IproductSlice & IsearchSlice & IorderSlice & IDeliveryDetailsSlice>((...a) => ({
  ...createSearchSlice(...a),
  ...createProductSlice(...a),
  ...createOrderSlice(...a),
  ...createDeliveryDetailsSlice(...a),
}))

export default useStore;