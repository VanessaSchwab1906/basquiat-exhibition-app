import "./Games.css";
import { Link } from "react-router-dom";

function Games() {
  return (
    <>
      <div className="container">
        <h1 className="games__headline">games</h1>
        <Link to="/built-your-own-basquiat" className="box__link">
          <div className="box">
            <span className="box__decoration">A</span>
            create <br />
            your own basquiat
          </div>
        </Link>
        <Link to="/memory" className="box__link">
          <div className="box">
            <span className="box__decoration">F</span>
            memory <br /> game
          </div>
        </Link>
      </div>
    </>
  );
}

export default Games;
