import React from 'react';
import { OverViewForm } from '../Forms/OverviewForm';
import { RatingForm } from '../Forms/RatingForm';
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
      <OverViewForm />
    </div>
    <div className='sure-intro--vertical-center'>
      <ImageLoader alt='man sitting on a chair' aria-hidden={true} name='man' />
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
      <RatingForm />
    </div>
    <div className='sure-intro--vertical-center'>
      <ImageLoader alt='man sitting on a rocket' aria-hidden={true} name='rocket' />
    </div>
  </div>
);

export { IntroOverview, IntroRating };