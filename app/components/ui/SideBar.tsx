"use client"
import React from 'react';
import { InternsIcon, StudentsIcon, VisitorsIcon, ClientIcon } from '@/public/icons';
import Link from "next/link";
import { usePathname } from 'next/navigation';
type SideBarProps = {
    name?: string;
    link?: string;
    icon?: React.ReactNode;
};

const SidebarItem = ({ name, link, icon }: SideBarProps) => {
    const pathname = usePathname();
    return (
        <li className='sidebarItem'>
            <Link href={link || '#'} style={{color: pathname === link ? "black" : "#868686"}} className='flex flex-col items-center'>
                {icon}
                {name && <p className="itemName" style={{color: pathname === link ? "black" : "#868686"}}>{name}</p>}
            </Link>
        </li>
    );
};

const SideBar = () => {
    return (
        <div className="px-4 py-12 my-12 h-120 bg-gray-100 rounded-2xl fixed left-7">
            <ul className="list-none flex-col space-y-12 text-center">
                <SidebarItem name="Interns" link="/dashboard/interns" icon={<InternsIcon link="/dashboard/interns"/>} />
                <SidebarItem name="Visitors" link="/dashboard/visitors" icon={<VisitorsIcon link="/dashboard/visitors"/>} />
                <SidebarItem name="Client" link="/dashboard/clients" icon={<ClientIcon link="/dashboard/clients"/>} />
                <SidebarItem name="Student" link="/dashboard/students" icon={<StudentsIcon link="/dashboard/students"/>} />
            </ul>
        </div>
    )
}

export default SideBar;