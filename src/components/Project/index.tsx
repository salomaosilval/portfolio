import { BsGithub } from "react-icons/bs";

import "./styles.scss";

export interface ProjectProps {
  title: string;
  imageURL: string;
  projectLink: string;
}

export const Project = ({ title, imageURL, projectLink }: ProjectProps) => {
  return (
    <>
      <div className="projectContainer">
        <img src={imageURL} alt="Project Mockup" className="projectMockup" />
        <h1 className="projectTitle">{title}</h1>
        <a href={projectLink} className="projectLink" target="_blank">
          <BsGithub className="githubIcon" />
        </a>
      </div>
    </>
  );
};
