import "./Biography.css";
import { Chrono } from "react-chrono";
import { useEffect, useState } from "react";

const items = [
  {
    title: "1960",
    cardTitle: "The Birth of a Visionary",
    cardDetailedText:
      "Basquiat is born on December 22, in Brooklyn, New York City, to a Haitian father and Puerto Rican mother.",
  },
  {
    title: "1976",
    cardTitle: "From School to Streets",
    cardDetailedText:
      "Basquiat drops out of Edward R. Murrow High School in Brooklyn and begins his artistic journey as a street artist, using the pseudonym SAMO (Same Old Shit).",
  },
  {
    title: "1978",
    cardTitle: "Graffiti Revolutionaries",
    cardDetailedText:
      "Basquiat gains recognition for his graffiti art in downtown Manhattan, collaborating with Al Diaz under the SAMO tag. They gain attention for their poetic and thought-provoking messages.",
  },
  {
    title: "1980",
    cardTitle: "Canvas and Creativity",
    cardDetailedText:
      "Basquiat transitions from street art to canvas paintings, working in a loft in downtown Manhattan. He participates in The Times Square Show, a groundbreaking group exhibition showcasing emerging artists.",
  },
  {
    title: "1981",
    cardTitle: "Unveiling a Distinct Vision",
    cardDetailedText:
      "Basquiat's first solo exhibition takes place at the Annina Nosei Gallery in New York, where he gains critical acclaim for his distinct style and subject matter.",
  },
  {
    title: "1982",
    cardTitle: "Basquiat goes Global",
    cardDetailedText:
      "Basquiat's artworks are featured in major art exhibitions and galleries internationally, including the Documenta 7 exhibition in Kassel, Germany, and a solo exhibition at the Tony Shafrazi Gallery in New York.",
  },
  {
    title: "1983",
    cardTitle: "Two Worlds Collide",
    cardDetailedText:
      "Basquiat collaborates with renowned artist Andy Warhol on a series of paintings, fusing their distinct styles and gaining widespread attention.",
  },
  {
    title: "1985",
    cardTitle: "Breaking Boundaries ",
    cardDetailedText:
      "Basquiat's success continues to rise, and he becomes one of the youngest artists to be featured in a solo exhibition at the Whitney Museum of American Art in New York.",
  },
  {
    title: "1987",
    cardTitle: "A Tragic Loss",
    cardDetailedText:
      "Tragically, on August 12, Basquiat passes away from a drug overdose at the age of 27, leaving behind a significant artistic legacy.",
  },
];

function ChronoTimeline() {
  return (
    <>
      <h1 className="biography__headline">biography</h1>
      <div className="chrono">
        <Chrono
          items={items}
          mode="VERTICAL_ALTERNATING"
          cardHeight={120}
          mediaHeight={200}
          slideShow
          slideItemDuration={2000}
          theme={{
            primary: "#000000", // primary color of timeline
            secondary: "", // secondary color of timeline
            cardBgColor: "#f9c1cd", // backgroundcolor of card
            cardTitleColor: "#000000",
            cardSubtitleColor: "#000000", // subtitle color of card
            titleColor: "#000000", // title color of card
            titleColorActive: "#000000",
          }}
          fontSizes={{
            cardTitle: "1.3rem",
            title: "2rem",
            cardText: "1.5rem",
          }}
        />
      </div>
    </>
  );
}

export default ChronoTimeline;
