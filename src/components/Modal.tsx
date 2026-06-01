import React from 'react'

interface ModalProps {
  children: React.ReactNode
  title: string
  onClose: () => void
}

// буду предельно честна, это дерьмо я пыталась сама написать, но что 2 года назад, что сейчас - я вообще не понимаю, кто придумал это издевательство и как это запомнить, поэтому я элегантно это украла.......

export default function Modal({
  children,
  title,
  onClose,
}: ModalProps) {
  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-start justify-center pt-10"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-125 p-5 rounded bg-white"
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">{title}</h2>

          <button onClick={onClose}>
            ✕
          </button>
        </div>

        {children}
      </div>
    </div>
  )
}