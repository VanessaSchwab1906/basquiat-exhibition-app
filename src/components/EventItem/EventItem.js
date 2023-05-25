import "./EventItem.css";
import { AddToCalendarButton } from "add-to-calendar-button-react";

export default function EventItem() {
  return (
    <>
      <div className="calendar__event-wrapper">
        <li className="event-list-item">
          <span className="event-list-item__date">15</span>
          <div className="event-list-item__date-wrapper">
            <span className="event-list-item__month">October</span>
            <div className="event-list-item__day-time-wrapper">
              <span className="event-list-item__day">Sunday</span>
              <span className="event-list-item__time">6:00 PM</span>
              <div className="event-list-item__text-wrapper">
                <div>
                  <h3>
                    <div className="event-list-itemt__headline">
                      <span>Vernissage</span>
                    </div>
                  </h3>
                  <p className="event-list-item__description">
                    Join us for the grand opening vernissage of the Jean-Michel
                    Basquiat exhibition. Explore the captivating artworks of
                    this iconic artist while enjoying live music and
                    refreshments.
                  </p>
                </div>
                <AddToCalendarButton
                  name="Vernissage: Royalty, Heroism and the Streets - Jean-Michel Basquiat "
                  startDate="2023-10-15"
                  startTime="19:00"
                  endTime="23:00"
                  timeZone="Europe/Berlin"
                  options="'iCal'"
                  buttonsList
                  hideTextLabelButton
                  buttonStyle="round"
                  lightMode="bodyScheme"
                  size="8|6|4"
                />
              </div>
            </div>
          </div>
        </li>
      </div>
      <div className="calendar__event-wrapper">
        <li className="event-list-item">
          <span className="event-list-item__date">2</span>
          <div className="event-list-item__date-wrapper">
            <span className="event-list-item__month">November</span>
            <div className="event-list-item__day-time-wrapper">
              <span className="event-list-item__day">Thursday</span>
              <span className="event-list-item__time">7:30 PM</span>
              <div className="event-list-item__text-wrapper">
                <div>
                  <h3>
                    <div className="event-list-itemt__headline">
                      <span>Discussion</span>
                    </div>
                  </h3>
                  <p className="event-list-item__description">
                    Join a panel discussion exploring the intersection of art,
                    activism, and addressing police violence. Renowned artists,
                    activists, and scholars will engage in an insightful
                    conversation on the role of art in raising awareness and
                    fostering change.
                  </p>
                </div>
                <AddToCalendarButton
                  name="Vernissage: Royalty, Heroism and the Streets - Jean-Michel Basquiat "
                  startDate="2023-11-2"
                  startTime="19:30"
                  endTime="23:00"
                  timeZone="Europe/Berlin"
                  options="'iCal'"
                  buttonsList
                  hideTextLabelButton
                  buttonStyle="round"
                  lightMode="bodyScheme"
                  size="8|6|4"
                />
              </div>
            </div>
          </div>
        </li>
      </div>
    </>
  );
}
