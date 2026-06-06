import type { SortProps, SortValue } from "../model/sort-type";

export default function Sort({ value, onChange }: SortProps) {
    return (
        <select
            name="sort"
            id="sort"
            className="appearance-none rounded-xl border border-gray-200 px-4 py-2.5 text-sm font-medium shadow-2xs transition-all duration-200 hover:border-gray-300 hover:shadow-md focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 cursor-pointer bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 dark:border-zinc-700 dark:hover:border-zinc-500"
            value={value}
            onChange={(e) => onChange(e.target.value as SortValue)}>
            <option value="default">Default</option>
            <option value="name">By name</option>
            <option value="lowerPrice">By price (from lower)</option>
            <option value="higherPrice">By price (from higher)</option>
        </select>
    );
}