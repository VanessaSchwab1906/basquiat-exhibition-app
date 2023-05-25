import ImageSwapper from "../ImageSwapper/ImageSwapper";
import "./Home.css";

export default function Home() {
  return (
    <>
      <div className="home__visual">
        <ImageSwapper />
      </div>
      <h1 className="home__headline">
        royalty, heroism <br></br>and the streets
      </h1>
      <h2 className="home__headline-2">jean-michel basquiat</h2>
    </>
  );
}
