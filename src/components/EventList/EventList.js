import "./EventList.css";
import { AddToCalendarButton } from "add-to-calendar-button-react";
import EventItem from "../EventItem/EventItem";

export default function Events() {
  return (
    <>
      <h1 className="events__headline">events</h1>
      <ul>
        <EventItem></EventItem>
      </ul>
    </>
  );
}
