import React, { useEffect } from "react";
import "./lines.css";
import planet from "../DB/planets";
function Lines({ planetId, value }) {
  useEffect(() => {
    for (var i = 0; i < planet.length; i++) {
      if (planet[i].name === planetId) {
        var newId = planetId.toLowerCase();
        document.getElementById(newId).innerHTML =
          ((value / 9.8) * planet[i].gravity).toFixed(2) + " Kg";
      } else {
        var myId = planet[i].name.toLowerCase();
        // console.log(myId);
        document.getElementById(myId).innerHTML = "";
      }
    }
  }, [planetId, value]);

  return (
    <div className="lines">
      <div className="line1"></div>
      <div className="line2"></div>

      <div className="sun">
        <p className="weight__text" id="sun"></p>
        <p className="name__text"></p>
      </div>
      <div className="mercury">
        <p className="weight__text" id="mercury"></p>
        <p className="name__text"></p>
      </div>
      <div className="earth">
        <p className="weight__text" id="earth"></p>
        <p className="name__text"></p>
      </div>
      <div className="shape">
        <div className="moon">
          <p className="weight__text" id="moon"></p>
          <p className="name__text"></p>
        </div>
      </div>
      <div className="venus">
        <p className="weight__text" id="venus"></p>
        <p className="name__text"></p>
      </div>
      <div className="mars">
        <p className="weight__text" id="mars"></p>
        <p className="name__text"></p>
      </div>
      <div className="jupiter">
        <p className="weight__text" id="jupiter"></p>
        <p className="name__text"></p>
      </div>
      <div className="saturn">
        <p className="weight__text" id="saturn"></p>
        <p className="name__text"></p>
      </div>
      <div className="uranus">
        <p className="weight__text" id="uranus"></p>
        <p className="name__text"></p>
      </div>
    </div>
  );
}

export default Lines;
