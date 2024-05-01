"use client";
import React, { useState } from "react";

function TabsInAGrid() {
  const [activeTab, setActiveTab] = useState("Upcoming");

  const openCity = (cityName: string) => {
    setActiveTab(cityName);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex">
        <div
          className={`p-2 cursor-pointer border-b-2 border-transparent hover:border-amber-green ${
            activeTab === "Upcoming" ? "border-green" : ""
          }`}
          onClick={() => openCity("Upcoming")}
        >
          Upcoming
          <span className="bg-gray-300 text-gray-500 text-sm ml-1 p-1 rounded-lg">
            23
          </span>
        </div>
        <div
          className={` p-2 cursor-pointer border-b-2 border-transparent hover:border-amber-green ${
            activeTab === "Past" ? "border-green" : ""
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
        Upcoming Events
        {/* Render events card here */}
      </div>

      <div
        id="Past"
        className="city-content"
        style={{ display: activeTab === "Past" ? "block" : "none" }}
      >
        Past Events
        {/* Render events card here */}
      </div>
    </div>
  );
}

export default TabsInAGrid;
