import {useState , useEffect} from "react";
import {motion , AnimatePresence} from "framer-motion";
import "../CSS/About.css";
import AboutFolders from "./About-Folders";
import {MyBio , technical, nontechnical, university} from "./Web-data";
const url = "https://api.quotable.io/random?maxLength=150";


 function About(props){

    const [activeFile , setActiveFile] = useState("my-bio");

    function FileName(filename){
        setActiveFile(filename);
    }

    const [newQuote , setQuote] = useState({
        quote : "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
        author : "Martin Fowler"
    });

    function getQuote(){
        fetch(url)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            setQuote({
                quote : data.content,
                author : data.author
            });
        }).catch(err => {
            console.log(err);
        }
        );
    }


    function FileChange(){
        switch (activeFile) {
            case "my-bio":
                SetFileToShow(MyBio);
                break;
    
            case "technical":
                SetFileToShow(technical);
                break;
    
            case "non-technical":
                SetFileToShow(nontechnical);
                break;
    
            case "university":
                SetFileToShow(university);  
                break;
    
            default:
                SetFileToShow(MyBio);
                break;
        }
    }

     useEffect(()=>{
        FileChange();
     },[ activeFile]);


    const [fileToShow , SetFileToShow] = useState(MyBio);

    const codeVarient = {
        hidden: {opacity : 0 , height : "0px"},
        visible: {opacity : 1 , height : "auto" , transition: {duration : 1 , ease : "easeInOut"}},
        exit: {opacity : 0 , height : "0px"},
    }

    const codeVariants = {
        hidden :{ y: "50%" , opacity: 0 },
        visible :{ y : 0 , opacity: 1}
    }
    

     return(
            <motion.div 
            key={screen.width >=1030 ? props.isVisible : null}
            initial={{opacity : 0.5}}
            animate={{opacity : 1}}
            transition={{duration : 0.6}}
            className="about-container">
                <div className="about-sections-container">
                <div className="about-first-section">
                    <div>
                        <nav
                         className="about-dropdown-nav">
                            <motion.p
                            initial={{opacity : 0 , y : "20%"}}
                            animate={{opacity : 1 , y : 0 }}
                            transition={{duration : 0.8 , delay : 0.3}}
                            >// Personal-Info</motion.p> 
                        </nav>
                        <AboutFolders activefilename={FileName} />
                    </div>
                </div>
                <div className="about-second-section">
                    <div className="about-info">
                        <nav className="about-nav">
                        <AnimatePresence exitBeforeEnter>
                        <motion.p
                        key={activeFile}
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            exit={{opacity: 0}}
                            transition={{duration: 0.4}}
                        >// {activeFile}{".txt"}</motion.p>
                        </AnimatePresence>
                        </nav>
                        <AnimatePresence exitBeforeEnter>
                        <motion.div className="about-info-content" 
                        key={fileToShow}
                        variants={codeVarient}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                               >
                            <AnimatePresence exitBeforeEnter>
                            <ol>
                            <motion.li
                            variants={codeVariants}
                        transition={{ duration: 0.8 , delay: 0}}
                            >&nbsp;{"/*"}</motion.li>
                            {fileToShow.map((sentence ,index) =>{
                               return <motion.li
                               variants={codeVariants}
                        transition={{ duration: 0.8 , delay: (0.1 * index)}}
                                >{sentence}</motion.li>
                            })}
                            <motion.li
                            variants={codeVariants}
                        transition={{ duration: 0.8 , delay: (0.1 * fileToShow.length)}}
                            >&nbsp;{"*/"}</motion.li>
                            </ol>
                        </AnimatePresence>
                        </motion.div>
                        </AnimatePresence>
                    </div>
                    <div className="about-codesnippet">
                    <motion.nav
                    initial={{opacity : 0 , y : "20%"}}
                            animate={{opacity : 1 , y : 0}}
                            transition={{duration : 1 , delay : 0.3}}
                            className="quote-nav"
                            >// Random Quotes</motion.nav>
                    <div className="about-codesnippet-content">
                     <AnimatePresence exitBeforeEnter>
                        <motion.div
                        key={newQuote.author}
                        variants={codeVarient}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={{duration: 0.4}}
                         className="about-codesnippet-codebox">
                         <motion.p
                         variants={codeVariants}
                        transition={{ duration: 0.8 , delay: 0}}
                         ><span>// here is a quick quote genrator</span></motion.p>
                         <motion.p
                         variants={codeVariants}
                        transition={{ duration: 0.8 , delay: 0}}
                         ><span>// Just click and let the API do rest of the work</span></motion.p>
                               <p>&nbsp;</p>
                                <motion.p
                                variants={codeVariants}
                        transition={{ duration: 0.8 , delay: 0}}
                                ><span className="pink">function  </span><span className="green">Quote</span><span className="blue">{"("}</span><span className="blue">{")"}</span><span className="yellow">{"{"}</span></motion.p>
                                <motion.p
                                variants={codeVariants}
                        transition={{ duration: 0.8 , delay: 0.1}}
                                >&nbsp;<span className="sky-blue">return </span><span className="yellow">{"("}</span><span className="blue">{"{"}</span></motion.p>
                                <motion.p
                                 variants={codeVariants}
                        transition={{ duration: 0.8 , delay: 0.2}}
                                 className="spaces"><span className="green">quote </span><span className="white">: </span><span className="saffron">"{newQuote.quote}"</span></motion.p>
                                <motion.p
                                 variants={codeVariants}
                        transition={{ duration: 0.8 , delay: 0.3}}
                                 className="spaces"><span className="green">author </span><span className="white">: </span><span className="saffron">"{newQuote.author}"</span></motion.p>
                                <motion.p
                                 variants={codeVariants}
                        transition={{ duration: 0.8 , delay: 0.4}}
                                ><span className="yellow">{"}"}</span></motion.p>
                                <p>&nbsp;</p>
                                <motion.p
                                 variants={codeVariants}
                        transition={{ duration: 0.8 , delay: 0.5}}
                                 className="new-quote" onClick={getQuote}><span className="pink">const </span><span className="green">NewQuote </span><span className="white">= </span><span className="saffron">"click here to get a new quote"</span></motion.p>

                        </motion.div>
                        </AnimatePresence>
                    </div>
                    </div>
                </div>
                </div>
            </motion.div>
     );
 }

 export default About;