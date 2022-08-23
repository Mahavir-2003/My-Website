import {useState} from 'react';
import "../CSS/About-Folders.css";
import {motion , AnimatePresence} from "framer-motion";

function ContactFolders(props){
    const [isSkillsActive, setSkillsActive] = useState(true);

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
                <div className="folder-name" onClick={()=>{setSkillsActive(!isSkillsActive);}}><i className={isSkillsActive ? "ri-arrow-down-s-line" : "ri-arrow-right-s-line"}/><i className={isSkillsActive ? "ri-folder-open-fill saffron" : "ri-folder-3-fill saffron"}></i><p className={isSkillsActive && "white"}>Contact</p></div>
                <AnimatePresence>
                <motion.div
                key={isSkillsActive}
                initial={{opacity : 0 , height : "0px"}}
                animate={{opacity : 1 , height : "auto"}}
                exit={{opacity : 0 , height : "0px" , transition : {opacity : {duration : 0.1} , height : {duration : 0.3 , delay : 0.5}}}}
                transition={{opacity : {duration : 0.3} , height : {duration : 0.4} , ease : "ease"}}
                 className={isSkillsActive ? "sub-folders sub-folders-visible" : "sub-folders"}>
                    <a href="mailto:patelmahavir2003@gmail.com"><motion.p
                    variants={paraVarient}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{duration : 0.3 , delay : 0.3}}
                    ><i class="fa-solid fa-envelope"></i><span>&nbsp;mymail@gmail.com</span></motion.p></a>
                    <a target="_blank" href="https://www.instagram.com/carnage.8bit/"><motion.p
                    variants={paraVarient}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{duration : 0.3 , delay : 0.5}}
                    ><i class="ri-instagram-fill"></i><span>&nbsp;carnage.8bit</span></motion.p></a>
                    <a target="_blank" href="https://www.linkedin.com/in/mahavir-patel08/"><motion.p
                    variants={paraVarient}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{duration : 0.3 , delay : 0.6}}
                    ><i class="fa-brands fa-linkedin"></i><span>&nbsp;mahavir-patel08</span></motion.p></a>
                    <a target="_blank" href="https://github.com/Mahavir-2003"><motion.p
                    variants={paraVarient}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{duration : 0.3 , delay : 0.7}}
                    ><i class="fa-brands fa-github"></i><span>&nbsp;Mahavir-2003</span></motion.p></a>
                   
                </motion.div>
                </AnimatePresence>
                
            </motion.div>
    
            
        </div>
    );
}

export default ContactFolders;