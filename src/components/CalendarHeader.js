import dayjs from "dayjs";
import React, { useContext } from "react";
import logo from "../assets/logo.png";
import GlobalContext from "../context/GlobalContext";
import CreateEventButton from "./CreateEventButton";
export default function CalendarHeader() {
  const { monthIndex, setMonthIndex } = useContext(GlobalContext);
  function handlePrevMonth() {
    setMonthIndex(monthIndex - 1);
  }
  function handleNextMonth() {
    setMonthIndex(monthIndex + 1);
  }
  function handleReset() {
    setMonthIndex(
      monthIndex === dayjs().month()
        ? monthIndex + Math.random()
        : dayjs().month()
    );
  }
  return (
    <header className="px-4 py-2 flex items-center justify-between bg-black text-white">
      <div className="flex items-center gap-1 lg:gap-3 ">
        <h2 className="text-sm lg:text-xl font-bold">
          {dayjs(new Date(dayjs().year(), monthIndex)).format(
            "MMMM YYYY"
          )}
        </h2>

       
          <span className="material-icons-outlined cursor-pointer " onClick={handlePrevMonth}>
            chevron_left
          </span>
        
        
          <span className="material-icons-outlined cursor-pointer " onClick={handleNextMonth}>
            chevron_right
          </span>
        
        <button
          onClick={handleReset}
          className="border rounded-full bg-black text-white py-2 px-4 mr-5 text-xs"
        >
          Today
        </button>
      </div>
      <CreateEventButton />
    </header>
  );
}
