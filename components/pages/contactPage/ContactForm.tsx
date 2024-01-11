'use client';

import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { API_URL } from '@/constants';

type FormData = {
    name: string;
    email: string;
    subject: string;
    message: string;
    phoneNumber: string;
};

const schema = yup.object().shape({
    name: yup.string().required('Name is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    phoneNumber: yup
        .string()
        .required('Phone number is required')
        .test(
            'phone-number-length',
            'Phone number should be 10 digits',
            (value) => {
                return value?.replace(/\D/g, '').length === 10;
            }
        ),
    subject: yup.string().required('Subject is required'),
    message: yup.string().required('Message is required'),
});
const ContactInner = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
        watch,
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data: FormData) => {
        setIsLoading(true);

        try {
            const { name, email, subject, message, phoneNumber } = data;

            const formData = new FormData();

            formData.set('your-subject', subject);
            formData.set('your-name', name);
            formData.set('your-email', email);
            formData.set('phoneNumber', phoneNumber);
            formData.append('your-message', message);

            const response = await axios.post(API_URL.contactForm, formData);

            if (response.status === 200) {
                showMessage();
                reset();
            }
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };

    const showMessage = () => {
        setShowSuccess(true);

        setTimeout(() => {
            setShowSuccess(false);
        }, 5000);
    };

    return (
        <section id='contact-form' className='container mx-auto my-8'>
            <h1 className='text-3xl font-semibold text-center mb-6'>
                Contact Us
            </h1>
            <form
                className='w-full max-w-md mx-auto p-6 bg-white rounded-md shadow-md border'
                onSubmit={handleSubmit(onSubmit)}
            >
                <label htmlFor='name' className='block mb-2 text-lg font-semibold text-gray-800'>
                    Name
                </label>
                <input
                    id='name'
                    type='text'
                    {...register('name')}
                    className='form-input-field w-full px-4 py-2 mb-4 border border-gray-400 rounded-md focus:border-blue-600 shadow-inner'
                />
                <p className='text-red-600'>{errors.name?.message}</p>

                <label htmlFor='email' className='block mb-2 text-lg font-semibold text-gray-800'>
                    Email
                </label>
                <input
                    id='email'
                    type='text'
                    {...register('email')}
                    className='form-input-field w-full px-4 py-2 mb-4 border border-gray-400 rounded-md focus:border-blue-600 shadow-inner'
                />
                <p className='text-red-600'>{errors.email?.message}</p>

                <label htmlFor='phone-number' className='block mb-2 text-lg font-semibold text-gray-800'>
                    Phone Number
                </label>
                <input
                    id='phone-number'
                    type='text'
                    {...register('phoneNumber')}
                    className='form-input-field w-full px-4 py-2 mb-4 border border-gray-400 rounded-md focus:border-blue-600 shadow-inner'
                />
                <p className='text-red-600'>{errors.phoneNumber?.message}</p>

                <label htmlFor='subject' className='block mb-2 text-lg font-semibold text-gray-800'>
                    Subject
                </label>
                <input
                    id='subject'
                    type='text'
                    {...register('subject')}
                    className='form-input-field w-full px-4 py-2 mb-4 border border-gray-400 rounded-md focus:border-blue-600 shadow-inner'
                />
                <p className='text-red-600'>{errors.subject?.message}</p>

                <label htmlFor='message' className='block mb-2 text-lg font-semibold text-gray-800'>
                    Message
                </label>
                <textarea
                    id='message'
                    {...register('message')}
                    className='w-full px-4 py-2 mb-4 border border-gray-400 rounded-md focus:border-blue-600 shadow-inner'
                ></textarea>
                <p className='text-red-600'>{errors.message?.message}</p>

                <button
                    type='submit'
                    className='w-full h-12 bg-red-500 text-white py-2 rounded-full hover:bg-red-600 transition-all'
                >
                    {isLoading ? 'Sending...' : 'Submit'}
                </button>

                {showSuccess && (
                    <p className='mt-4 text-green-600 text-center'>
                        Message sent successfully!
                    </p>
                )}
            </form>
        </section>
    );
};

export default ContactInner;
