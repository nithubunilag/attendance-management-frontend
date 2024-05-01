"use client"

import { usePathname } from 'next/navigation';
import React from 'react'

type Props = {
  link?: string;
};

export const InternsIcon = ({ link }: Props) => {
  const pathname = usePathname();

  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.5 19.5H14.5" stroke={pathname === link ? "black" : "#868686"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M16.5 21.5V17.5" stroke={pathname === link ? "black" : "#868686"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M12.1601 10.87C12.0601 10.86 11.9401 10.86 11.8301 10.87C9.4501 10.79 7.5601 8.84 7.5601 6.44C7.5501 3.99 9.5401 2 11.9901 2C14.4401 2 16.4301 3.99 16.4301 6.44C16.4301 8.84 14.5301 10.79 12.1601 10.87Z" stroke={pathname === link ? "black" : "#868686"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M11.99 21.8099C10.17 21.8099 8.36004 21.3499 6.98004 20.4299C4.56004 18.8099 4.56004 16.1699 6.98004 14.5599C9.73004 12.7199 14.24 12.7199 16.99 14.5599" stroke={pathname === link ? "black" : "#868686"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  )
}