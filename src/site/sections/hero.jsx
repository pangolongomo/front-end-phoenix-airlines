import React, { useEffect, useState } from "react";
import "./hero.scss";
import image1 from "../../images/hero/bgimage1.jpg";
import image2 from "../../images/hero/bgimage2.jpg";
import image3 from "../../images/hero/bgimage3.jpg";

function Hero() {
  const [bgImage, setBgImage] = useState(image1);

  useEffect(() => {
    setRandomImage();
  }, [bgImage]);

  const setRandomImage = () => {
    let rand = Math.floor(Math.random() * 3);
    if (rand === 1) setBgImage(image2);
    if (rand === 2) setBgImage(image3);
  };

  let bg = {
    styles: {
      backgroundImage: "url(" + bgImage + ")",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center center",
    },
  };

  return (
    <div className="hero" style={bg.styles}>
      <div className="container">
        <div className="reserver_vol">
          <div>
            <h3>Organisez vos voyage en un seul click</h3>
            <div className="depart">
              <label>Départ de</label>
              <select defaultValue="fih">
                <option value="fih">Kinshasa</option>
                <option value="fbm">Lubumbashi</option>
                <option value="gom">Goma</option>
                <option value="fki">Kisangani</option>
                <option value="mjm">Mbuji-Mayi</option>
              </select>
            </div>
            <div className="arrive">
              <label>Arrivée à</label>
              <select defaultValue="fbm">
                <option value="fih">Kinshasa</option>
                <option value="fbm">Lubumbashi</option>
                <option value="gom">Goma</option>
                <option value="fki">Kisangani</option>
                <option value="mjm">Mbuji-Mayi</option>
              </select>
            </div>
            <div className="btn">
              <button>Continuer</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
