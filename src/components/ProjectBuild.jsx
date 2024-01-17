import { useEffect } from "react";
import PropTypes from 'prop-types'

function ProjectBuild({colors, tech}) {

    useEffect(()=>{
      
        colors.forEach((element, index) => {
            document.getElementById(index).style.backgroundColor= element
        });
        
        
    })
  
  return (
    <>
      <section className="px-10 md:px20 mb-12 flex justify-center">
        <p className="text-2xl">This website was built with...</p>
      </section>
      <section className="flex flex-wrap justify-center mb-64 gap-4 px-10 md:px-40">
        {colors.map((element, index) => {
          return (
            <span key={index} className="OutCircle">
              <span id={index} className="InnerCircle"></span>
            </span>
          );
        })}
        {tech.map((element, index)=>{
            return(
                <span key={index} className="TechWrap"><p>{element}</p></span>
            )
        })}
        
      </section>
    </>
  );
}

ProjectBuild.propTypes = {
  colors: PropTypes.array,
  tech: PropTypes.array
}

export default ProjectBuild;
