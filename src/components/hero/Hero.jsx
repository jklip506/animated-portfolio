import React from "react";
import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
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
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  }
};

const sliderVariants = {
    initial: {
      x: 0,
    },
    animate: {
      x: "-220%",
      transition: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 20,
      },
    },
  };

const Hero = ({ portfolioRef, contactRef }) => {

  const scrollToRef = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
          <motion.h2 variants={textVariants}>Jason Klipple</motion.h2>
          <motion.h1 variants={textVariants}>Web developer</motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button href={`#Porfolio`} variants={textVariants} onClick={() => scrollToRef(portfolioRef)}>See the Latest Works</motion.button>
            <motion.button href={`#Contact`} variants={textVariants} onClick={() => scrollToRef(contactRef)} >Contact Me</motion.button>
          </motion.div>
          <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" alt="" />
        </motion.div>
        <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
          Veteran Father Husband Developer
        </motion.div>
      </div>
      <div className="imageContainer">
        <img src="/hero.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
