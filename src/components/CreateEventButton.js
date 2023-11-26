import React, { useContext } from "react";
import plusImg from "../assets/plus.svg";
import GlobalContext from "../context/GlobalContext";
export default function CreateEventButton() {
  const { setShowEventModal } = useContext(GlobalContext);
  return (
    <button
      onClick={() => setShowEventModal(true)}
      className="border px-2 lg:px-7 justify-center py-2 lg:py-3 rounded-full flex items-center bg-black text-white font-semibold"
    >
      <span className="text-xs">+ Add Event</span>
    </button>
  );
}
