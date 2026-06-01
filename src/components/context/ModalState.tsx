import { createContext, useState } from 'react'
import type { IProduct } from '../../models/models'

export const ModalContext = createContext<any>(null)

export default function ModalState({ children }: { children: React.ReactNode }) {
  const [modal, setModal] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<IProduct | null>(null)

  const open = (product?: IProduct) => {
    if (product) {
      setSelectedProduct(product)
    }

    setModal(true)
  }

  const close = () => {
    setModal(false)
    setSelectedProduct(null)
  }

  return (
    <ModalContext.Provider
      value={{
        modal,
        selectedProduct,
        open,
        close,
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}