import "./MemoryGame.css";
import BackButton from "../BackButton/BackButton";
import React, { useState, useEffect } from "react";
import shuffle from "lodash/shuffle";
import crown from "../../assets/images/memory/crown.JPG";
import human from "../../assets/images/memory/human.JPG";
import samo from "../../assets/images/memory/samo.JPG";
import self from "../../assets/images/memory/self.JPG";
import skull from "../../assets/images/memory/skull.JPG";
import trex from "../../assets/images/memory/trex.JPG";

const symbols = [crown, human, samo, self, skull, trex];

const MemoryGame = () => {
  const [cards, setCards] = useState([]);
  const [moves, setMoves] = useState(0);
  const [matches, setMatches] = useState([]);
  const [selected, setSelected] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const newCards = symbols
      .concat(symbols)
      .map((symbol, index) => ({ symbol, id: index, isFlipped: false }));
    setCards(shuffle(newCards));
  }, []);

  const handleCardClick = (index) => {
    const newCards = [...cards];
    const card = newCards[index];

    if (selected.length === 2 || matches.includes(index)) return;

    card.isFlipped = true;
    setSelected((prev) => [...prev, { index, symbol: card.symbol }]);
    setCards(newCards);

    if (selected.length === 1) {
      setMoves((prev) => prev + 1);

      if (selected[0].symbol === card.symbol) {
        setMatches((prev) => [...prev, selected[0].index, index]);
        setSelected([]);
      } else {
        setTimeout(() => {
          const resetCards = [...cards];
          resetCards[selected[0].index].isFlipped = false;
          resetCards[index].isFlipped = false;
          setCards(resetCards);
          setSelected([]);
        }, 1000);
      }
    }
  };

  const handleRestartClick = () => {
    const newCards = [...cards];
    newCards.forEach((card) => (card.isFlipped = false));
    setCards(shuffle(newCards));
    setMoves(0);
    setMatches([]);
    setSelected([]);
    setShowModal(false);
  };

  const allMatched = matches.length === cards.length;

  return (
    <div>
      <h1 className="memory__headline">memory game</h1>
      <BackButton />
      {/* <p>Moves: {moves}</p> */}
      <div className="card-grid">
        {cards.map((card, index) => (
          <div
            key={card.id}
            className={`card ${card.isFlipped ? "flipped" : ""} ${
              matches.includes(index) ? "matched" : ""
            }`}
            onClick={() => handleCardClick(index)}
          >
            <div className="card-inner">
              <div className="card-front"> </div>
              <div className="card-back">
                <img src={card.symbol} alt="Card" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <p className="moves-counter">moves: {moves}</p>

      {allMatched && (
        <div className="modal">
          <p className="congrats-message">
            Congratulations, you won in <span className="moves">{moves}</span>{" "}
            moves!
          </p>
        </div>
      )}
      <button onClick={handleRestartClick} className="restart-button">
        restart
      </button>
    </div>
  );
};

export default MemoryGame;
