import { useState } from "react";
import "./ExhibitionMap.css";
import darkblueMap from "../../assets/images/map/map-darkblue-colors-clear.JPG";
import darkblueMap2 from "../../assets/images/map/map-darkblue-colors.JPG";
import darkblueMap3 from "../../assets/images/map/map-darkblue.JPG";
import lightblueMap from "../../assets/images/map/map-lightblue-colors.JPG";
import lightblueMap2 from "../../assets/images/map/map-lightblue.JPG";
import orangeMap from "../../assets/images/map/map-orange.JPG";
import pinkMap from "../../assets/images/map/map-pink.JPG";
import yellowMap from "../../assets/images/map/map-yellow.JPG";

export default function ExhibitionMap() {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleLocationClick = (location) => {
    setSelectedLocation(location);
  };

  const exhibitionLocations = [
    {
      id: 1,
      name: "1",
      title: "Introduction",
      description:
        "Begin the exhibition with an introductory section that provides an overview of Basquiat's life, artistic career, and major influences. Include a brief biography and highlight key milestones in his artistic journey.",
      // img: require("../../assets/images/exhibition/room1.jpg"),
      x: 50,
      y: 130,
    },
    {
      id: 2,
      name: "2",
      title: "Early Influences",
      description:
        "Explore the early influences on Basquiat's work, such as his exposure to graffiti, street art, and urban culture in New York City. Include early sketches, photographs, and other materials that showcase his development as an artist.",
      // img: require("../../assets/images/exhibition/room1.jpg"),
      x: 150,
      y: 0,
    },
    {
      id: 3,
      name: "3",
      title: "Themes and Motifs",
      description:
        "Dedicate sections to explore the recurring themes and motifs in Basquiat's work. This can include sections on social commentary, cultural references, personal identity, and art historical influences. Display a variety of artworks that exemplify each theme, accompanied by informative panels.",
      // img: require("../../assets/images/exhibition/room1.jpg"),
      x: 240,
      y: 60,
    },
    {
      id: 4,
      name: "4",
      title: "Collaborations and Connections",
      description:
        "Highlight Basquiat's collaborations with other artists, musicians, and cultural figures. Include artworks and archival materials related to his collaborations with Andy Warhol, Keith Haring, and other prominent artists of the time.",
      // img: require("../../assets/images/exhibition/room1.jpg"),
      x: 400,
      y: 0,
    },
    {
      id: 5,
      name: "5",
      title: "Techniques and Materials",
      description:
        "Offer insight into Basquiat's artistic techniques and materials. Include examples of his use of mixed media, collage, text, and experimental approaches. Display sketches, preparatory drawings, and samples of the materials he employed.",
      // img: require("../../assets/images/exhibition/room1.jpg"),
      x: 350,
      y: 125,
    },
    {
      id: 6,
      name: "6",
      title: "Cultural Context",
      description:
        "Provide a section that explores the cultural and historical context in which Basquiat's work emerged. Discuss the socio-political climate of the 1980s, particularly in relation to race, identity, and urban life. Display artworks alongside relevant photographs, news clippings, and contextual information.",
      // img: require("../../assets/images/exhibition/room1.jpg"),
      x: 290,
      y: 170,
    },
    {
      id: 7,
      name: "7",
      title: "Legacy and Impact",
      description:
        "Conclude the exhibition by examining Basquiat's enduring legacy and his impact on contemporary art. Highlight the influence he has had on subsequent generations of artists and explore his continuing relevance.",
      // img: require("../../assets/images/exhibition/room1.jpg"),
      x: 200,
      y: 200,
    },
  ];

  return (
    <>
      <h1 className="exhibition__headline">exhibition</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="exhibition__container" style={{ position: "relative" }}>
          <img
            src={darkblueMap}
            alt="Exhibition Map"
            className="exhibition__map"
            style={{ width: "450px" }}
          />
          {exhibitionLocations.map((location) => (
            <div
              key={location.id}
              className={`location ${
                selectedLocation && selectedLocation.id === location.id
                  ? "selected"
                  : ""
              }`}
              style={{
                top: `${location.y}px`,
                left: `${location.x}px`,
                position: "absolute",
              }}
              onClick={() => handleLocationClick(location)}
            >
              <div className="location-wrapper">
                <span className="exhibition__location">{location.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedLocation && (
        <div className="exhibition__details">
          <h3>{selectedLocation.name}</h3>
          <h4>{selectedLocation.title}</h4>
          <p>{selectedLocation.description}</p>
        </div>
      )}
    </>
  );
}
