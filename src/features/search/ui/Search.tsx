import type { SearchProps } from "../model/search-type";

export default function Search({ value, onChange }: SearchProps) {
  return (
    <input
      type="text"
      placeholder="Search item"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="max-w-200 w-full appearance-none rounded-xl border border-gray-200 px-4 py-2.5 text-sm font-medium shadow-2xs transition-all duration-200 hover:border-gray-300 hover:shadow-md focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 cursor-pointer bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 dark:border-zinc-700 dark:hover:border-zinc-500"
    />
  );
}