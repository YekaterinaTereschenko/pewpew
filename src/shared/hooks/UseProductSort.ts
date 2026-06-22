import type { SortValue } from '@/features/sort/model/sort-type'
import type { IProduct } from '@/entities/product/model/types'

export function productSortHandler(sort: SortValue) {
    return (a: IProduct, b: IProduct) => {
        switch (sort) {
            case 'name':
                return a.name.localeCompare(b.name)
            case 'lowerPrice':
                return a.price - b.price
            case 'higherPrice':
                return b.price - a.price
            default:
                return 0
        }
    }
}