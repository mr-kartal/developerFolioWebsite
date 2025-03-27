import React, {useContext} from "react";
import "./Footer.scss";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          {emoji("A ↃK Website")}
        </p>
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>

          <pre>
          01001000 01100001 01111001 01100001<br />
          01110100 01110100 01100001 00100000<br />
          01100101 01101110 00100000 01101000<br />
          01100001 01101011 01101001 01101011<br />
          01101001 00100000 01101101 11000011<br />
          10111100 01110010 11000101 10011111<br />
          01101001 01110100 00100000 01101001<br />
          01101100 01101001 01101101 01100100<br />
          01101001 01110010 00100000 01100110<br />
          01100101 01101110 01100100 01101001<br />
          01110010
          </pre>
        </p>
      </div>
    </Fade>
  );
}
