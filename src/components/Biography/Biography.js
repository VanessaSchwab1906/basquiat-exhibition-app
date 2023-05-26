import "./Biography.css";
import { Chrono } from "react-chrono";
import { useEffect, useState } from "react";

const customContent = [
  <div>
    <h2>The Birth of a Visionary</h2>
    <p>
      Basquiat is born on December 22, in Brooklyn, New York City, to a Haitian
      father and Puerto Rican mother.
    </p>
  </div>,
  <div>
    <h2>From School to Streets</h2>
    <p>
      Basquiat drops out of Edward R. Murrow High School in Brooklyn and begins
      his artistic journey as a street artist, using the pseudonym SAMO (Same
      Old Shit).
    </p>
  </div>,
  <div>
    <h2>Graffiti Revolutionaries</h2>
    <p>
      Basquiat gains recognition for his graffiti art in downtown Manhattan,
      collaborating with Al Diaz under the SAMO tag. They gain attention for
      their poetic and thought-provoking messages.
    </p>
  </div>,
  <div>
    <h2>Canvas and Creativity</h2>
    <p>
      Basquiat transitions from street art to canvas paintings, working in a
      loft in downtown Manhattan. He participates in The Times Square Show, a
      groundbreaking group exhibition showcasing emerging artists.
    </p>
  </div>,
  <div>
    <h2>Unveiling a Distinct Vision</h2>
    <p>
      Basquiat's first solo exhibition takes place at the Annina Nosei Gallery
      in New York, where he gains critical acclaim for his distinct style and
      subject matter.
    </p>
  </div>,
  <div>
    <h2>Basquiat goes Global</h2>
    <p>
      Basquiat's artworks are featured in major art exhibitions and galleries
      internationally, including the Documenta 7 exhibition in Kassel, Germany,
      and a solo exhibition at the Tony Shafrazi Gallery in New York.
    </p>
  </div>,
  <div>
    <h2>Two Worlds Collide</h2>
    <p>
      Basquiat collaborates with renowned artist Andy Warhol on a series of
      paintings, fusing their distinct styles and gaining widespread attention.
    </p>
  </div>,
  <div>
    <h2>Breaking Boundarie</h2>
    <p>
      Basquiat's success continues to rise, and he becomes one of the youngest
      artists to be featured in a solo exhibition at the Whitney Museum of
      American Art in New York.
    </p>
  </div>,
  <div>
    <h2>A Tragic Loss</h2>
    <p>
      Tragically, on August 12, Basquiat passes away from a drug overdose at the
      age of 27, leaving behind a significant artistic legacy.
    </p>
  </div>,
];

const items = [
  {
    title: "1960",
  },
  {
    title: "1976",
  },
  {
    title: "1978",
  },
  {
    title: "1980",
  },
  {
    title: "1981",
  },
  {
    title: "1982",
  },
  {
    title: "1983",
  },
  {
    title: "1985",
  },
  {
    title: "1987",
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
      >
        {customContent}
      </Chrono>
    </>
  );
}

export default ChronoTimeline;
