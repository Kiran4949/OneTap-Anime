import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Genres = () => {
  return (
    <div className="genres-background">
      <div className="genres-container">
        <h1>Genre</h1>

        <div className="button-row">
          <button className="button-33">
            <Link to="/genre/Action" style={{ color: "inherit", textDecoration: "none" }}>
              Action
            </Link>
          </button>

          <button className="button-33">
            <Link to="/genre/adventure" style={{ color: "inherit", textDecoration: "none" }}>
              Adventure
            </Link>
          </button>

          <button className="button-33">
            <Link to="/genre/cars" style={{ color: "inherit", textDecoration: "none" }}>
              Cars
            </Link>
          </button>

          <button className="button-33">
            <Link to="/genre/comedy" style={{ color: "inherit", textDecoration: "none" }}>
              Comedy
            </Link>
          </button>

          <button className="button-33">
            <Link to="/genre/dementia" style={{ color: "inherit", textDecoration: "none" }}>
              Dementia
            </Link>
          </button>

          <button className="button-33">
            <Link to="/genre/demons" style={{ color: "inherit", textDecoration: "none" }}>
              Demons
            </Link>
          </button>

          <button className="button-33">
            <Link to="/genre/drama" style={{ color: "inherit", textDecoration: "none" }}>
              Drama
            </Link>
          </button>

          <button className="button-33">
            <Link to="/genre/ecchi" style={{ color: "inherit", textDecoration: "none" }}>
              Ecchi
            </Link>
          </button>

          <button className="button-33">
            <Link to="/genre/fantasy" style={{ color: "inherit", textDecoration: "none" }}>
              Fantasy
            </Link>
          </button>

          <button className="button-33">
            <Link to="/genre/game" style={{ color: "inherit", textDecoration: "none" }}>
              Game
            </Link>
          </button>
        </div>

        <div className="button-row">
          <button className="button-33">
            <Link to="/genre/harem" style={{ color: "inherit", textDecoration: "none" }}>
              Harem
            </Link>
          </button>

          <button className="button-33">
            <Link to="/genre/historical" style={{ color: "inherit", textDecoration: "none" }}>
              Historical
            </Link>
          </button>

          <button className="button-33">
            <Link to="/genre/horror" style={{ color: "inherit", textDecoration: "none" }}>
              Horror
            </Link>
          </button>

          <button className="button-33">
            <Link to="/genre/isekai" style={{ color: "inherit", textDecoration: "none" }}>
              Isekai
            </Link>
          </button>

          <button className="button-33">
            <Link to="/genre/josei" style={{ color: "inherit", textDecoration: "none" }}>
              Josei
            </Link>
          </button>

          <button className="button-33">
            <Link to="/genre/kids" style={{ color: "inherit", textDecoration: "none" }}>
              Kids
            </Link>
          </button>

          <button className="button-33">
            <Link to="/genre/magic" style={{ color: "inherit", textDecoration: "none" }}>
              Magic
            </Link>
          </button>

          <button className="button-33">
            <Link to="/genre/martial arts" style={{ color: "inherit", textDecoration: "none" }}>
              Martial Arts
            </Link>
          </button>

          <button className="button-33">
            <Link to="/genre/mecha" style={{ color: "inherit", textDecoration: "none" }}>
              Mecha
            </Link>
          </button>

          <button className="button-33">
            <Link to="/genre/military" style={{ color: "inherit", textDecoration: "none" }}>
              Military
            </Link>
          </button>
        </div>

        <div className="button-row">
          <button className="button-33">
            <Link to="/genre/music" style={{ color: "inherit", textDecoration: "none" }}>
              Music
            </Link>
          </button>

          <button className="button-33">
            <Link to="/genre/mystery" style={{ color: "inherit", textDecoration: "none" }}>
              Mystery
            </Link>
          </button>

          <button className="button-33">
            <Link to="/genre/parody" style={{ color: "inherit", textDecoration: "none" }}>
              Parody
            </Link>
          </button>

          <button className="button-33">
            <Link to="/genre/police" style={{ color: "inherit", textDecoration: "none" }}>
              Police
            </Link>
          </button>

          <button className="button-33">
            <Link to="/genre/psychological" style={{ color: "inherit", textDecoration: "none" }}>
              Psychological
            </Link>
          </button>

          <button className="button-33">
            <Link to="/genre/romance" style={{ color: "inherit", textDecoration: "none" }}>
              Romance
            </Link>
          </button>

          <button className="button-33">
            <Link to="/genre/samurai" style={{ color: "inherit", textDecoration: "none" }}>
              Samurai
            </Link>
          </button>

          <button className="button-33">
            <Link to="/genre/school" style={{ color: "inherit", textDecoration: "none" }}>
              School
            </Link>
          </button>

          <button className="button-33">
            <Link to="/genre/sci-fi" style={{ color: "inherit", textDecoration: "none" }}>
              Sci-Fi
            </Link>
          </button>

          <button className="button-33">
            <Link to="/genre/seinen" style={{ color: "inherit", textDecoration: "none" }}>
              Seinen
            </Link>
          </button>
        </div>

        <div className="button-row">
          <button className="button-33">
            <Link to="/genre/shoujo" style={{ color: "inherit", textDecoration: "none" }}>
              Shoujo
            </Link>
          </button>

          <button className="button-33">
            <Link to="/genre/shoujo ai" style={{ color: "inherit", textDecoration: "none" }}>
              Shoujo Ai
            </Link>
          </button>

          <button className="button-33">
            <Link to="/genre/shounen" style={{ color: "inherit", textDecoration: "none" }}>
              Shounen
            </Link>
          </button>

          <button className="button-33">
            <Link to="/genre/shounen ai" style={{ color: "inherit", textDecoration: "none" }}>
              Shounen Ai
            </Link>
          </button>

          <button className="button-33">
            <Link to="/genre/slice of life" style={{ color: "inherit", textDecoration: "none" }}>
              Slice of Life
            </Link>
          </button>

          <button className="button-33">
            <Link to="/genre/space" style={{ color: "inherit", textDecoration: "none" }}>
              Space
            </Link>
          </button>

          <button className="button-33">
            <Link to="/genre/sports" style={{ color: "inherit", textDecoration: "none" }}>
              Sports
            </Link>
          </button>

          <button className="button-33">
            <Link to="/genre/super power" style={{ color: "inherit", textDecoration: "none" }}>
              Super Power
            </Link>
          </button>

          <button className="button-33">
            <Link to="/genre/supernatural" style={{ color: "inherit", textDecoration: "none" }}>
              Supernatural
            </Link>
          </button>

          <button className="button-33">
            <Link to="/genre/thriller" style={{ color: "inherit", textDecoration: "none" }}>
              Thriller
            </Link>
          </button>

          <button className="button-33">
            <Link to="/genre/vampire" style={{ color: "inherit", textDecoration: "none" }}>
              Vampire
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Genres;
