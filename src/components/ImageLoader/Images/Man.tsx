import React, { ImgHTMLAttributes } from 'react';
import man from '../../../assets/images/man.png';

const Man = (props: ImgHTMLAttributes<HTMLImageElement>) => <img src={man} {...props} />;

export default Man;
