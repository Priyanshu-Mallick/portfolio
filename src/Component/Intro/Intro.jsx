import React from 'react'
import './Intro.css'
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'

export default function Intro() {
  return (
    <div className="intro">
        <div className='i-left'>
            <div className="i-name">
                <span>Hy! I am</span>
                <span>Priyanshu Mallick</span>
                <span> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel sunt labore officiis magni accusantium dignissimos dolorem corrupti minima suscipit, illo autem aspernatur vero placeat nisi sequi consectetur quasi consequatur maxime?</span>

            </div>

            <button className="i-button">Hire me</button>

            <div className='i-icons'>
                
                <a href='https://github.com/Priyanshu-Mallick' target='_blank'><img src={Github} alt=""/></a>

                <a href='https://www.linkedin.com/in/priyanshu-mallick-894302221/' target='_blank'>
                <img src={LinkedIn} alt=""/></a>

                <a href='https://www.instagram.com/the_priyanshu_mallick/' target='_blank'>
                <img src={Instagram} alt=""/></a>
            </div>

        </div>
        <div className='i-right'>
            I am Right side
        </div>

    </div>
  )
}
