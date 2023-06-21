import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";

import "./styles.scss";

export const ContactSection = () => {
  return (
    <>
      <div className="contactContainer">
        <h1 className="contactTitle">ENTRE EM CONTATO</h1>
        <div>
          <div>
            <BsFillTelephoneFill className="contactIcon" />
            <p>(67) 9 9299-7279</p>
          </div>
          <div className="separator"></div>
          <div>
            <IoMdMail className="contactIcon" />
            <p>salomaosilval@hotmail.com</p>
          </div>
        </div>
      </div>
    </>
  );
};
