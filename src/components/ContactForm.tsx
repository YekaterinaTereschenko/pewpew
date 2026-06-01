import { useContext, useState } from "react"
import type { IForm } from "../models/models"
import { ModalContext } from "./context/ModalState"
import Modal from '../components/Modal'

export default function ContactForm() {
    const [error, setError] = useState('')
    const { modal, close, open } = useContext(ModalContext)
    const [formData, setFormData] = useState<IForm>({
        name: '',
        surname: '',
        phone: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const validated = (): boolean => {
        let isValid = true
        let message = ''

        if (!formData.name.trim() || !formData.surname.trim() || !formData.phone.trim()) {
            message = 'All fields are required!'
            isValid = false
        }

        if (!message && !/^\+?[0-9]{7,15}$/.test(formData.phone)) {
            message = 'Enter valid phone!'
            isValid = false
        }

        if (!isValid) {
            setError(message)
            open()
        }

        return isValid
    }
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        if (!validated()) return

        console.log("FORM DATA:", formData)
    }

    return (
        <>
            <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 w-80 mx-auto mt-10">
                <input
                    value={formData.name}
                    onChange={handleChange}
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="border border-gray-200 rounded-lg px-4 py-2 outline-none focus:border-gray-400 transition"
                />

                <input
                    value={formData.surname}
                    onChange={handleChange}
                    type="text"
                    name="surname"
                    placeholder="Surname"
                    className="border border-gray-200 rounded-lg px-4 py-2 outline-none focus:border-gray-400 transition"
                />

                <input
                    value={formData.phone}
                    onChange={handleChange}
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    className="border border-gray-200 rounded-lg px-4 py-2 outline-none focus:border-gray-400 transition"
                />

                <button
                    type="submit"
                    className="bg-black text-white rounded-lg py-2 hover:bg-gray-800 transition"
                >
                    Send
                </button>
            </form>
            {modal && (
                <Modal title="Error!" onClose={close}>
                    {error}
                </Modal>
            )}
        </>
    )
}
