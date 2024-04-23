import React from 'react';
import { InternsIcon, StudentsIcon, VisitorsIcon, ClientIcon } from '@/public/icons';
import Link from "next/link";

type SideBarProps = {
    name?: string;
    link?: string;
    icon?: React.ReactNode;
};

const SidebarItem = ({ name, link, icon }: SideBarProps) => {
    return (
        <li className='sidebarItem'>
            <Link href={link || '#'} className='flex flex-col items-center'>
                {icon}
                {name && <p className="itemName">{name}</p>}
            </Link>
        </li>
    );
};

const SideBar = () => {
    return (
        <div className="px-4 py-12 h-120 bg-gray-100 rounded-2xl fixed left-7">
            <ul className="list-none flex-col space-y-12 text-center">
                <SidebarItem name="Interns" link="/Intens" icon={<InternsIcon />} />
                <SidebarItem name="Visitors" link="/Visitors" icon={<VisitorsIcon />} />
                <SidebarItem name="Client" link="/Client" icon={<ClientIcon />} />
                <SidebarItem name="Student" link="/Students" icon={<StudentsIcon />} />
            </ul>
        </div>
    )
}

export default SideBar;