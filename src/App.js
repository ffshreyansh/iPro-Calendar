import React, { useState, useContext, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { getMonth } from "./util";
import CalendarHeader from "./components/CalendarHeader";
import Sidebar from "./components/Sidebar";
import Month from "./components/Month";
import GlobalContext from "./context/GlobalContext";
import EventModal from "./components/EventModal";
import CalendarPage from "./components/CalendarPage"; // Import the new component
import Home from "./components/Home";

function App() {
 
  return (
    <BrowserRouter>
    
          <Routes>
            <Route path="/calendar/:date" element={<CalendarPage />} />
            <Route path="/" element={<Home/>} />
          </Routes>
        
    </BrowserRouter>
  );
}

export default App;
