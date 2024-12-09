import { useState } from "react";
import "./App.css";
import image1 from "./assets/erm-fingers.gif"
import image2 from "./assets/oh-yay.gif"

const App = () => {
  const [imageVisible, setImageVisible] = useState(false);

  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const handleMouseOver = (event) => {
    const btnNo = event.target;
    const container = document.getElementById("container");
    const containerHeight = container.getBoundingClientRect().height;
    const containerWidth = container.getBoundingClientRect().width;
    const btnHeight = btnNo.getBoundingClientRect().height;
    const btnWidth = btnNo.getBoundingClientRect().width;
    const btnTop = btnNo.getBoundingClientRect().top;
    const btnLeft = btnNo.getBoundingClientRect().left;

    let newTop = btnTop;
    let newLeft = btnLeft;
    while (Math.abs(newTop - btnTop) < containerHeight / 3) {
      newTop = getRandomNumber(0, containerHeight - btnHeight);
    }

    while (Math.abs(newLeft - btnLeft) < containerWidth / 3) {
      newLeft = getRandomNumber(0, containerWidth - btnWidth);
    }

    btnNo.style.top = `${Math.floor(newTop)}px`;
    btnNo.style.left = `${Math.floor(newLeft)}px`;
  };

  const handleYesClick = () => {
    setImageVisible(true);
  };

  return (
    <div>
      <p>DUMBOOOOoooo <br />COULD WE GO FOR A MOVIE DATE THIS WEEK?</p>
      <div className="container" id="container" style={{alignContent:"center", marginTop:"200px",display:"block"}}>
        <img src={image1} alt="please" className="image-1" />
        <img
          src={image2} // Ensure to put the correct path to the second image here
          alt="yes"
          className={`image-2 ${imageVisible ? "" : "hide"}`}
        />
        <button className="btn btn-yes" onClick={handleYesClick}>
          Yes
        </button>
        <button
          className="btn btn-no"
          onMouseOver={handleMouseOver}
        >
          No
        </button>
      </div>
    </div>
  );
};

export default App;
