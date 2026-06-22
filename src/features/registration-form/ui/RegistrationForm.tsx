import { useForm, type SubmitHandler } from "react-hook-form";
import Input from "../../../shared/ui/Input";
import type { ILogIn } from "../../sign-form/model/types";
import { useNavigate } from "react-router-dom";
import { useRegistration } from "@/entities/user/hooks/useRegistration";

export default function RegistrationForm() {
    const { register, handleSubmit, formState: { errors } } = useForm<ILogIn>();
    const { mutate, isPending, isError, error } = useRegistration();
    const navigate = useNavigate()

    const onSubmit: SubmitHandler<ILogIn> = (data) => {
        mutate(data, {
            onSuccess: (result) => {
                console.log("Успешная регистрация", result);
                navigate('/user')
            },
            onError: (err) => {
                console.error("Ошибка регистрации", err);
            },
        });
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4 w-80 mx-auto mt-10"
        >
            <Input name="name" register={register} errors={errors} rules={{
                required: "Name"
            }} />

            <Input name="email" register={register} errors={errors} rules={{
                required: "Email"
            }} />

            <Input name="address" register={register} errors={errors} rules={{
                required: "Address"
            }} />

            <Input name="phone" register={register} errors={errors} rules={{
                required: "Phone"
            }} />

            <Input name="password" register={register} errors={errors} rules={{
                required: "Password"
            }} />

            {isError && (
                <p className="text-red-500 text-sm">
                    {error instanceof Error ? error.message : "Что-то пошло не так"}
                </p>
            )}

            <button
                type="submit"
                disabled={isPending}
                className="bg-black text-white rounded-lg py-2 hover:bg-gray-800 transition disabled:opacity-50"
            >
                {isPending ? "Отправка..." : "Send"}
            </button>
        </form>
    )
}
