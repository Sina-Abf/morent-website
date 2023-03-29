import Image from "next/image";
import profile from "@/public/images/Imageprofile.png";
import {
  FilterIcon,
  HeartIcon,
  NotificationIcon,
  SettingsIcon,
} from "@/app/icons";
import Search from "./ui/search";
import Link from "next/link";
import { useCarsStore } from "@/store/store";

const Header = () => {
  const setFilters = useCarsStore((state: any) => state.setFiltersOpen);
  const clickHandler = () => {
    setFilters();
  };
  return (
    <header className="p-4 bg-white md:px-8">
      <div className="flex justify-between items-center mb-5">
        <div className="flex gap-x-12 w-2/3 items-center">
          <Link href="/" className="text-primary text-2xl font-bold">
            MORENT
          </Link>
          <Search
            iconShow={true}
            className="hidden md:flex flex-1 max-w-sm rounded-full"
          />
        </div>
        <div className="flex items-center gap-x-4">
          <div className="hidden md:flex gap-x-4 [&_div]:cursor-pointer">
            <div>
              <SettingsIcon />
            </div>
            <div>
              <NotificationIcon />
            </div>
            <div>
              <HeartIcon />
            </div>
          </div>
          <div className="hover:scale-125 transition-transform duration-300">
            <Image width={50} height={50} src={profile} alt="profile" />
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center gap-x-4">
        <Search className="md:hidden" />
        <button
          onClick={clickHandler}
          className="border rounded-lg border-secondary-400/20 p-2 md:hidden"
        >
          <FilterIcon />
        </button>
      </div>
    </header>
  );
};
export default Header;
