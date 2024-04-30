import { Badge } from "@/components/ui/badge"
import { Data, ClientColumns } from "./Columns/ClientColumns"
import { DataTable } from "./DataTable"

//Client
async function getData(): Promise<Data[]> {
    // Fetch data from your API here.
    return [
        {
            id: "m5gr84i9",
            name: "Favour",
            email: "ken99@yahoo.com",
            facility: "Classroom",
            date: new Date('2024-12-08'),
            duration: 6,
        },
        {
            id: "3u1reuv4",
            name: "Esther",
            email: "Abe45@gmail.com",
            facility: "Classroom",
            date: new Date('2024-04-24'),
            duration: 4,
        },
        {
            id: "derv1ws0",
            name: "Precious",
            email: "Monserrat44@gmail.com",
            facility: "Classroom",
            date: new Date('2024-04-24'),
            duration: 1,
        },
        {
            id: "m5gr84i9",
            name: "Favour",
            email: "ken99@yahoo.com",
            facility: "Classroom",
            date: new Date('2024-04-24'),
            duration: 6,
        },
        {
            id: "m5gr84i9",
            name: "Ethereum",
            email: "Ogunsanya345@hotmail.com",
            facility: "Classroom",
            date: new Date('2024-04-24'),
            duration: 6,
        },
        {
            id: "m5gr84i9",
            name: "Favour",
            email: "ken99@yahoo.com",
            facility: "Classroom",
            date: new Date('2024-04-24'),
            duration: 3,
        },
        {
            id: "3u1reuv4",
            name: "Esther",
            email: "Abe45@gmail.com",
            facility: "Classroom",
            date: new Date('2024-04-24'),
            duration: 4,
        },
        {
            id: "m5gr84i9",
            name: "Ethereum",
            email: "Ogunsanya345@hotmail.com",
            facility: "Classroom",
            date: new Date('2024-04-24'),
            duration: 2,
        },
        {
            id: "m5gr84i9",
            name: "Ethereum",
            email: "Ogunsanya345@hotmail.com",
            facility: "Classroom",
            date: new Date('2024-04-24'),
            duration: 6,
        },
        {
            id: "3u1reuv4",
            name: "Esther",
            email: "Abe45@gmail.com",
            facility: "Classroom",
            date: new Date('2024-04-24'),
            duration: 4,
        },
        {
            id: "m5gr84i9",
            name: "Ethereum",
            email: "Ogunsanya345@hotmail.com",
            facility: "Classroom",
            date: new Date('2024-04-24'),
            duration: 6,
        },
        {
            id: "3u1reuv4",
            name: "Esther",
            email: "Abe45@gmail.com",
            facility: "Classroom",
            date: new Date('2024-04-24'),
            duration: 4,
        },
    ]
}

export default async function ClientTable() {
    const data = await getData();

    return (
        <div className="container mx-auto py-10">
            {/* <div className="my-5  flex flex-row">
                <span className="mr-2  text-2xl font-bold">Clients</span>
                <Badge variant="outline" className="bg-gray-100">{totalData}</Badge>
            </div> */}

            <DataTable columns={ClientColumns} data={data} />
        </div>
    )
}
