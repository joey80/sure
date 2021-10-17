import React, { ImgHTMLAttributes, lazy, Suspense, useMemo } from 'react';

interface ImageLoaderTypes extends ImgHTMLAttributes<HTMLImageElement> {
  name: string;
}

const capitalize = (string: string) =>
  string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();

const loadImg = (name: string) => lazy(() => import(`./Images/${name}`));

const ImageLoader = ({ name, ...rest }: ImageLoaderTypes) => {
  const ImgComponent = useMemo(() => loadImg(capitalize(name)), [name]);

  return (
    <Suspense fallback={<img {...rest} />}>
      <ImgComponent {...rest} />
    </Suspense>
  );
};

export { ImageLoader };
