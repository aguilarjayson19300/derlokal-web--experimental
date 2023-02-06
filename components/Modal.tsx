import React, { useEffect } from 'react';

interface ModalProps {
    children?: JSX.Element;
    onClose?: () => void;
  }

const Modal = ({ children, onClose }: ModalProps) => {
    return (
        <div className="fixed top-0 left-0 z-20 flex items-center justify-center w-full h-full py-0 transition-all duration-1000 ease-in-out bg-primary bg-opacity-20 sm:py-4">
            <div className="relative w-full h-full bg-white rounded-lg sm:h-3/4 sm:w-3/4">
                <svg className="absolute right-8 top-8" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={onClose}>
                    <rect x="1.3335" y="3.35645" width="2.86093" height="38.6225" rx="1.43046" transform="rotate(-45 1.3335 3.35645)" fill="#253454" />
                    <rect x="28.644" y="1.33325" width="2.86093" height="38.6225" rx="1.43046" transform="rotate(45 28.644 1.33325)" fill="#253454" />
                </svg>
                <div className="justify-center w-full h-full my-auto overflow-y-scroll py-28">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Modal;