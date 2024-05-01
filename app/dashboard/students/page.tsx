import InternsTable from "@/app/components/ui/DataTable/InternsTable";
import Search from "@/app/components/ui/Search";
import SideBar from "@/app/components/ui/SideBar";
import { Multiselect } from "@/components/multiselect";
import Link from "next/link";
import { Logo } from "@/public/icons"
import StudentsTable from "@/app/components/ui/DataTable/StudentsTable";



export default function StudentsData() {
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
      <main className="flex min-h-screen gap-4 px-10">
        <div className="w-[10%]">
          <SideBar />
        </div>

        <div className="w-[90%]">
          {/* <Search /> */}
          <StudentsTable />
        </div>
      </main>
    </div>
    );
  }