import React from 'react'
import Profile from "../../assets/home.jpeg"
import {Link} from 'react-router-dom';
import {FaArrowRight} from 'react-icons/fa'
import './home.css'
const Home = () => {
  return (
   <section className='home section grid'>
    <img src={Profile} alt='' className='home__img'/>
    <div className="home__content">
      <div className='home__data'>
        <h1 className='home__title'>
       <span> I'm Divya.</span> Web Developer</h1>
       <p className='home__description'>
        In the dynamic realm of MERN stack development, my passion burns brightly. From architecting scalable back-end systems with Node.js to crafting captivating user interfaces with React, I immerse myself fully in the intricacies of MongoDB, Express.js, React, and Node.js.
       </p>

        <Link to="/about" className='button'>More about Me <span className="button__icon"><FaArrowRight/></span></Link>

      </div>
    </div>
    <div className='color__block'>

    </div>
   </section>
  )
}

export default Home
