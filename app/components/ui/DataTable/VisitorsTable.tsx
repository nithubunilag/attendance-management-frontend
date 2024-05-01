import { Badge } from "@/components/ui/badge"
import { Data, VistorsColumns } from "./Columns/VisitorColumns"
import { DataTable } from "./DataTable"

async function getData(): Promise<Data[]> {
    // Fetch data from your API here.
    return [
        {
            id: "m5gr84i9",
            name: "Favour",
            email: "ken99@yahoo.com",
            reason: "Classroom",
            contact: "09016002817",
            date: new Date('2024-12-08'),
        },
        {
            id: "3u1reuv4",
            name: "Esther",
            email: "Abe45@gmail.com",
            reason: "Classroom",
            contact: "09016002817",
            date: new Date('2024-04-24'),
        },
        {
            id: "derv1ws0",
            name: "Precious",
            email: "Monserrat44@gmail.com",
            reason: "Classroom",
            contact: "09016002817",
            date: new Date('2024-04-24'),
        },
        {
            id: "m5gr84i9",
            name: "Favour",
            email: "ken99@yahoo.com",
            reason: "Classroom",
            contact: "09016002817",
            date: new Date('2024-12-08'),
        },
        {
            id: "m5gr84i9",
            name: "Ethereum",
            email: "Ogunsanya345@hotmail.com",
            reason: "Classroom",
            contact: "09016002817",
            date: new Date('2024-04-24'),
        },
        {
            id: "m5gr84i9",
            name: "Favour",
            email: "ken99@yahoo.com",
            reason: "Classroom",
            contact: "09016002817",
            date: new Date('2024-12-08'),
        },
        {
            id: "3u1reuv4",
            name: "Esther",
            email: "Abe45@gmail.com",
            reason: "Classroom",
            contact: "09016002817",
            date: new Date('2024-04-24'),
        },
        {
            id: "m5gr84i9",
            name: "Ethereum",
            email: "Ogunsanya345@hotmail.com",
            reason: "Classroom",
            contact: "09016002817",
            date: new Date('2024-04-24'),
        },
        {
            id: "m5gr84i9",
            name: "Ethereum",
            email: "Ogunsanya345@hotmail.com",
            reason: "Classroom",
            contact: "09016002817",
            date: new Date('2024-04-24'),
        },
        {
            id: "3u1reuv4",
            name: "Esther",
            email: "Abe45@gmail.com",
            reason: "Classroom",
            contact: "09016002817",
            date: new Date('2024-04-24'),
        },
        {
            id: "m5gr84i9",
            name: "Ethereum",
            email: "Ogunsanya345@hotmail.com",
            reason: "Classroom",
            contact: "09016002817",
            date: new Date('2024-04-24'),
        },
        {
            id: "3u1reuv4",
            name: "Esther",
            email: "Abe45@gmail.com",
            reason: "Classroom",
            contact: "09016002817",
            date: new Date('2024-04-24'),
        },
    ]
}

export default async function VisitorsTable() {
    const data = await getData();

    return (
        <div className="mx-auto">
            {/* <div className="my-5  flex flex-row">
                <span className="mr-2  text-2xl font-bold">Visitors</span>
                <Badge variant="outline" className="bg-gray-100">{totalData}</Badge>
            </div> */}

            <DataTable columns={VistorsColumns} data={data} />
        </div>
    )
}
