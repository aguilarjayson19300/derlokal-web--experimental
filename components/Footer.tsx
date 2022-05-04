import Image from 'next/image'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown';
interface FooterProps {

}

const Footer = ({ logo, address, contactEmail, copyright, externalLinks }: any) => (
    <footer className='bg-secondary7'>
        <div className='container mx-auto text-textIcon py-12 px-8'>
            <img width="136" height="24" src="/logo.png" alt="me" className='object-cover' />
            <div className='flex sm:flex-row flex-col gap-16 py-10'>
                <div className='flex-grow'>
                    <h4 className='font-bold mb-6 text-lg'>Download the app</h4>
                    <div className='flex gap-2 my-4'>
                        <img width="94" height="32" src="/ios.png" alt="me" className='object-cover' />
                        <img width="107" height="32" src="/android.png" alt="me" className='object-cover' />
                    </div>
                    <p className='text-2xs'>Your fresh home-cooked products marketplace</p>
                </div>

                <div className='flex-grow'>
                    <h4 className='font-bold mb-6 text-lg'>Let's to this together</h4>
                    <div className='font-medium'>
                        <ul>
                            <li className='mb-4 font-medium text-sm'>
                                <Link href='#about-us'>For Sellers</Link>
                            </li>
                            <li className='mb-4 font-medium text-sm'>
                                <Link href='#about-us'>For Consumers</Link>
                            </li>
                        </ul>
                    </div>

                    <div className='font-medium mt-6 text-primary'>{contactEmail}</div>
                </div>

                <div className='flex-grow'>
                    <h4 className='font-bold mb-6 text-lg'>Company</h4>
                    <ul>
                        <li className='mb-4 font-medium text-base'>
                            <Link href='/'>About us</Link>
                        </li>
                        <li className='mb-4 font-medium text-base'>
                            <Link href='/about-us'>How it works</Link>
                        </li>
                        <li className='mb-4 font-medium text-base'>
                            <Link href='/contact-us'>Contact us</Link>
                        </li>
                        <li className='mb-4 font-medium text-base'>
                            <Link href='/terms'>Terms and Conditions</Link>
                        </li>
                    </ul>
                </div>

                <div className='flex-grow'>
                    <span className='font-bold mb-6 text-lg'>Find us on</span>
                    <ul className='flex gap-4 mt-6'>
                        <li className='w-[40px] h-[40px] bg-secondary7 rounded-full flex justify-center items-center'></li>
                        <li className='w-[40px] h-[40px] bg-secondary7 rounded-full flex justify-center items-center'></li>
                        <li className='w-[40px] h-[40px] bg-secondary7 rounded-full flex justify-center items-center'></li>
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
            <div className='flex justify-between items-center border-t border-t-textIcon5 py-10 sm:flex-row flex-col'>
                <div className='items-center gap-2 sm:flex hidden'>
                    <span>Powered by</span>
                    <img width="87" height="24" src="/swr.png" alt="me" className='object-cover' />
                </div>
                <span>Copyright ©️ Der Lokal 2020 - 2022</span>
            </div>
        </div>

    </footer>
);

export default Footer;