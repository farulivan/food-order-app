import { Fragment, ReactNode } from 'react';
import type { MouseEventHandler } from 'react';
import { createPortal } from 'react-dom';
import classes from './Modal.module.css';

interface BackDropProps {
  onClose: MouseEventHandler;
}

const BackDrop = ({ onClose }: BackDropProps) => {
  return <div className={classes.backdrop} onClick={onClose}></div>;
};

interface ModalOverlayProps {
  children: ReactNode;
}

const ModalOverlay = ({ children }: ModalOverlayProps) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{children}</div>
    </div>
  );
};

interface ModalProps {
  children: ReactNode;
  onClose: () => void;
}

const portalElement = document.getElementById('overlays') as HTMLElement;

const Modal = ({ children, onClose }: ModalProps) => {
  return (
    <Fragment>
      {createPortal(<BackDrop onClose={onClose} />, portalElement)}
      {createPortal(<ModalOverlay>{children}</ModalOverlay>, portalElement)}
    </Fragment>
  );
};

export default Modal;
