import * as React from "react";
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!

let events = [
  { title: "event 1", date: "2022-02-01", display: "background" },
  { title: "event 2", date: "2022-02-02", display: "background" },
];

export default function Availability() {
  return (
    <FullCalendar
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      weekends={false}
      events={events}
    />
  );
}
