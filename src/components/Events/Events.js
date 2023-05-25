import "./Events.css";
import { AddToCalendarButton } from "add-to-calendar-button-react";

export default function Events() {
  return (
    <>
      <h1 className="events__headline">events</h1>
      <div class="calendar__event-wrapper">
        <div class="event-list-item event-list-item__row">
          <time class="event-list-item__left">
            <span class="event-list-item__date">25</span>
            <div class="event-list-item__date-wrapper">
              <span class="event-list-item__month">Mai</span>
              <div class="event-list-item__day-time-wrapper">
                <span class="event-list-item__day">Donnerstag</span>
                <span class="event-list-item__time"> 19 Uhr </span>
              </div>
            </div>
          </time>
          <div class="event-list-item__body">
            <span class="event-list-item__tag">Vernissage</span>
            <h3>
              <a class="o-linklist__link">
                {" "}
                <span>Eröffnung</span>
              </a>
            </h3>
            <div class="event-list-item__text">
              <p>
                mit Julius von Bismarck, Nasan Tur, Böhler &amp;
                Orendt,&nbsp;Pnar Öğrenci und „Suddenly Wonderful“
              </p>
            </div>
          </div>
        </div>
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
