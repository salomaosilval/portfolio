import { BsLinkedin, BsGithub } from "react-icons/bs";
import { IoDocumentText } from "react-icons/io5";

import "./styles.scss";

export const MainSection = () => {
  return (
    <>
      <div className="mainContainer">
        <div>
          <p className="presentationText">OI 👋🏻 EU SOU O SALOMÃO</p>
          <div className="roleContainer">
            <h1 className="roleText">FULL STACK</h1>
            <BsLinkedin
              className="socialIcon"
              onClick={() => window.open("https://www.linkedin.com/in/salomaosilval/", "_blank")}
            />
            <BsGithub
              className="socialIcon"
              onClick={() => window.open("https://github.com/salomaosilval/", "_blank")}
            />
            <IoDocumentText
              className="socialIcon"
              onClick={() =>
                window.open(
                  "https://docs.google.com/document/d/1l06ZdLS1TjaJpwwAGX78FmeNSDRAvX2FXcPlqUZcygQ/edit?usp=sharing",
                  "_blank"
                )
              }
            />
          </div>
          <h1 className="developerText">DEVELOPER</h1>
          <p className="summary">TENHO 20 ANOS E SOU DESENVOLVEDOR COM EXPERIÊNCIA EM FRONT END</p>
        </div>
      </div>
    </>
  );
};
