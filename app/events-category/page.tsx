"use client";
import React, { useState } from "react";
import EventsCard from "../components/ui/events-card";

function TabsInAGrid() {
  const [activeTab, setActiveTab] = useState("Upcoming");
  const [pastEvents, setPastEvents] = useState([1, 2, 3, 5, 6])
  const [upcomingEvents, setUpcomingEvents] = useState([1,2,3,])

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
          <span className="bg-gray-300 text-gray-500 text-sm ml-1 py-1 px-2 rounded-lg">
            {upcomingEvents.length}
          </span>
        </div>
        <div
          className={` p-2 cursor-pointer border-b-2 border-transparent ${
            activeTab === "Past" ? "border-b-green" : ""
          }`}
          onClick={() => openCity("Past")}
        >
          Past
          <span className="bg-gray-300 text-gray-500 text-sm ml-1 py-1 px-2 rounded-lg">
            {pastEvents.length}
          </span>
        </div>
      </div>

      <div
        id="Upcoming"
        className="city-content"
        style={{ display: activeTab === "Upcoming" ? "block" : "none" }}
      >
        {upcomingEvents.map((event, index) => (
          <EventsCard key={index} tag="upcoming"/>
        ))}
      </div>

      <div
        id="Past"
        className="city-content"
        style={{ display: activeTab === "Past" ? "block" : "none" }}
      >
        {pastEvents.map((event, index) => (
          <EventsCard key={index} tag="past"/>
        ))}
      </div>
    </div>
  );
}

export default TabsInAGrid;
