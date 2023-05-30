import "./Biography.css";
import { Chrono } from "react-chrono";

const customContent = [
  <div className="timeline__wrapper">
    <h2 className="timline__headline">the birth of a visionary</h2>
    <p className="timline__text">
      Basquiat is born on December 22, in Brooklyn, New York City, to a Haitian
      father and Puerto Rican mother.
    </p>
  </div>,
  <div className="timeline__wrapper">
    <h2 className="timline__headline">from school to streets</h2>
    <p className="timline__text">
      Basquiat drops out of Edward R. Murrow High School in Brooklyn and begins
      his artistic journey as a street artist, using the pseudonym SAMO (Same
      Old Shit).
    </p>
  </div>,
  <div className="timeline__wrapper">
    <h2 className="timline__headline">graffiti revolutionaries</h2>
    <p className="timline__text">
      Basquiat gains recognition for his graffiti art in downtown Manhattan,
      collaborating with Al Diaz under the SAMO tag. They gain attention for
      their poetic and thought-provoking messages.
    </p>
  </div>,
  <div className="timeline__wrapper">
    <h2 className="timline__headline">canvas and creativity</h2>
    <p className="timline__text">
      Basquiat transitions from street art to canvas paintings, working in a
      loft in downtown Manhattan. He participates in The Times Square Show, a
      groundbreaking group exhibition showcasing emerging artists.
    </p>
  </div>,
  <div className="timeline__wrapper">
    <h2 className="timline__headline">unveiling a distinct vision</h2>
    <p className="timline__text">
      Basquiat's first solo exhibition takes place at the Annina Nosei Gallery
      in New York, where he gains critical acclaim for his distinct style and
      subject matter.
    </p>
  </div>,
  <div className="timeline__wrapper">
    <h2 className="timline__headline">basquiat goes global</h2>
    <p className="timline__text">
      Basquiat's artworks are featured in major art exhibitions and galleries
      internationally, including the Documenta 7 exhibition in Kassel, Germany,
      and a solo exhibition at the Tony Shafrazi Gallery in New York.
    </p>
  </div>,
  <div className="timeline__wrapper">
    <h2 className="timline__headline">two worlds collide</h2>
    <p className="timline__text">
      Basquiat collaborates with renowned artist Andy Warhol on a series of
      paintings, fusing their distinct styles and gaining widespread attention.
    </p>
  </div>,
  <div className="timeline__wrapper">
    <h2 className="timline__headline">breaking boundarie</h2>
    <p className="timline__text">
      Basquiat's success continues to rise, and he becomes one of the youngest
      artists to be featured in a solo exhibition at the Whitney Museum of
      American Art in New York.
    </p>
  </div>,
  <div className="timeline__wrapper">
    <h2 className="timline__headline">a tragic loss</h2>
    <p className="timline__text">
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
  const theme = {
    primary: "#000000",
    secondary: "",
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
          title: "2rem",
        }}
      >
        {customContent}
      </Chrono>
    </>
  );
}

export default ChronoTimeline;
