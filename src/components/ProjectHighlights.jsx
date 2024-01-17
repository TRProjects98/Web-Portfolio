import { useEffect } from "react";
import PropTypes from 'prop-types'

function ProjectHighlights({gallery}) {

  useEffect(()=>{
    

    gallery.forEach((element, index) => {

      let newarray = element.split('')

      const LastDash = newarray.findLastIndex((element) => element === '/');

      let NameTranform = newarray.slice(LastDash+1, -4)
      
      let AltName = NameTranform.join('')

      let TitleSetUp = []

      for(let i=0; i<NameTranform.length; i++ ){
        if(NameTranform[i]!= '_'){
          TitleSetUp.push(NameTranform[i])
        }else{
          TitleSetUp.push(' ')
        }
      }

      let ImgTitle = TitleSetUp.join('')

      document.querySelector(`#img${index}`).alt = AltName

      document.querySelector(`#img_title_${index}`).innerHTML = ImgTitle
      
    
    });

  })

  return (
    <>
      <section className="px-10 md:px20 mb-12">
        <h2>See the highlights</h2>
        <h2>of this website.</h2>
      </section>
      <section className="px-10 md:px20 flex gap-9 flex-wrap justify-center lg:justify-start mb-64">
        {gallery.map((element, index)=>{
            return(
                <div key={index} className="project_gallery_container">
                  <div className="pd_title_overlay">
                    <h3 className="text-2xl" id={`img_title_${index}`}></h3>
                  </div>
                  <img id={`img${index}`} src={element} className="project_gallery_foto"/>
                </div>
                
            )
        })}
      </section>
    </>
  );
}

ProjectHighlights.propTypes = {
  gallery: PropTypes.array
}

export default ProjectHighlights;
