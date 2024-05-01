import { Badge } from "@/components/ui/badge"
import { Data, InternsColumns } from "./Columns/InternsColumns"
import { DataTable } from "./DataTable"
import Avatar from "@/public/images/Avatar";

//Client
async function getData(): Promise<Data[]> {
    // Fetch data from your API here.
    return [
        {
            id: "m5gr84i9",
            name: {
                firstNname: "Favour",
                lastname: "Ogunbiyi",
                contact: '09016002817',
                Image: <Avatar />,
            },
            email: "ken99@yahoo.com",
            stack: "UI/UX",
            date_added: new Date('2023-09-08'),
            duration: 6,
        },
        {
            id: "3u1reuv4",
            name: {
                firstNname: "Esther",
                lastname: "Ayodeji",
                contact: '09016002817',
                Image: <Avatar />,
            },
            email: "Abe45@gmail.com",
            stack: "Backend Dev",
            date_added: new Date('2023-04-24'),
            duration: 4,
        },
        {
            id: "derv1ws0",
            name: {
                firstNname: "Precious",
                lastname: "Ogunbiyi",
                contact: '09016002817',
                Image: <Avatar />,
            },
            email: "Monserrat44@gmail.com",
            stack: "Frontend Dev",
            date_added: new Date('2024-12-18'),
            duration: 1,
        },
        {
            id: "m5gr84i9",
            name: {
                firstNname: "Favour",
                lastname: "Ayobami",
                contact: '09016002817',
                Image: <Avatar />,
            },
            email: "ken99@yahoo.com",
            stack: "IoT",
            date_added: new Date('2024-04-24'),
            duration: 6,
        },
        {
            id: "m5gr84i9",
            name: {
                firstNname: "Ethereum",
                lastname: "Ogunbiyi",
                contact: '09016002817',
                Image: <Avatar />,
            },
            email: "Ogunsanya345@hotmail.com",
            stack: "Frontend Dev",
            date_added: new Date('2024-04-24'),
            duration: 6,
        },
        {
            id: "m5gr84i9",
            name: {
                firstNname: "Favour",
                lastname: "Ogunbiyi",
                contact: '09016002817',
                Image: <Avatar />,
            },
            email: "ken99@yahoo.com",
            stack: "IoT",
            date_added: new Date('2024-12-08'),
            duration: 3,
        },
        {
            id: "3u1reuv4",
            name: {
                firstNname: "Esther",
                lastname: "Ogunbiyi",
                contact: '09016002817',
                Image: <Avatar />,
            },
            email: "Abe45@gmail.com",
            stack: "Backend Dev",
            date_added: new Date('2024-11-08'),
            duration: 4,
        },
        {
            id: "m5gr84i9",
            name: {
                firstNname: "Ethereum",
                lastname: "Ogunbiyi",
                contact: '09016002817',
                Image: <Avatar />,
            },
            email: "Ogunsanya345@hotmail.com",
            stack: "Frontend Dev",
            date_added: new Date('2024-04-14'),
            duration: 2,
        },
        {
            id: "m5gr84i9",
            name: {
                firstNname: "Ethereum",
                lastname: "Ogunbiyi",
                contact: '09016002817',
                Image: <Avatar />,
            },
            email: "Ogunsanya345@hotmail.com",
            stack: "UI/UX",
            date_added: new Date('2024-04-24'),
            duration: 6,
        },
        {
            id: "3u1reuv4",
            name: {
                firstNname: "Ethereum",
                lastname: "Ogunbiyi",
                contact: '09016002817',
                Image: <Avatar />,
            },
            email: "Abe45@gmail.com",
            stack: "UI/UX",
            date_added: new Date('2024-12-08'),
            duration: 4,
        },
        {
            id: "m5gr84i9",
            name: {
                firstNname: "Ethereum",
                lastname: "Ogunbiyi",
                contact: '09016002817',
                Image: <Avatar />,
            },
            email: "Ogunsanya345@hotmail.com",
            stack: "Backend Dev",
            date_added: new Date('2024-04-24'),
            duration: 6,
        },
        {
            id: "3u1reuv4",
            name: {
                firstNname: "Ethereum",
                lastname: "Ogunbiyi",
                contact: '09016002817',
                Image: <Avatar />,
            },
            email: "Abe45@gmail.com",
            stack: "Frontend Dev",
            date_added: new Date('2024-04-24'),
            duration: 4,
        },
    ]
}

export default async function StudentsTable() {
    const data = await getData();
    const totalData: number = data.length;

    return (
        <div className="mx-auto">
            {/* <div className="my-5  flex flex-row">
                <span className="mr-2  text-2xl font-bold">Students</span>
                <Badge variant="outline" className="bg-gray-100">{totalData}</Badge>
            </div> */}

            <DataTable columns={InternsColumns} data={data} />
        </div>
    )
}
