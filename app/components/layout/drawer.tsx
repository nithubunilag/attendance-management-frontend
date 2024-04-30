import { headerRoutes } from "@/app/utils/headerRoutes";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type DrawerProps = {
  children: React.ReactNode;
};

function Drawer({ children }: DrawerProps) {
  return (
    <div className="drawer drawer-end">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">{children}</div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 pt-20 w-80 min-h-full text-base-content bg-white">
          {headerRoutes.map((route) => (
            <li key={route.id} className="hover:opacity-55 pb-2">
              <Link href={`/${route.id}`}>{route.name}</Link>
            </li>
          ))}
          <li>
            <Link href="/login" className="block mobile_lg:hidden">
              <Button size="lg" variant="nithub">
                Admin
              </Button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Drawer;
