import React, { ImgHTMLAttributes } from 'react';
import rocket from '../../../assets/images/rocket.png';

const Rocket = (props: ImgHTMLAttributes<HTMLImageElement>) => (
  <img alt="man sitting on a rocket" src={rocket} {...props} />
);

export default Rocket;
