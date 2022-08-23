import { useState , useRef} from "react";
import {AnimatePresence, motion} from "framer-motion";
import "../CSS/Navbar.css";
import "../CSS/Body.css";
import Footer from "./Footer";
import Contact from "./Contact";
import "../CSS/Menu.css";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";


function NavBar() {


  

  const [aboutIntersecting , setAboutIntersecting] = useState(false);
  const [projectsIntersecting , setProjectsIntersecting] = useState(false);
  const [contactIntersecting , setContactIntersecting] = useState(false);


  window.addEventListener("load", () => {
  if(screen.width < 1030){
    setAboutIntersecting(true);
    setProjectsIntersecting(true);
    setContactIntersecting(true);
  }

    const sectionOne = document.querySelector('#About-Me');
const options = { threshold: screen.width > 1030 ? 1 : 0.3};

const observer = new IntersectionObserver(function
 (entries, observer){
    entries.forEach(entry => {
      if(entry.isIntersecting){
        setAboutIntersecting(true);
      }
 });
}, options);

observer.observe(sectionOne);
  })


  window.addEventListener("load", () => {
    const sectionOne = document.querySelector('#Projects');
    const options = { threshold: screen.width > 1030 ? 1 : 0.2};

const observer = new IntersectionObserver(function
 (entries, observer){
    entries.forEach(entry => {
      if(entry.isIntersecting){
        setProjectsIntersecting(true);
      }
 });
}, options);

observer.observe(sectionOne);
  })


  window.addEventListener("load", () => {
    const sectionOne = document.querySelector('#Contact-Me');
    const options = { threshold: screen.width > 1030 ? 1 : 0.2};

const observer = new IntersectionObserver(function
 (entries, observer){
    entries.forEach(entry => {
      if(entry.isIntersecting){
        setContactIntersecting(true);
      }
 });
}, options);

observer.observe(sectionOne);
  })
  


  const [menuActive, setMenuActive] = useState(false);

  function MenuClick() {
    setMenuActive(!menuActive);
  }

  const [liActiveId, SetliActiveId] = useState("Home");

  window.addEventListener("load", () => {
    const sections = document.querySelectorAll(".section");

    const options = {
      root: null,
      threshold: 0.2,
    };

    const Observer = new IntersectionObserver(function (entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          SetliActiveId(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => {
      Observer.observe(section);
    });
  });

  return (

    <div>
      <motion.div 
        initial={{ x: "-100%" }}
        animate={{ x : 0 }}
        transition={{ duration: 0.8 }}
      className="navbar">
        <div className="nav-start-elements">
          <motion.li
          initial={{ y : "-100%" , opacity: 0 }}
          animate={{ y : 0 , opacity: 1 }}
          transition={{ duration: 0.5 , delay: 0.8}}
          >
            <p>Mahavir-Patel</p>
          </motion.li>
          <motion.li
          initial={{ y : "-100%" , opacity: 0 }}
          animate={{ y : 0 , opacity: 1 }}
          transition={{ duration: 0.5 , delay: 1}}
            className={
              liActiveId === "Home"
                ? "nav-active nav-hover-anim"
                : "nav-hover-anim"
            }
          >
            <p>
              <a href="#Home">_hello</a>
            </p>
          </motion.li>
          <motion.li
          initial={{ y : "-100%" , opacity: 0 }}
          animate={{ y : 0 , opacity: 1 }}
          transition={{ duration: 0.5 , delay: 1.2}}
            className={
              liActiveId === "About-Me"
                ? "nav-active nav-hover-anim"
                : "nav-hover-anim"
            }
          >
            <p>
              <a href="#About-Me">_about-me</a>
            </p>
          </motion.li>
          <motion.li
          initial={{ y : "-100%" , opacity: 0 }}
          animate={{ y : 0 , opacity: 1 }}
          transition={{ duration: 0.5 , delay: 1.4}}
            className={
              liActiveId === "Projects"
                ? "nav-active nav-hover-anim"
                : "nav-hover-anim"
            }
          >
            <p>
              <a href="#Projects">_projects</a>
            </p>
          </motion.li>
        </div>
        <div className="nav-end-elements">
          <motion.li
          initial={{ y : "-100%" , opacity: 0 }}
          animate={{ y : 0 , opacity: 1 }}
          transition={{ duration: 0.5 , delay: 1.6}}
            className={
              liActiveId === "Contact-Me"
                ? "nav-active nav-hover-anim"
                : "nav-hover-anim"
            }
          >
            <p>
              <a href="#Contact-Me">_contact-me</a>
            </p>
          </motion.li>
          <li>
            <motion.i
            initial={{ y : "-100%" , opacity: 0 }} 
            animate={{ y : 0 , opacity: 1 }}
            transition={{ duration: 0.5 , delay: 1}}
              class={menuActive ? "ri-close-fill" : "ri-menu-5-line "}
              onClick={MenuClick}
            ></motion.i>
          </li>
        </div>
      </motion.div>
      <div
        className={menuActive ? "Menu-container menu-active" : "Menu-container"}
      >
        <li
          className={
            liActiveId === "Homes"
              ? "Menu-li-active nav-hover-anim"
              : "nav-hover-anim"
          }
        >
          <p>
            <a href="#Home" onClick={MenuClick}>
              _hello
            </a>
          </p>
        </li>
        <li
          className={
            liActiveId === "About-Me"
              ? "Menu-li-active nav-hover-anim"
              : "nav-hover-anim"
          }
        >
          <p>
            <a href="#About-Me" onClick={MenuClick}>
              _about-me
            </a>
          </p>
        </li>
        <li
          className={
            liActiveId === "Projects"
              ? "Menu-li-active nav-hover-anim"
              : "nav-hover-anim"
          }
        >
          <p>
            <a href="#Projects" onClick={MenuClick}>
              _projects
            </a>
          </p>
        </li>
        <li
          className={
            liActiveId === "Contact-Me"
              ? "Menu-li-active nav-hover-anim"
              : "nav-hover-anim"
          }
        >
          <p>
            <a href="#Contact-Me" onClick={MenuClick}>
              _contact-me
            </a>
          </p>
        </li>
      </div>
      <div className="body">
        <div className="section" id="Home">
          <Home />
        </div>
        <AnimatePresence exitBeforeEnter><motion.div
        initial={{opacity: 1 }}
        animate={{opacity: aboutIntersecting ? 1 : (screen.width < 1030 ? 1 : 0) }}
         exit={{ opacity: 1 }}
         transition={{ duration: screen.width < 1030 ? 1 : 0.1 , ease: 'easeInOut'}}
         className="section" id="About-Me" >
          <About isVisible={aboutIntersecting} />
        </motion.div></AnimatePresence>
        <AnimatePresence exitBeforeEnter><motion.div
         initial={{opacity: 0 ,}}
        animate={{opacity: projectsIntersecting ? 1 : (screen.width < 1030 ? 1 : 0)}}
         exit={{ opacity: 0 }}
         transition={{  duration: screen.width < 1030 ? 1 : 0.2  , ease: 'easeInOut' }}
         className="section" id="Projects" >
          <Projects isVisible={projectsIntersecting} />
        </motion.div></AnimatePresence>
        <AnimatePresence exitBeforeEnter><motion.div
        initial={{opacity: 0}}
        animate={{opacity: contactIntersecting ? 1 : (screen.width < 1030 ? 1 : 0)}}
         exit={{ opacity: 0 }}
         transition={{ duration: screen.width < 1030 ? 1 : 0.1  , ease: 'easeInOut'}}
         className="section" id="Contact-Me">
          <Contact isVisible={contactIntersecting}/>
        </motion.div></AnimatePresence>
      </div>
      <Footer />
    </div>
  );
}

export default NavBar;
