import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faScrewdriverWrench, faNetworkWired, faDatabase } from "@fortawesome/free-solid-svg-icons";

function Skills() {
  let skills = [
    {
      id: 1,
      skill: "Front-End",
      tech: [
        {
          id: 1,
          lang: "HTML",
          circles: 4,
        },
        {
          id: 2,
          lang: "CSS",
          circles: 3,
        },
        {
          id: 3,
          lang: "JavaScript",
          circles: 4,
        },
      ],
      icon: faScrewdriverWrench,
    },
    {
      id: 2,
      skill: "Frameworks",
      tech: [
        {
          id: 1,
          lang: "React.js",
          circles: 4,
        },
        {
          id: 2,
          lang: "Vue.js",
          circles: 4,
        },
        {
          id: 3,
          lang: "Tailwind",
          circles: 3,
        },
      ],
      icon: faNetworkWired,
    },
    {
      id: 3,
      skill: "Back-End",
      tech: [
        {
          id: 1,
          lang: "PHP",
          circles: 3,
        },
        {
          id: 2,
          lang: "MySQL",
          circles: 3,
        },
        {
          id: 3,
          lang: "Firebase",
          circles: 3,
        },
      ],
      icon: faDatabase,
    },
  ];
  return (
    <section className="px-10 mb-36 mt-72">
      <h1 id='Skills' className="mb-16 text-5xl md:text-7xl text-center md:text-start">
        <span className="secundaryColor">My</span> Skills
      </h1>
      <section className="px-10 flex items-center justify-center lg:justify-between xl:justify-around flex-wrap gap-11 ">
        {skills.map((element)=>{
            return(
                <div key={element.id} className="skill_card py-6 px-9 flex flex-col gap-4 items-center justify-evenly">
          <h2>
            <b>{element.skill}</b>
          </h2>
          <div className="w-full flex flex-col gap-5">
          {element.tech.map((element) => {
            let circle_1 = ''
            let circle_2 = ''
            let circle_3 = ''
            let circle_4 = ''
            let circle_5 = ''

            switch (element.circles) {
                case 1:
                    circle_1 = 'circle_painted'
                    break;
                case 2:
                    circle_1 = 'circle_painted'
                    circle_2 = 'circle_painted'
                    break;
                case 3:
                    circle_1 = 'circle_painted'
                    circle_2 = 'circle_painted'
                    circle_3 = 'circle_painted'
                    break;
                case 4:
                    circle_1 = 'circle_painted'
                    circle_2 = 'circle_painted'
                    circle_3 = 'circle_painted'
                    circle_4 = 'circle_painted'
                    break;
                case 5:
                    circle_1 = 'circle_painted'
                    circle_2 = 'circle_painted'
                    circle_3 = 'circle_painted'
                    circle_4 = 'circle_painted'
                    circle_5 = 'circle_painted'
                    break;
            }

            return (
              <div key={element.id} className="flex justify-between">
                <p>{element.lang}</p>
                <div className="flex gap-1 justify-center items-center">
                    <span className={`circle ${circle_1}`}></span>
                    <span className={`circle ${circle_2}`}></span>
                    <span className={`circle ${circle_3}`}></span>
                    <span className={`circle ${circle_4}`}></span>
                    <span className={`circle ${circle_5}`}></span>
                </div>
              </div>
            );
          })}
          </div>
          <div className="flex justify-center items-end">
            <FontAwesomeIcon icon={element.icon} size="2xl" />
          </div>
        </div>
            )
        })}
      </section>
    </section>
  );
}

export default Skills;
