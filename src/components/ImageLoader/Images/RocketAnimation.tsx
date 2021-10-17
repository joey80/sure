import React, { ImgHTMLAttributes } from 'react';
import rocketAnimation from '../../../assets/images/rocketAnimation.gif';

const RocketAnimation = (props: ImgHTMLAttributes<HTMLImageElement>) => (
  <img src={rocketAnimation} {...props} />
);

export default RocketAnimation;
