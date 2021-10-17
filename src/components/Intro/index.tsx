import React from 'react';
import { Form } from '../Form';
import { ImageLoader } from '../ImageLoader';
import './index.scss';

const Intro = () => (
  <div className='sure-intro'>
    <div className='sure-intro__content'>
      <h1>
        Rocket Insurance.{' '}
        <span className='sure-intro--smaller'>Our coverage is out of this world!</span>
      </h1>
      <span>
        Don't hyper-sleep on these rates! We are excited to offer rocket owners comprehensive
        coverage options to let you fly through space worry-free.
      </span>
      <Form />
    </div>
    <div className='sure-intro--vertical-center'>
      <ImageLoader name='rocket' />
    </div>
  </div>
);

export { Intro };
