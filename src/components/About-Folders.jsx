import {useState} from "react";
import "../CSS/About-Folders.css";
import {motion , AnimatePresence} from "framer-motion";



function AboutFolders({activefilename}){


    const [isBioActive, setBioActive] = useState(true);
    const [isintrestsActive , setintrestsActive] = useState(false);
    const [iseducationActive , seteducationActive] = useState(false);


    function Fileclick(event){
        activefilename(event.target.id);
    }

    return(
        <div className="about-folders-container">
            <motion.div
            initial={{opacity : 0 , y : "20px"}}
            animate={{opacity : 1 , y : 0}}
            transition={{duration : 0.6 , delay : 0.3}}
             className="about-folders">
                <div className="folder-name" onClick={()=>{setBioActive(!isBioActive);}}><i className={isBioActive ? "ri-arrow-down-s-line" : "ri-arrow-right-s-line"}/><i className={isBioActive ? "ri-folder-open-fill saffron" : "ri-folder-3-fill saffron"}></i><p className={isBioActive && "white"}>bio</p></div>
                <AnimatePresence exitBeforeEnter>
                <motion.div
                key={isBioActive}
                initial={{opacity : 0 , height : "0px"}}
                animate={{opacity : 1 , height : "auto"}}
                exit={{opacity : 0 , height : "0px" , transition : {opacity : {duration : 0.1} , height : {duration : 0.3}}}}
                transition={{opacity : {duration : 0.3} , height : {duration : 0.1} , ease : "ease"}}
                 className={isBioActive ? "sub-folders sub-folders-visible" : "sub-folders"}>
                    <p><i class="ri-file-fill"/><span id="my-bio" onClick={Fileclick}>my-bio.txt</span></p>
                </motion.div>
                </AnimatePresence>
            </motion.div>
            <motion.div
            initial={{opacity : 0 , y : "20px"}}
            animate={{opacity : 1 , y : 0}}
            transition={{duration : 0.6 , delay : 0.5}}
             className="about-folders" >
            <div className="folder-name" onClick={()=>{setintrestsActive(!isintrestsActive);}}><i className={isintrestsActive ? "ri-arrow-down-s-line" : "ri-arrow-right-s-line"}/><i className={isintrestsActive ? "ri-folder-open-fill green" : "ri-folder-3-fill green"}></i><p className={isintrestsActive && "white"}>intrests</p></div>
            <AnimatePresence exitBeforeEnter>
                <motion.div
                key={isintrestsActive}
                initial={{opacity : 0 , height : "0px"}}
                animate={{opacity : 1 , height : "auto"}}
                exit={{opacity : 0 , height : "0px" , transition : {opacity : {duration : 0.1} , height : {duration : 0.3}}}}
                transition={{opacity : {duration : 0.3} , height : {duration : 0.1} , ease : "ease"}}
                 className={isintrestsActive ? "sub-folders sub-folders-visible" : "sub-folders"}>
                    <p><i class="ri-file-fill"/><span id="technical" onClick={Fileclick}>technical.txt</span></p>
                    <p><i class="ri-file-fill"/><span id="non-technical" onClick={Fileclick}>non-technical.txt</span></p>
                </motion.div>
                </AnimatePresence>
            </motion.div>
            <motion.div
            initial={{opacity : 0 , y : "20px"}}
            animate={{opacity : 1 , y : 0}}
            transition={{duration : 0.6 , delay : 0.7}}
             className="about-folders">
            <div className="folder-name" onClick={()=>{seteducationActive(!iseducationActive);}}><i className={iseducationActive ? "ri-arrow-down-s-line" : "ri-arrow-right-s-line"}/><i className={iseducationActive ? "ri-folder-open-fill blue" : "ri-folder-3-fill blue"}></i><p className={iseducationActive && "white"}>education</p></div>
            <AnimatePresence exitBeforeEnter>
                <motion.div
                key={iseducationActive}
                initial={{opacity : 0 , height : "0px"}}
                animate={{opacity : 1 , height : "auto"}}
                exit={{opacity : 0 , height : "0px" , transition : {opacity : {duration : 0.1} , height : {duration : 0.3}}}}
                transition={{opacity : {duration : 0.3} , height : {duration : 0.1} , ease : "ease"}}
                 className={iseducationActive ? "sub-folders sub-folders-visible" : "sub-folders"}>
                    <p><i class="ri-file-fill"/><span id="university" onClick={Fileclick}>university.txt</span></p>
                </motion.div>
                </AnimatePresence>
            </motion.div>
        </div>
    );
}

export default AboutFolders;