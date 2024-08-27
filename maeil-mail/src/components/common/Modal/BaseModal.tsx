import type { PropsWithChildren } from 'react';
import Modal from './Modal';
import { fadeInClass, fadeOutClass } from './modal.css';

interface BaseModalProps extends PropsWithChildren {
  isModalOpen: boolean;
  handleModalClose: () => void;
}

export default function BaseModal({ isModalOpen, handleModalClose, children }: BaseModalProps) {
  return (
    <Modal
      isOpen={isModalOpen}
      onClose={handleModalClose}
      mountAnimation={fadeInClass}
      unMountAnimation={fadeOutClass}
      animationTime={300}
    >
      <Modal.Portal id="portal">
        <Modal.Backdrop opacity="rgba(0, 0, 0, 0.5)">
          <Modal.Container>{children}</Modal.Container>
        </Modal.Backdrop>
      </Modal.Portal>
    </Modal>
  );
}
