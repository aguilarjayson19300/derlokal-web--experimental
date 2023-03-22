import ReactMarkdown from 'react-markdown';
import Layout from '../components/Layout';
import Review from '../components/Review';
import Accordion from '../components/Accortion';
import { vendorPromises, derlokalHelps, faqs } from './data';
const Seller = () => {
    return (
        <Layout>
            <section className='bg-secondary7 px-16 overflow-hidden'>
                <div className='sm:container mx-auto flex md:flex-row flex-col sm:pt-28 pt-12 md:pt-[105px]'>
                    <div className='sm:pr-20 flex-row sm:pb-28'>
                        <h1 className='font-sans sm:text-4xl text-xl font-bold mb-6'>Turn your passion into extra revenues with Der Lokal.</h1>
                        <p>Reach new customers and get more orders on your own terms and schedule.</p>

                        <div className='flex flex-col gap-4 items-center my-10 sm:flex-row '>
                            <div className='relative sm:w-auto w-full'>
                                <input className='w-full md:w-[300px] border border-secondary4 py-4 pl-5 pr-8 focus:border-primary rounded-md' placeholder='Enter email or mobile number' />
                            </div>

                            <button className='sm:w-auto w-full px-10 py-4 bg-primary text-textIcon7 rounded-full drop-shadow-md'>Sign up for FREE!</button>

                        </div>
                    </div>
                    <div className='lg:w-1/2 sm:w-full flex items-end justify-center'>
                        <img src="/demo.png" alt="me" className=' object-fill object-center'/>
                    </div>
                </div>
            </section>

            <section className='container mx-auto py-20 border-b border-secondary7 sm:px-0 px-6'>
                <div>
                    <div className='text-center'>
                        <h2 className="sm:text-3xl text-2xl font-black text-secondary mb-4">More business, less effort.</h2>
                        <p>Manage everything in one platform to start, run, and grow your business.</p>
                    </div>
                    <div className='sm:columns-3 columns-1 gap-20 mt-16'>
                        {
                            vendorPromises.map(promise => (
                                <div key={promise.title} className='flex flex-col mb-16 last:mb-0'>
                                    <div className='aspect-w-6 aspect-h-4'>
                                        <img src={promise.image} alt="" className="object-cover object-center rounded-lg" />
                                    </div>
                                    <div className="text-xl font-bold text-textIcon mt-6 mb-4">{promise.title}</div>
                                    <div className='w-full text-sm'>
                                        <ReactMarkdown className="text-textIcon">{promise.content}</ReactMarkdown>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>

            <section className='flex sm:flex-row flex-col items-center container mx-auto my-20 sm:px-0 px-6'>
                <div className='flex flex-col grow justify-center'>
                    <div className='sm:p20 p-0'>
                        <h2 className='sm:text-3xl text-2xl font-black text-secondary mb-10'>Der Lokal helps you</h2>
                        {derlokalHelps.map(help => (
                            <div className='flex gap-4 mb-10'>
                                <div>
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="16" cy="15.9999" r="14.6667" fill="#243699" />
                                        <path d="M13.7761 21.4998C13.5829 21.5001 13.3919 21.4552 13.2165 21.3681C13.041 21.281 12.8852 21.1538 12.7598 20.9954L9.90332 17.3919C9.7894 17.2482 9.70288 17.0817 9.64868 16.902C9.59448 16.7223 9.57367 16.5328 9.58743 16.3444C9.6012 16.156 9.64928 15.9724 9.72892 15.8041C9.80855 15.6357 9.9182 15.4859 10.0516 15.3632C10.185 15.2404 10.3395 15.1472 10.5063 15.0888C10.6731 15.0304 10.849 15.008 11.0239 15.0229C11.1987 15.0377 11.3692 15.0895 11.5255 15.1753C11.6818 15.2611 11.8208 15.3792 11.9348 15.5229L13.9444 18.0581L21.1588 11.7356C21.4338 11.4966 21.7855 11.3847 22.1369 11.4244C22.4883 11.464 22.8108 11.6521 23.0337 11.9474C23.2567 12.2426 23.362 12.621 23.3266 12.9997C23.2911 13.3785 23.1179 13.7266 22.8447 13.968L14.619 21.1771C14.381 21.3862 14.0832 21.5002 13.7761 21.4998Z" fill="white" />
                                    </svg>
                                </div>
                                <p className='grow-1'>{help}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='flex grow justify-end'>
                    <img src="/demo1.png" alt="me" className='object-cover sm:w-3/4' />
                </div>
            </section>

            <section className='bg-secondary7'>
                <div className='flex container mx-auto sm:py-28 py-20 md:flex-row flex-col-reverse px-6'>
                    <div className='w-full flex justify-start'>
                        <img src="/demo2.png" alt="me" className='object-cover sm:w-3/4 w-full' />
                    </div>
                    <div className='flex flex-col grow justify-center mb-10'>
                        <div className='sm:p20 p-0'>
                            <h2 className='sm:text-3xl text-2xl font-black text-secondary mb-10'>Empowering local <br className='lg:block hidden' />communities</h2>
                            {derlokalHelps.map(help => (
                                <div className='flex gap-4 mt-6'>
                                    <div>
                                        <svg width="29.33" height="29.33" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="16" cy="15.9999" r="14.6667" fill="#243699" />
                                            <path d="M13.7761 21.4998C13.5829 21.5001 13.3919 21.4552 13.2165 21.3681C13.041 21.281 12.8852 21.1538 12.7598 20.9954L9.90332 17.3919C9.7894 17.2482 9.70288 17.0817 9.64868 16.902C9.59448 16.7223 9.57367 16.5328 9.58743 16.3444C9.6012 16.156 9.64928 15.9724 9.72892 15.8041C9.80855 15.6357 9.9182 15.4859 10.0516 15.3632C10.185 15.2404 10.3395 15.1472 10.5063 15.0888C10.6731 15.0304 10.849 15.008 11.0239 15.0229C11.1987 15.0377 11.3692 15.0895 11.5255 15.1753C11.6818 15.2611 11.8208 15.3792 11.9348 15.5229L13.9444 18.0581L21.1588 11.7356C21.4338 11.4966 21.7855 11.3847 22.1369 11.4244C22.4883 11.464 22.8108 11.6521 23.0337 11.9474C23.2567 12.2426 23.362 12.621 23.3266 12.9997C23.2911 13.3785 23.1179 13.7266 22.8447 13.968L14.619 21.1771C14.381 21.3862 14.0832 21.5002 13.7761 21.4998Z" fill="white" />
                                        </svg>
                                    </div>
                                    <p className='grow'>{help}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* temp hide reviews */}
            <section className='container mx-auto sm:px-0 border-b border-secondary7 py-20'>
                <div className='text-center px-6'>
                    <h2 className="sm:text-3xl text-2xl font-black text-secondary mb-4">Don’t just take our word for it</h2>
                    <p>Hear what our partners say</p>
                </div>

                <div className='container mx-auto mt-16 lg:w-3/4 w-full'>
                    <div className='sm:block hidden'>
                        <Review isHighlight />
                    </div>
                    <div className='w-full pt-12 gap-6 sm:block sm:columns-4 sm:overflow-x-visible flex flex-nowrap overflow-x-auto snap-x sm:px-0 px-6'>
                        <div className='sm:w-auto w-2/3 flex-[0_0_auto] snap-center'>
                            <Review />
                        </div>
                        <div className='sm:w-auto w-2/3 flex-[0_0_auto] snap-center'>
                            <Review />
                        </div>
                        <div className='sm:w-auto w-2/3 flex-[0_0_auto] snap-center'>
                            <Review />
                        </div>
                        <div className='sm:w-auto w-2/3 flex-[0_0_auto] snap-center'>
                            <Review />
                        </div>
                    </div>
                </div>
            </section>

            <section className='bg-secondary7 mx-auto sm:px-0 px-6 sm:py-28 py-20 flex flex-col justify-center items-center'>
                <h2 className="sm:text-3xl text-2xl font-black text-secondary mb-4 text-center">Ready to be our partner and join the growing <br className='lg:block hidden' />home chefs community on Der Lokal?</h2>
                <p>Download the app today for a 100% selling experience.</p>

                <div className='flex gap-2 mt-10'>
                    <img src="/ios.png" alt="me" className='object-cover h-[43px]' />
                    <img src="/android.png" alt="me" className='object-cover h-[43px]' />
                </div>
            </section>

            <section className='container mx-auto sm:py-28 py-20 sm:px-0 px-6 '>
                <h2 className="sm:text-3xl text-2xl font-black text-secondary mb-20 text-center">Frequently asked questions</h2>
                <Accordion faqs={faqs} />
            </section>
        </Layout>
    )
}

export default Seller;
