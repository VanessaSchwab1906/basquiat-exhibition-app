import "./BackButton.css";
import { Link } from "react-router-dom";

export default function BackButton() {
  return (
    <div>
      <Link to="/games">
        <button className="back-button">back</button>
      </Link>
    </div>
  );
}
