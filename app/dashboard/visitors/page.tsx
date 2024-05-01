import InternsTable from "@/app/components/ui/DataTable/InternsTable";
import Search from "@/app/components/ui/Search";
import SideBar from "@/app/components/ui/SideBar";
import { Multiselect } from "@/components/multiselect";
import Link from "next/link";
import { Logo } from "@/public/icons"
import VisitorsTable from "@/app/components/ui/DataTable/VisitorsTable";



export default function VisitorsData() {
  return (
    <div>
      <header className="">
        <div className="py-4 mobile_lg:px-4 px-10 flex justify-between">
          <Link href="/">
            <Logo />
          </Link>

          <div className="block">
            <Multiselect />
          </div>
        </div>
      </header>
      <main className="flex min-h-screen flex-col items-center px-28">

        {/* <Search /> */}
        <SideBar />
        <VisitorsTable />
      </main>
    </div>

  );
}