import {useState , useRef} from 'react';
import emailjs from '@emailjs/browser';
import "../CSS/Contact.css";
import {motion ,AnimatePresence} from "framer-motion";
import ContactFolders from "./Contact-folders";

function Contact(props) {

    const [showUser , setShowUser] = useState("contact_form");  

    const date = new Date();

	const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

    const [formData ,setFormData] = useState({
        name : "",
        email : "",
        message : "",
        date: ( `${days[date.getDay()]}  ${date.getDate()}  ${months[date.getMonth()]}`)
      });

    const form = useRef();

    function resetForm() {
        setFormData({
            name : "",
            email : "",
            message : "",
            date: ( `${days[date.getDay()]}  ${date.getDate()}  ${months[date.getMonth()]}`)
        });
    }

  const sendEmail = (e) => {
    e.preventDefault();

    if(formData.name === "" || formData.email === "" || formData.message === "") {
        alert("Please enter all fields");
        resetForm();
    }else{

    emailjs.sendForm('service_dh1wvrn', 'template_x0zilno', form.current, 'o9w5uR9tnjnP-xvfU')
      .then((result) => {
            setShowUser("success");
            resetForm();

      }, (error) => {
          console.log(error.text);
            setShowUser("error");
            resetForm();
      });
    }
  };

      function handleChange(event) {
        const { name, value } = event.target;
    
        setFormData(prevValue => {
          if (name === "name") {
            return {
                name: value,
                email: prevValue.email,
                message: prevValue.message,
                date : prevValue.date
            };
          } else if (name === "email") {
            return {
                name: prevValue.name,
                email: value,
                message: prevValue.message,
                date : prevValue.date
            };
          } else if (name === "message") {
            return {
                name: prevValue.name,
                email: prevValue.email,
                message : value,
                date : prevValue.date
            };
          }
        });
      }

      const opacityVarient ={
        hidden : {opacity: 0},
        visible : {opacity: 1 , transition : {duration : 1 ,ease : "easeInOut"}},
        exit : {opacity: 0}
      }

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
         className="projects-container">
            <div className="projects-sections-container">
                <div className="projects-first-section"> 
                <div>
                        <nav className="about-dropdown-nav contact-dropdown-nav">
                            <motion.p
                            initial={{opacity : 0 , y : "20%"}}
                            animate={{opacity : 1 , y : 0 }}
                            transition={{duration : 0.8 , delay : 0.3}}
                            >// Contact Me</motion.p>
                        </nav>
                        <ContactFolders isVisible={props.isVisible} />
                    </div>
                </div>
                <div className="about-second-section">
                    <div className="about-info">
                        <nav>
                        <AnimatePresence exitBeforeEnter>
                        <motion.p
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            exit={{opacity: 0}}
                            transition={{duration: 0.4}}
                        >// Let's connect</motion.p>
                        </AnimatePresence>
                        </nav>
                        <AnimatePresence exitBeforeEnter>
                        <motion.div className="contact-info-content" 
                               variants={codeVarient}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                               >
                        {showUser === "contact_form" &&(
                            <AnimatePresence exitBeforeEnter>
                            <motion.form
                            key={showUser}
                             variants={opacityVarient}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                             ref={form} onSubmit={sendEmail}>
                                <motion.div
                                variants={codeVariants}
                                initial={{opacity : 0 , y : "20%"}}
                                transition={{ duration: 0.8 , delay: 0.2}}
                                >
                                <p>_name :</p>
                                <input type="text" autoComplete="off"
                               onChange={handleChange}
                               value={formData.name}
                                name="name"
                                />
                                </motion.div>
                                <motion.div
                                variants={codeVariants}
                                initial={{opacity : 0 , y : "20%"}}
                                transition={{ duration: 0.8 , delay: 0.4}}
                                >
                                <p>_email :</p>
                                <input type="email" autoComplete="off"
                                    onChange={handleChange}
                               value={formData.email}
                                name="email"
                                />
                                </motion.div>
                                <motion.div
                                variants={codeVariants}
                                initial={{opacity : 0 , y : "20%"}}
                                transition={{ duration: 0.8 , delay: 0.6}}
                                >
                                <p>_message :</p>
                                <textarea className="textarea" autoComplete="off"
                                    onChange={handleChange}
                               value={formData.message}
                                name="message"
                                />
                                </motion.div>
                                <motion.div
                                variants={codeVariants}
                                initial={{opacity : 0 , y : "20%"}}
                                transition={{ duration: 0.8 , delay: 0.8}}
                                >
                                <input type="submit" value="Submit-message"/>
                                </motion.div>
                            </motion.form>
                            </AnimatePresence>
                        )}
                        {showUser === "success" &&(
                            <AnimatePresence exitBeforeEnter>
                               <motion.div
                               key={showUser}
                             variants={opacityVarient}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className="contact-submit-result">
                                  <motion.p
                                  variants={codeVariants}
                                  transition={{ duration: 0.8 , delay: 0}}
                                  >Thank you 🤟</motion.p>
                                  <motion.p
                                  variants={codeVariants}
                                  initial={{opacity : 0 , y : "20%"}}
                                  transition={{ duration: 0.8 , delay: 0.2}}
                                  >Your message has been accepted. You will receive answer really soon!</motion.p>
                                  <motion.p
                                  variants={codeVariants}
                                  transition={{ duration: 0.8 , delay: 0.4}}
                                  ><button onClick={()=>{setShowUser("contact_form")}}>send-new-message</button></motion.p>
                               </motion.div>
                               </AnimatePresence>
                        )}
                        {showUser === "error" &&(
                            <AnimatePresence exitBeforeEnter>
                            <motion.div
                             key={showUser}
                             variants={opacityVarient}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                             className="contact-submit-result">
                                  <motion.p
                                  variants={codeVariants}
                                  transition={{ duration: 0.8 , delay: 0}}
                                  >Oops! something went wrong <span>{"(⊙_⊙)?"}</span></motion.p>
                                  <motion.p
                                  variants={codeVariants}
                                  initial={{opacity : 0 , y : "20%"}}
                                  transition={{ duration: 0.8 , delay: 0.2}}
                                  >Sorry we are facing some connectivity issues on our side. please try again later.</motion.p>
                                  <motion.p
                                  variants={codeVariants}
                                  transition={{ duration: 0.8 , delay: 0.4}}
                                  ><button onClick={()=>{setShowUser("contact_form")}}>Try-again</button></motion.p>
                               </motion.div>
                               </AnimatePresence>
                        )}
                       
                        </motion.div>
                        </AnimatePresence>
                    </div>
                    <div className="about-codesnippet contact-code">
                    <motion.nav
                    initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{duration: 0.4}}
                            >// contact code</motion.nav>
                    <div className="about-codesnippet-content">
                    <AnimatePresence exitBeforeEnter>
                        <motion.div
                        variants={codeVarient}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={{duration: 0.4}}
                         className="about-codesnippet-codebox">
                         <motion.p
                         variants={codeVariants}
                        transition={{ duration: 0.8 , delay: 0}}
                         ><span className="pink">const </span><span className="green">button </span><span className='white'>= </span><span className="blue">document<span className="white">.</span>querySelector</span><span className="pink">{"("}</span><span className="saffron">"#sendBtn"</span><span className="pink">{")"}</span><span className="white">;</span></motion.p>
                         <p>&nbsp;</p>
                         <motion.p
                         variants={codeVariants}
                        transition={{ duration: 0.8 , delay: 0.1}}
                         ><span className="pink">const </span><span className="green">message </span><span className="white">= </span><span className="blue">{"{"}</span></motion.p>
                         <motion.p
                         variants={codeVariants}
                        transition={{ duration: 0.8 , delay: 0.2}}
                         >&nbsp;<span className='green'>name </span><span className="white">: </span><span className="saffron">"{formData.name}"</span><span className="white">,</span></motion.p>
                         <motion.p
                         variants={codeVariants}
                        transition={{ duration: 0.8 , delay: 0.3}}
                         >&nbsp;<span className="green">email </span><span className='white'>: </span><span className="saffron">"{formData.email}"</span><span className="white">,</span></motion.p>
                         <motion.p
                         variants={codeVariants}
                        transition={{ duration: 0.8 , delay: 0.4}}
                         >&nbsp;<span className="green">message </span><span className="white">: </span><span className="saffron">"{formData.message}"</span><span className="white">,</span></motion.p>
                         <motion.p
                         variants={codeVariants}
                        transition={{ duration: 0.8 , delay: 0.5}}
                         >&nbsp;<span className="green">date </span><span className="white">: </span><span className="saffron">"{formData.date}"</span></motion.p>
                         <motion.p
                         variants={codeVariants}
                        transition={{ duration: 0.8 , delay: 0.6}}
                         ><span className="blue">{"}"}</span></motion.p>
                         <p>&nbsp;</p>
                         <motion.p
                         variants={codeVariants}
                        transition={{ duration: 0.8 , delay: 0.7}}
                         ><span className="green">button</span><span className="white">.</span><span className="blue">addEventListener</span><span className="pink">{"("}</span><span className="saffron">"click"</span><span className="white">, </span><span className="blue">{"()"} </span><span className="white">{"=>"} </span><span className="green">{"{"}</span></motion.p>
                         <motion.p
                         variants={codeVariants}
                        transition={{ duration: 0.8 , delay: 0.8}}
                         >&nbsp;<span className="blue">form</span><span className="white">.</span><span className="yellow">send</span><span className="pink">{"("}</span><span className="green">message</span><span className="pink">{")"}</span><span className="white">;</span></motion.p>
                         <motion.p
                         variants={codeVariants}
                        transition={{ duration: 0.8 , delay: 0.9}}
                         ><span className="green">{"}"}</span><span className="pink">{")"}</span><span className="white">;</span></motion.p>
                        </motion.div>
                        </AnimatePresence>
                    </div>
                    </div>
                </div>
            </div>
        </motion.div>
  );
}

export default Contact;