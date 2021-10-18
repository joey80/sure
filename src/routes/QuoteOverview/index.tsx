import React from 'react';
import { Card } from '../../components/Card';
import { ImageLoader } from '../../components/ImageLoader';
import { OverViewForm } from '../../components/Forms/OverviewForm';
import '../index.scss';

const QuoteOverview = () => (
  <div className='sure-intro'>
    <div className='sure-intro__content'>
      <h1>Quote Overview</h1>
      <span>
        Take a look at your new insurance policy. If you would like to make any changes to your
        deductible or asteroid collision please feel free to do so
      </span>
      <OverViewForm />
      <Card />
    </div>
    <div className='sure-intro--vertical-center'>
      <ImageLoader
        alt='man sitting on a chair'
        aria-hidden={true}
        className='sure-intro__image'
        name='man'
      />
    </div>
  </div>
);

export { QuoteOverview };
