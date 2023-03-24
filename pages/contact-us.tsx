import { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import 'animate.css'

import Layout from '../components/Layout';
import ErrorMessage from "../components/ErrorMessage";

const ContactUs = () => {
    const {
        control,
        register,
        handleSubmit,
        formState: { errors },
        getValues
    } = useForm();
    const acceptTerms = useWatch({ name: 'acceptTerms', control });
    const onSubmit = async (contactUs: any) => {
        console.log('contactUs', contactUs)
        // const res = await fetch(
        //     `https://app.swrtech.io/api/companies`,
        //     {
        //         body: JSON.stringify({
        //             data: contactUs
        //         }),
        //         headers: {
        //             'Content-Type': 'application/json'
        //         },
        //         method: 'POST'
        //     }
        // )

        // const result = await res.json()
    }

    return (
        <Layout>
            <section className='container mx-auto sm:py-28 py-20 sm:px-0 px-6 flex flex-col items-center justify-center'>
                <h1 className='sm:text-3xl text-2xl font-bold mb-6 w-full sm:w-2/3 text-center animate__animated animate__fadeInDown'>We’re happy to answer any questions you may have, just send us a message.</h1>
                <p className='text-lg animate__animated animate__fadeInUp'>Our team is there for you Monday to Friday between 10:00 AM to 6:00 PM.</p>

                <form className="mt-16 pb-8 mb-4 lg:w-1/3 w-full mx-auto container relative py-30" onSubmit={handleSubmit(onSubmit)}>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-medium mb-2">
                            First name
                        </label>
                        <input {...register('firstName', { required: true })} className={` appearance-none border-b text-primary border-secondary5 w-full py-2 leading-tight focus:outline-none focus:shadow-outline ${errors.firstName && 'border-b-danger'}`} id="firstName" type="text" />
                        {errors.firstName && <ErrorMessage message="Please add your first name" />}
                    </div>
                    <div className="mb-6 mt-8">
                        <label className="block text-gray-700 text-sm font-medium mb-2">
                            Last name
                        </label>
                        <input {...register('lastName', { required: true })} className={`appearance-none border-b text-primary border-secondary5 w-full py-2 leading-tight focus:outline-none focus:shadow-outline ${errors.lastName && 'border-b-danger'}`} id="lastName" type="text" />
                        {errors.lastName && <ErrorMessage message="Please add your last name" />}
                    </div>

                    <div className="mb-6 mt-8">
                        <label className="block text-gray-700 text-sm font-medium mb-2">
                            Email address
                        </label>
                        <input {...register('email', { required: true, pattern: /^\S+@\S+$/i })} className={`appearance-none border-b text-primary border-secondary5 w-full py-2 leading-tight focus:outline-none focus:shadow-outline ${errors.email && 'border-b-danger'}`} id="email" name="email" type="text" />
                        {errors.email?.type === 'required' && <ErrorMessage message="Please add your email" />}
                        {errors.email?.type === 'pattern' && <ErrorMessage message="Email is not valid" />}
                    </div>

                    <div className="mb-6 mt-8">
                        <label className="block text-gray-700 text-sm font-medium mb-2">
                            Mobile number (optional)
                        </label>
                        <input {...register('company', { required: false })} className={`appearance-none text-primary border-b border-secondary5 w-full py-2 leading-tight focus:outline-none focus:shadow-outline ${errors.company && 'border-b-danger'}`} id="company" name="company" type="text" />
                        {errors.company && <ErrorMessage message="Please add your company" />}
                    </div>

                    <div className="mb-6 mt-8">
                        <label className="block text-gray-700 text-sm font-medium mb-2">
                            Type of inquiry
                        </label>
                        <select className="w-full border-b border-secondary5 mt-4 text-primary" id="inuiry" name="inquiry">\
                            <option className="hidden"></option>
                            <option>Yes</option>
                            <option>No</option>
                            <option>Maybe</option>
                        </select>
                    </div>

                    <div className="mb-6 mt-8">
                        <label className=" block text-gray-700 text-sm font-medium mb-2">
                            How can we help you?
                        </label>
                        <textarea {...register('message', { required: false })} className="appearance-none text-primary border-b border-secondary5 w-full py-2 leading-tight focus:outline-none focus:shadow-outline" id="message" name="message" />
                    </div>
                    <div>
                        <div className="flex justify-between align-top mb-6 mt-12">
                            <input className="form-check-input mt-3 scale-[1.7] checked:bg-primary checked:border-primary" type="checkbox" id="newsletter" {...register('acceptTerms', { required: true })} />
                            <label className="ml-4 form-check-label text-default" htmlFor="newsletter">
                                I would like to stay up to date on news and offers from Der Lokal and I agree to receive communications accordingly.
                            </label>
                        </div>
                        <div className="flex justify-between align-top">
                            <input className=" form-check-input mt-3 scale-[1.7] checked:bg-primary checked:border-primary" type="checkbox" id="agreement" {...register('acceptTerms', { required: true })} />
                            <label className="ml-4 form-check-label text-default" htmlFor="agreement">
                                I consent to the processing and transfer of my personal data,
                                which are required for the use of the SWR Tech service and are
                                listed in the <a className="text-primary font-bold">legal information</a> and the data <a className="text-primary font-bold">protection regulations.</a>
                            </label>
                        </div>
                        <button className="w-full bg-primary text-white py-4 rounded-full mt-9" type="submit" disabled={!acceptTerms}>
                            Send message
                        </button>
                    </div>
                </form>
            </section>
        </Layout>
    )
}

export default ContactUs;