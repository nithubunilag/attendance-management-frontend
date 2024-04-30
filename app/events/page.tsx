"use client";
import { Multiselect } from "@/components/multiselect";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Logo } from "@/public/icons";
import { useEventApi } from "@/services/events/event-hooks";
import { MailIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function Events() {
  const [formData, setFormData] = useState(new FormData());
  const { handler } = useEventApi();

  const { push } = useRouter();

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    formData.set(name, value);
  };

  const handleEvent = async (e: any) => {
    console.log("Hey");
    e.preventDefault();

    try {
      await handler(formData);
    } catch (err) {
      console.log(err);
    }
  };

  const handleButtonStuff = () => {
    console.log("Hey");
  };

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
      <form
        onSubmit={handleEvent}
        className="h-[calc(100vh-100px)] mobile_sm:px-4 w-full flex justify-center items-center"
      >
        {/* <GenericForm fields={fields}/> */}
        <div className="mx-auto max-h-screen overflow-y-auto">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-semi-bold text-[#101928]">Events</h1>
          </div>
          <div className="">
            <div className="relative">
              <Label htmlFor="name" className="text-[101928]">
                Name
              </Label>
              <Input
                className="pr-10"
                onChange={handleChange}
                id="name"
                placeholder="Tobiloba's Bitcoin party"
                required
                type="text"
              />
            </div>
            <div className="relative ">
              <Label htmlFor="description" className="text-[101928]">
                Description
              </Label>
              <Input
                className="pr-10"
                id="description"
                onChange={handleChange}
                required
                type={"text"}
              />
            </div>
            <div className="relative ">
              <Label htmlFor="limit" className="text-[101928]">
                Limit
              </Label>
              <Input
                className="pr-10"
                id="limit"
                onChange={handleChange}
                required
                type={"text"}
              />
            </div>
            <div className="relative">
              <Label htmlFor="date" className="text-[101928]">
                Date
              </Label>
              <Input
                className="pr-10"
                id="date"
                onChange={handleChange}
                required
                type={"date"}
              />
            </div>
            <div className="relative ">
              <Label htmlFor="time" className="text-[101928]">
                Time
              </Label>
              <Input
                className="pr-10"
                id="time"
                onChange={handleChange}
                required
                type={"text"}
              />
            </div>
            <div className="relative">
              <Label htmlFor="creatorId" className="text-[101928]">
                Creator Id
              </Label>
              <Input
                className="pr-10"
                id="creatorId"
                onChange={handleChange}
                required
                type={"text"}
              />
            </div>
            <div className="relative">
              <Label htmlFor="creatorType" className="text-[101928]">
                Creator Type
              </Label>
              <Input
                className="pr-10"
                id="creatorType"
                onChange={handleChange}
                required
                type={"text"}
              />
            </div>
            <div className="relative ">
              <Label htmlFor="coverPhoto" className="text-[101928]">
                Creator Photo
              </Label>
              <Input
                className="pr-10"
                id="coverPhoto"
                onChange={(e: any) => formData.set("file", e.target.files[0])}
                required
                type={"file"}
              />
            </div>

            <Button
              size="lg"
              // onClick={handleButtonStuff}
              className="w-full drop-shadow-xlselect bg-[#099137] py-4"
              type="submit"
            >
              Create Event
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Events;
