import { useState } from 'react';

const ChevronDown = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clipRule="evenodd" d="M2.87782 6.32218C2.44824 5.89261 1.75176 5.89261 1.32218 6.32218C0.892607 6.75176 0.892607 7.44824 1.32218 7.87782L11.2222 17.7778C11.6518 18.2074 12.3482 18.2074 12.7778 17.7778L22.6778 7.87782C23.1074 7.44824 23.1074 6.75176 22.6778 6.32218C22.2482 5.89261 21.5518 5.89261 21.1222 6.32218L12 15.4444L2.87782 6.32218Z" fill="#243699" />
    </svg>
);

const ChevronUp = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clipRule="evenodd" d="M21.1222 17.7779C21.5518 18.2075 22.2482 18.2075 22.6778 17.7779C23.1074 17.3483 23.1074 16.6519 22.6778 16.2223L12.7778 6.32228C12.3482 5.8927 11.6518 5.8927 11.2222 6.32228L1.32218 16.2223C0.892606 16.6519 0.892606 17.3483 1.32218 17.7779C1.75176 18.2075 2.44824 18.2075 2.87782 17.7779L12 8.65573L21.1222 17.7779Z" fill="#243699" />
    </svg>
);

const Accordion = ({ faqs = [] }: { faqs: { answer: string; question: string; }[] }) => {
    const [selectedItem, setSelectedItem] = useState<number>();
    const toggleSelectedItem = (index: number) => {
        setSelectedItem(selectedItem === index ? undefined : index);
    };
    return (
        <>
            {
                faqs.map((faq, index) => (
                    <div key={faq.answer} className="p-8 border border-secondary4 rounded-lg mb-4 last:mb-0 cursor-pointer text-secondary" onClick={() => toggleSelectedItem(index)}>
                        <div className='flex justify-between'>
                            <p>{faq.question}</p>
                            {selectedItem === index ? <ChevronUp /> : <ChevronDown />}
                        </div>
                        {selectedItem === index && <p className='mt-6'>{ faq.answer}</p>}
                    </div>
                ))
            }
        </>
    )
};

export default Accordion;