import React from 'react';
import { ImageLoader } from '../ImageLoader';
import './index.scss';

const Intro = () => (
  <div className='sure-intro'>
    <div>
      <h1>Great software is built with amazing developers</h1>
      <span>
        We help build and manage a team of world-class developers to bring your vision to life
      </span>
    </div>
    <div>
      <ImageLoader name='rocket' />
    </div>
  </div>
);

export { Intro };
