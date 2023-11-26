import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import GlobalContext from "../context/GlobalContext";

function CalendarPage() {
  const { date } = useParams();
  const { filteredEvents } = useContext(GlobalContext);

  // Convert the date parameter to a timestamp
  const timestampForDate = new Date(date).setHours(0, 0, 0, 0);

  // Filter events for the specified date (ignoring time component)
  const eventsForDate = filteredEvents.filter(
    (event) => new Date(event.day).setHours(0, 0, 0, 0) === timestampForDate
  );

  return (
    <div className="bg-black w-full h-screen p-4">
    <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:m-0 w-full md:w-80 lg:w-96 bg-lightB text-white p-10 rounded-2xl">
      <h2 className="text-2xl font-bold">Events for <span className="bg-yG text-black px-3 rounded-md">{date}</span></h2>
      <ul className="mt-10">
        {eventsForDate.map((event) => (
          <li key={event.id}>
            <strong >Title:</strong>
            <p className="text-lg mb-4"> {event.title}</p>
            <strong >Description:</strong>
            <p className="mb-4"> {event.description}</p>
            {/* Include other event information */}
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
}

export default CalendarPage;
