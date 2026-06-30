interface ButtonProps {
    children: React.ReactNode,
    onClick?: () => void
}

export default function PrimaryButton({ children, onClick }: ButtonProps) {
    return (
        <button onClick={onClick} className="bg-yellow-400 hover:bg-yellow-500 text-white font-medium px-6 py-2 rounded-lg transition">
            {children}
        </button>
    )
}