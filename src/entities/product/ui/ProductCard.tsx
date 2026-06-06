import { useContext } from 'react'
import type { IProduct } from '../model/types'
import { ModalContext } from '../../../features/modal/ui/ModalState'

interface ProductProps {
  product: IProduct
}

export default function ProductCard({ product }: ProductProps) {
  const { open } = useContext(ModalContext)

  return (
    <>
      <div
        onClick={() => open(product)}
        className="flex flex-col md:flex-row items-center gap-15 rounded-2xl border border-gray-100/70 dark:border-gray-700/70 shadow-sm mx-10 mb-5 px-5 md:px-20 py-10 cursor-pointer bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
      >
        <img
          src={product.image}
          alt={product.title}
          className="w-25"
        />

        <div>
          <h3>{product.title}</h3>
          <span className="text-amber-300 font-bold">
            {product.price}$
          </span>
          <p className="line-clamp-2">
            {product.description}
          </p>
        </div>
      </div>
    </>
  )
}
