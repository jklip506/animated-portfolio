import { useRef, useState } from "react";
import "./contact.scss";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";

const variants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1,
      delay: 1.5,
    },
  },
};

const Contact = () => {
  const formRef = useRef();
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_c6ys5yg",
        "template_zmvu03j",
        formRef.current,
        "OfP-kSNoRu7fIyw_u"
      )
      .then(
        (result) => {
          setSuccess(true);
        },
        (error) => {
          setError(true);
        }
      );
  };

  return (
    <motion.div className="contact" variants={variants} ref={ref}>
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={variants}
          initial="initial"
          animate={isInView && "animate"}
        >
          <motion.h1 ref={ref} variants={variants}>
            Let’s work together
          </motion.h1>
          <div className="item">
            <h2>Mail</h2>
            <span>jklip506@gmail.com</span>
          </div>
          <div className="item">
            <h2>Location</h2>
            <span>Austin, TX</span>
          </div>
          <div className="item">
            <h2>Phone</h2>
            <span>512.923.4431</span>
          </div>
        </motion.div>
        <div className="formContainer">
          <motion.form
            ref={formRef}
            onSubmit={sendEmail}
            variants={itemVariants}
            initial="initial"
            animate={isInView && "animate"}
          >
            <input type="text" required placeholder="Name" name="name" />
            <input type="email" required placeholder="Email" name="email" />
            <textarea rows={8} placeholder="Message" name="message" />
            <button>Submit</button>
            {error && "Error"}
            {success && "Email sent! I'll get back to you as soon as possible."}
          </motion.form>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
