import React, { ImgHTMLAttributes, lazy, Suspense, useMemo } from 'react';
import { pascalCase } from '../../utils';

interface ImageLoaderTypes extends ImgHTMLAttributes<HTMLImageElement> {
  name: string;
}

const loadImg = (name: string) => lazy(() => import(`./Images/${name}`));

const ImageLoader = ({ name, ...rest }: ImageLoaderTypes) => {
  const ImgComponent = useMemo(() => loadImg(pascalCase(name)), [name]);

  return (
    <Suspense fallback={<img alt="" {...rest} />}>
      <ImgComponent {...rest} />
    </Suspense>
  );
};

export { ImageLoader };
