import React from "react";
import {motion} from "framer-motion";
import "../CSS/Footer.css";

function Footer(){
    return(
        <motion.div
         initial={{ x: "100%" }}
        animate={{ x : 0 }}
        transition={{ duration: 0.8 }}
         className="footer">
            <div className="Footer-start-elements">
                <motion.li
                initial={{ y : "100%" , opacity: 0 }}
          animate={{ y : 0 , opacity: 1 }}
          transition={{ duration: 0.5 , delay: 1.4}}
                >find me in:</motion.li>
                <motion.li
                initial={{ y : "100%" , opacity: 0 }}
          animate={{ y : 0 , opacity: 1 }}
          transition={{ duration: 0.5 , delay: 1.2}}
                ><a target="_blank" href="https://instagram.com/carnage.8bit/"><i className="ri-instagram-fill"></i></a></motion.li>
                <motion.li
                initial={{ y : "100%" , opacity: 0 }}
          animate={{ y : 0 , opacity: 1 }}
          transition={{ duration: 0.5 , delay: 1}}
                ><a target="_blank" href="https://www.linkedin.com/in/mahavir-patel08/"><i className="ri-linkedin-box-fill"></i></a></motion.li>
            </div>
            <div className="Footer-end-elements">
                <motion.li
                initial={{ y : "100%" , opacity: 0 }}
          animate={{ y : 0 , opacity: 1 }}
          transition={{ duration: 0.5 , delay: 0.8}}
                ><a target="_blank" href="https://github.com/Mahavir-2003"><span>@Mahavir-2003</span><i className="ri-github-fill"></i></a></motion.li>
            </div>
        </motion.div>
    );
}

export default Footer;