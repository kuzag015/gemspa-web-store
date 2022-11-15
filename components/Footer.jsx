import React from 'react'
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';


const Footer = () => {
  return (
    <div className='footer-container'>
      <p>
        2022 GEMSPA MILLINERY ALL RIGHTS RESERVED
      </p>
      <p>
        <i>all images seen currently are stock hat images from the internet, and will be replaced with actual product images once available</i>
      </p>
      <p>
        <a href="https://www.instagram.com/gemspamillinery/">
          <AiFillInstagram/>
        </a>
        <AiOutlineTwitter/>
      </p>
    </div>
  )
}

export default Footer