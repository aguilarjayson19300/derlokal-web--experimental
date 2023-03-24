import Image from 'next/image'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown';
interface FooterProps {

}

const Footer = ({ logo, address, contactEmail, copyright, externalLinks }: any) => (
    <footer className='bg-secondary7'>
        <div className='container 2xl:px-2 xl:px-10 md:px-16 sm:px-0 px-6 px-auto py-12 mx-auto text-textIcon'>
            <img width="136" height="24" src="/logo.png" alt="me" className='object-cover' />
            <div className='flex flex-col gap-15 py-10 sm:flex-row'>
                <div className='flex-grow'>
                    <h4 className='md:mb-6 text-lg font-bold text-center md:text-left'>Download the app</h4>
                    <div className='flex gap-2 my-2 md:my-4 justify-center md:justify-start hover:cursor-pointer xl:flex md:block'>
                        <img width="94" height="32" src="/ios.png" alt="me" className='object-cover md:mb-2 xl:w-[94px] md:w-[110px]'/>
                        <img width="107" height="32" src="/android.png" alt="me" className='object-cover xl:w-[107px] xl:h-[32px] md:w-[110px]' />
                    </div>
                    <p className='text-2xs text-center md:text-left ms:pb-2'>Your fresh home-cooked products marketplace</p>
                </div>

                <div className='flex-grow text-center md:text-left'>
                    <h4 className='mb-1 md:mb-4 text-lg font-bold'>Let's to this together</h4>
                    <div>
                        <ul>
                            <li className='mb-1 md:mb-4 text-sm hover:font-medium'>
                                <Link href='#about-us'>For Sellers</Link>
                            </li>
                            <li className='mb-1 md:mb-4 text-sm hover:font-medium'>
                                <Link href='#about-us'>For Consumers</Link>
                            </li>
                        </ul>
                    </div>

                    <div className='mt-6 font-medium text-primary'>{contactEmail}</div>
                </div>

                <div className='flex-grow text-center md:text-left'>
                    <h4 className='mb-1 md:mb-4 text-lg font-bold'>Company</h4>
                    <ul>
                        <li className='mb-1 md:mb-4 text-base hover:font-medium'>
                            <Link href='/'>About us</Link>
                        </li>
                        <li className='mb-1 md:mb-4 text-base hover:font-medium'>
                            <Link href='/about-us'>How it works</Link>
                        </li>
                        <li className='mb-1 md:mb-4 text-base hover:font-medium'>
                            <Link href='/contact-us'>Contact us</Link>
                        </li>
                        <li className='mb-4 text-base hover:font-medium'>
                            <Link href='/terms'>Terms and Conditions</Link>
                        </li>
                    </ul>
                </div>

                <div className='flex-grow text-center md:text-left'>
                    <span className='mb-6 text-lg font-bold'>Find us on</span>
                    <ul className='flex gap-4 mt-1 md:mt-6 justify-center md:justify-start hover:cursor-pointer'>
                        <li className='w-[40px] h-[40px] bg-secondary6 rounded-full flex justify-center items-center'>
                            <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.9992 0.00416129L8.40571 0C5.49197 0 3.60899 1.93188 3.60899 4.92198V7.19134H1.00131C0.775979 7.19134 0.593506 7.37402 0.593506 7.59935V10.8874C0.593506 11.1127 0.776187 11.2952 1.00131 11.2952H3.60899V19.592C3.60899 19.8173 3.79146 19.9998 4.01679 19.9998H7.41906C7.6444 19.9998 7.82687 19.8171 7.82687 19.592V11.2952H10.8758C11.1012 11.2952 11.2837 11.1127 11.2837 10.8874L11.2849 7.59935C11.2849 7.49116 11.2418 7.38754 11.1655 7.31097C11.0891 7.23441 10.9851 7.19134 10.8769 7.19134H7.82687V5.26757C7.82687 4.34293 8.04721 3.87354 9.2517 3.87354L10.9988 3.87291C11.2239 3.87291 11.4064 3.69023 11.4064 3.46511V0.411968C11.4064 0.18705 11.2241 0.00457742 10.9992 0.00416129Z" fill="#0D132F"/>
                            </svg>
                        </li>
                        <li className='w-[40px] h-[40px] bg-secondary6 rounded-full flex justify-center items-center hover:cursor-pointer'>
                            <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 2.79875C19.2563 3.125 18.4637 3.34125 17.6375 3.44625C18.4875 2.93875 19.1363 2.14125 19.4412 1.18C18.6488 1.6525 17.7738 1.98625 16.8412 2.1725C16.0887 1.37125 15.0162 0.875 13.8462 0.875C11.5763 0.875 9.74875 2.7175 9.74875 4.97625C9.74875 5.30125 9.77625 5.61375 9.84375 5.91125C6.435 5.745 3.41875 4.11125 1.3925 1.6225C1.03875 2.23625 0.83125 2.93875 0.83125 3.695C0.83125 5.115 1.5625 6.37375 2.6525 7.1025C1.99375 7.09 1.3475 6.89875 0.8 6.5975C0.8 6.61 0.8 6.62625 0.8 6.6425C0.8 8.635 2.22125 10.29 4.085 10.6712C3.75125 10.7625 3.3875 10.8062 3.01 10.8062C2.7475 10.8062 2.4825 10.7913 2.23375 10.7362C2.765 12.36 4.2725 13.5538 6.065 13.5925C4.67 14.6838 2.89875 15.3412 0.98125 15.3412C0.645 15.3412 0.3225 15.3263 0 15.285C1.81625 16.4563 3.96875 17.125 6.29 17.125C13.835 17.125 17.96 10.875 17.96 5.4575C17.96 5.27625 17.9538 5.10125 17.945 4.9275C18.7588 4.35 19.4425 3.62875 20 2.79875Z" fill="#0D132F"/>
                            </svg>
                        </li>
                        <li className='w-[40px] h-[40px] bg-secondary6 rounded-full flex justify-center items-center hover:cursor-pointer'>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_5828_2788)">
                                    <path d="M19.9804 5.88005C19.9336 4.81738 19.7617 4.0868 19.5156 3.45374C19.2616 2.78176 18.8709 2.18014 18.359 1.68002C17.8589 1.1721 17.2533 0.777435 16.5891 0.527447C15.9524 0.281274 15.2256 0.109427 14.163 0.0625732C13.0924 0.0117516 12.7525 0 10.0371 0C7.32173 0 6.98185 0.0117516 5.91521 0.0586052C4.85253 0.105459 4.12195 0.277459 3.48904 0.523479C2.81692 0.777435 2.2153 1.16814 1.71517 1.68002C1.20726 2.18014 0.812743 2.78573 0.562603 3.44992C0.31643 4.0868 0.144583 4.81341 0.0977294 5.87609C0.0469078 6.9467 0.0351562 7.28658 0.0351562 10.002C0.0351562 12.7173 0.0469078 13.0572 0.0937614 14.1239C0.140615 15.1865 0.312615 15.9171 0.558787 16.5502C0.812743 17.2221 1.20726 17.8238 1.71517 18.3239C2.2153 18.8318 2.82088 19.2265 3.48508 19.4765C4.12195 19.7226 4.84856 19.8945 5.91139 19.9413C6.97788 19.9883 7.31791 19.9999 10.0333 19.9999C12.7487 19.9999 13.0885 19.9883 14.1552 19.9413C15.2179 19.8945 15.9484 19.7226 16.5813 19.4765C17.9254 18.9568 18.9881 17.8941 19.5078 16.5502C19.7538 15.9133 19.9258 15.1865 19.9727 14.1239C20.0195 13.0572 20.0313 12.7173 20.0313 10.002C20.0313 7.28658 20.0273 6.9467 19.9804 5.88005ZM18.1794 14.0457C18.1364 15.0225 17.9723 15.5499 17.8356 15.9015C17.4995 16.7728 16.808 17.4643 15.9367 17.8004C15.5851 17.9372 15.0538 18.1012 14.0809 18.1441C13.026 18.1911 12.7096 18.2027 10.0411 18.2027C7.37255 18.2027 7.05221 18.1911 6.00113 18.1441C5.02438 18.1012 4.49693 17.9372 4.1453 17.8004C3.71171 17.6402 3.31704 17.3862 2.9967 17.0541C2.6646 16.7298 2.41065 16.3391 2.2504 15.9055C2.11365 15.5539 1.94959 15.0225 1.90671 14.0497C1.8597 12.9948 1.8481 12.6783 1.8481 10.0097C1.8481 7.34122 1.8597 7.02087 1.90671 5.96995C1.94959 4.99319 2.11365 4.46575 2.2504 4.11412C2.41065 3.68038 2.6646 3.28586 3.00067 2.96536C3.32483 2.63327 3.71553 2.37931 4.14927 2.21921C4.5009 2.08247 5.03231 1.9184 6.0051 1.87537C7.05999 1.82851 7.37652 1.81676 10.0449 1.81676C12.7174 1.81676 13.0337 1.82851 14.0848 1.87537C15.0616 1.9184 15.589 2.08247 15.9407 2.21921C16.3742 2.37931 16.7689 2.63327 17.0893 2.96536C17.4213 3.28967 17.6753 3.68038 17.8356 4.11412C17.9723 4.46575 18.1364 4.99701 18.1794 5.96995C18.2263 7.02484 18.238 7.34122 18.238 10.0097C18.238 12.6783 18.2263 12.9908 18.1794 14.0457Z" fill="#0D132F"/>
                                    <path d="M10.0371 4.86414C7.20073 4.86414 4.89941 7.16531 4.89941 10.0019C4.89941 12.8384 7.20073 15.1396 10.0371 15.1396C12.8737 15.1396 15.1748 12.8384 15.1748 10.0019C15.1748 7.16531 12.8737 4.86414 10.0371 4.86414ZM10.0371 13.3346C8.19702 13.3346 6.70442 11.8421 6.70442 10.0019C6.70442 8.16159 8.19702 6.66915 10.0371 6.66915C11.8774 6.66915 13.3698 8.16159 13.3698 10.0019C13.3698 11.8421 11.8774 13.3346 10.0371 13.3346Z" fill="#0D132F"/>
                                    <path d="M16.5775 4.66111C16.5775 5.32347 16.0404 5.86053 15.3779 5.86053C14.7155 5.86053 14.1785 5.32347 14.1785 4.66111C14.1785 3.9986 14.7155 3.46169 15.3779 3.46169C16.0404 3.46169 16.5775 3.9986 16.5775 4.66111Z" fill="#0D132F"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_5828_2788">
                                        <rect width="20" height="20" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </li>
                        {/* {externalLinks && externalLinks.map(externalLink => (
                        <li className='w-[40px] h-[40px] bg-secondary7 rounded-full flex justify-center items-center' key={externalLink.name}>
                            <Link href={externalLink.link}>
                                <div>
                                    <div className='flex justify-center ' dangerouslySetInnerHTML={{ __html: externalLink.icon }}></div>
                                </div>
                            </Link>
                        </li>
                    ))} */}
                    </ul>
                </div>
            </div>
            <div className='flex flex-col items-center justify-between py-10 border-t border-t-textIcon5 sm:flex-row'>
                <div className='items-center hidden gap-2 sm:flex'>
                    <span className='text-[14px] font-bold sm:text-center'>Powered by</span>
                    <img width="90" height="25" src="/swr.png" alt="me" className='object-cover' />
                </div>
                <span className='text-[12px]'>Copyright ©️ Der Lokal 2020 - 2022</span>
            </div>
        </div>
    </footer>
);

export default Footer;