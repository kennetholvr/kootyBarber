import * as React from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import interactionPlugin from "@fullcalendar/interaction"; // for selectable
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!

let events = [
  {
    title: "event1",
    start: "2022-02-01",
  },
  {
    title: "event2",
    start: "2022-02-05",
    end: "2022-02-07",
  },
  {
    title: "event3",
    start: "2022-02-09T12:30:00",
    allDay: false, // will make the time show
  },
];

function dateClick(info) {
  alert("Clicked on: " + info.dateStr);
  alert("Coordinates: " + info.jsEvent.pageX + "," + info.jsEvent.pageY);
  alert("Current view: " + info.view.type);
  // change the day's background color just for fun
  info.dayEl.style.backgroundColor = "red";
}

export default function Availability() {
  return (
    <FullCalendar
      plugins={[interactionPlugin, dayGridPlugin]}
      initialView="dayGridMonth"
      selectable={true}
      dateClick={dateClick}
      weekends={false}
      events={events}
      
    />
  );
}
