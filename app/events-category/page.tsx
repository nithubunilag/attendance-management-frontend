"use client";
import React, { useState } from "react";
import EventsCard from "../components/ui/events-card";

function TabsInAGrid() {
  const [activeTab, setActiveTab] = useState("Upcoming");

  const openCity = (cityName: string) => {
    setActiveTab(cityName);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex border-b border-b-gray-400 ">
        <div
          className={`p-2 cursor-pointer border-b-2 border-transparent   ${
            activeTab === "Upcoming" ? "border-b-green" : ""
          }`}
          onClick={() => openCity("Upcoming")}
        >
          Upcoming
          <span className="bg-gray-300 text-gray-500 text-sm ml-1 p-1 rounded-lg">
            23
          </span>
        </div>
        <div
          className={` p-2 cursor-pointer border-b-2 border-transparent ${
            activeTab === "Past" ? "border-b-green" : ""
          }`}
          onClick={() => openCity("Past")}
        >
          Past
          <span className="bg-gray-300 text-gray-500 text-sm ml-1 p-1 rounded-lg">
            23
          </span>
        </div>
      </div>

      <div
        id="Upcoming"
        className="city-content"
        style={{ display: activeTab === "Upcoming" ? "block" : "none" }}
      >
        <EventsCard />
        <EventsCard />
      </div>

      <div
        id="Past"
        className="city-content"
        style={{ display: activeTab === "Past" ? "block" : "none" }}
      >
        <EventsCard />
        <EventsCard />
      </div>
    </div>
  );
}

export default TabsInAGrid;
