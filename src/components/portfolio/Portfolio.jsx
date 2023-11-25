import React from "react";
import "./portfolio.scss";

const items = [
  {
    id: 1,
    title: "Ecommerce",
    img: "https://images.pexels.com/photos/19031635/pexels-photo-19031635/free-photo-of-a-window-with-a-reflection-of-trees-and-water.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
  },

  {
    id: 2,
    title: "IMDb Clone",
    img: "https://images.pexels.com/photos/17151144/pexels-photo-17151144/free-photo-of-a-houseplant-near-the-window-overlooking-the-trees.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
  },

  {
    id: 3,
    title: "Music App",
    img: "https://images.pexels.com/photos/18990021/pexels-photo-18990021/free-photo-of-couple.png?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
  },

  {
    id: 4,
    title: "Admin Dashboard",
    img: "https://images.pexels.com/photos/13703327/pexels-photo-13703327.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
  },
];

const Single = ({ item }) => {
  return <section>{item.title}</section>;
};

const Portfolio = () => {
  return (
    <div className="portfolio">
      {items.map((item) => {
        return <Single key={item.id} item={item} />;
      })}
    </div>
  );
};

export default Portfolio;
