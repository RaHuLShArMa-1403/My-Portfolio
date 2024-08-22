import React from "react";
import freshBurger from "../../assets/fresh-burger.png";
import hipsster from "../../assets/hipsster.png";
import viberr from "../../assets/viberr.png";
import ProjectCard from "../../common/ProjectCard";
import styles from "./ProjectStyles.module.css";
function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://github.com/RaHuLShArMa-1403/Mern-BlogProject"
          h3="Blog App"
          p="Interactive Blog App"
        />
        <ProjectCard
          src={freshBurger}
          link="https://github.com/RaHuLShArMa-1403/FileSheild"
          h3="freshBurger"
          p="burger"
        />
        <ProjectCard
          src={hipsster}
          link="https://github.com/RaHuLShArMa-1403/"
          h3="hipsster"
          p="glasses"
        />
      </div>
    </section>
  );
}
export default Projects;
