"use client"

import { Button } from "@/components/ui/button"
import { ColumnDef } from "@tanstack/react-table"
import { Checkbox } from "@/components/ui/checkbox"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ChevronsUpDown } from "lucide-react"
import moment from 'moment';

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Data = {
    id: string
    name: {
        firstNname: string,
        lastname: string,
        contact: string,
        Image: React.ReactNode,
    }
    email: string
    stack: string
    date_added: Date
    duration: number
}

export type info = {
    firstNname: string,
    lastname: string,
    contact: string,
    Image: React.ReactNode,
}

export const InternsColumns: ColumnDef<Data>[] = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
                style={{ color: '#868686' }}
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "name",
        // header: "Name",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    className="text-black"
                >
                    Name
                    <ChevronsUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => {
            const info: info = row.getValue("name")
            return (
                <div className="flex flex-row gap-4 item-start">
                    <div className="h-[40px] w-[40px]">
                        {info.Image}
                    </div>
                    <div>
                        <div style={{whiteSpace: "nowrap"}} className="text-black">{info.firstNname} {info.lastname}</div>
                        <div style={{ color: '#868686' }}>{info.contact}</div>
                    </div>
                </div>
            )
        },
    },
    {
        accessorKey: "email",
        header: () => {
            return (
                <div className="text-black">Email address</div>
            )
        },
        cell: ({ row }) => <div style={{ color: '#868686' }}>{row.getValue("email")}</div>,
    },
    {
        accessorKey: "stack",
        header: () => {
            return (
                <div className="text-black">Stack</div>
            )
        },
        cell: ({ row }) => {
            return <div className="rounded-2xl text-center px-2 py-1" style={{ color: '#868686', backgroundColor: '#D9D9D9', whiteSpace: "nowrap" }}>{row.getValue("stack")}</div>
        },
    },
    {
        accessorKey: "date_added",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    className="text-black"
                >
                    Date Added
                    <ChevronsUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => {
            const formattedDate = moment(row.getValue("date_added")).format('DD/MM/YYYY');

            return <div style={{ color: '#868686' }}>{formattedDate}</div>
        },
    },
    {
        accessorKey: "duration",
        header: () => {
            return (
                <div className="text-black">Duration</div>
            )
        },
        cell: ({ row }) => {
            const amount: number = row.getValue("duration")

            return amount > 1 ?
                <div className="rounded-2xl text-center" style={{ backgroundColor: '#A9F9C7', color: '#868686' }}>{row.getValue("duration")} hours</div> :
                <div className="rounded-2xl text-center" style={{ backgroundColor: '#A9F9C7', color: '#868686' }}>{row.getValue("duration")} hour</div>
        },
    },
]
