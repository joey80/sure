import React, { ImgHTMLAttributes } from 'react';
import rocketAnimation from '../../../assets/images/rocketAnimation.gif';

const RocketAnimation = (props: ImgHTMLAttributes<HTMLImageElement>) => (
  <img alt="rocket launch animation" src={rocketAnimation} {...props} />
);

export default RocketAnimation;
