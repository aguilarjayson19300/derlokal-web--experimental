import React from 'react'

interface GetTheAppModalProps {
    children?: JSX.Element;
  }

const CookiesConsentModal = ({ children } : GetTheAppModalProps) => {
    return (
        <div className="fixed bottom-0 left-0 flex w-1/3 p-6 sm:w-1/4">
            <div className="bg-white rounded-lg ">
                <div className="p-6 my-auto border-0 shadow-xl">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default CookiesConsentModal
