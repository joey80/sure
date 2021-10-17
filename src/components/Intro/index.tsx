import React from 'react';
import { Form } from '../Form';
import { ImageLoader } from '../ImageLoader';
import './index.scss';

const IntroOverview = () => (
  <div className='sure-intro'>
    <div className='sure-intro__content'>
      <h1>Quote Overview</h1>
      <span>
        Don't hyper-sleep on these rates! We are excited to offer rocket owners galaxy-wide
        comprehensive coverage options to let you fly through space worry-free. To get started
        please fill out this form.
      </span>
    </div>
    <div className='sure-intro--vertical-center'>
      <ImageLoader name='man' />
    </div>
  </div>
);

const IntroRating = () => (
  <div className='sure-intro'>
    <div className='sure-intro__content'>
      <h1>
        Rocket Insurance.{' '}
        <span className='sure-intro--smaller'>Our coverage is out of this world!</span>
      </h1>
      <span>
        Don't hyper-sleep on these rates! We are excited to offer rocket owners galaxy-wide
        comprehensive coverage options to let you fly through space worry-free. To get started
        please fill out this form.
      </span>
      <Form />
    </div>
    <div className='sure-intro--vertical-center'>
      <ImageLoader name='rocket' />
    </div>
  </div>
);

export { IntroOverview, IntroRating };
