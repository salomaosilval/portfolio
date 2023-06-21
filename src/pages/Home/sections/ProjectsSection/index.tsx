import { Project } from "../../../../components/Project";

import "./styles.scss";

export const ProjecsSection = () => {
  return (
    <>
      <div className="projectsContainer">
        <Project
          title="FoneUP"
          imageURL="https://res.cloudinary.com/dv61ldehl/image/upload/v1687314736/foneUP_Mockup_fdmk2u.png"
          projectLink="https://github.com/union-group/foneUP-01"
        />
        <Project
          title="JordanShoes"
          imageURL="https://res.cloudinary.com/dv61ldehl/image/upload/v1687316089/ecommerce_Mockup_qt5arb.png"
          projectLink="https://github.com/salomaosilval/desafio-02-codelandia"
        />
        <Project
          title="Marvel E-commerce"
          imageURL="https://res.cloudinary.com/dv61ldehl/image/upload/v1687316822/Marvel_Mockup_d7x8nc.png"
          projectLink="https://github.com/salomaosilval/ecommerce-marvel-hqs"
        />
      </div>
    </>
  );
};
