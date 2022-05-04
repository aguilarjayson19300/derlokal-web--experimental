import ReactMarkdown from 'react-markdown';

import { faqs, promises, communities } from './data';
import Layout from '../components/Layout';
import Accordion from '../components/Accortion';

const Seller = () => {
    return (
        <Layout>
            <section className='bg-secondary7 px-6 overflow-hidden bg-[url("/demo3.jpg")] bg-no-repeat bg-cover bg-center'>
                <div className='sm:container mx-auto flex md:flex-row flex-col sm:pt-28 pt-12'>
                    <div className='sm:pr-20 flex-row sm:pb-28'>
                        <h1 className='sm:text-4xl text-2xl font-bold mb-6 w-full sm:w-2/3'>Enjoy your favorite local products, with just one tap!</h1>
                        <p className='text-lg'>Discover local home-based sellers in your community.</p>

                        <div className='flex flex-col gap-4 items-center my-10 sm:flex-row '>
                            <div className='relative sm:w-auto w-full'>
                                <label className='absolute top-4 left-4'>+63</label>
                                <input className='w-full border border-secondary4 py-4 pl-16 pr-8 focus:border-primary' placeholder='917 888 88 88' />
                            </div>

                            <button className='sm:w-auto w-full px-10 py-3 bg-primary text-textIcon7 rounded-full font-bold'>Sign up for free</button>

                        </div>

                    </div>
                </div>
            </section>

            <section className='sm:flex-row flex-col flex justify-center container mx-auto items-center gap-20 sm:py-28 py-20 sm:px-0 px-6'>
                {
                    promises.map(promise => (
                        <div key={promise.title} className='flex flex-col justify-center items-center'>
                            <div dangerouslySetInnerHTML={{ __html: promise.icon }}></div>
                            <div className="text-xl font-bold text-textIcon mt-2 mb-4">{promise.title}</div>
                            <ReactMarkdown className="text-textIcon">{promise.content}</ReactMarkdown>
                        </div>
                    ))
                }
            </section>

            <section className='bg-secondary7'>
                <div className='container mx-auto sm:py-28 py-20 sm:px-0 px-6 gap-10'>
                    <h2 className='sm:text-3xl text-2xl font-black text-secondary text-center'>Support local community</h2>
                    <p className='text-center sm:mt-6 mt-8'>Der Lokal is a platform that enables people to purchase fresh home-cooked food and products. We make it incredibly easy for you to discover and get what you want. Delivered to you – quickly, reliably and affordably.</p>

                    <div className='grid lg:grid-cols-6 grid-cols-3 justify-items-center sm:mt-16 mt-12 gap-10'>
                        {
                            communities.map(community => (
                                <div key={community.name} className='sm:w-[136px] w-[80px] text-center'>
                                    <img src={community?.image} alt='me' className='object-cover rounded-lg sm:w-[136px] sm:h-[136px] w-[80px] h-[80px] sm:mb-6 mb-4' />
                                    <span className='text-sm'>{community.name}</span>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </section>

            <section className='px-6 overflow-hidden sm:container mx-auto flex md:flex-row flex-col sm:pt-28 pt-12'>
                <div className='sm:pr-20 flex-row sm:pb-28 mt-14'>
                    <h1 className='sm:text-3xl text-2xl font-bold mb-6'>Discover and get great food.</h1>
                    <p className='text-lg'>Download the Der Lokal app and choose from a variety of fresh home-cooked food and products.</p>

                    <div className='flex gap-2 mt-10'>
                        <img src="/ios.png" alt="me" className='object-cover h-[43px]' />
                        <img src="/android.png" alt="me" className='object-cover h-[43px]' />
                    </div>

                </div>
                <div className='sm:w-1/3 flex items-end justify-center sm:mt-0 mt-12'>
                    <img src="/demo4.png" alt="me" className='object-fill object-center' />
                </div>
            </section>

            <section className='bg-primary5 sm:p-28 py-20 p-6 flex flex-col justify-center items-center'>
                <div className='flex justify-center'>
                    <span className='w-auto sm:rounded-lg rounded-full bg-success text-white px-6 py-2'>Available soon!</span>
                </div>
                <h1 className='sm:text-3xl text-2xl font-bold my-6'>Your convenience is our top priority.</h1>
                <p className='text-lg'>Order from multiple stores anywhere with one checkout.</p>

                <div className='w-full flex flex-col gap-4 items-center my-10 sm:flex-row justify-center flex-wrap'>
                    <input className='lg:w-1/5 w-full border border-secondary4 py-4  px-6 focus:border-primary' placeholder='Enter your email' />
                    <button className='sm:w-auto w-full px-10 py-3 bg-primary text-textIcon7 rounded-full font-bold'>Notify me</button>
                </div>
            </section>

            <section className='container mx-auto sm:py-28 py-20 sm:px-0 px-6'>
                <h2 className="sm:text-3xl text-2xl font-black text-secondary mb-20 text-center">Frequently asked questions</h2>
                <Accordion faqs={faqs} />
            </section>
        </Layout>
    )
}

export default Seller;
