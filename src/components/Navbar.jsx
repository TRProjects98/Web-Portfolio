import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useRef, useEffect} from "react";
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';

function Navbar() {
  const NavRef = useRef();

  let MobileMeuOpen = false

  function OpenMobileNav() {
    document.querySelector('#MobileNavBar').style.display= 'flex'
    document.querySelector('#HamMenu').style.display = 'none'
    document.querySelector('#CrossMenu').style.display = 'block'
    MobileMeuOpen = true
  }

  function CloseMobileNav() {
    document.querySelector('#MobileNavBar').style.display= 'none'
    document.querySelector('#HamMenu').style.display = 'block'
    document.querySelector('#CrossMenu').style.display = 'none'
    MobileMeuOpen = false
  }

  useEffect(() => {

      let prevScrollpos = window.scrollY;
    window.addEventListener("scroll", () => {
      if(MobileMeuOpen===false){
      let currentScrollPos = window.scrollY;
      if (prevScrollpos > currentScrollPos) {
        NavRef.current.style.top = "0";
      } else {
        NavRef.current.style.top = "-100px";
      }
      prevScrollpos = currentScrollPos;}
    });

    
  }, [MobileMeuOpen]);


  return (
    <>
      <header>
        <nav
          className="fixed top-0 px-10 py-5 flex justify-between items-center w-screen transition-all duration-1000 ease-in-out"
          ref={NavRef}
        >
          <div>
            <Link to='/' onClick={()=>{
              window.scrollTo(0,0)
            }}>
              <h1>Tiago Reis</h1>
            </Link>
          </div>

          <div className="w-3/6 flex justify-end gap-5 md:justify-around md:gap-0">
            <HashLink className="hidden md:block" to="/#AboutMe">
              About-me
            </HashLink>
            <HashLink className="hidden md:block" to="/#Skills">
              Skills
            </HashLink>
            <HashLink className="hidden md:block" to="/#Projects">
              Projects
            </HashLink>
            <HashLink className="hidden md:block" to="/#Contacts">
              Contacts
            </HashLink>
            <a id='HamMenu' className="block md:hidden" onClick={OpenMobileNav}>
              <FontAwesomeIcon icon={faBars} size="lg" />
            </a>
            <a id='CrossMenu' className="hidden" onClick={CloseMobileNav}>
              <FontAwesomeIcon icon={faXmark} size="lg" />
            </a>
            <a
              className="hidden sm:block"
              href="https://github.com/TRProjects98"
              rel="noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </a>
            <a
              className="hidden sm:block"
              href="https://www.linkedin.com/in/tiago-reis-profile/?locale=en_US"
              rel="noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
          </div>
        </nav>
        <div id="MobileNavBar" className="md:hidden">
          <div>
            <HashLink to="/#AboutMe" onClick={CloseMobileNav}><h1>About-me</h1></HashLink>
          
          
            <HashLink to="/#Skills" onClick={CloseMobileNav}><h1>Skills</h1></HashLink>
          
          
            <HashLink to="/#Projects" onClick={CloseMobileNav}><h1>Projects</h1></HashLink>
          
          
            <HashLink to="/#Contacts" onClick={CloseMobileNav}><h1>Contacts</h1></HashLink>

          </div>
          
        </div>
      </header>
    </>
  );
}

export default Navbar;
