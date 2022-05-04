import Image from 'next/image';
import Link from 'next/link'
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

interface NavBarProps {
    logo?: any;
}

const NavBar = ({ logo }: NavBarProps) => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const sidebar = document.querySelector('.sidebar');
        if (sidebar) {
            if (isNavOpen) {
                sidebar.classList.add('translate-x-0');
                sidebar.classList.remove('translate-x-full');
            } else {
                sidebar.classList.remove('translate-x-0');
                sidebar.classList.add('translate-x-full');
            }
        }
    }, [isNavOpen]);

    console.log('Pathname', router.pathname)

    return <>
        <nav className='flex sm:flex-row flex-col w-full bg-white fixed top-0 border border-t-1 border-secondary6 z-20'>
            <div className='w-full sm:h-[88px] h-[64px] px-6 sm:container mx-auto flex items-center sm:border-b-0 border-b border-secondary7'>
                <div className='sm:hidden md:block flex justify-center md:justify-start text-white font-extrabold border border-1 sm:mr-20 mr-0 bold'>
                    <a className='text-white no-underline hover:text-white hover:no-underline' href='/'>
                        <img width="198" height="35" src="/logo.png" alt="logo" className='object-cover' />
                    </a>
                </div>
                <div className='w-full flex-grow content-center justify-between md:w-1/2'>
                    {isNavOpen && <div className='transition-all bg-opacity-20 w-full h-full top-0 left-0 fixed duration-1000 ease-in-out bg-primary transform' onClick={() => setIsNavOpen(false)}></div>}
                    <div className={`sidebar right-0 sm:w-full sm:translate-x-0 translate-x-full w-[80%] ${isNavOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                        <div className='flex justify-end px-4 pt-10 pb-8 sm:hidden' onClick={() => setIsNavOpen(false)}>
                            <svg width='22' height='22' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                <rect x='-6.10352e-05' y='1.51733' width='2.1457' height='28.9669' rx='1.07285' transform='rotate(-45 -6.10352e-05 1.51733)' fill='#0D132F' />
                                <rect x='20.4827' width='2.1457' height='28.9669' rx='1.07285' transform='rotate(45 20.4827 0)' fill='#0D132F' />
                            </svg>
                        </div>
                        <ul className='list-reset flex-1 flex sm:flex-row sm:text-base flex-col text-xl font-black text-textIcon sm:items-start items-center'>
                            <li className='sm:mb-0 mb-4' onClick={() => setIsNavOpen(false)}>
                                <Link href='/seller'>
                                    <a className={`inline-block ${router.pathname === '/seller' ? 'text-primary font-bold ' : 'border-white font-medium'} py-2 px-4`}>Seller</a>
                                </Link>
                            </li>
                            <li className='sm:mb-0 mb-4' onClick={() => setIsNavOpen(false)}>
                                <Link href='/consumer'>
                                    <a className={`inline-block ${router.pathname === '/consumer' ? 'text-primary font-bold ' : 'border-white font-medium'} py-2 px-4`}>Consumer</a>
                                </Link>
                            </li>

                            <li className='sm:ml-auto sm:mb-0 mb-4' onClick={() => setIsNavOpen(false)}>
                                <Link href='/'>
                                    <a className={`inline-block ${router.pathname === '/' ? 'text-primary font-bold ' : 'border-white font-medium'} py-2 px-4`}>About us</a>
                                </Link>
                            </li>

                            <li className='sm:hidden sm:ml-auto sm:mb-0 mb-4' onClick={() => setIsNavOpen(false)}>
                                <Link href='/'>
                                    <a className={`inline-block ${router.pathname === '/contact-us' ? 'text-primary font-bold ' : 'border-white font-medium'} py-2 px-4`}>Contact us</a>
                                </Link>
                            </li>

                            <li className='sm:hidden sm:ml-auto sm:mb-0 mb-4' onClick={() => setIsNavOpen(false)}>
                                <Link href='/'>
                                    <a className={`inline-block ${router.pathname === '/how-it-works' ? 'text-primary font-bold ' : 'border-white font-medium'} py-2 px-4`}>How it works</a>
                                </Link>
                            </li>

                            <li className='sm:w-auto w-full sm:ml-6 sm:mt-0 mt-4 sm:px-0 px-4' onClick={() => setIsNavOpen(false)}>
                                <button className='text-sm sm:w-[172px] w-full py-3 bg-primary text-textIcon7 rounded-full font-bold'>Get the App</button>
                            </li>
                        </ul>

                    </div>
                    <div className='sm:hidden flex justify-end'>
                        <svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32' fill='none' onClick={() => setIsNavOpen(true)}>
                            <path d='M2.37037 25.3333C1.79792 25.3333 1.33333 24.8687 1.33333 24.2963C1.33333 23.7238 1.79792 23.2592 2.37037 23.2592H29.3333C29.9058 23.2592 30.3704 23.7238 30.3704 24.2963C30.3704 24.8687 29.9058 25.3333 29.3333 25.3333H2.37037Z' fill='#0D132F' />
                            <path d='M2.37037 17.037C1.79792 17.037 1.33333 16.5724 1.33333 16C1.33333 15.4275 1.79792 14.963 2.37037 14.963H29.3333C29.9058 14.963 30.3704 15.4275 30.3704 16C30.3704 16.5724 29.9058 17.037 29.3333 17.037H2.37037Z' fill='#0D132F' />
                            <path d='M2.37037 8.74073C1.79792 8.74073 1.33333 8.27614 1.33333 7.70369C1.33333 7.13125 1.79792 6.66666 2.37037 6.66666H29.3333C29.9058 6.66666 30.3704 7.13125 30.3704 7.70369C30.3704 8.27614 29.9058 8.74073 29.3333 8.74073H2.37037Z' fill='#0D132F' />
                        </svg>
                    </div>
                </div>
            </div>

            <ul className='w-full sm:hidden flex justify-center gap-10 bg-white py-5 border-b border-b-secondary7'>
                <li>
                    <Link href='/seller'>
                        <a className={`inline-block ${router.pathname === '/seller' ? 'text-primary font-bold ' : 'border-white font-medium'} border-b-4`}>Seller</a>
                    </Link>
                </li>
                <li>
                    <Link href='/consumer'>
                        <a className={`inline-block ${router.pathname === '/consumer' ? 'text-primary font-bold ' : 'border-white font-medium'} border-b-4`}>Consumer</a>
                    </Link>
                </li>
            </ul>
        </nav>
    </>
};

export default NavBar;
