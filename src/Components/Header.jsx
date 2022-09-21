import React, { useState, useEffect } from "react";
import "./header.css";
import Lines from "./Lines";
import Planets from "../DB/planets";

function Header() {
  const [input, setInput] = useState("");
  const [planet, setPlanet] = useState("");

  function handleChange(event) {
    setInput(event.target.value);
  }
  function handleClick(event) {
    setPlanet(event.target.id);
  }
  useEffect(() => {
    // console.log()
  }, [input, planet]);

  return (
    <div className="header__main">
      <input
        placeholder="Enter your weight here in Kg"
        type="text"
        id="main__input"
        value={input}
        onChange={handleChange}
        autoComplete="off"
      />
      <div className="all_buttons">
        {Planets.map((value, index) => {
          return (
            <input
              id={value.name}
              key={index}
              value={value.name}
              type="button"
              className="header__button"
              name="pl"
              onClick={handleClick}
            />
          );
        })}

        <Lines planetId={planet} value={input} />
      </div>
    </div>
  );
}

export default Header;
