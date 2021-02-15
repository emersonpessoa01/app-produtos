import React from "react";
import Github from "../../components/img/github.png";
import Linkedin from "../../components/img/linkedin.png";
import Facebook from "../../components/img/facebook.png";
import "../../components/Footer/Footer.css";


function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="social-media">
          <a
            href="https://github.com/emersonpessoa01"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Github} alt="github" className="social-icon" />{" "}
          </a>
          <a
            href="https://www.linkedin.com/feed/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Linkedin} alt="linkedin" className="social-icon" />{" "}
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100005211906450"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Facebook} alt="facebook" className="social-icon" />{" "}
          </a>
        </div>
        <div>
          <p>Email: emersonpessoa011108gmail.com</p>
          <p>Telefone: +55 91 98941-2049</p>
        </div>
        <div className="copyrights">
          <p>Emerson Pessoa 2021 @ Todos os direitos reservados</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
