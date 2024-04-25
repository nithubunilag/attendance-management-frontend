"use client"

import { Button } from "@/components/ui/button"
import { ColumnDef } from "@tanstack/react-table"
import { ChevronsUpDown } from "lucide-react"
import moment from 'moment';

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Data = {
    id: string
    name: string
    email: string
    reason: string
    contact: string
    date: Date
}

export const VistorsColumns: ColumnDef<Data>[] = [
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
                    Name/Company
                    <ChevronsUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => <div className="text-black">{row.getValue("name")}</div>,
    },
    {
        accessorKey: "email",
        header:  () => {
            return (
               <div className="text-black">Email address</div>
            )
        },
        cell: ({ row }) => <div style={{color: '#868686'}}>{row.getValue("email")}</div>,
    },
    {
        accessorKey: "reason",
        header:  () => {
            return (
               <div className="text-black">Reason</div>
            )
        },
        cell: ({ row }) => <div style={{color: '#868686'}}>{row.getValue("reason")}</div>,
    },
    {
        accessorKey: "contact",
        header:  () => {
            return (
               <div className="text-black">Contact</div>
            )
        },
        cell: ({ row }) => <div style={{color: '#868686'}}>{row.getValue("contact")}</div>,
    },
    {
        accessorKey: "date",
        header: () => {
            return (
               <div className="text-black">Date</div>
            )
        },
        cell: ({ row }) => {
            const formattedDate = moment(row.getValue("date")).format('DD/MM/YYYY');

            return <div style={{color: '#868686'}}>{formattedDate}</div>
        },
    },
]
