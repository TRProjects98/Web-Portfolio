import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function EducationCards() {
  const educations = [
    {
      id: 1,
      name: "CMPRA",
      text: "In high school, I graduated from the Communication, Marketing, Public Relations, and Advertising course. This course aimed to train versatile students, capable of entering various communication fields. It was in this course that my passion for communication and visual/digital components began, and it was where I took my first steps in the world of web development.",
      dates: "2014 - 2017",
      image: "url(" + "/aemga.jpg" + ")",
    },
    {
      id: 2,
      name: "NTC",
      text: "The Bachelor's degree in New Technologies of Communication consisted of preparing students for new media, where we were taught about Web Development (Front-End / Frameworks / Backend), Web Design (Low to High-Fidelity Prototyping / Usability Testing), Digital Content Creation (Photography / Video / Animation / 3D Modeling), and Communication.",
      dates: "2018 - 2021",
      image: "url(" + "/ua.jpg" + ")",
    },
    {
      id: 3,
      name: "FFA",
      text: "The Front-End, Frameworks & APIs course was a short online course where I deepened my knowledge of Front-End and JavaScript, APIs, and learned to develop projects using the Vue.js framework.",
      dates: "Set - Dec (2022)",
      image: "url(" + "/cesae.jpg" + ")",
    },
  ];

  const myRef = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let anime = gsap.to(myRef.current, {
      scrollTrigger: {
        trigger: myRef.current,
        start: "top top",
        end: `${333 * educations.length}px`,
        scrub: 1,
        pin: true,
        onEnter: function () {
          let counter = 0;

          setTimeout(() => {
            myRef.current.children[counter].attributes.value.nodeValue =
              "active";
          }, 500);

          let prevScrollpos = window.scrollY;
          window.onscroll = function () {
            let currentScrollPos = window.scrollY;
            if (prevScrollpos > currentScrollPos) {
              //console.log('cima')
              if (counter === 0) {
                return;
              } else if (
                myRef.current.children[counter].attributes.value.nodeValue ===
                "active"
              ) {
                if (counter % 2 === 0) {
                  myRef.current.children[
                    counter
                  ].childNodes[0].style.transform =
                    "translate3d(32.4vh, 100%, 0)";
                  myRef.current.children[
                    counter
                  ].childNodes[1].style.transform =
                    "translate3d(32.4vh, -100%, 0)";
                } else {
                  myRef.current.children[
                    counter
                  ].childNodes[0].style.transform =
                    "translate3d(32.4vh, -100%, 0)";
                  myRef.current.children[
                    counter
                  ].childNodes[1].style.transform =
                    "translate3d(32.4vh, 100%, 0)";
                }

                counter--;

                setTimeout(() => {
                  myRef.current.children[
                    counter + 1
                  ].attributes.value.nodeValue = "inactive";
                  myRef.current.children[counter].attributes.value.nodeValue =
                    "active";
                }, 1000);
              }
            } else {
              //console.log('baixo')
              if (counter === educations.length - 1) {
                return;
              } else if (
                myRef.current.children[counter].attributes.value.nodeValue ===
                "active"
              ) {
                counter++;

                myRef.current.children[counter].childNodes[0].style.transform =
                  "translate3d(0, 0, 0)";
                myRef.current.children[counter].childNodes[1].style.transform =
                  "translate3d(0, 0, 0)";

                setTimeout(() => {
                  myRef.current.children[counter].attributes.value.nodeValue =
                    "active";
                  myRef.current.children[
                    counter - 1
                  ].attributes.value.nodeValue = "inactive";
                }, 1000);
              }
            }
            prevScrollpos = currentScrollPos;
          };
        },
        onLeave:function() {
          myRef.current.children.forEach(element => {
            element.childNodes[0].style.transform ="translate3d(0, 0, 0)";
            element.childNodes[1].style.transform ="translate3d(0, 0, 0)";
          });
        },
        onLeaveBack: function () {
          myRef.current.children[0].attributes.value.nodeValue = "";
          myRef.current.children.forEach((element, index) => {
            if(index!=0){
              if(index%2===0){
                element.childNodes[0].style.transform ="translate3d(32.4vh, 100%, 0)";
                element.childNodes[1].style.transform ="translate3d(32.4vh, -100%, 0)";
              }else{
                element.childNodes[0].style.transform ="translate3d(32.4vh, -100%, 0)";
                element.childNodes[1].style.transform ="translate3d(32.4vh, 100%, 0)";
              }
            }
          })
        },
      },
    });

    //Resets animation in reload
    return () => anime.revert();
  }, [educations.length]);

  return (
    <>
      <h1 id='AboutMe' className="px-10 mb-16 text-5xl md:text-7xl text-center md:text-start">
        <span className="secundaryColor">My</span> Education
      </h1>
      <section className="h-screen mb-36" ref={myRef}>
        {educations.map((element) => {
          let img_transform_effect;
          let text_transform_effect;
          let title_status = "inactive";

          if (element.id === 1) {
            img_transform_effect = " ";
            text_transform_effect = " ";
          } else {
            img_transform_effect = "img_transform_effect";
            text_transform_effect = "text_transform_effect";
          }

          let img_side_style = "left-0";
          let text_side_style = "right-0";
          let text_position_style = "justify-end";
          let img_wrapper = "left_image_wrapper";

          if (element.id % 2 === 0) {
            img_side_style = "right-0";
            text_side_style = "left-0";
            text_position_style = "justify-start";
            img_wrapper = "right_image_wrapper ";
            img_transform_effect = "text_transform_effect";
            text_transform_effect = "img_transform_effect";
          }

          return (
            <section
              key={element.id}
              className="h-screen w-screen flex absolute overflow-hidden"
              id={`section${element.id}`}
              value={title_status}
            >
              <div
                className={`h-full w-3/5 absolute hidden lg:flex transition duration-1000 ease-in-out ${text_side_style} ${text_position_style} ${text_transform_effect} text_div_color`}
              >
                <div className="px-10 gap-5 h-full w-3/4 flex flex-col items-center justify-center">
                  <h2 className="secundaryColor">{element.name}</h2>
                  <p>{element.text}</p>
                  <p className="dates">
                    <i>{element.dates}</i>
                  </p>
                </div>
              </div>
              <div
                id={`div_image_${element.id}`}
                className={`h-full w-full lg:w-3/5 flex items-center justify-center absolute transition duration-1000 ease-in-out ${img_wrapper} ${img_side_style} ${img_transform_effect}`}
              >
                <div
                  className="h-full w-full image_bg"
                  style={{ backgroundImage: element.image }}
                ></div>
                <div className="h-full w-full absolute image_gradient"></div>
                <div className="MobileCard">
                  <h2 className="secundaryColor">{element.name}</h2>
                  <p>{element.text}</p>
                  <p className="dates">
                    <i>{element.dates}</i>
                  </p>
                </div>
              </div>
            </section>
          );
        })}
      </section>
    </>
  );
}

export default EducationCards;
