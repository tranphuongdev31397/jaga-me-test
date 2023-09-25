import { SVGS } from "@/assets";
import { Image } from "@/components/Image";
import { HOME_MENU } from "@/constants";
import { cn } from "@/lib/utils";

export interface MenuBarProps {
  className?: string;
  classNameItem?: string;
}

export default function MenuBar({ className, classNameItem }: MenuBarProps) {
  return (
    <ul
      className={cn(
        "flex h-full items-center gap-[15px] xl:gap-[30px] flex-row mr-[30px]",
        className
      )}
    >
      {HOME_MENU.map((menuItem) => (
        <li
          key={menuItem.id}
          className={cn(
            "mt-[2px] flex items-center  gap-2.5 font-bold  text-xs xl:text-lg text-gray-1 hover:text-primary-500 cursor-pointer",
            classNameItem
          )}
        >
          <span>{menuItem.label}</span>

          {menuItem?.children && <Image src={SVGS.chervonDown} />}
        </li>
      ))}
    </ul>
  );
}
