"use client";
import Search from "@/app/components/ui/Search";
import SideBar from "@/app/components/ui/SideBar";
import { Multiselect } from "@/components/multiselect";
import Link from "next/link";
import { AddIcon, Logo } from "@/public/icons";
import { Button } from "@/components/ui/button";
import { EventsImage_1 } from "@/public/images";
import EventsCategory from "@/app/events-category/page";
import { useState } from "react";

export default function Events() {
  const [events, setEvents] = useState([]);
  return (
    <div>
      <header className="">
        <div className="py-4 mobile_lg:px-4 px-10 flex justify-between">
          <Link href="/">
            <Logo />
          </Link>

          <div className="block">
            <Multiselect />
          </div>
        </div>
      </header>
      <main className="flex min-h-screen gap-4 px-10">
        <div className="w-[10%]">
          <SideBar />
        </div>

        {events.length > 0 ? (
          <EventsCategory />
        ) : (
          <div className="w-[90%]">
            {/* <div className='mx-auto'>
                                <Search />
                            </div> */}

            <div className="py-6">
              <h1 className="text-2xl">Welcome Admin!</h1>
              <div className="text-2xl flex gap-4">
                <h1>Your next event is a click away</h1>
                <Link href="/events-form">
                  <Button size="lg" variant="nithub">
                    <span>
                      <AddIcon />
                    </span>
                    Create event
                  </Button>
                </Link>
              </div>
              <div className="w-80 h-70 mt-10 items-center mx-auto">
                <EventsImage_1 />
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
