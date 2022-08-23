import React from "react";
import {motion} from "framer-motion";
import "../CSS/Home.css";

function Home(){


    const codeVariants = {
        initial :{ y: "50%" , opacity: 0 },
        animate :{ y : 0 , opacity: 1}  
    }

    const codeContainer = {
        initial :{ opacity: 0 },
        animate :{ opacity: 1 , 
                 transition: {duration: 0.8 , delay: 0.8}
        }
    }

    return(
        <div className="home-section-container">
            <div className="home-main-section">
                <motion.div
                variants={codeContainer}
                initial="initial"
                animate="animate"
                 className="home-section-text">
                    <div className="home-section-text-intro">
                        <motion.p
                        initial={{y : "-50%" , opacity: 0}}
                        animate={{y : 0 , opacity: 1}}
                        transition={{duration: 0.8 , delay: 1}}
                        >Hi all, I am</motion.p>
                        <motion.p
                        initial={{ opacity: 0}}
                        animate={{ opacity: 1}}
                        transition={{duration: 1 , delay: 1.2}}
                        >Mahavir Patel</motion.p>
                        <motion.p
                        variants={codeVariants}
                        transition={{ duration: 0.8 , delay: 1}}
                        > {'>'} full-stack developer</motion.p>
                    </div>
                    <div className="home-section-text-link">
                        <motion.p
                        variants={codeVariants}
                        transition={{ duration: 0.8 , delay: 1.2}}
                        >// Hey there, glad to connect with you</motion.p>
                        <motion.p
                        variants={codeVariants}
                        transition={{ duration: 0.8 , delay: 1.4}}
                        >// You can also connect with me at my github</motion.p>
                        <motion.p
                        variants={codeVariants}
                        transition={{ duration: 0.8 , delay: 1.6}}
                        ><a target="_blank" href="https://github.com/Mahavir-2003"><span>const </span><span>githubLink </span><span>= </span><span>"https://github.com/Mahavir-2003"</span></a></motion.p>
                    </div>
                </motion.div>
                <motion.div
                  variants={codeContainer}
                    initial="initial"
                    animate="animate"
                 className="home-section-snakegame">
                    <motion.div
                    variants={codeContainer}
                     className="home-section-codesnippet">
                        <motion.p
                        variants={codeVariants}
                        transition={{ duration: 0.8 , delay: 1}}
                        ><span className="purple">const </span><span className="green">owner </span><span className="white">= </span>
                            <span className="saffron">"Mahavir Patel"</span>;
                        </motion.p>
                        <motion.p
                        variants={codeVariants}
                        transition={{ duration: 0.8 , delay: 1.1}}
                        ><span className="purple">const </span><span className="green">expertise </span>= 
                        <span className="saffron"> "full-stack developer"</span>;
                        </motion.p>
                        <motion.p
                        variants={codeVariants}
                        transition={{ duration: 0.8 , delay: 1.2}}
                        ><span className="purple">const </span><span className="green">github </span>= 
                        <span className="saffron"> "https://github.com/Mahavir-2003"</span>;
                        </motion.p><br /><br />
                        <motion.p
                        variants={codeVariants}
                        transition={{ duration: 0.8 , delay: 1.3}}
                        ><span className="blue">function </span><span className="yellow">introduction </span><span className="purple">{"("}</span><span className="green">owner</span>, <span className="green">expertise</span>, <span className="green">github</span><span className="purple">{")"}</span><span className="blue">{"{"}</span></motion.p>
                        <motion.p
                        variants={codeVariants}
                        transition={{ duration: 0.8 , delay: 1.4}}
                        ><span className="purple">&nbsp;&nbsp;&nbsp;&nbsp;return</span><span className="yellow">{"("}</span><span className="blue">{"{"}</span></motion.p>
                        <motion.p
                        variants={codeVariants}
                        transition={{ duration: 0.8 , delay: 1.5}}
                        ><span className="white">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;greet</span> <span className="blue">: </span><span className="saffron">`Hi all, I am`</span>,</motion.p>
                        <motion.p
                        variants={codeVariants}
                        transition={{ duration: 0.8 , delay: 1.6}}
                        ><span className="white">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;name</span><span className="blue"> : </span><span className="saffron">{"`${"}</span><span className="green">owner</span><span className="saffron">{"}`"}</span>,</motion.p>
                        <motion.p
                        variants={codeVariants}
                        transition={{ duration: 0.8 , delay: 1.7}}
                        ><span className="white">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;skill</span><span className="blue"> : </span><span className="saffron">`${"{"}'{">"}'{"}"} </span><span className="saffron">{"${"}</span><span className="green">expertise</span><span className="saffron">{"}`"}</span>,</motion.p>
                        <motion.p
                        variants={codeVariants}
                        transition={{ duration: 0.8 , delay: 1.8}}
                        ><span className="white">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;github</span><span className="blue"> : </span><span className="saffron">{"`${"}</span><span className="green">github</span><span className="saffron">{"}`"}</span></motion.p>
                        <motion.p
                        variants={codeVariants}
                        transition={{ duration: 0.8 , delay: 1.9}}
                        >&nbsp;&nbsp;&nbsp;<span className="blue">{"}"}</span><span className="yellow">{")"}</span>;</motion.p>
                        <motion.p
                        variants={codeVariants}
                        transition={{ duration: 0.8 , delay: 2}}
                        ><span className="blue">{"}"}</span></motion.p>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}

export default Home;