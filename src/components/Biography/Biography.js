import "./Biography.css";
import { Chrono } from "react-chrono";
import { useEffect, useState } from "react";

const items = [
  {
    id: 1,
    title: "1960",
    cardTitle: "The Birth of a Visionary",
    cardDetailedText:
      "Basquiat is born on December 22, in Brooklyn, New York City, to a Haitian father and Puerto Rican mother.",
  },
  {
    id: 2,
    title: "1976",
    cardTitle: "From School to Streets",
    cardDetailedText:
      "Basquiat drops out of Edward R. Murrow High School in Brooklyn and begins his artistic journey as a street artist, using the pseudonym SAMO (Same Old Shit).",
  },
  {
    id: 3,
    title: "1978",
    cardTitle: "Graffiti Revolutionaries",
    cardDetailedText:
      "Basquiat gains recognition for his graffiti art in downtown Manhattan, collaborating with Al Diaz under the SAMO tag. They gain attention for their poetic and thought-provoking messages.",
  },
  {
    id: 4,
    title: "1980",
    cardTitle: "Canvas and Creativity",
    cardDetailedText:
      "Basquiat transitions from street art to canvas paintings, working in a loft in downtown Manhattan. He participates in The Times Square Show, a groundbreaking group exhibition showcasing emerging artists.",
  },
  {
    id: 5,
    title: "1981",
    cardTitle: "Unveiling a Distinct Vision",
    cardDetailedText:
      "Basquiat's first solo exhibition takes place at the Annina Nosei Gallery in New York, where he gains critical acclaim for his distinct style and subject matter.",
  },
  {
    id: 6,
    title: "1982",
    cardTitle: "Basquiat goes Global",
    cardDetailedText:
      "Basquiat's artworks are featured in major art exhibitions and galleries internationally, including the Documenta 7 exhibition in Kassel, Germany, and a solo exhibition at the Tony Shafrazi Gallery in New York.",
  },
  {
    id: 7,
    title: "1983",
    cardTitle: "Two Worlds Collide",
    cardDetailedText:
      "Basquiat collaborates with renowned artist Andy Warhol on a series of paintings, fusing their distinct styles and gaining widespread attention.",
  },
  {
    id: 8,
    title: "1985",
    cardTitle: "Breaking Boundaries ",
    cardDetailedText:
      "Basquiat's success continues to rise, and he becomes one of the youngest artists to be featured in a solo exhibition at the Whitney Museum of American Art in New York.",
  },
  {
    id: 9,
    title: "1987",
    cardTitle: "A Tragic Loss",
    cardDetailedText:
      "Tragically, on August 12, Basquiat passes away from a drug overdose at the age of 27, leaving behind a significant artistic legacy.",
  },
];

function ChronoTimeline() {
  const [highlightedItem, setHighlightedItem] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      console.log(scrollPosition);

      const items = document.querySelectorAll(".chrono__item");
      items.forEach((item) => {
        const itemPosition = item.offsetTop;
        const itemHeight = item.offsetHeight;

        if (
          scrollPosition >= itemPosition &&
          scrollPosition < itemPosition + itemHeight
        ) {
          const itemId = item.getAttribute("data-id");
          setHighlightedItem(itemId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const theme = {
    primary: "#000000",
    secondary: "",
    // cardBgColor: "#f9c1cd",
    // cardBgColor: "#8CABD9",
    cardBgColor: "#a3bce1",
    cardTitleColor: "#000000",
    cardSubtitleColor: "#000000",
    titleColor: "#000000",
    titleColorActive: "#000000",
  };

  return (
    <>
      <h1 className="biography__headline">biography</h1>
      <Chrono
        className="chrono"
        items={items}
        mode="VERTICAL_ALTERNATING"
        cardHeight={120}
        mediaHeight={200}
        slideShow
        slideItemDuration={1000}
        theme={theme}
        fontSizes={{
          cardTitle: "1.2rem",
          title: "1.5rem",
          cardText: "1.5rem",
        }}
      ></Chrono>
    </>
  );
}

export default ChronoTimeline;
