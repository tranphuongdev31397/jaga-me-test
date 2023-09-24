import { SVGS } from "@/assets";
import { Image } from "@/components/Image";
import { HOME_MENU } from "@/constants";

export interface MenuBarProps {}

export default function MenuBar({}: MenuBarProps) {
  return (
    <ul className="flex h-full items-center gap-[15px] xl:gap-[30px] flex-row mr-[30px]">
      {HOME_MENU.map((menuItem) => (
        <li
          key={menuItem.id}
          className="mt-[2px] flex items-center gap-2.5 font-bold  text-xs xl:text-lg text-gray-1 hover:text-primary-500 cursor-pointer"
        >
          <span>{menuItem.label}</span>

          {menuItem?.children && <Image src={SVGS.chervonDown} />}
        </li>
      ))}
    </ul>
  );
}
