import { makeAutoObservable, runInAction } from 'mobx'
import { fetchDeleteFromBasket } from '../api/fetchDeleteFromBasket'
import { fetchGetBasket } from '../api/fetchGetBasket'
import { fetchAddToCard } from '../api/ferchaAddToCard'
import type { IBasket, IBasketDevice, IItemToCard } from '../model/types'

class BasketStore {
    basket: IBasket | null = null
    isLoading = false

    constructor() {
        makeAutoObservable(this)
    }

    async fetchBasket() {
        this.isLoading = true
        const data = await fetchGetBasket()
        runInAction(() => {
            this.basket = data
            this.isLoading = false
        })
    }

    async addItem(item: IItemToCard) {
        await fetchAddToCard(item)
        await this.fetchBasket()
    }

    async removeItem(id: number) {
        await fetchDeleteFromBasket(id)
        runInAction(() => {
            if (this.basket) {
                this.basket.basket_devices = this.basket.basket_devices.filter(
                    (item: IBasketDevice) => item.id !== id
                )
            }
        })
    }

    get totalPrice() {
        return this.basket?.basket_devices.reduce(
            (sum, item) => sum + item.device.price * item.quantity, 0
        ) ?? 0
    }

    get itemCount() {
        return this.basket?.basket_devices.length ?? 0
    }
}

export const basketStore = new BasketStore()