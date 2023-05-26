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
                    Join us for the grand opening of "Royalty, Heroism and the
                    Streets - Jean-Michel Basquiat". Explore the captivating
                    artworks of this iconic artist while enjoying live music and
                    refreshments.
                  </p>
                </div>
                <AddToCalendarButton
                  name="Vernissage: Royalty, Heroism and the Streets - Jean-Michel Basquiat"
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
                    Renowned artists, activists, and scholars will engage in an
                    insightful conversation on the role of art in raising
                    awareness and fostering change addressing police violence.
                  </p>
                </div>
                <AddToCalendarButton
                  name="Panel Discussion: Art and Activism Against Police Violence"
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
      <div className="calendar__event-wrapper">
        <li className="event-list-item">
          <span className="event-list-item__date">12</span>
          <div className="event-list-item__date-wrapper">
            <span className="event-list-item__month">November</span>
            <div className="event-list-item__day-time-wrapper">
              <span className="event-list-item__day">Sunday</span>
              <span className="event-list-item__time">1:00 PM</span>
              <div className="event-list-item__text-wrapper">
                <div>
                  <h3>
                    <div className="event-list-itemt__headline">
                      <span>Workshop</span>
                    </div>
                  </h3>
                  <p className="event-list-item__description">
                    Explore the techniques and concepts of abstract
                    expressionism inspired by Basquiat's works. Learn to unleash
                    your creativity through expressive brushstrokes and bold
                    color choices.
                  </p>
                </div>
                <AddToCalendarButton
                  name="Workshop: Abstract Expressionism"
                  startDate="2023-11-12"
                  startTime="13:00"
                  endTime="15:00"
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
          <span className="event-list-item__date">25</span>
          <div className="event-list-item__date-wrapper">
            <span className="event-list-item__month">November</span>
            <div className="event-list-item__day-time-wrapper">
              <span className="event-list-item__day">Saturday</span>
              <span className="event-list-item__time">2:00 PM</span>
              <div className="event-list-item__text-wrapper">
                <div>
                  <h3>
                    <div className="event-list-itemt__headline">
                      <span>Guided Tour</span>
                    </div>
                  </h3>
                  <p className="event-list-item__description">
                    Meet one curators for an exclusive guided tour through the
                    Basquiat exhibition. Gain unique perspectives on the
                    artworks, their significance, and the curation process.
                  </p>
                </div>
                <AddToCalendarButton
                  name="Guided Tour: Curator's Insights into 'Royalty, Heroism and the Streets - Jean-Michel Basquiat'"
                  startDate="2023-11-25"
                  startTime="14:00"
                  endTime="15:30"
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
          <span className="event-list-item__date">5</span>
          <div className="event-list-item__date-wrapper">
            <span className="event-list-item__month">December</span>
            <div className="event-list-item__day-time-wrapper">
              <span className="event-list-item__day">Tuesday</span>
              <span className="event-list-item__time">6:30 PM</span>
              <div className="event-list-item__text-wrapper">
                <div>
                  <h3>
                    <div className="event-list-itemt__headline">
                      <span>Movie</span>
                    </div>
                  </h3>
                  <p className="event-list-item__description">
                    Immerse yourself in the world of the artist through the
                    movie "Basquiat: The Radiant Child". Discover Basquiat's
                    life, influences, and the indelible mark he left on the art
                    world.
                  </p>
                </div>
                <AddToCalendarButton
                  name="Movie Screening: 'Basquiat: The Radiant Child'"
                  startDate="2023-12-05"
                  startTime="18:30"
                  endTime="20:30"
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
          <span className="event-list-item__date">8</span>
          <div className="event-list-item__date-wrapper">
            <span className="event-list-item__month">January</span>
            <div className="event-list-item__day-time-wrapper">
              <span className="event-list-item__day">Monday</span>
              <span className="event-list-item__time">6:30 PM</span>
              <div className="event-list-item__text-wrapper">
                <div>
                  <h3>
                    <div className="event-list-itemt__headline">
                      <span>Workshop</span>
                    </div>
                  </h3>
                  <p className="event-list-item__description">
                    Dive into the vibrant world of street art and graffiti
                    inspired by Basquiat's urban roots. Learn spray painting
                    techniques, stencil art, and create your own graffiti
                    masterpiece under the guidance of experienced street
                    artists.
                  </p>
                </div>
                <AddToCalendarButton
                  name="Workshop: Unleash Your Inner Graffiti Artist"
                  startDate="2024-01-08"
                  startTime="18:30"
                  endTime="20:30"
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
