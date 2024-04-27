import Image from "next/image";
import Search from "../components/ui/Search";
import SideBar from "../components/ui/SideBar";
import StudentsTable from "../components/ui/DataTable/StudentsTable";
import InternsTable from "../components/ui/DataTable/InternsTable";
import ClientTable from "../components/ui/DataTable/ClientTable";
import VisitorsTable from "../components/ui/DataTable/VisitorsTable";

export default function Dashboard() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Search />
      <SideBar />
      <StudentsTable />
      <InternsTable />
      <ClientTable />
      <VisitorsTable />
    </main>
  );
}