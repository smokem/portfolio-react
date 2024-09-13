import { useRef } from "react";
import "./services.scss";
import { motion, useInView, } from "framer-motion";

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
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{color:"orange"}}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}>For Your</motion.b> Business.
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Videography</h2>
          <p>
          My journey as a videographer began with a passion for capturing moments and telling stories through the lens. Over the years, I have honed my skills in photography and video editing, mastering tools like Adobe Premiere Pro and After Effects. I’ve had the pleasure of working with various teams and clients, creating videos that not only capture events but also convey emotions and narratives in a compelling way.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Web Development</h2>
          <p>
          My path in web development started with a curiosity about how websites are built and a desire to create something beautiful and functional. I immersed myself in learning HTML, CSS, JavaScript, and React, gradually developing the ability to transform ideas into fully functioning web applications. Each project I undertake is an opportunity to craft an engaging, interactive experience that draws users in and keeps them engaged.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Graphic Design</h2>
          <p>
          Graphic design has been a part of my creative expression for as long as I can remember. Its a field where I can merge my artistic sensibilities with the needs of clients to produce visually striking and meaningful content. From developing branding materials to crafting promotional graphics, my goal is to tell a story through design—one that resonates and leaves a lasting impression.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>UI/UX Design</h2>
          <p>
          The world of UI/UX design has always fascinated me, with its blend of creativity and functionality. Through my experiences in various hackathons and projects, I’ve learned to appreciate the importance of designing interfaces that are not only visually appealing but also intuitive and easy to use. With Figma as my tool of choice, I aim to create designs that guide users effortlessly through their digital journey.
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;