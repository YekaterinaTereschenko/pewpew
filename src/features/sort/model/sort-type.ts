export type SortValue =
  | "default"
  | "name"
  | "lowerPrice"
  | "higherPrice";

  export type SortProps = {
  value: SortValue;
  onChange: (value: SortValue) => void;
};