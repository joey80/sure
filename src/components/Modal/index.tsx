import React from 'react';
import { ImageLoader } from '../ImageLoader';
import './index.scss';

const Modal = ({ isActive }: { isActive: boolean }) => {
  const { container, root } = isActive
    ? { container: 'sure-modal__container--active', root: 'sure-modal--active' }
    : { container: '', root: '' };

  return (
    <div className={`sure-modal ${root}`}>
      <div className={`sure-modal__container ${container}`}>
        <ImageLoader aria-hidden={true} name="rocket animation" />
      </div>
    </div>
  );
};

export { Modal };
