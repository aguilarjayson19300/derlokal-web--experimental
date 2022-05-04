import React, { useEffect } from 'react';


const Modal = ({ children, onClose }: { children: React.FC, onClose: () => void }) => {
    return (
        <div className="fixed top-0 left-0 w-full h-full bg-primary bg-opacity-20 z-20 sm:py-4 py-0 flex justify-center items-center transition-all duration-1000 ease-in-out">
            <div className="bg-white w-full h-full sm:h-3/4 sm:w-3/4 relative rounded-lg">
                <svg className="absolute right-8 top-8" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={onClose}>
                    <rect x="1.3335" y="3.35645" width="2.86093" height="38.6225" rx="1.43046" transform="rotate(-45 1.3335 3.35645)" fill="#253454" />
                    <rect x="28.644" y="1.33325" width="2.86093" height="38.6225" rx="1.43046" transform="rotate(45 28.644 1.33325)" fill="#253454" />
                </svg>
                <div className="w-full h-full my-auto justify-center overflow-scroll py-28">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Modal;