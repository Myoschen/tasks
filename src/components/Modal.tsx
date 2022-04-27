import { ReactNode, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { XIcon } from '@heroicons/react/solid';

interface ModalProps {
  isOpen: boolean;
  close: () => void;
  children: ReactNode;
}

function Modal({ isOpen, close, children }: ModalProps) {
  const modal = (
    <div id="modal">
      <div id="overlay" className="fixed top-0 left-0 z-40 w-full h-full bg-black/50" />
      <div id="content-wrapper" className="fixed z-50 max-w-lg p-6 -translate-x-1/2 -translate-y-1/2 bg-gray-200 rounded-md shadow-xl top-1/2 left-1/2 dark:bg-nord-700 text-nord-600 dark:text-nord-100">
        <button className="absolute text-red-500 right-4" type="button" onClick={close}>
          <XIcon className="w-4" />
        </button>
        <h1 className="text-4xl font-bold text-center">Login</h1>
        {children}
      </div>
    </div>
  );

  useEffect(() => {
    const bodyClasses = window.document.body.classList;
    if (isOpen) {
      bodyClasses.add('overflow-hidden');
    }

    // When the modal is closed
    return () => {
      bodyClasses.remove('overflow-hidden');
    };
  }, [isOpen]);

  return isOpen ? createPortal(modal, window.document.body) : null;
}

export default Modal;
