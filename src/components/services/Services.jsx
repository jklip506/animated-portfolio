import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          Determined to Drive Success
          <br /> in Your Company
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For Your</motion.b>{" "}
            Business.
          </h1>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Determined Veteran</h2>
          <p>
            As a veteran, I bring a unique blend of discipline, strategic
            thinking, and resilience to the tech industry. My experience in the
            Navy as an Intelligence Analyst has ingrained in me a meticulous
            approach to problem-solving and a commitment to excellence in every
            task.
          </p>
          <hr />
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Computer Science Major</h2>
          <p>
            Pursuing a Bachelor's in Computer Science at St. Edward’s
            University, I've honed my technical expertise, specializing in
            full-stack development, cloud technologies, and software design.
            This academic journey has been a cornerstone in developing my
            professional skills and theoretical understanding.
          </p>
          <hr />
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Leadership and Collaboration</h2>
          <p>
            With a proven track record in leadership, I've effectively managed
            cross-functional projects using Agile methodologies and led
            initiatives with significant impacts. My experience as a software
            engineering intern and an Intelligence Analyst in the Navy
            highlights my ability to lead and collaborate in diverse team
            settings.
          </p>
          <hr />
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Tech Adaptability & Versatility</h2>
          <p>
            Demonstrating exceptional adaptability, I have excelled in various
            tech roles - from developing scalable features at National
            Instruments to analyzing critical intelligence in the Navy. My quick
            learning and application of new technologies underscore my ability
            to thrive in rapidly changing environments.
          </p>
          <hr />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
