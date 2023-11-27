import React, { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Electronics E-commerce",
    img: "/ecommerce1.png",
    desc: "Electronics e-commerce site built with Next.js, Sanity.io, and Stripe.",
    url: "https://ecommerce-next-js-sanity.vercel.app/",
  },

  {
    id: 2,
    title: "IMDb Clone",
    img: "/imdb1.png",
    desc: "IMDb clone built with Next.js, Tailwind and The Movie Database API.",
    url: "https://imdb-clone-nextjs-eight.vercel.app/",
  },
  
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  const onClick = (url) => {
    if (url) {
      window.open(url, "_blank");
    }
  };

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button onClick={() => onClick(item.url)}>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Recent Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => {
        return <Single key={item.id} item={item} />;
      })}
    </div>
  );
};

export default Portfolio;
