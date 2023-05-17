import { useState } from "react";
import "./Exhibition.css";
import map from "../../assets/images/map/demo_map.jpg";

export default function Exhibition() {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleLocationClick = (location) => {
    setSelectedLocation(location);
  };

  const exhibitionLocations = [
    {
      id: 1,
      name: "room 1",
      title: "Introduction",
      description:
        "Begin the exhibition with an introductory section that provides an overview of Basquiat's life, artistic career, and major influences. Include a brief biography and highlight key milestones in his artistic journey.",
      // img: require("../../assets/images/exhibition/room1.jpg"),
      x: 100,
      y: 135,
    },
    {
      id: 2,
      name: "room 2",
      title: "Early Influences",
      description:
        "Explore the early influences on Basquiat's work, such as his exposure to graffiti, street art, and urban culture in New York City. Include early sketches, photographs, and other materials that showcase his development as an artist.",
      // img: require("../../assets/images/exhibition/room1.jpg"),
      x: 100,
      y: 30,
    },
    {
      id: 2,
      name: "room 3",
      title: "Themes and Motifs",
      description:
        "Dedicate sections to explore the recurring themes and motifs in Basquiat's work. This can include sections on social commentary, cultural references, personal identity, and art historical influences. Display a variety of artworks that exemplify each theme, accompanied by informative panels.",
      // img: require("../../assets/images/exhibition/room1.jpg"),
      x: 500,
      y: 30,
    },
    {
      id: 2,
      name: "room 3",
      title: "Themes and Motifs",
      description:
        "Dedicate sections to explore the recurring themes and motifs in Basquiat's work. This can include sections on social commentary, cultural references, personal identity, and art historical influences. Display a variety of artworks that exemplify each theme, accompanied by informative panels.",
      // img: require("../../assets/images/exhibition/room1.jpg"),
      x: 500,
      y: 30,
    },
  ];

  return (
    <>
      <h1 className="exhibition__headline">exhibition</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="exhibition__container" style={{ position: "relative" }}>
          <img
            src={map}
            alt="Exhibition Map"
            className="exhibition__map"
            style={{ maxWidth: "100%" }}
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
