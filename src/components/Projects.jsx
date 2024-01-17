import { useEffect } from "react";
import { Link } from 'react-router-dom'

function Projects() {
  const projects = [
    {
      id: 0,
      name: 'My Web Portfolio',
      date: '2023',
      tumbnail: '/Portfolio/Portfolio_Tumbnail.jpg',
      img: '/Portfolio/Web_Portfolio_Cover.jpg',
      description: 'This website was developed to introduce myself, show my academic journey and showcase some projects that I have worked on throughout my career as a web developer.',
      gallery: ['/Portfolio/Web_Portfolio_Cover.jpg','/Portfolio/My_Education.jpg','/Portfolio/Work_Experience.jpg','/Portfolio/My_Skills.jpg','/Portfolio/My_Projects.jpg', '/Portfolio/Contacts.jpg', '/Portfolio/Project_Detail.jpg', '/Portfolio/Project_Detail_Gallery.jpg', '/Portfolio/Project_Detail_Specs.jpg' ],
      colors: ['#262627', '#ffffff', '#25A085'],
      tech: ['HTML', 'CSS', 'JavaScript', 'React', 'EmailJS', 'GSAP', 'Tailwind CSS', 'Firebase'],
      links:{
        web: 'https://trwebportfolio.com/',
        gitlink: 'https://github.com/TRProjects98/Web-Portfolio'
      },
    },
    {
      id: 1,
      name: 'Serefra',
      date: '2022',
      tumbnail: '/Serefra/Serefra_Tumbnail.jpg',
      img: '/Serefra/Serefra_Cover.jpg',
      description: 'This project was built to Serefra, a carpentry and joinery family company specialized in experienced global luxury projects.',
      gallery: ['/Serefra/Serefra_Cover.jpg','/Serefra/Serefra_Process.jpg','/Serefra/Serefra_In_The_World.jpg','/Serefra/Serefra_Projects.jpg','/Serefra/Serefra_Project_Details.jpg', '/Serefra/Serefra_Contacts.jpg' ],
      colors: ['#704C34', '#EEE7DD', '#F5F4F4', '#C9C9D0'],
      tech: ['Wordpress', 'Elementor', 'HTML', 'CSS', 'JavaScript', 'GSAP', 'JQuery', 'PHP'],
      links:{
        web: 'https://serefra.com/pt-pt/',
        gitlink: ''
      },
    },
    {
      id: 2,
      name: 'FoodRescue',
      date: '2020',
      tumbnail: '/FoodRescue/FoodRescue_Tumbnail.jpg',
      img: '/FoodRescue/FoodRescue_Cover.jpg',
      description: 'FoodRescue is an application that focuses on a concerning issue of food waste. With the aim of helping people facing difficulties, this application connects food suppliers with excess inventory to volunteer distributors who deliver to families in need.',
      gallery: ['/FoodRescue/FoodRescue_APP.jpg','/FoodRescue/FoodRescue_Registration.jpg','/FoodRescue/Food_Rescue_Map.jpg','/FoodRescue/FoodRescue_Volunteer.jpg','/FoodRescue/FoodRescue_Notifications.jpg', '/FoodRescue/FoodRescue_Chat.jpg', '/FoodRescue/FoodRescue_Admin.jpg' ],
      colors: ['#0D7483', '#2B9DB5', '#FFFFFF', '#989898'],
      tech: ['HTML', 'CSS', 'JavaScript', 'JavaScript', 'JQuery', 'PHP', 'MySQL', 'PHPMyAdmin'],
      links:{
        web: '',
        gitlink: 'https://github.com/TRProjects98/FoodRescue'
      },
    },
    {
      id: 3,
      name: 'Ocean Cleaner Game',
      date: '2019',
      tumbnail: '/Ocean_Cleaner/OceanCleaner_Tumbnail.jpg',
      img: '/Ocean_Cleaner/Ocean_Cleaner_Cover.jpg',
      description: 'This project consists of creating a game. Ocean Cleaner falls into the '+'"Endless Runner"'+' category and involves guiding the character through the ocean in search of microplastics to collect and contribute to saving the ocean.',
      gallery: ['/Ocean_Cleaner/Ocean_Cleaner_Cover.jpg','/Ocean_Cleaner/Ocean_Cleaner_Rules.jpg','/Ocean_Cleaner/Ocean_Cleaner_Story.jpg','/Ocean_Cleaner/Ocean_Cleaner_Game.jpg'],
      colors: ['#7AB9DC', '#ffffff', '#D2DDDD'],
      tech: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'JQuery'],
      links:{
        web: '',
        gitlink: 'https://github.com/TRProjects98/Ocean-Cleaner'
      },
    },
    {
      id: 4,
      name: 'Summer Camp',
      date: '2019',
      tumbnail: '/Summer_Camp/SummerCamp_Tumbnail.jpg',
      img: '/Summer_Camp/Summer_Camp_Cover.jpg',
      description: 'This project is a informative website about a summer camp where one can check the activities that take place there, the monitors, how it was created, and much more.',
      gallery: ['/Summer_Camp/Summer_Camp_Cover.jpg','/Summer_Camp/Summer_Camp_Gallery.jpg','/Summer_Camp/Summer_Camp_Schedule.jpg','/Summer_Camp/Summer_Camp_News.jpg','/Summer_Camp/Summer_Camp_Contacts.jpg', '/Summer_Camp/Summer_Camp_Subscription.jpg' ],
      colors: ['#093028', '#237A57','#ffffff', '#283c86'],
      tech: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
      links:{
        web: '',
        gitlink: 'https://github.com/TRProjects98/Summer-Camp'
      },
      
    },
  ]

  useEffect(() => {
    const all_prj = document.querySelectorAll('.project_div')
  

    window.addEventListener("mousemove", (e) => {

        all_prj.forEach((element, index)=>{
            if(element.matches(':hover') === true){

                const elemW = element.clientWidth //largura

                const elemH = element.clientHeight //altura

                image_animation (index, elemW, elemH, e)
            
            }
        })
    })

    function image_animation (index, divWidth, divHeight, e){

        let w = window.innerWidth;

        const PadPercetn = ( 80*100 ) / w
        const StopPercent = (w*10) / 100

        let horizontal_move_range = (divWidth*0.6) + ((e.pageX-PadPercetn)*0.25)
        let horizontal_move_limit = (w - StopPercent)

        if(e.pageX <=  horizontal_move_limit){
            document.querySelector(`#image${index}`).style.left = horizontal_move_range +'px'
          }else{
            document.querySelector(`#image${index}`).style.right = '5%'
        }

        let FullPageH = 0

        for(let i = 1; i< 5; i++){
          FullPageH = FullPageH + document.querySelector('body').children[0].children[i].clientHeight
         }


        document.querySelector(`#image${index}`).style.top = (-(divHeight*1.5) + (((e.pageY-FullPageH)-(divHeight*index))*0.2)) + 'px'

      }

  });

  return (
    
    <section id='Projects'className="px-10 mb-36">
      <h1 className="mb-16 text-5xl md:text-7xl text-center md:text-start">
        <span className="secundaryColor">My</span> Projects
      </h1>
      <section className="md:px-10">
        {projects.map((element)=>{
          return(
          <Link key={element.id} state={element} onClick={()=>{
            document.querySelector('html').style.scrollBehavior= 'auto'
          }} to={`/${element.name}`} >
          <div  className="project_div">
          <h2>{element.name}</h2>
          <p>{element.date}</p>
          <img id={`image${element.id}`} src={element.tumbnail} alt={element.name}></img>
        </div>
        </Link>
        )
        })}
        
      </section>
    </section>
  );
}

export default Projects;
