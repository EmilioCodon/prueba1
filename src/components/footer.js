import React from "react";
import { NavLink } from "react-router-dom";
import { FaLinkedin, FaInstagram, FaGithub, FaTwitter, FaPhoneAlt, FaRegEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="container grid grid-three-column">
          {/* 1 colum  */}
          <div className="footer-about">
            <div className="icons1" >
            <h3 >Contact</h3> <div className="sobre"><FaRegEnvelope/></div>
            </div>
            <p>
              {" "}
              <a href="mailto:emiliocodon@gmail.com"  style={{ color: "white" }}>emiliocodon@gmail.com</a>{" "}
              for any inquiries or collaborations.
            </p>
          </div>

          {/* 2 column  */}
          <div className="footer-social">
            <h3>Follow Me</h3>
            <div className="footer-social--icons">
              <div>
                <a
                  href="https://www.linkedin.com/in/emilio-codon-61086b129" // Asegúrate de incluir el protocolo 'https://' en la URL
                  target="_blank"
                >
                  <FaLinkedin className="icons" />
                </a>
              </div>
              <div>
                <a
                  href="https://www.instagram.com/emiliocodon/" // Asegúrate de incluir el protocolo 'https://' en la URL
                  target="_blank"
                >
                  <FaInstagram className="icons" />
                </a>
              </div>
              <div>
                <a href="https://github.com/EmilioCodon" target="_blank">
                  <FaGithub className="icons" />
                </a>
              </div>
              <div>
                <a href="https://twitter.com/EmilioCodon" target="_blank">
                  <FaTwitter className="icons" />
                </a>
              </div>
            </div>
          </div>

          {/* 3th column  */}
          <div className="footer-contact">
            <h3>Call Me <FaPhoneAlt className="icons" /> </h3>
            
            <h3>+34 670 287 319</h3>
          </div>
        </div>

        {/* bottom section  */}
        <div className="footer-bottom--section">
          <hr />
          <div className="container grid grid-two-column">
            <p>@{new Date().getFullYear()} Emilio Codon. All Rights Reserved</p>
            <div>
              <p>PRIVACY POLICY</p>
              <p>TERMS & CONDITIONS</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
