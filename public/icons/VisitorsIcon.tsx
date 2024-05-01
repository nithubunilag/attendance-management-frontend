"use client"

import { usePathname } from 'next/navigation';
import React from 'react'

type Props = {
  link?: string;
};

export const VisitorsIcon = ({link}: Props) => {
  const pathname = usePathname();

  return (
    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.5001 7.16C18.4401 7.15 18.3701 7.15 18.3101 7.16C16.9301 7.11 15.8301 5.98 15.8301 4.58C15.8301 3.15 16.9801 2 18.4101 2C19.8401 2 20.9901 3.16 20.9901 4.58C20.9801 5.98 19.8801 7.11 18.5001 7.16Z" stroke={pathname === link ? "black" : "#868686"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M17.4702 14.4399C18.8402 14.6699 20.3502 14.4299 21.4102 13.7199C22.8202 12.7799 22.8202 11.2399 21.4102 10.2999C20.3402 9.58992 18.8102 9.34991 17.4402 9.58991" stroke={pathname === link ? "black" : "#868686"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M6.46998 7.16C6.52998 7.15 6.59998 7.15 6.65998 7.16C8.03998 7.11 9.13998 5.98 9.13998 4.58C9.13998 3.15 7.98998 2 6.55998 2C5.12998 2 3.97998 3.16 3.97998 4.58C3.98998 5.98 5.08998 7.11 6.46998 7.16Z" stroke={pathname === link ? "black" : "#868686"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M7.49994 14.4399C6.12994 14.6699 4.61994 14.4299 3.55994 13.7199C2.14994 12.7799 2.14994 11.2399 3.55994 10.2999C4.62994 9.58992 6.15994 9.34991 7.52994 9.58991" stroke={pathname === link ? "black" : "#868686"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M12.5001 14.63C12.4401 14.62 12.3701 14.62 12.3101 14.63C10.9301 14.58 9.83008 13.45 9.83008 12.05C9.83008 10.62 10.9801 9.46997 12.4101 9.46997C13.8401 9.46997 14.9901 10.63 14.9901 12.05C14.9801 13.45 13.8801 14.59 12.5001 14.63Z" stroke={pathname === link ? "black" : "#868686"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M9.58997 17.7799C8.17997 18.7199 8.17997 20.2599 9.58997 21.1999C11.19 22.2699 13.81 22.2699 15.41 21.1999C16.82 20.2599 16.82 18.7199 15.41 17.7799C13.82 16.7199 11.19 16.7199 9.58997 17.7799Z" stroke={pathname === link ? "black" : "#868686"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  )
}