import React from "react";
import CreateEventButton from "./CreateEventButton";
import SmallCalendar from "./SmallCalendar";
import Labels from "./Labels";
export default function Sidebar() {
  return (
    <aside className="p-5 pt-0 w-full lg:w-1/4 bg-black text-white">
      {/* <CreateEventButton /> */}
      <SmallCalendar />
      <Labels />
    </aside>
  );
}
