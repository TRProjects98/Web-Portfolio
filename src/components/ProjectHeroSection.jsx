import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import PropTypes from 'prop-types'

function ProjectHeroSection({name, date, img, tumbnail, description, links}) {

  useEffect(() => {
    document.querySelector(
      "#project_image"
    ).style.backgroundImage = `url(${img})`;

    if (
      links.gitlink === "" ||
      links.gitlink === null ||
      links.gitlink === undefined
    ) {
      document.querySelectorAll(".gitlink").forEach((element) => {
        element.style.display = "none";
      });
    }

    if (
      links.web === "" ||
      links.web === null ||
      links.web === undefined
    ) {
      document.querySelectorAll(".weblink").forEach((element) => {
        element.style.display = "none";
      });
    }
  });

  return (
    <>
      <section className="w-screen pt-24 md:pt-11 h-96 flex flex-col items-center justify-center">
        <div className="flex flex-col justify-center items-center gap-5">
          <h1 className="text-5xl md:text-7xl text-center secundaryColor textshadow">
            {name}
          </h1>
          <p>{date}</p>
        </div>
      </section>
      <section className="w-screen md:h-screen px-10 md:px-20">
        <div id="project_image" className="hidden md:block outline h-full">
          <div className="project_image_overlay justify-end items-end">
            <a
              className="gitlink"
              href={links.gitlink}
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} size="xl" />
            </a>
            <a
              className="weblink"
              href={links.web}
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xl" />
            </a>
          </div>
        </div>
        <img
          src={tumbnail}
          id="project_tumbnail"
          className="md:hidden"
          alt="project_tumbnail"
        />
        <div className=" mobile_pd_icons flex justify-center gap-9 w-full mt-9 md:hidden">
          <a
            className="gitlink"
            href={links.gitlink}
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} size="2xl" />
          </a>

          <a
            className="weblink"
            href={links.web}
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="2xl" />
          </a>
        </div>
      </section>
      <section className="w-screen text-center px-10 md:px-20 mt-24 mb-64 ">
        <h2>{description}</h2>
      </section>
    </>
  );
}

ProjectHeroSection.propTypes = {
  name: PropTypes.string,
  date: PropTypes.string,
  img: PropTypes.string,
  tumbnail: PropTypes.string,
  description: PropTypes.string,
  links: PropTypes.object
}

export default ProjectHeroSection;
