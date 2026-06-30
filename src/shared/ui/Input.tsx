import type {
    UseFormRegister,
    FieldErrors,
    RegisterOptions,
    FieldValues,
    Path,
} from "react-hook-form";

type Props<T extends FieldValues> = {
    name: Path<T>;
    register: UseFormRegister<T>;
    errors: FieldErrors<T>;
    rules?: RegisterOptions<T>;
};

export default function Input<T extends FieldValues>({ name, register, errors, rules }: Props<T>) {
    const error = errors[name];

    return (
        <div className="flex flex-col gap-0.5">
            <input
                {...register(name, rules)}
                type="text"
                placeholder={String(name)}
                className="border border-gray-200 rounded-lg px-4 py-2 outline-none focus:border-gray-400 transition"
            />

            {error && (
                <span className="text-red-500 text-sm">
                    {error.message as string || "This field is required"}
                </span>
            )}
        </div>
    );
}