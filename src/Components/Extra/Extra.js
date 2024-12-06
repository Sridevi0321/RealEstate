import React from 'react'
import './Extra.css'
import { HiLocationMarker } from 'react-icons/hi';
import CountUp from 'react-countup';
import {motion} from "framer-motion";
function Extra() {
  return (
    <section className="extra-wrapper">
      <div className="padding innerWidth flexCenter extra-container">
        <div className="flexColStart extra-left">
      
          <div className="extra-title">
          <div className="blueCircle"></div>
          <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 4,
                type: "ease-in",
              }}>
            Discover <br/> 
            Most Perfect<br/>
            Property
          </motion.h1>
          </div>
          <div className="extra-des flexColStart">
            <span className='secondaryText'>Find beautiful property that suits you best</span>
            <span className='secondaryText'>You will not face any difficulties in finding the best residence for you</span>
          </div>
          <div className="search-bar flexCenter">
            <HiLocationMarker color="blue" size={25}></HiLocationMarker>
            <input type="text" />
            <button className="button">Search</button>
            
          </div>
          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                  <CountUp start={8500} end={9000} duration={4}/>
                  <span>+</span>
              </span>
              <span className='secondaryText'>
                  Premium Properties
              </span>
            </div>
            <div className="flexColCenter stat">
              <span>
                  <CountUp start={50} end={900} duration={4}/>
                  <span>+</span>
              </span>
              <span className='secondaryText'>
                  Happy Customer
              </span>
            </div>
            <div className="flexColCenter stat">
              <span>
                  <CountUp start={0} end={25} duration={4}/>
                  <span>+</span>
              </span>
              <span className='secondaryText'>
                  Award Winning
              </span>
            </div>
          </div>
        </div>
        <div className="extra-right flexCenter">
        <motion.div
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 4,
              type: "ease-in",
            }}
            className="image-container"
          >
            <img src="mainimage.webp" alt="" />
          </motion.div>
        </div>

      </div>
    </section>
  )
}

export default Extra
