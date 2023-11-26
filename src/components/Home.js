import React, { useState, useContext, useEffect } from "react";
import "../App.css";
import { getMonth } from "../util";
import CalendarHeader from "./CalendarHeader";
import Sidebar from "./Sidebar";
import Month from "./Month";
import GlobalContext from "../context/GlobalContext";

import EventModal from "./EventModal";
function Home() {
    const [currenMonth, setCurrentMonth] = useState(getMonth());
    const { monthIndex, showEventModal } = useContext(GlobalContext);

    useEffect(() => {
        setCurrentMonth(getMonth(monthIndex));
    }, [monthIndex]);

    return (
        <>
            {showEventModal && <EventModal />}

            <div className="h-screen flex flex-col">
                <CalendarHeader />
                <div className="flex flex-col lg:flex-row lg:flex-1">
                    <Sidebar />
                    <Month month={currenMonth} />
                </div>

            </div>
        </>
    );
}

export default Home;