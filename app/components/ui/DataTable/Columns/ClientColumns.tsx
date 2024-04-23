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
    facility: string
    date: Date
    duration: number
}

export const ClientColumns: ColumnDef<Data>[] = [
    {
        accessorKey: "name",
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
        accessorKey: "facility",
        header:  () => {
            return (
               <div className="text-black">Facility</div>
            )
        },
        cell: ({ row }) => <div style={{color: '#868686'}}>{row.getValue("email")}</div>,
    },
    {
        accessorKey: "date",
        header:  () => {
            return (
               <div className="text-black">Date</div>
            )
        },
        cell: ({ row }) => {
            const formattedDate = moment(row.getValue("date")).format('DD/MM/YYYY');

            return <div style={{color: '#868686'}}>{formattedDate}</div>
        },
    },
    {
        accessorKey: "duration",
        header:  () => {
            return (
               <div className="text-black">Duration</div>
            )
        },
        cell: ({ row }) => {
            const amount: number = row.getValue("duration")

            return amount > 1 ? <div style={{color: '#868686'}}>{row.getValue("duration")} hours</div> : <div style={{color: '#868686'}}>{row.getValue("duration")} hour</div>
        },
    },
]
