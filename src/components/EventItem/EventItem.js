import "./EventItem.css";
import { AddToCalendarButton } from "add-to-calendar-button-react";

export default function EventItem() {
  return (
    <>
      <div className="calendar__event-wrapper">
        <li className="event-list-item">
          <span className="event-list-item__date">26</span>
          <div className="event-list-item__date-wrapper">
            <span className="event-list-item__month">May</span>
            <div className="event-list-item__day-time-wrapper">
              <span className="event-list-item__day">Thursday</span>
              <span className="event-list-item__time"> 7pm </span>
            </div>
          </div>
          <div className="event-list-item__body">
            <span class="event-list-item__tag">Vernissage</span>
            <h3>
              <a className="o-linklist__link">
                {" "}
                <span>Opening</span>
              </a>
            </h3>
            <div className="event-list-item__text">
              <p>
                with Julius von Bismarck, Nasan Tur, Böhler &amp;
                Orendt,&nbsp;Pnar Öğrenci und „Suddenly Wonderful“
              </p>
            </div>
          </div>
        </li>
      </div>

      <AddToCalendarButton
        name="[Reminder] Test the Add to Calendar Button"
        startDate="2023-05-28"
        startTime="10:15"
        endTime="23:30"
        timeZone="America/Los_Angeles"
        description="Check out the maybe easiest way to include Add to Calendar Buttons to your web projects:[br]→ [url]https://add-to-calendar-button.com/"
        options="'iCal'"
        buttonsList
        hideTextLabelButton
        buttonStyle="round"
        lightMode="bodyScheme"
        size="8|6|4"
      ></AddToCalendarButton>
    </>
  );
}
