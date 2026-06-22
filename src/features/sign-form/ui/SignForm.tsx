import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import Input from "../../../shared/ui/Input";
import type { ILogIn } from "../model/types";

export default function SignForm() {
    const { register, handleSubmit, formState: { errors } } = useForm<ILogIn>();

    const onSubmit: SubmitHandler<ILogIn> = (data) => {
        console.log(data);
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4 w-80 mx-auto mt-10"
        >
            <Input name="email" register={register} errors={errors} rules={{
                required: "Email"
            }} />

            <Input name="password" register={register} errors={errors} rules={{
                required: "Password"
            }} />

            <button
                type="submit"
                className="bg-black text-white rounded-lg py-2 hover:bg-gray-800 transition"
            >
                Send
            </button>
        </form>
    )
}
