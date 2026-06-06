import type { IForm } from "../model/types";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import Input from "./Input";

export default function ContactForm() {
    const { register, handleSubmit, formState: { errors } } = useForm<IForm>();

    const onSubmit: SubmitHandler<IForm> = (data) => {
        console.log(data);
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4 w-80 mx-auto mt-10"
        >
            <Input name="name" register={register} errors={errors} rules={{
                    required: "Enter name",
                    minLength: 2
                }}/>

            <Input name="surname" register={register} errors={errors} rules={{
                    required: "Enter surname",
                    minLength: 2
                }}/>

            <Input
                name="phone"
                register={register}
                errors={errors}
                rules={{
                    required: "Enter phone",
                    pattern: {
                        value: /^\+?[0-9]{10,15}$/,
                        message: "Enter correct phone",
                    },
                }}
            />

            <button
                type="submit"
                className="bg-black text-white rounded-lg py-2 hover:bg-gray-800 transition"
            >
                Send
            </button>
        </form>
    );
}