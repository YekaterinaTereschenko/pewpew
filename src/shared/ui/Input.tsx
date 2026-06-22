import type {
    UseFormRegister,
    FieldErrors,
    RegisterOptions,
} from "react-hook-form";
import type { IForm } from "../model/types";

type Props = {
    name: keyof IForm;
    register: UseFormRegister<IForm>;
    errors: FieldErrors<IForm>;
    rules?: RegisterOptions<IForm>;
};

export default function Input({ name, register, errors, rules }: Props) {
    const error = errors[name];

    return (
        <div  className="flex flex-col gap-0.5">
            <input
                {...register(name, rules)}
                type="text"
                placeholder={name}
                className="border border-gray-200 rounded-lg px-4 py-2 outline-none focus:border-gray-400 transition"
            />

            {error && (
                <span className="text-red-500 text-sm">
                    {error.message || "This field is required"}
                </span>
            )}
        </div>
    );
}