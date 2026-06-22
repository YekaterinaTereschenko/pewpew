import { Link } from "react-router-dom";
import RegistrationForm from '@/features/registration-form/ui/RegistrationForm'

export default function Registration() {
  return (
        <div className="min-h-screen flex flex-col py-5 items-center bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">
            <h1 className="text-3xl font-bold">Registration</h1>
            <RegistrationForm />
            <Link to='../sign'>Already have account? Log in!</Link>
        </div>
  )
}
