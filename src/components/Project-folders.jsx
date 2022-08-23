import "../CSS/About-Folders.css";
import {useState} from "react";
import {motion , AnimatePresence} from "framer-motion";

function ProjectFolders(){

    const [isSkillsActive, setSkillsActive] = useState(false);
    const [isToolsActive , setToolsActive] = useState(false);

    const paraVarient ={
        initial : {opacity : 0 , y : "10px"},
        animate : {opacity : 1 , y : 0},
        exit : {opacity : 0 , y : "-10px"},
    }

    return(
        <div className="about-folders-container">
            <motion.div
            initial={{opacity : 0 , y : "20px"}}
            animate={{opacity : 1 , y : 0}}
            transition={{duration : 0.6 , delay : 0.3}}
             className="about-folders">
                <div className="folder-name" onClick={()=>{setSkillsActive(!isSkillsActive);}}><i className={isSkillsActive ? "ri-arrow-down-s-line" : "ri-arrow-right-s-line"}/><i className={isSkillsActive ? "ri-folder-open-fill saffron" : "ri-folder-3-fill saffron"}></i><p className={isSkillsActive && "white"}>Skills</p></div>
                <AnimatePresence>
                <motion.div
                key={isSkillsActive}
                initial={{opacity : 0 , height : "0px"}}
                animate={{opacity : 1 , height : "auto"}}
                exit={{opacity : 0 , height : "0px" , transition : {opacity : {duration : 0.1} , height : {duration : 0.3 , delay : 0.5}}}}
                transition={{opacity : {duration : 0.3} , height : {duration : 0.4} , ease : "ease"}}
                 className={isSkillsActive ? "sub-folders sub-folders-visible" : "sub-folders"}>
                    <motion.p
                    variants={paraVarient}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{duration : 0.3 , delay : 0.3}}
                    ><i class="ri-html5-fill"></i><span>HTML</span></motion.p>
                    <motion.p
                    variants={paraVarient}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{duration : 0.3 , delay : 0.4}}
                    ><i class="ri-css3-fill"></i><span>CSS</span></motion.p>
                    <motion.p
                    variants={paraVarient}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{duration : 0.3 , delay : 0.5}}
                    ><i class="fa-brands fa-square-js"></i><span>JavaScript</span></motion.p>
                    <motion.p
                    variants={paraVarient}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{duration : 0.3 , delay : 0.6}}
                    ><i class="fa-brands fa-bootstrap"></i><span>Bootstrap</span></motion.p>
                    <motion.p
                    variants={paraVarient}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{duration : 0.3 , delay : 0.7}}
                    ><i class="ri-reactjs-line"></i><span>React</span></motion.p>
                    <motion.p
                    variants={paraVarient}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{duration : 0.3 , delay : 0.8}}
                    ><i class="fa-brands fa-node-js"></i><span>Node.js</span></motion.p>
                    <motion.p
                    variants={paraVarient}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{duration : 0.3 , delay : 0.9}}
                    ><i class="ri-database-2-fill"></i><span>mongoDB</span></motion.p>
                    <motion.p
                    variants={paraVarient}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{duration : 0.3 , delay : 1}}
                    ><i class="fa-solid fa-server"></i><span>ExpressJS</span></motion.p>
                    <motion.p
                    variants={paraVarient}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{duration : 0.3 , delay : 1.1}}
                    ><i class="fa-brands fa-foursquare"></i><span>Framer</span></motion.p>
                </motion.div>
                </AnimatePresence>
                
            </motion.div>
            <motion.div
            initial={{opacity : 0 , y : "20px"}}
            animate={{opacity : 1 , y : 0}}
            transition={{duration : 0.6 , delay : 0.3}}
             className="about-folders" >
            <div className="folder-name" onClick={()=>{setToolsActive(!isToolsActive);}}><i className={isToolsActive ? "ri-arrow-down-s-line" : "ri-arrow-right-s-line"}/><i className={isToolsActive ? "ri-folder-open-fill green" : "ri-folder-3-fill green"}></i><p className={isToolsActive && "white"}>Tools</p></div>
            <AnimatePresence>
                <motion.div
                key={isToolsActive}
                initial={{opacity : 0 , height : "0px"}}
                animate={{opacity : 1 , height : "auto"}}
                exit={{opacity : 0 , height : "0px" , transition : {opacity : {duration : 0.1} , height : {duration : 0.3 , delay : 0.5}}}}
                transition={{opacity : {duration : 0.3} , height : {duration : 0.4} , ease : "ease"}}
                 className={isToolsActive ? "sub-folders sub-folders-visible" : "sub-folders"}>
                    <motion.p
                    variants={paraVarient}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{duration : 0.3 , delay : 0.3}}
                    ><i class="ri-code-box-fill"></i><span>VS code</span></motion.p>
                    <motion.p
                    variants={paraVarient}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{duration : 0.3 , delay : 0.4}}
                    ><i class="fa-brands fa-github"></i><span>github & git</span></motion.p>
                    <motion.p
                    variants={paraVarient}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{duration : 0.3 , delay : 0.5}}
                    ><i class="fa-brands fa-square-pied-piper"></i><span>studio 3T</span></motion.p>
                    <motion.p
                    variants={paraVarient}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{duration : 0.3 , delay : 0.6}}
                    ><i class="fa-brands fa-codepen"></i><span>Codepen</span></motion.p>
                    <motion.p
                    variants={paraVarient}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{duration : 0.3 , delay : 0.7}}
                    ><i class="fa-solid fa-cube"></i><span>codesandbox</span></motion.p>
                </motion.div>
                </AnimatePresence>
                
            </motion.div>
            
        </div>
    );
}

export default ProjectFolders;
