import React from "react";
import Header from "../Header/Header";
import "./Hero.css";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import { motion } from "framer-motion";
import NumberCounter from "number-counter";
import { Link } from "react-scroll";

const Hero = () => {
  const transition = { type: "spring", duration: 3 };
  const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <div className="Hero" id="Home">
      <div className="blur blur-h"></div>
      <div className="left-h">
        <Header />
        {/* this is hero heading */}
        <div className="the-best-ad">
          <motion.div
            initial={{ left: mobile ? "165px" : "238px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span>the best fitness club in the town</span>
        </div>

        {/* this hero text */}

        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>your</span>
          </div>
          <div>
            <span> ideal Body</span>
          </div>
          <div>
            <span>
              in here i will help you to shape and build your ideal body and
              live up your life fullest
            </span>
          </div>
        </div>
        {/* figures */}
        <div className="figures">
          <div>
            <span>
              {" "}
              <NumberCounter end={140} start={100} delay="3" preFix="+" />
            </span>
            <span>Expert coaches</span>
          </div>
          <div>
            <span>
              <NumberCounter end={999} start={900} delay="3" preFix="+" />
            </span>
            <span>Members joined</span>
          </div>
          <div>
            <span>
              <NumberCounter end={50} start={1} delay="3" preFix="+" />
            </span>
            <span> fitness programs</span>
          </div>
        </div>
        {/* hero buttons */}
        <div className="hero-buttons">
          <buttons className="btn">Get Started</buttons>
          <buttons className="btn">Learn More</buttons>
        </div>
      </div>
      {/* hero right side */}
      <div className="right-h">
        <Link className="btn join-btn" to="Join-us" span={true} smooth={true}>
          Join naw
        </Link>
        <motion.div
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          transition={transition}
          className="heart_rates"
        >
          <img src={Heart} alt="" />
          <span>Heart rate</span>
          <span> 116 bpn</span>
        </motion.div>
        <img src={hero_image} alt="" className="hero_image" />
        <motion.img
          initial={{ right: "11rem" }}
          whileInView={{ right: "20rem" }}
          transition={transition}
          src={hero_image_back}
          alt=""
          className="hero_image_back"
        />
        {/* caalories */}
        <motion.div
          initial={{ right: "37rem" }}
          whileInView={{ right: "28rem" }}
          transition={transition}
          className="Calories"
        >
          <img src={Calories} alt="" />
          <div>
            <span>Calories Burned </span>
            <span> 220kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
