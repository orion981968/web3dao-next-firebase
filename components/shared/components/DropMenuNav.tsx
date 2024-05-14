import { Button } from "@/components/ui/button";
import { FaBars } from "react-icons/fa";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";

export interface linkArrType {
  path: string;
  name: string;
}

export function DropMenuNav({ linkArr }: { linkArr: linkArrType[] }) {
  const pathname = usePathname();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="md:hidden">
        <Button
          variant="outline"
          className="border-none bg-[#950101] text-white"
        >
          <FaBars className="text-2xl" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Menu</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {linkArr.map((item) => (
            <DropdownMenuItem key={item.path} asChild>
              <Link
                href={item.path}
                className={`block px-4 py-2 text-sm  hover:bg-gray-100 ${
                  pathname === item.path
                    ? "font-bold text-rose-500 underline"
                    : ""
                }`}
              >
                {item.name}
              </Link>
            </DropdownMenuItem>
          ))}
          {/* Add Connect Wallet button as a DropdownMenuItem */}
          <DropdownMenuItem
            asChild
            onSelect={() => open()} // Use the onSelect prop to handle click events
          >
            <button className="block w-full px-4 py-2 text-left text-sm  hover:bg-gray-100">
              Connect Wallet
            </button>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
