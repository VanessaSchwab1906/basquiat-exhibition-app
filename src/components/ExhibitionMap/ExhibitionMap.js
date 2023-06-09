import { useState } from "react";
import "./ExhibitionMap.css";
import map from "../../assets/images/map/finalMap.png";
import skull from "../../assets/images/map/sample_3.png";
import cadillac from "../../assets/images/map/sample_5.png";
import hollywood from "../../assets/images/map/sample_3.png";
import heads from "../../assets/images/map/sample_4.png";
import defacement from "../../assets/images/map/sample_5.png";
import profit from "../../assets/images/map/sample_6.png";
import charles from "../../assets/images/map/sample_7.png";

export default function ExhibitionMap() {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [isImageExpanded, setIsImageExpanded] = useState(false);

  const handleLocationClick = (location) => {
    setSelectedLocation(location);
  };
  const handleImageClick = () => {
    setIsImageExpanded(!isImageExpanded);
  };

  const exhibitionLocations = [
    {
      id: 1,
      name: "1",
      title: "introduction",
      description:
        "Overview of Basquiat's life, artistic career, and major influences, including a brief biography and key milestones in his artistic journey.",
      img: skull,
      info: "untitled (skull), 1981",
      x: 50,
      y: 130,
    },
    {
      id: 2,
      name: "2",
      title: "early influences",
      description:
        "Explore the early influences on Basquiat's work, such as his exposure to graffiti, street art, and urban culture in New York City.",
      img: cadillac,
      info: "untitled (cadillac moon), 1981",
      x: 150,
      y: 5,
    },
    {
      id: 3,
      name: "3",
      title: "themes and motifs",
      description:
        "Explore the recurring themes, including social commentary, cultural references, personal identity and art historical influences of Basquiat.",
      img: hollywood,
      info: "hollywood africans, 1983",
      x: 240,
      y: 60,
    },
    {
      id: 4,
      name: "4",
      title: "collaborations and connections",
      description:
        "Explore Basquiat's collaborations with Andy Warhol, Keith Haring and other prominent artists of the time.",
      img: heads,
      info: "doz cabezas, 1982",
      x: 400,
      y: 5,
    },
    {
      id: 5,
      name: "5",
      title: "techniques and materials",
      description:
        "Insight into Basquiat's artistic techniques and materials, including examples of his use of mixed media, collage, text, and experimental approaches.",
      img: defacement,
      info: "defacement, 1983",
      x: 350,
      y: 125,
    },
    {
      id: 6,
      name: "6",
      title: "cultural context",
      description:
        "Explore the cultural and historical context in which Basquiat's work emerged. Get to know more about the socio-political climate of the 1980s, particularly in relation to race, identity, and urban life.",
      img: profit,
      info: "profit i, 1982",
      x: 290,
      y: 170,
    },
    {
      id: 7,
      name: "7",
      title: "legacy and impact",
      description:
        "Explore Basquiat's enduring legacy and his impact on contemporary art. See his influence on subsequent generations of artists and explore his continuing relevance.",
      img: charles,
      info: "charles the first, 1982",
      x: 200,
      y: 200,
    },
  ];

  return (
    <>
      <h1 className="exhibition__headline">exhibition</h1>
      <p className="exhibition__intro">
        click the numbers to explore the exhibition!
      </p>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="exhibition__container" style={{ position: "relative" }}>
          <img
            src={map}
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
          <h3 className="exhibition__details-name">{selectedLocation.name}</h3>
          <h4 className="exhibition__details-title">
            {selectedLocation.title}
          </h4>
          <p className="exhibition__details-text">
            {selectedLocation.description}
          </p>
          <p className="exhibition__details-info">
            highlight: {selectedLocation.info}
          </p>
          <div className="exhibition__details-imagecontainer">
            {isImageExpanded ? (
              <div className="exhibition__pop-up">
                <span
                  className="exhibition__close-button"
                  onClick={handleImageClick}
                >
                  x
                </span>
                <img
                  className="exhibition__expanded-artwork"
                  src={selectedLocation.img}
                  alt={selectedLocation.info}
                />
              </div>
            ) : (
              <div
                className="exhibition__collapsed-image"
                onClick={handleImageClick}
              >
                <img
                  className="exhibition__collapsed-artwork"
                  src={selectedLocation.img}
                  alt={selectedLocation.info}
                />
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
