import React from "react";
import blog from "../../assets/blog.png";
import filehider from "../../assets/data.png";
import website from "../../assets/website.png";
import ProjectCard from "../../common/ProjectCard";
import styles from "./ProjectStyles.module.css";
function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={blog}
          link="https://github.com/RaHuLShArMa-1403/Mern-BlogProject"
          h3="Interactive Blog App"
          p="MERN STACK"
        />
        <ProjectCard
          src={filehider}
          link="https://github.com/RaHuLShArMa-1403/FileSheild"
          h3="File Hider"
          p="Java, SQL, DBMS "
        />
        <ProjectCard
          src={website}
          link="https://github.com/RaHuLShArMa-1403/"
          h3="JobEx"
          p="HTML, CSS, JavaScript"
        />
      </div>
    </section>
  );
}
export default Projects;
