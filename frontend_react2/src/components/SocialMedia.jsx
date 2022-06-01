import React from 'react';
// import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const SocialMedia = () => (
  <div className='app__social'>
    <div>
      <a href='https://github.com/hardik302001'>
        <FaGithub />
      </a>
    </div>
    <div>
      <a href='https://www.linkedin.com/in/shardik2001/'>
        <FaLinkedin />
      </a>
    </div>
  </div>
);

export default SocialMedia;