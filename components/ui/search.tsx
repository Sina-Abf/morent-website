import { FilterIcon, SearchIcon } from "@/app/icons";
import classNames from "classnames";

const Search = ({
  className,
  iconShow,
}: {
  className?: string;
  iconShow?: boolean;
}) => {
  return (
    <div
      className={classNames(
        "flex border rounded-lg border-secondary-400/20 items-center py-1 px-4 gap-x-2 flex-1 max-w-xl bg-white",
        className,
        iconShow && "flex justify-between"
      )}
    >
      <div className="flex gap-x-4 items-center w-full">
        <SearchIcon />
        <input
          className="text-sm w-full border-none text-secondary-400 placeholder:text-secondary-400 focus:ring-0"
          placeholder="Search something here"
          type="search"
          name="search"
          id="search"
        />
      </div>
      {iconShow && <FilterIcon />}
    </div>
  );
};
export default Search;
