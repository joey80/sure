import React from 'react';
import rocketAnimation from '../../assets/images/rocketAnimation.gif';
import './index.scss';

const Modal = ({ isActive }: { isActive: boolean }) => {
  const { container, root } = isActive
    ? { container: 'sure-modal__container--active', root: 'sure-modal--active' }
    : { container: '', root: '' };

  return (
    <div className={`sure-modal ${root}`}>
      <div className={`sure-modal__container ${container}`}>
        <img src={rocketAnimation} />
      </div>
    </div>
  );
};

export { Modal };
