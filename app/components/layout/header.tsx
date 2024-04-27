import { headerRoutes } from "@/app/utils/headerRoutes";
import { Button } from "@/components/ui/button";

import { Logo } from "@/public/icons";
import HamburgerIcon from "@/public/icons/HamburgerIcon";
import Link from "next/link";

function Header() {
  return (
    <header className="">
      <div className="py-4 px-10 flex justify-between">
        <div>
          <Logo />
        </div>
        <nav className="self-center block mobile_lg:hidden">
          <ul className="flex gap-8">
            {headerRoutes.map((route) => (
              <li key={route.id} className="hover:opacity-55">
                <Link href={`/${route.id}`}>{route.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="block mobile_lg:hidden">
          <Button size="lg" variant="nithub">
            Admin
          </Button>
        </div>
        <div className="hidden mobile_lg:block">
          <label htmlFor="my-drawer" className="btn btn-square btn-ghost">
            <HamburgerIcon />
          </label>
        </div>
      </div>
    </header>
  );
}

export default Header;
