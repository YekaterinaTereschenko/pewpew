import { Link } from "react-router-dom";
import SignForm from "@/features/sign-form/ui/SignForm";

export default function Sign() {
    return (
        <div className="min-h-screen flex flex-col py-5 items-center bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">
            <h1 className="text-3xl font-bold">Log In</h1>
            <SignForm />
            <Link to='../registration'>Don't have account? Create now!</Link>
        </div>
    )
}
